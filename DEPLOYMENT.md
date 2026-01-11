# Deployment Guide - Traditional Hosting

This guide will help you deploy your website to any traditional hosting platform (cPanel, FTP, File Manager, etc.).

## ✅ Your Setup is Ready!

Your website is configured for traditional hosting:
- ✅ Uses **HashRouter** (works on any server without configuration)
- ✅ Uses **relative paths** (works in any folder/subdomain)
- ✅ Ready for **simple file upload** deployment

---

## 🚀 Step-by-Step Deployment

### Step 1: Build Your Website

Run this command in your project folder:

```bash
npm run build
```

This creates a `dist` folder with all your website files.

### Step 2: Upload to Your Hosting

**Option A: Using FTP Client (FileZilla, WinSCP, etc.)**
1. Connect to your hosting via FTP
2. Upload **all contents** of the `dist` folder to:
   - Main domain: `/public_html/` or `/www/` or `/httpdocs/`
   - Subdomain: `/public_html/subdomain/` or `/subdomain/` (depends on your host)

**Option B: Using cPanel File Manager**
1. Log into cPanel
2. Open File Manager
3. Navigate to your domain/subdomain folder
4. Upload **all files** from the `dist` folder (you can zip them first for faster upload)

**Option C: Using Direct Upload**
1. Zip the entire contents of the `dist` folder
2. Upload via hosting control panel
3. Extract in the web root folder

### Step 3: Verify File Structure

After uploading, your folder should look like this:

```
your-domain-folder/
├── index.html
├── .htaccess (if Apache server)
├── assets/
│   ├── index-[hash].js
│   └── index-[hash].css
└── images/
    └── (all your images)
```

### Step 4: Test Your Website

Visit your domain/subdomain:
- `https://yourdomain.com` or
- `https://subdomain.yourdomain.com`

The website should work immediately! 🎉

---

## 🔧 Important Notes

### HashRouter Benefits
Your website uses **HashRouter**, which means:
- ✅ No server configuration needed
- ✅ Works on any hosting (Apache, Nginx, IIS)
- ✅ Works in subfolders and subdomains
- ✅ URLs will have `#` (e.g., `yoursite.com/#/about`)

### Apache Servers (.htaccess)
If your hosting uses **Apache** (most traditional hosting does):
- The `.htaccess` file will be automatically copied to `dist` folder
- This handles routing for direct URL access
- If you don't have Apache, just ignore this file - HashRouter still works!

### Relative Paths
Your build uses **relative paths** (./), which means:
- ✅ Works in root domain
- ✅ Works in subdomain
- ✅ Works in subfolder
- ✅ Works on any hosting platform

---

## 🐛 Troubleshooting

### White Screen Issue?
1. Check browser console (F12) for errors
2. Verify all files were uploaded correctly
3. Make sure `index.html` is in the root folder
4. Check file permissions (should be 644 for files, 755 for folders)

### Images Not Loading?
1. Verify `images` folder was uploaded with all contents
2. Check image paths are correct
3. Make sure images folder is in the same location as `index.html`

### Routes Not Working?
- Your HashRouter should work automatically
- URLs will have `#` like: `yoursite.com/#/catalogue`
- This is normal and works perfectly!

---

## 🔄 Rebuilding After Changes

If you make changes to your website:

1. **Update your code**
2. **Build again**: `npm run build`
3. **Upload the new `dist` folder** (replace old files)

---

## 📝 Quick Checklist

Before deploying:
- [ ] Run `npm run build` successfully
- [ ] Check `dist` folder exists with `index.html`
- [ ] Verify `dist` folder contains `assets` and `images` folders
- [ ] Test locally with `npm run preview` (optional but recommended)

After deploying:
- [ ] Visit your domain - should see website
- [ ] Test navigation between pages
- [ ] Check images are loading
- [ ] Test language switching (if applicable)
- [ ] Test contact form (if applicable)

---

## 🌐 Domain Setup

When you buy your domain:
1. Point domain DNS to your hosting's nameservers
2. Or add A record pointing to hosting IP
3. Wait for DNS propagation (can take 24-48 hours)
4. Upload your `dist` folder contents to the domain folder

For subdomain testing:
1. Create subdomain in hosting control panel (e.g., `test.yourdomain.com`)
2. Upload `dist` folder contents to subdomain folder
3. Test immediately - no DNS propagation needed!

---

## ✅ You're All Set!

Your website is now ready for traditional hosting deployment. Just build and upload - it will work perfectly! 🚀

If you need help, check:
- Browser console (F12) for errors
- Server error logs in hosting control panel
- File permissions and folder structure

