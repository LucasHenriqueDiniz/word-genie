#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const TMP_DIR = path.join(__dirname, '../data/raw');
const OUT_DIR = path.join(__dirname, '../src/data/words');

if (!fs.existsSync(OUT_DIR)) {
  fs.mkdirSync(OUT_DIR, { recursive: true });
}

console.log('🔄 Processing word lists...\n');

// 1. Process Gartic
const garticPath = path.join(TMP_DIR, 'gartic.txt');
const garticRaw = fs.readFileSync(garticPath, 'utf-8');
const garticWords = garticRaw.split('\n').map(w => w.trim().toLowerCase()).filter(w => w.length > 0 && w.length < 50).filter((w, i, arr) => arr.indexOf(w) === i);
console.log(`📖 Gartic: ${garticWords.length} words`);

// 2. Process GTB
function extractWordsFromJS(jsPath) {
  const content = fs.readFileSync(jsPath, 'utf-8');
  // Match: var NAME = [...] or const NAME = [...]
  const match = content.match(/(?:var|const)\s+\w+\s*=\s*\[([\s\S]*?)\];/);
  if (!match) return [];
  try {
    return JSON.parse(`[${match[1]}]`);
  } catch (e) {
    return [];
  }
}

const gtb1Words = extractWordsFromJS(path.join(TMP_DIR, 'gtb1.js'));
const gtb2Words = extractWordsFromJS(path.join(TMP_DIR, 'gtb2.js'));

const gtbWordsSet = new Set();
[...gtb1Words, ...gtb2Words].forEach(w => {
  if (typeof w === 'string') {
    const clean = w.trim().toLowerCase();
    if (clean.length > 0 && clean.length < 50) gtbWordsSet.add(clean);
  }
});
const gtbWords = Array.from(gtbWordsSet);
console.log(`🏗️ Guess The Build: ${gtbWords.length} words\n`);

// 3. Save
const garticJson = { source: 'github.com/pscamposs/GarticGuess', game: 'gartic', totalWords: garticWords.length, words: garticWords.sort() };
const gtbJson = { sources: ['github.com/noowz/buildguessr', 'github.com/oycyc/GTB-Solver'], game: 'guess-the-build', totalWords: gtbWords.length, words: gtbWords.sort() };

fs.writeFileSync(path.join(OUT_DIR, 'gartic-real.json'), JSON.stringify(garticJson, null, 2), 'utf-8');
fs.writeFileSync(path.join(OUT_DIR, 'guess-build-real.json'), JSON.stringify(gtbJson, null, 2), 'utf-8');

console.log(`✅ Saved: gartic-real.json (${garticWords.length} words)`);
console.log(`✅ Saved: guess-build-real.json (${gtbWords.length} words)`);
console.log(`\n📊 Total: ${garticWords.length + gtbWords.length} words ready for solver!`);
