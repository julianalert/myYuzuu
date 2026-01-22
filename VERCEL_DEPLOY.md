# Vercel Deployment Instructions

## Setting up the Root Directory

Since the Next.js app is located in the `demo/` subdirectory, you need to configure Vercel to use it as the root directory:

1. Go to your Vercel project settings
2. Navigate to **Settings** → **General**
3. Find the **Root Directory** setting
4. Set it to: `demo`
5. Save the changes

Vercel will then automatically detect the Next.js app and deploy it correctly.

## Alternative: Using vercel.json (Not Recommended)

If you prefer using a configuration file, you can create a `vercel.json` in the root, but Vercel's dashboard setting is the recommended approach for monorepos and subdirectory projects.
