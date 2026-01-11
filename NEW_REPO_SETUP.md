# 🚀 New Repository Setup Guide

## ✅ What's Already Fixed

1. ✅ **Homepage field added** to `package.json`: `https://RidaFlame.github.io/Rimeberry111`
2. ✅ **gh-pages installed** as dev dependency
3. ✅ **Deploy script updated** to use gh-pages

## 📋 Steps to Create New Repository and Deploy

### Step 1: Create New GitHub Repository

1. Go to https://github.com/new
2. **Repository name**: Choose a name (e.g., `swaray-website` or `rimberry-website`)
3. **Visibility**: Choose Public (required for GitHub Pages free tier)
4. **DO NOT** initialize with README, .gitignore, or license
5. Click **"Create repository"**

### Step 2: Update Configuration Files

After creating the repository, you need to update these files with your new repository name:

#### Update `package.json`:
```json
"homepage": "https://<your-username>.github.io/<repo-name>"
```

#### Update `vite.config.js`:
```javascript
base: '/<repo-name>/', // Change this to match your repo name
```

### Step 3: Initialize Git (if not already done)

```bash
git init
git add .
git commit -m "Initial commit - Swaray website"
```

### Step 4: Connect to New Repository

```bash
git remote add origin https://github.com/<your-username>/<repo-name>.git
git branch -M main
git push -u origin main
```

### Step 5: Deploy to GitHub Pages

You have **two options**:

#### Option A: Using GitHub Actions (Recommended)
1. The workflow file (`.github/workflows/deploy.yml`) is already configured
2. Go to your repository → **Settings** → **Pages**
3. Under **Source**, select **"GitHub Actions"**
4. Push to main branch - it will auto-deploy

#### Option B: Using gh-pages (Manual)
```bash
npm run deploy
```

This will:
- Build your app
- Deploy the `dist` folder to the `gh-pages` branch
- Your site will be live at: `https://<your-username>.github.io/<repo-name>/`

### Step 6: Configure GitHub Pages (if using gh-pages)

1. Go to repository → **Settings** → **Pages**
2. Under **Source**, select **"Deploy from a branch"**
3. Select branch: **`gh-pages`**
4. Select folder: **`/ (root)`**
5. Click **Save**

## 🎯 Quick Setup Script

If you want to set up a new repository quickly, here's what to do:

1. **Create the repository on GitHub** (Step 1 above)
2. **Update the repository name** in:
   - `package.json` (homepage field)
   - `vite.config.js` (base path)
3. **Run these commands**:

```bash
# Initialize git (if needed)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit"

# Add remote (replace with your repo URL)
git remote add origin https://github.com/<username>/<repo-name>.git

# Push to main
git branch -M main
git push -u origin main

# Deploy using gh-pages
npm run deploy
```

## 📝 Important Notes

- **Repository name matters**: Make sure the `base` path in `vite.config.js` matches your repo name
- **Homepage URL**: Must match `https://<username>.github.io/<repo-name>`
- **Public repository**: Required for free GitHub Pages
- **gh-pages branch**: Will be created automatically when you run `npm run deploy`

## 🔧 Troubleshooting

### If deployment fails:
1. Check that repository name matches in both `package.json` and `vite.config.js`
2. Ensure repository is **Public**
3. Check GitHub Pages settings are configured correctly
4. Verify `dist` folder is being built correctly: `npm run build`

### If assets don't load:
- Make sure `base` path in `vite.config.js` starts and ends with `/`
- Example: `/repo-name/` (not `/repo-name` or `repo-name/`)

## ✅ Verification Checklist

- [ ] Repository created on GitHub
- [ ] `package.json` homepage field updated
- [ ] `vite.config.js` base path updated
- [ ] Git initialized and connected to remote
- [ ] Code pushed to main branch
- [ ] GitHub Pages configured (either Actions or gh-pages branch)
- [ ] Site accessible at `https://<username>.github.io/<repo-name>/`

---

**Your website is now ready to deploy!** 🎉

