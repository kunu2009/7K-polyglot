# Vercel Deployment Fixes

## Issues Identified

Your Next.js app with Genkit AI integration has several potential deployment issues:

### 1. **Environment Variables Missing**
The app uses Google's Genkit AI but likely missing required API keys.

**Fix:**
- Add `GOOGLE_API_KEY` to your Vercel environment variables
- Go to Vercel Dashboard → Project Settings → Environment Variables
- Add: `GOOGLE_API_KEY` with your Google AI API key

### 2. **Next.js Version Compatibility**
You're using Next.js 15.3.3 which is very recent and may have Vercel compatibility issues.

**Fix:** Downgrade to a stable version in `package.json`:
```json
"next": "14.2.5"
```

### 3. **Build Errors Being Ignored**
Your `next.config.ts` ignores TypeScript and ESLint errors which may mask real deployment issues.

**Fix:** Remove these lines temporarily to see actual errors:
```typescript
typescript: {
  ignoreBuildErrors: true, // Remove this
},
eslint: {
  ignoreDuringBuilds: true, // Remove this
},
```

### 4. **Insufficient Memory for AI Functions**
Genkit AI operations may need more memory than the current 1024MB allocation.

**Fix:** Update `vercel.json`:
```json
{
  "functions": {
    "src/app/api/genkit/[...flow]/route.ts": {
      "memory": 3008,
      "maxDuration": 60
    }
  }
}
```

### 5. **Missing Build Output Configuration**
Vercel might not detect your app correctly.

**Fix:** Add to `vercel.json`:
```json
{
  "buildCommand": "npm run build",
  "outputDirectory": ".next",
  "framework": "nextjs",
  "functions": {
    "src/app/api/genkit/[...flow]/route.ts": {
      "memory": 3008,
      "maxDuration": 60
    }
  }
}
```

### 6. **Experimental Features**
The `serverComponentsExternalPackages` configuration might cause issues.

**Fix:** Temporarily comment out experimental features in `next.config.ts`:
```typescript
// experimental: {
//   serverComponentsExternalPackages: [
//     '@genkit-ai/googleai',
//   ],
// },
```

## Step-by-Step Deployment Fix

1. **Set Environment Variables in Vercel:**
   - `GOOGLE_API_KEY` (your Google AI API key)
   - Any other API keys your app uses

2. **Update package.json:**
   - Downgrade Next.js to version 14.2.5
   - Run `npm install` after changing

3. **Update vercel.json with the configuration above**

4. **Temporarily remove build error ignoring from next.config.ts**

5. **Test locally:**
   ```bash
   npm run build
   ```

6. **If build succeeds locally, redeploy to Vercel**

7. **Check Vercel Function logs for any runtime errors**

## Common Genkit AI Deployment Issues

- **Cold starts:** AI functions take time to initialize
- **Memory limits:** Text-to-speech and AI operations are memory intensive  
- **Timeout issues:** Set maxDuration to 60 seconds for AI operations
- **API key configuration:** Ensure all required environment variables are set

## Testing Deployment

After making these changes:
1. Test the build locally: `npm run build`
2. Check if all environment variables are set in Vercel
3. Monitor Vercel function logs during deployment
4. Test API endpoints after deployment

If you continue having issues, check the Vercel deployment logs for specific error messages.