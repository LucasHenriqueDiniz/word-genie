# Word Genie

Word Helper for Gartic and Guess The Build games.

## 🌟 Features

- Search through 500+ curated words for Gartic
- Browse 400+ Minecraft building ideas for Guess The Build
- Filter by difficulty level and category
- Copy words with one click
- Mobile-responsive design
- 100% free, no ads, no subscriptions
- Instant word suggestions with helpful tips

## 🚀 Quick Start

### Development

```bash
npm install
npm run dev
```

Visit http://localhost:3000 to see your site.

### Building

```bash
npm run build
npm run preview
```

## 📦 Tech Stack

- **Framework:** Astro 5.0
- **UI Library:** React 19 (islands only where needed)
- **Styling:** Tailwind CSS
- **Hosting:** Cloudflare Pages
- **Data:** Local TypeScript files

## 🎮 Games Supported

### Gartic
- 500+ drawing words
- 6 categories: animals, objects, food, places, actions, characters
- 3 difficulty levels: easy, medium, hard

### Guess The Build
- 400+ building ideas
- 6 categories: animals, buildings, food, objects, fantasy, places
- 3 difficulty levels: easy, medium, hard

## 📁 Project Structure

```
word-helper/
├── src/
│   ├── pages/           # Astro pages (routing)
│   ├── components/      # Reusable components
│   ├── data/           # Word data and game definitions
│   ├── lib/            # Utilities and types
│   └── styles/         # Global CSS
├── public/             # Static assets
├── astro.config.mjs    # Astro configuration
├── tailwind.config.ts  # Tailwind configuration
├── tsconfig.json       # TypeScript configuration
└── wrangler.toml       # Cloudflare Pages config
```

## 🔗 Pages

- `/` - Homepage
- `/games` - Game selection
- `/games/gartic` - Gartic word helper
- `/games/guess-build` - Guess The Build word helper
- `/about` - About Word Genie
- `/contact` - Contact form
- `/privacy-policy` - Privacy policy
- `/terms` - Terms of service
- `/disclaimer` - Legal disclaimer

## 🚀 Deployment

### Cloudflare Pages

1. Connect your GitHub repository to Cloudflare Pages
2. Set build command: `npm run build`
3. Set build output directory: `dist`
4. Add custom domain pointing to wordgenie.app
5. Deploy

```bash
npm run deploy
```

## 📝 License

This project is provided as-is for educational and personal use.

## ⚖️ Disclaimer

Word Genie is not affiliated with Gartic Inc., Minecraft, Hypixel, Mojang Studios, or any game companies. Gartic and Minecraft are registered trademarks of their respective owners.

## 🤝 Contributing

We love suggestions! Have ideas for new words or features? [Contact us](mailto:suggest@wordgenie.app)

## 📧 Support

Questions? Reach out: [support@wordgenie.app](mailto:support@wordgenie.app)

---

Made with ✨ for gaming communities
