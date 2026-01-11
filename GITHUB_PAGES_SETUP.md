# GitHub Pages Deployment Setup Guide

## ✅ Required Configuration Steps

### 1. Enable GitHub Pages with GitHub Actions

1. Go to your repository on GitHub
2. Click **Settings** → **Pages** (in the left sidebar)
3. Under **Source**, select **"GitHub Actions"** (NOT "Deploy from a branch")
4. Click **Save**

### 2. Base Path Configuration

The `vite.config.js` is currently set to `base: '/'` which works for:

- ✅ **User/Organization Pages**: `https://username.github.io` (repository name must be `username.github.io`)
- ✅ **Root-level project pages**: When deployed at the root

If your repository is **NOT** named `username.github.io`, you have two options:

#### Option A: Use Repository Root (Recommended)
Keep `base: '/'` and your site will be at:
```
https://username.github.io/repository-name/
```

#### Option B: Change Base Path
If you want absolute paths, update `vite.config.js`:
```javascript
base: '/repository-name/',  // Replace 'repository-name' with your actual repo name
```

**Current Configuration**: `base: '/'` ✅

### 3. Verify Repository Permissions

Make sure:
- ✅ GitHub Actions is enabled in repository settings
- ✅ The workflow has permission to deploy (already configured in `.github/workflows/deploy.yml`)
- ✅ You have write access to the repository

### 4. Check Workflow Status

After pushing:
1. Go to **Actions** tab in your repository
2. Check the workflow run status
3. If it fails, click on the failed job to see error details

## 🔍 Troubleshooting Common Issues

### Issue: "Workflow run failed" or "Deployment failed"

**Solution:**
1. Check the Actions tab → Click on the failed workflow → Check the logs
2. Look for specific error messages
3. Common causes:
   - Build errors (check "Build" step logs)
   - Missing index.html (check "Verify build output" step)
   - Permission issues (check repository settings)

### Issue: White screen after deployment

**Solution:**
1. Open browser console (F12) and check for 404 errors
2. Verify the base path matches your repository setup
3. Check that `.nojekyll` file exists (workflow creates it automatically)
4. Verify all asset paths are correct

### Issue: "Artifacts not found" or "dist folder missing"

**Solution:**
1. The workflow now explicitly creates `.nojekyll` file
2. Verify build step completes successfully
3. Check that `dist/index.html` exists in build output

### Issue: 404 errors on assets (CSS, JS files)

**Solution:**
- If using HashRouter (✅ you are), this should not be an issue
- Verify base path in `vite.config.js` matches your repository structure
- Check browser console for actual 404 paths

## 📝 Deployment Checklist

Before pushing:
- [ ] GitHub Pages is set to use **"GitHub Actions"** as source
- [ ] Base path in `vite.config.js` is configured correctly
- [ ] All files are committed
- [ ] You're pushing to the `main` branch

After deployment:
- [ ] Check Actions tab for successful deployment
- [ ] Visit your GitHub Pages URL
- [ ] Test navigation between pages
- [ ] Check browser console for errors
- [ ] Verify images are loading correctly

## 🚀 Quick Deploy Steps

```bash
# 1. Stage all changes
git add .

# 2. Commit changes
git commit -m "Fix GitHub Pages deployment configuration"

# 3. Push to GitHub
git push origin main

# 4. Wait for GitHub Actions to complete (check Actions tab)
# 5. Visit your site at: https://username.github.io/repository-name/
```

## 📌 Important Notes

1. **HashRouter**: Your site uses HashRouter, so routing works regardless of base path
2. **.nojekyll**: Automatically created by the workflow to prevent Jekyll processing
3. **Build Output**: The `dist` folder contains your production-ready files
4. **Automatic Deployment**: Every push to `main` branch triggers automatic deployment

## 🔗 Useful Links

- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [GitHub Actions for Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site#publishing-with-a-custom-github-actions-workflow)
- [Vite Base Path Configuration](https://vitejs.dev/guide/static-deploy.html#github-pages)

