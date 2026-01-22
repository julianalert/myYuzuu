# Vercel 404 Troubleshooting Guide

## Current Status
- ✅ Root Directory set to `demo` in Vercel Dashboard
- ✅ Build works locally (`npm run build` succeeds)
- ✅ Routes are generated correctly
- ✅ No vercel.json (letting Vercel auto-detect)

## If Still Getting 404:

### 1. Check Vercel Build Logs
Go to your Vercel project → **Deployments** → Click on the latest deployment → **Build Logs**

Look for:
- ❌ Build errors
- ❌ Missing dependencies
- ❌ TypeScript errors
- ❌ Next.js configuration issues

### 2. Verify Root Directory Setting
1. Go to **Settings** → **General**
2. Confirm **Root Directory** is exactly: `demo` (not `./demo` or `/demo`)
3. Click **Save** even if it's already set
4. **Redeploy** (go to Deployments → click "..." → Redeploy)

### 3. Check Framework Detection
1. Go to **Settings** → **General**
2. Verify **Framework Preset** shows: `Next.js`
3. If it shows "Other" or is blank, Vercel didn't detect Next.js

### 4. Force Redeploy
1. Go to **Deployments**
2. Click the **"..."** menu on latest deployment
3. Select **Redeploy**
4. Make sure **Use existing Build Cache** is **UNCHECKED**

### 5. Check Environment Variables
1. Go to **Settings** → **Environment Variables**
2. Make sure there are no conflicting variables
3. Check if `NODE_ENV` is set incorrectly

### 6. Verify File Structure
Make sure these files exist in `demo/`:
- ✅ `package.json`
- ✅ `next.config.ts`
- ✅ `tsconfig.json`
- ✅ `src/app/page.tsx`
- ✅ `src/app/layout.tsx`

### 7. Check Build Output
After deployment, check:
- **Functions** tab - should show Next.js functions
- **Build Logs** - should show "Build Completed" successfully

### 8. Common Issues

**Issue**: Build succeeds but 404 on all routes
- **Solution**: Check if `outputDirectory` is set incorrectly in vercel.json (we removed it)

**Issue**: "Framework not detected"
- **Solution**: Make sure `package.json` has `next` in dependencies

**Issue**: Build fails with module errors
- **Solution**: Check if all dependencies are in `demo/package.json`

### 9. Last Resort - Manual Configuration
If auto-detection fails, create `demo/vercel.json`:
```json
{
  "buildCommand": "npm run build",
  "devCommand": "npm run dev",
  "installCommand": "npm install",
  "framework": "nextjs"
}
```

### 10. Contact Support
If nothing works:
1. Copy the **Build ID** from the error (e.g., `cdg1::bcrz9-1769106235712-d6b0dbffd14c`)
2. Go to Vercel Support with:
   - Your repository URL
   - Build ID
   - Screenshot of Settings → General showing Root Directory
   - Build logs
