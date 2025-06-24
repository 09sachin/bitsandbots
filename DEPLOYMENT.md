# GitHub Pages Deployment Guide

This portfolio is configured for automatic deployment to GitHub Pages using GitHub Actions.

## Setup Instructions

### 1. Repository Configuration

1. Push your code to a GitHub repository
2. Go to your repository settings
3. Navigate to **Pages** section
4. Set **Source** to "Deploy from a branch"
5. Select **Branch**: `gh-pages`
6. Set **Folder**: `/ (root)`

### 2. GitHub Actions Workflow

The workflow is already configured in `.github/workflows/deploy.yml` and will:

- Trigger on every push to the `main` branch
- Install dependencies with `npm ci`
- Build the static site with `npm run build`
- Deploy the `out` folder to the `gh-pages` branch

### 3. Next.js Configuration

The project is configured for static export in `next.config.ts`:

```typescript
const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  // Uncomment if your repo is not at root (e.g., username/portfolio)
  // basePath: '/portfolio',
};
```

### 4. Base Path (Optional)

If your repository is not at the root of your GitHub account (e.g., `username.github.io/portfolio`), uncomment and set the `basePath` in `next.config.ts`:

```typescript
basePath: '/your-repo-name',
```

### 5. Custom Domain (Optional)

To use a custom domain:

1. Add a `CNAME` file to the `public` folder with your domain name
2. Configure DNS settings with your domain provider
3. Enable "Enforce HTTPS" in repository settings

## Manual Deployment

To deploy manually:

```bash
npm run build
# The static files will be in the 'out' directory
# Upload the contents of 'out' to your web server
```

## Troubleshooting

### Build Fails
- Check that all dependencies are installed
- Ensure TypeScript errors are resolved
- Verify all dynamic routes have `generateStaticParams`

### 404 Errors
- Ensure `trailingSlash: true` is set in next.config.ts
- Check that `.nojekyll` file exists in the output

### Images Not Loading
- Ensure `images.unoptimized: true` is set for static export
- Use relative paths for local images

## Local Testing

Test the static export locally:

```bash
npm run build
npx serve out
```

This will serve the static files locally for testing before deployment. 