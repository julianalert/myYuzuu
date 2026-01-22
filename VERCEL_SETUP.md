# VERCEL DEPLOYMENT - CRITICAL SETUP REQUIRED

## ⚠️ IMPORTANT: You MUST configure this in Vercel Dashboard

The `vercel.json` file cannot set the root directory. You **MUST** do this manually:

### Steps to Fix 404 Error:

1. **Go to Vercel Dashboard**: https://vercel.com/dashboard
2. **Select your project**: myYuzuu
3. **Go to Settings** → **General**
4. **Find "Root Directory"** setting
5. **Set it to**: `demo`
6. **Click "Save"**
7. **Redeploy** your project

### Why This is Needed:

- Your Next.js app is in the `demo/` subdirectory
- Vercel needs to know where to find `package.json` and build the app
- The `rootDirectory` setting tells Vercel to treat `demo/` as the project root
- This cannot be set in `vercel.json` - it must be done in the dashboard

### After Setting Root Directory:

Vercel will:
- ✅ Find `demo/package.json`
- ✅ Run `npm install` in `demo/`
- ✅ Run `npm run build` in `demo/`
- ✅ Serve the app from `demo/.next`

The 404 error will be resolved once you set the root directory in the dashboard.
