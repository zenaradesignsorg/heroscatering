# Vercel Deployment & SSL Setup Guide

## SSL Configuration

Vercel **automatically provides SSL certificates** for all domains. SSL is enabled by default and requires no additional configuration.

## Steps to Set Up Your Domain in Vercel

### 1. Connect Your Project to Vercel

1. Go to [vercel.com](https://vercel.com) and sign in
2. Click **"Add New Project"**
3. Import your Git repository (GitHub, GitLab, or Bitbucket)
4. Vercel will auto-detect it's a Vite project

### 2. Configure Build Settings

Vercel should auto-detect these settings, but verify:
- **Framework Preset**: Vite
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Install Command**: `npm install`

### 3. Add Your Custom Domain

1. In your Vercel project dashboard, go to **Settings** → **Domains**
2. Click **"Add Domain"**
3. Enter your domain: `heroscatering.com`
4. Vercel will show you DNS records to add

### 4. Configure DNS Records

Add these DNS records at your domain registrar (where you bought the domain):

**For apex domain (heroscatering.com):**
- **Type**: `A`
- **Name**: `@` (or leave blank)
- **Value**: `76.76.21.21` (Vercel's IP - verify this is current in Vercel dashboard)

**For www subdomain (www.heroscatering.com):**
- **Type**: `CNAME`
- **Name**: `www`
- **Value**: `cname.vercel-dns.com` (or the value shown in Vercel dashboard)

**Alternative (Recommended):**
- Use Vercel's **Nameservers** instead of individual DNS records:
  1. In Vercel dashboard, go to **Settings** → **Domains**
  2. Click on your domain
  3. Copy the nameservers shown
  4. Update nameservers at your domain registrar

### 5. SSL Certificate Provisioning

Once DNS is configured:
- Vercel **automatically provisions** an SSL certificate (usually within minutes)
- You'll see "Valid" status next to your domain in Vercel dashboard
- SSL is **free and automatic** - no manual configuration needed

### 6. Force HTTPS (Optional but Recommended)

The `vercel.json` file already includes:
- `Strict-Transport-Security` header (HSTS)
- Security headers for protection

Vercel automatically redirects HTTP → HTTPS, so no additional configuration needed.

### 7. Verify SSL is Working

After deployment:
1. Visit `https://heroscatering.com` (note the `https://`)
2. Check browser address bar for padlock icon 🔒
3. Test SSL: [SSL Labs](https://www.ssllabs.com/ssltest/) or [Security Headers](https://securityheaders.com/)

## Troubleshooting

### SSL Certificate Not Issued Yet
- **Wait 5-10 minutes** after DNS configuration
- Ensure DNS records are propagated (check with `dig` or DNS checker)
- Verify domain is correctly added in Vercel dashboard

### "Not Secure" Warning
- Make sure you're accessing via `https://` not `http://`
- Clear browser cache
- Check that DNS records are correct

### Mixed Content Warnings
- Ensure all external resources (images, scripts) use `https://`
- Check browser console for specific resources causing issues

## Security Headers Configured

The `vercel.json` file includes:
- ✅ X-Frame-Options: SAMEORIGIN
- ✅ X-Content-Type-Options: nosniff
- ✅ X-XSS-Protection: 1; mode=block
- ✅ Referrer-Policy: strict-origin-when-cross-origin
- ✅ Permissions-Policy: geolocation=(), microphone=(), camera=()
- ✅ Strict-Transport-Security: max-age=31536000; includeSubDomains

All headers are automatically applied to all routes.

## Additional Notes

- Vercel provides **free SSL certificates** via Let's Encrypt
- Certificates are **automatically renewed**
- **No manual SSL configuration** required
- HTTPS is **enabled by default** for all domains
