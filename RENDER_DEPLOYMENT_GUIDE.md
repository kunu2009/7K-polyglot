# Deploy Sanskrit Learning App to Render

## 🎯 **Why Render is Perfect for Your AI App**

Render is much better suited for your AI-powered Sanskrit learning app than Vercel because:

- **🆓 Free Tier**: 750 hours/month (much more generous than Vercel)
- **💾 Larger Apps**: Supports apps up to several GB (vs Vercel's strict limits)
- **🤖 AI Workloads**: Better for long-running AI operations
- **🔧 Full Stack**: Backend services, databases, and persistent storage
- **⏱️ Long Requests**: Up to 100 minutes (vs Vercel's 60 seconds)
- **💰 Cost**: Free for testing, $7/month for production

## 🚀 **Quick Deploy (Option 1: One-Click)**

1. **Push to GitHub** (already done ✅)
2. **Click Deploy Button**:
   
   [![Deploy to Render](https://render.com/images/deploy-to-render-button.svg)](https://render.com/deploy?repo=https://github.com/kunu2009/7K-polyglot)

3. **Set Environment Variables**:
   - `GOOGLE_API_KEY`: Your Google AI API key
   - `OPENAI_API_KEY`: Your OpenAI API key (if using)

## 🛠️ **Manual Deploy (Option 2: Step-by-Step)**

### **Step 1: Create Render Account**
1. Go to [render.com](https://render.com)
2. Sign up with GitHub (free)
3. Connect your GitHub account

### **Step 2: Create Web Service**
1. Click "New +" → "Web Service"
2. Connect your `kunu2009/7K-polyglot` repository
3. Configure:
   ```
   Name: sanskrit-learning-app
   Runtime: Node
   Branch: main
   Build Command: npm ci && npm run build
   Start Command: npm start
   ```

### **Step 3: Choose Plan**
- **Free Tier**: Good for testing (512MB RAM, spins down after 15 mins)
- **Starter**: $7/month (512MB RAM, always on) - **Recommended**
- **Standard**: $25/month (2GB RAM) - For high traffic

### **Step 4: Environment Variables**
Add these in Render Dashboard → Environment Variables:
```bash
NODE_ENV=production
GOOGLE_API_KEY=your_google_ai_api_key_here
OPENAI_API_KEY=your_openai_key_here  # if using OpenAI
```

### **Step 5: Deploy**
1. Click "Create Web Service"
2. Watch the build logs
3. Your app will be live at: `https://sanskrit-learning-app.onrender.com`

## 📊 **Render vs Vercel Comparison**

| Feature | Render | Vercel Free |
|---------|--------|-------------|
| **App Size** | Several GB ✅ | ~150MB ❌ |
| **Function Timeout** | 100 minutes ✅ | 60 seconds ❌ |
| **AI Workloads** | Excellent ✅ | Limited ❌ |
| **Build Size** | Very generous ✅ | Strict limits ❌ |
| **Monthly Hours** | 750 hours ✅ | Limited ❌ |
| **Databases** | Built-in Postgres ✅ | External only ❌ |
| **Cost (Paid)** | $7/month ✅ | $20/month ❌ |

## ⚙️ **Optimization for Render**

### **Current App Status**
- ✅ Next.js 14.2.5 (compatible)
- ✅ Build working locally
- ✅ 939MB total size (Render can handle this)
- ✅ AI dependencies intact

### **No Changes Needed!**
Unlike Vercel, your app can deploy to Render as-is:
- Keep all Genkit AI dependencies
- Keep current build size
- Keep AI functionality

### **Optional Optimizations**
If you want better performance:

1. **Use Render's Starter Plan** ($7/month):
   ```yaml
   # render.yaml
   services:
     - type: web
       plan: starter  # Always-on, faster
   ```

2. **Add Persistent Storage** (for caching):
   ```yaml
   disk:
     name: app-cache
     mountPath: /app/cache
     sizeGB: 1
   ```

3. **Enable Auto-scaling**:
   ```yaml
   scaling:
     minInstances: 1
     maxInstances: 3
   ```

## 🔧 **Troubleshooting**

### **Build Issues**
If build fails:
```bash
# Check Node version
"engines": {
  "node": ">=18.0.0"
}
```

### **Memory Issues**
If running out of memory:
- Upgrade to Standard plan (2GB RAM)
- Add `NODE_OPTIONS=--max-old-space-size=2048`

### **AI API Issues**
- Ensure environment variables are set
- Check API key permissions
- Monitor logs in Render dashboard

## 📈 **Scaling Strategy**

### **Phase 1: Free Tier (Testing)**
- Deploy on free tier first
- Test all functionality
- Monitor resource usage

### **Phase 2: Starter Plan (Production)**
- Upgrade to $7/month Starter
- Always-on performance
- Better for users

### **Phase 3: Scale Up (High Traffic)**
- Standard plan: $25/month (2GB RAM)
- Auto-scaling enabled
- Multiple instances

## 🎉 **Expected Results**

After deployment to Render:
- ✅ **Full AI functionality** (no compromises)
- ✅ **Fast performance** (no cold starts on paid tiers)
- ✅ **Reliable uptime** (750 hours/month free)
- ✅ **Room to grow** (easy scaling)
- ✅ **Cost effective** ($7/month vs Vercel's $20/month)

## 🔗 **Next Steps**

1. **Deploy now** using one of the methods above
2. **Test thoroughly** on free tier
3. **Upgrade to Starter** for production use
4. **Monitor and optimize** as needed

**Recommendation**: Start with the one-click deploy button for fastest setup!

---

## 📞 **Need Help?**

- **Render Docs**: [docs.render.com](https://docs.render.com)
- **Community**: [community.render.com](https://community.render.com)
- **Support**: Available on paid plans

Your Sanskrit learning app should work perfectly on Render! 🎯