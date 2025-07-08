# Vercel Free Tier Optimization Plan

## 🚨 **Current Issue: Size Constraints**

Your Sanskrit learning app is **939MB total** which exceeds Vercel's free tier limits:

- **`node_modules/`**: 656MB (too large)
- **`.next/` build**: 282MB (exceeds limits)
- **AI Dependencies**: 7+ packages contributing to size

## 📊 **Vercel Free Tier Limits (Hobby Plan)**

Based on research, your app likely exceeds these constraints:
- **Build size**: Limited to smaller bundles
- **Function size**: Limited to smaller deployments
- **Dependencies**: Large AI libraries cause issues
- **Memory**: 1024MB max for functions
- **Build time**: 6,000 minutes/month limit

## 🎯 **Optimization Strategy**

### **Phase 1: Immediate Size Reduction (Critical)**

#### **1. Slim Down Dependencies**
```bash
# Remove heavy AI dependencies temporarily
npm uninstall @genkit-ai/googleai @genkit-ai/ai @genkit-ai/next
npm uninstall @google-cloud/speech @google-cloud/text-to-speech
npm uninstall @opentelemetry/api @opentelemetry/sdk-node
```

#### **2. Use External API Calls Instead**
Replace heavy Genkit integration with lightweight API calls:
```typescript
// Instead of importing heavy Genkit libraries
// Use fetch() to call external AI services
const response = await fetch('https://api.openai.com/v1/chat/completions', {
  // Direct API calls are much smaller
});
```

#### **3. Optimize Build Output**
Update `next.config.js`:
```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone', // Reduces bundle size
  experimental: {
    // Remove heavy experimental features
  },
  // Minimize bundle
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
}
```

### **Phase 2: Alternative Deployment Options**

#### **Option A: Split Architecture** 
1. **Frontend Only on Vercel**: Static site with client-side AI calls
2. **AI Backend Elsewhere**: Deploy heavy AI functions on Railway, Render, or Netlify Functions

#### **Option B: Upgrade to Vercel Pro** 
- **Cost**: $20/month
- **Benefits**: 10x more resources, larger function sizes
- **Includes**: 1TB transfer, 1000 GB-Hrs functions

#### **Option C: Alternative Platforms**
- **Railway**: Better for AI apps with larger containers
- **Render**: Free tier with more generous limits  
- **Netlify**: Good for static sites with serverless functions

### **Phase 3: Code Optimization**

#### **1. Lazy Load Heavy Components**
```typescript
import dynamic from 'next/dynamic';

const AIChat = dynamic(() => import('./components/AIChat'), {
  loading: () => <p>Loading AI chat...</p>,
  ssr: false // Don't load on server
});
```

#### **2. External AI Services** 
Instead of bundling AI libraries:
```typescript
// Use external API endpoints
const generateText = async (prompt: string) => {
  const response = await fetch('/api/external-ai', {
    method: 'POST',
    body: JSON.stringify({ prompt })
  });
  return response.json();
};
```

#### **3. Optimize Images and Assets**
```bash
# Compress images
npm install next-optimized-images

# Use WebP format
# Implement proper image lazy loading
```

### **Phase 4: Implementation Steps**

#### **Step 1: Create Minimal Version**
```bash
# 1. Backup current app
git branch backup-full-version

# 2. Remove heavy dependencies
npm uninstall @genkit-ai/googleai @genkit-ai/ai @genkit-ai/next

# 3. Replace with fetch-based API calls
# 4. Test build size
npm run build && du -sh .next
```

#### **Step 2: Deploy Minimal Version**
```bash
# Should be under 50MB now
vercel deploy
```

#### **Step 3: Add Features Gradually**
- Deploy basic app first
- Add AI features one by one
- Monitor size at each step

## 🔧 **Quick Fix Implementation**

### **Immediate Actions (Next 30 mins):**

1. **Remove Genkit Dependencies:**
```bash
npm uninstall @genkit-ai/googleai @genkit-ai/ai @genkit-ai/next
```

2. **Update API Routes to Use Fetch:**
```typescript
// src/app/api/chat/route.ts
export async function POST(request: Request) {
  const { message } = await request.json();
  
  // Replace Genkit with direct API call
  const response = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: message }],
    }),
  });
  
  return Response.json(await response.json());
}
```

3. **Update Environment Variables:**
```bash
# In Vercel Dashboard
OPENAI_API_KEY=your_openai_key
# Remove GOOGLE_API_KEY if not using direct API
```

## 📈 **Expected Results**

After optimization:
- **Bundle size**: ~50-100MB (from 939MB)
- **Build time**: ~2-5 minutes (from current timeout)
- **Function size**: Under Vercel limits
- **Deployment**: Should work on free tier

## 🚀 **Alternative: Upgrade Path**

If optimizations don't work:
- **Vercel Pro**: $20/month, supports your current app size
- **Railway**: $5/month, better for AI applications
- **Render**: Free tier with more generous limits

## 📞 **Next Steps**

1. **Choose optimization approach** (remove dependencies vs upgrade plan)
2. **Implement changes** (I can help with code updates)
3. **Test deployment** (verify size reduction)
4. **Add features back gradually** (if using minimal approach)

**Recommendation**: Start with dependency removal since it's free and quick to test.