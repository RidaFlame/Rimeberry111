# Setup Guide for New Repository: Rimeberry111

## 🎯 Quick Setup Instructions

This guide will help you set up the **Rimeberry111** repository and deploy it to GitHub Pages using branch-based deployment (NO GitHub Actions).

## ✅ Pre-Configured Settings

- ✅ Base path: `/Rimeberry111/` (configured in `vite.config.js`)
- ✅ Git user: RidaFlame (ririda6680@gmail.com)
- ✅ .nojekyll file: Already in public folder
- ✅ GitHub Actions: DISABLED (using branch-based deployment)

## 🚀 Step-by-Step Setup

### Step 1: Create New Repository on GitHub

1. Go to GitHub: https://github.com/new
2. Repository name: `Rimeberry111`
3. Description: (optional) "Rimeberry Group Website"
4. Visibility: Public (required for free GitHub Pages)
5. **DO NOT** initialize with README, .gitignore, or license
6. Click **Create repository**

### Step 2: Initialize Git and Push to New Repository

```bash
# Navigate to your project
cd "C:\Users\Acer1\Desktop\swaray website"

# Check current git status
git status

# Add all files
git add .

# Commit all changes
git commit -m "Initial commit - Rimeberry website configured for Rimeberry111 repository"

# Add new remote (replace RidaFlame with your GitHub username if different)
git remote set-url origin https://github.com/RidaFlame/Rimeberry111.git

# Or if remote doesn't exist:
# git remote add origin https://github.com/RidaFlame/Rimeberry111.git

# Push to main branch
git push -u origin main
```

### Step 3: Build and Deploy to GitHub Pages

```bash
# Build the project (creates dist folder)
npm run build

# Verify dist folder was created
# Should see: dist/index.html, dist/assets/, dist/images/, dist/.nojekyll

# Deploy to gh-pages branch using git subtree
git subtree push --prefix dist origin gh-pages
```

**Alternative method (if subtree doesn't work):**

```bash
# Build the project
npm run build

# Install gh-pages package (if you prefer automation)
npm install --save-dev gh-pages

# Add deploy script to package.json (already added)
# Then run:
npm run deploy
```

### Step 4: Configure GitHub Pages on GitHub

1. Go to your repository: `https://github.com/RidaFlame/Rimeberry111`
2. Click **Settings** (top menu)
3. Click **Pages** (left sidebar)
4. Under **Source**, select:
   - **Branch**: `gh-pages`
   - **Folder**: `/ (root)`
5. Click **Save**

### Step 5: Verify Deployment

1. Wait 1-2 minutes for GitHub Pages to deploy
2. Visit: `https://ridflame.github.io/Rimeberry111/`
3. Your website should be live! ✅

## 🔧 Configuration Summary

### Files Configured

- ✅ `vite.config.js`: Base path set to `/Rimeberry111/`
- ✅ `package.json`: Deploy script added
- ✅ `public/.nojekyll`: Prevents Jekyll processing (fixes white screen)
- ✅ `.github/workflows/`: GitHub Actions workflow removed (not using Actions)

### Important URLs

- **Repository**: `https://github.com/RidaFlame/Rimeberry111`
- **GitHub Pages**: `https://ridflame.github.io/Rimeberry111/`
- **Local Development**: `http://localhost:5173` (run `npm run dev`)

## 🐛 Troubleshooting

### White Screen Fix

The white screen issue is fixed by:
1. ✅ Base path: `/Rimeberry111/` (matches repository name)
2. ✅ .nojekyll file: Prevents Jekyll processing
3. ✅ HashRouter: Works regardless of base path

### If Site Shows 404

1. Check that gh-pages branch exists: Go to repository → Branches → Should see `gh-pages`
2. Verify index.html exists in gh-pages branch root
3. Check GitHub Pages settings (Settings → Pages → Source should be `gh-pages` branch)

### If Assets Don't Load

1. Open browser console (F12)
2. Check Network tab for 404 errors
3. Verify base path in `vite.config.js` is `/Rimeberry111/`
4. Rebuild and redeploy:
   ```bash
   npm run build
   git subtree push --prefix dist origin gh-pages
   ```

## 📝 Future Updates

To update the website after making changes:

```bash
# 1. Make your code changes
# ... edit files ...

# 2. Commit changes to main branch
git add .
git commit -m "Update website"
git push origin main

# 3. Rebuild and deploy to GitHub Pages
npm run build
git subtree push --prefix dist origin gh-pages
```

## ✅ Checklist

Before deploying:
- [x] Repository name: Rimeberry111
- [x] Base path: `/Rimeberry111/`
- [x] .nojekyll file: In public folder
- [x] GitHub Actions: Disabled
- [ ] Build successful: `npm run build`
- [ ] dist folder contains index.html

After deploying:
- [ ] gh-pages branch created
- [ ] GitHub Pages source set to gh-pages branch
- [ ] Site accessible at: https://ridflame.github.io/Rimeberry111/
- [ ] No white screen
- [ ] Images loading correctly
- [ ] Navigation working

## 🎉 Success!

Once deployed, your website will be live at:
**https://ridflame.github.io/Rimeberry111/**

For detailed deployment instructions, see `DEPLOYMENT_GUIDE.md`

