# Cloudflare Pages Deployment Guide

**Status:** Ready to Deploy  
**Target:** Cloudflare Pages (Free Tier)  
**Temporary Domain:** word-helper.pages.dev (or custom)  
**Final Domain:** wordgenie.app (add later)

---

## Prerequisites

Before deploying, ensure you have:

1. **GitHub Account** - With this repo pushed
2. **Cloudflare Account** - Free tier is fine
3. **GitHub Permissions** - Can connect Cloudflare to repo

---

## Step 1: Push Code to GitHub

If not already done:

```bash
# Initialize git if needed
git init
git add .
git commit -m "Word Genie v1.0 - Ready for Cloudflare deployment"

# Add GitHub remote
git remote add origin https://github.com/YOUR_USERNAME/word-helper.git
git branch -M main
git push -u origin main
```

**Note:** Replace `YOUR_USERNAME` with your GitHub username.

---

## Step 2: Connect GitHub to Cloudflare

### 2.1 Go to Cloudflare Dashboard
1. Navigate to [Cloudflare Dashboard](https://dash.cloudflare.com)
2. Log in with your account
3. Click **"Pages"** in the left sidebar

### 2.2 Create New Project
1. Click **"Create a project"**
2. Click **"Connect to Git"**
3. Authorize Cloudflare to access GitHub
   - GitHub will ask for permission
   - Allow Cloudflare to access your repositories
4. Select your GitHub organization/account
5. Search for "word-helper" repository
6. Click **"Connect"**

### 2.3 Configure Build Settings
After connecting, you'll see build configuration:

**Framework Preset:** Select "Astro"  
**Build Command:** `npm run build` (should auto-fill)  
**Build Output Directory:** `dist` (should auto-fill)  
**Root Directory:** `/` (leave as default)  
**Environment Variables:** (skip for now - optional)

Click **"Save and Deploy"**

---

## Step 3: Monitor First Deployment

After clicking "Save and Deploy":

1. **Build Process** - Cloudflare will:
   - Install dependencies (`npm install`)
   - Build site (`npm run build`)
   - Deploy to Cloudflare edge network

2. **Status Page**:
   - Shows build progress
   - View logs if issues occur
   - Usually takes 2-5 minutes

3. **Deployment Complete**:
   - You'll see a ✅ checkmark
   - Your site is live at `https://word-helper.pages.dev`
   - (URL may vary - check project settings)

---

## Step 4: Verify Deployment

Once deployment completes:

### 4.1 Visit Your Site
```
https://word-helper.pages.dev
(or whatever Cloudflare assigned)
```

### 4.2 Test Pages
- [ ] Homepage loads
- [ ] Navigation works
- [ ] /games page works
- [ ] /gartic category pages work
- [ ] /guess-build category pages work
- [ ] Blog posts load
- [ ] Search/filter works
- [ ] Links are not broken
- [ ] Mobile responsive
- [ ] All images load

### 4.3 Check Site in Browser DevTools
```
View Source (Ctrl+U or Cmd+U):
- See full HTML with proper meta tags
- Check canonical URLs
- Verify schema.org markup

Lighthouse (DevTools → Lighthouse):
- Performance: > 80
- Accessibility: > 90
- SEO: > 90
- Best Practices: > 90
```

---

## Step 5: Setup Custom Domain (Later)

When you're ready to add wordgenie.app:

### 5.1 Register Domain
- Go to [Namecheap](https://www.namecheap.com), [GoDaddy](https://www.godaddy.com), or similar
- Search for "wordgenie.app"
- Register for 1 year (~$12-15)
- Note the domain name

### 5.2 Add Domain to Cloudflare Pages
1. In Cloudflare Pages project settings
2. Click **"Custom domains"**
3. Click **"Set up a custom domain"**
4. Enter "wordgenie.app"
5. Choose DNS configuration method

### 5.3 Configure DNS
Cloudflare will give you two options:

**Option A: Cloudflare Nameservers (RECOMMENDED)**
1. Go to your domain registrar (Namecheap, GoDaddy, etc)
2. Find DNS/Nameserver settings
3. Replace default nameservers with Cloudflare's:
   - `iris.ns.cloudflare.com`
   - `nate.ns.cloudflare.com`
4. Save changes
5. Wait 24-48 hours for propagation

**Option B: CNAME Record**
1. Find DNS settings at registrar
2. Add CNAME record pointing to Cloudflare Pages
3. Less flexible but works

### 5.4 Verify Domain
- Cloudflare will verify ownership (usually automatic if using nameservers)
- After verification: wordgenie.app is live!
- SSL certificate auto-created

---

## Step 6: Automatic Deployments

After initial setup, deployments happen automatically:

### Every Time You Push to GitHub
1. Push code to main branch: `git push origin main`
2. Cloudflare detects change
3. Automatically rebuilds and deploys
4. New version live in 2-5 minutes

### Example Workflow
```bash
# Make changes
git add .
git commit -m "Update content"
git push origin main

# Cloudflare automatically:
# 1. Detects push
# 2. Runs npm run build
# 3. Deploys to edge network
# 4. Your changes go live
```

---

## Step 7: Monitor & Maintain

### Cloudflare Dashboard
- **Deployments**: See all past deployments
- **Environment**: Check build logs
- **Settings**: Manage domain, redirects, headers
- **Analytics**: View traffic (with paid plan)

### GitHub Integration
- Every commit triggers deployment
- View deployment status in GitHub
- Rollback to previous version if needed (under Deployments)

---

## Troubleshooting

### Build Fails: "npm not found"
**Solution:** Node.js version issue
1. In Cloudflare project settings → Environment
2. Set `NODE_VERSION` = `20`
3. Redeploy

### Build Fails: "dist directory not found"
**Solution:** Build command not running
1. Check Build Command: `npm run build`
2. Check Output Directory: `dist`
3. Verify npm scripts in package.json

### Site Shows Old Version
**Solution:** Cache issue
1. Wait 5 minutes (edge cache TTL)
2. Hard refresh: Ctrl+Shift+R (or Cmd+Shift+R on Mac)
3. Or in Cloudflare: Purge cache in Page Rules

### Domain Not Resolving
**Solution:** DNS propagation
1. Nameservers take 24-48 hours to propagate
2. Check status: `nslookup wordgenie.app` (in terminal)
3. Use [DNS Checker](https://dnschecker.org/) to verify

### Pages Show 404 Errors
**Solution:** Astro routing issue
1. Check build logs for errors
2. Verify all .astro files have correct names
3. Clear cache and redeploy

---

## Performance & Security

### Free Tier Benefits
✅ Automatic HTTPS/SSL  
✅ Global CDN (edge locations worldwide)  
✅ Unlimited bandwidth  
✅ Automatic deployments  
✅ DDoS protection  
✅ HTTP/2 by default  

### Monitoring
1. **Cloudflare Analytics Page**
   - Traffic stats
   - Cache performance
   - Top pages
   - Errors

2. **Google Search Console**
   - Indexation status
   - Search traffic
   - Core Web Vitals

3. **Google Analytics**
   - User behavior
   - Traffic sources
   - Conversion tracking

---

## Next Steps After Deployment

### Immediate (Day 1)
1. ✅ Verify site is live
2. ✅ Test all pages
3. ✅ Check SEO/accessibility scores
4. ✅ Share URL with test users

### Week 1
1. Add wordgenie.app domain (when ready)
2. Set up Google Search Console
3. Submit sitemap
4. Request indexing

### Week 2-4
1. Monitor search indexation
2. Check Google Analytics traffic
3. Optimize based on metrics
4. Prepare AdSense application

---

## Rollback/Downgrade (if needed)

If something goes wrong:

1. **In Cloudflare Pages**:
   - Go to Deployments
   - Find previous working version
   - Click "Rollback"
   - Site reverts to that version

2. **OR On GitHub**:
   - Revert last commit: `git revert HEAD`
   - Push: `git push origin main`
   - Cloudflare deploys previous version

---

## Security Best Practices

✅ **Enable 2FA** on Cloudflare account  
✅ **Restrict GitHub access** - Only you can push  
✅ **Review build logs** regularly for errors  
✅ **Monitor performance** - Unexpected spikes = attack?  
✅ **Update dependencies** monthly (npm update)  

---

## Cost Breakdown

| Service | Cost | Notes |
|---------|------|-------|
| Cloudflare Pages | Free | Unlimited deployments, bandwidth |
| Domain (.app) | $12-15/year | One-time registration |
| GitHub | Free | Public repo is free |
| Google Analytics | Free | Basic analytics included |
| Google Search Console | Free | SEO monitoring included |
| Google AdSense | Free | 68/32 revenue share |
| **TOTAL** | **$12-15/year** | Minimal cost! |

**Revenue Potential:** $200-500+/month (after growth)  
**ROI:** Positive in Month 1! 💰

---

## FAQ

**Q: Can I preview before deploying?**  
A: Run `npm run build && npm run preview` locally first.

**Q: How do I update content?**  
A: Edit files → `git push origin main` → Auto-deploys

**Q: Can I rollback?**  
A: Yes! Cloudflare keeps 50 previous deployments.

**Q: What if I need to change build settings?**  
A: Cloudflare dashboard → Project settings → Build configuration

**Q: Is my data secure?**  
A: Yes. Cloudflare handles security. Static site = no database = safer.

**Q: Can I use a different domain later?**  
A: Yes. Add new custom domain anytime in Cloudflare.

**Q: What about email on wordgenie.app?**  
A: Use Cloudflare Email Routing (free tier available) or Gmail forwarding.

---

## Timeline to Live

| Step | Time | Status |
|------|------|--------|
| Push to GitHub | Immediate | ✅ |
| Connect Cloudflare | 5 minutes | ✅ |
| First build | 2-5 minutes | ✅ |
| Test & verify | 10 minutes | ✅ |
| **Site LIVE** | **~20 minutes total** | ✅ |
| Add custom domain | 24-48 hours | (Later) |
| Search indexing | 3-7 days | (Auto) |
| AdSense approval | 1-3 days | (Phase 9) |

---

## Support & Resources

- **Cloudflare Docs**: https://developers.cloudflare.com/pages/
- **Astro Docs**: https://docs.astro.build/
- **Cloudflare Discord**: Community support
- **GitHub Issues**: This repo for bug reports

---

## Ready to Deploy?

Follow the steps above, and your Word Genie site will be live on Cloudflare Pages within 20 minutes! 🚀

Good luck! Questions? Check troubleshooting section or Cloudflare docs.

---

**Next Phase:** Phase 9 - Operação & Monetização (AdSense setup)
