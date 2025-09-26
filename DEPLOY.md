# Deployment Guide for GitHub Pages

## Quick Deploy Steps

1. **Create a GitHub Repository**
   - Go to GitHub and create a new repository
   - Name it something like `font-tester` or any name you prefer

2. **Push Code to Repository**
   ```bash
   git init
   git add .
   git commit -m "Initial commit - Font Tester app"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   git push -u origin main
   ```

3. **Enable GitHub Pages**
   - Go to your repository on GitHub
   - Click on "Settings" tab
   - Scroll down to "Pages" in the left sidebar
   - Under "Source", select "Deploy from a branch"
   - Choose "main" branch and "/ (root)" folder
   - Click "Save"

4. **Access Your App**
   - Your app will be available at: `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/`
   - It may take a few minutes for the initial deployment

## Files Structure

```
font-test/
├── index.html          # Main HTML file
├── styles.css          # Stylesheet
├── script.js           # JavaScript functionality
├── README.md           # Documentation
├── .nojekyll          # Bypass Jekyll processing
├── fonts/             # Local font files
│   ├── newsreader/    # Newsreader font family
│   ├── inter/         # Inter font family
│   └── instrument-serif/ # Instrument Serif font
└── DEPLOY.md          # This file
```

## Important Notes

- The `.nojekyll` file is crucial - it tells GitHub Pages not to process the site with Jekyll
- All paths are relative, so the app will work correctly on GitHub Pages
- Local fonts are included in the repository, so they'll work without external dependencies
- Google Fonts are loaded from CDN for optimal performance

## Updating the Site

After making changes locally:

```bash
git add .
git commit -m "Description of changes"
git push
```

GitHub Pages will automatically rebuild and deploy your changes within a few minutes.

## Custom Domain (Optional)

To use a custom domain:
1. Add a CNAME file with your domain name
2. Configure DNS settings with your domain provider
3. Update the custom domain in repository settings

## Troubleshooting

- **Site not appearing?** Check Settings > Pages to ensure it's enabled
- **404 errors?** Make sure you're using the correct URL format
- **Fonts not loading?** Verify the fonts folder is committed to the repository
- **Changes not showing?** Clear browser cache or wait a few minutes for deployment