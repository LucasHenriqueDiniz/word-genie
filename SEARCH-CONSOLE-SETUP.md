# Google Search Console Setup Guide

## Prerequisites
- wordgenie.app domain registered and pointing to Cloudflare
- SSL certificate active (automatic with Cloudflare)
- Site deployed to https://wordgenie.app

## Step 1: Add Property to Search Console

1. Go to [Google Search Console](https://search.google.com/search-console)
2. Click "Add property"
3. Choose "URL prefix" method
4. Enter: `https://wordgenie.app`
5. Verify ownership (see Step 2)

## Step 2: Verify Ownership

Choose ONE of these methods:

### Method A: DNS Record (Recommended for Cloudflare)
1. In Search Console, copy the DNS verification record
2. Go to Cloudflare dashboard
3. Navigate to DNS settings for wordgenie.app
4. Add TXT record with verification code
5. Wait 5-10 minutes for propagation
6. Click "Verify" in Search Console

### Method B: HTML File Upload
1. Download HTML verification file from Search Console
2. Upload to `public/` directory
3. Verify at https://wordgenie.app/[filename]
4. Click "Verify" in Search Console

### Method C: HTML Meta Tag
1. Copy meta tag from Search Console
2. Add to Layout.astro <head>
3. Redeploy site
4. Click "Verify" in Search Console

## Step 3: Submit Sitemap

After verification:

1. In Search Console, go to Sitemaps
2. Click "Add/test sitemap"
3. Enter: `https://wordgenie.app/sitemap-index.xml`
4. Click "Submit"

Expected sitemaps:
- sitemap-index.xml (main index)
- sitemap-0.xml (individual pages)

## Step 4: Request Indexing

1. Go to "URL Inspection" in Search Console
2. Enter: `https://wordgenie.app`
3. Click "Request indexing"
4. Repeat for key pages:
   - https://wordgenie.app/games
   - https://wordgenie.app/games/gartic
   - https://wordgenie.app/games/guess-build
   - https://wordgenie.app/blog

## Step 5: Monitor Indexing

Check these metrics regularly:

### Indexing Coverage
- How many pages are indexed
- Any indexing errors
- URL inspection results

### Performance
- Click-through rate (CTR)
- Average position in search
- Impressions
- Clicks

Target metrics after 30 days:
- 15+ pages indexed
- 50+ impressions from search
- 5+ clicks from organic search

## Step 6: Enable Google Analytics Integration

1. In Search Console, go to Settings
2. Click "Associate with Google Analytics"
3. Select your Analytics property
4. This links GSC data with GA4 data

## Step 7: Fix Crawl Issues (if any)

After first crawl, check:
- Coverage report (errors/warnings)
- Mobile usability issues
- Core Web Vitals

Address any flagged issues.

## Step 8: Monitor Core Web Vitals

Search Console shows real user data:
- Largest Contentful Paint (LCP)
- First Input Delay (FID)
- Cumulative Layout Shift (CLS)

Target: All "Good" on 90%+ of pages

## Ongoing Monitoring

### Weekly
- Check for new indexing errors
- Review URL inspection reports
- Monitor performance metrics

### Monthly
- Analyze search traffic trends
- Check keyword rankings
- Review top performing pages

### Quarterly
- Audit internal linking strategy
- Check for new opportunities
- Review backlinks

## Useful URLs After Setup

After setup, these URLs will work:

- Overview: https://search.google.com/search-console
- Coverage: https://search.google.com/search-console/coverage
- Performance: https://search.google.com/search-console/performance
- URL Inspection: https://search.google.com/search-console/url-inspection
- Links: https://search.google.com/search-console/links
- Sitemaps: https://search.google.com/search-console/sitemaps

## Expected Timeline

- **Day 1-3**: Verification, sitemap submission
- **Day 3-7**: Initial crawl, first pages indexed
- **Week 2-4**: Full site indexed (28 pages)
- **Month 2-3**: Search traffic appears
- **Month 3+**: Ranking improvements visible

## Keywords to Monitor

Once Search Console is tracking, focus on these searches:

1. **Primary**: "gartic word helper", "guess the build words"
2. **Secondary**: "easy drawing words", "minecraft building ideas"
3. **Category**: "[category] words for [game]"

## Next Steps After Search Console

1. **Build backlinks** - Guest posts, community mentions
2. **Expand content** - Add more blog posts monthly
3. **Monitor rankings** - Use Search Console + Google Sheets
4. **Optimize for clicks** - Improve title/description click-through rate
5. **Expand scope** - Add more word lists, more games

## Troubleshooting

### Sitemap not submitting
- Verify sitemap is accessible at URL
- Check robots.txt allows /sitemap*
- Wait 24 hours and retry

### Pages not indexing
- Use URL Inspection tool
- Check for noindex meta tag
- Verify page is linked from other pages

### Crawl errors
- Check robots.txt blocking
- Verify all internal links are valid
- Check for DNS/connection issues

## Resources

- [Google Search Console Help](https://support.google.com/webmasters)
- [Submit sitemaps](https://developers.google.com/search/docs/beginner/sitemaps)
- [Verify site ownership](https://support.google.com/webmasters/answer/9008080)
- [Core Web Vitals Guide](https://support.google.com/webmasters/answer/9798347)

---

**Note:** Replace `G-XXXXXXXXXX` in code with actual Google Analytics ID once set up.

Good luck getting Word Genie indexed! 🚀
