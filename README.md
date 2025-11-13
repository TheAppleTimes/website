# Article Blog Platform

A modern, article-focused blog platform built with React, TypeScript, and Tailwind CSS. Designed for GitHub Pages hosting with a focus on simplicity, performance, and ease of use.

## Features

- **Article-First Design**: Clean, readable layout focused on content
- **Easy Article Management**: Write articles as code files with simple metadata
- **Search Functionality**: Built-in search across titles, descriptions, tags, and authors
- **Image Support**: Full support for images anywhere in your articles
- **Light/Dark Mode**: Automatic theme switching based on system preferences
- **Fully Customizable**: Easy configuration for colors, fonts, and branding
- **GitHub Pages Ready**: Optimized for static hosting on GitHub Pages
- **Responsive Design**: Looks great on desktop, tablet, and mobile

## Quick Start

### Prerequisites

- Node.js 20 or higher
- pnpm (or npm/yarn)

### Installation

1. Clone this repository:
```bash
git clone <your-repo-url>
cd article-blog
```

2. Install dependencies:
```bash
pnpm install
```

3. Start the development server:
```bash
pnpm dev
```

4. Open your browser to `http://localhost:3000`

## Creating Articles

### Step 1: Copy the Template

Copy the `ARTICLE_TEMPLATE.tsx` file from the root directory to `client/src/pages/articles/` with your article name:

```bash
cp ARTICLE_TEMPLATE.tsx client/src/pages/articles/my-new-article.tsx
```

### Step 2: Update Article Metadata

Edit your new article file and update the metadata:

```tsx
export const metadata: ArticleMetadata = {
  id: "my-new-article", // Use kebab-case
  title: "My New Article",
  description: "A brief description of your article",
  date: "2024-01-20", // YYYY-MM-DD format
  author: "Your Name", // Optional
  tags: ["tutorial", "react"], // Optional
  coverImage: "/images/cover.jpg", // Optional
  readTime: 5, // Optional - minutes
};
```

### Step 3: Write Your Content

Replace the template content with your article:

```tsx
export default function MyNewArticle() {
  return (
    <article className="prose prose-lg dark:prose-invert max-w-none">
      <header className="mb-8">
        {/* Header is automatically generated from metadata */}
      </header>
      
      <section className="space-y-6">
        <h2>Your First Heading</h2>
        <p>Your article content goes here...</p>
        
        {/* Add images anywhere */}
        <img src="/images/example.jpg" alt="Description" />
        
        <p>Continue writing after the image...</p>
      </section>
    </article>
  );
}
```

### Step 4: Register Your Article

Add your article to `client/src/lib/articles.ts`:

```tsx
// Import your article
import MyNewArticle, { metadata as myNewArticleMetadata } from "@/pages/articles/my-new-article";

// Add to the articles array
export const articles: Article[] = [
  {
    metadata: myNewArticleMetadata,
    component: MyNewArticle,
  },
  // ... other articles
];
```

### Step 5: Add Images (Optional)

Place your images in `client/public/images/` and reference them with absolute paths:

```tsx
<img src="/images/my-image.jpg" alt="Description" />
```

## Customization

### Site Configuration

Edit `client/src/config.ts` to customize your blog:

```tsx
export const siteConfig = {
  title: "My Article Blog",
  description: "A collection of articles and thoughts",
  logo: "/logo.svg",
  
  // Customize fonts
  fonts: {
    heading: "'Inter', sans-serif",
    body: "'Inter', sans-serif",
    mono: "'JetBrains Mono', monospace",
  },
  
  // Layout settings
  layout: {
    maxWidth: "1200px",
    articlesPerPage: 10,
  },
  
  // Features
  features: {
    search: true,
    darkMode: true,
  },
};
```

### Colors and Themes

Edit `client/src/index.css` to customize colors. The theme uses CSS variables for easy customization:

```css
:root {
  --primary: oklch(0.623 0.214 259.815);
  --background: oklch(1 0 0);
  --foreground: oklch(0.235 0.015 65);
  /* ... more variables */
}

.dark {
  --primary: oklch(0.488 0.243 264.376);
  --background: oklch(0.141 0.005 285.823);
  --foreground: oklch(0.85 0.005 65);
  /* ... more variables */
}
```

### Fonts

To change fonts, edit `client/index.html` to include your Google Fonts:

```html
<link href="https://fonts.googleapis.com/css2?family=Your+Font&display=swap" rel="stylesheet" />
```

Then update the font-family in `client/src/index.css`.

### Logo

Replace `client/public/logo.svg` with your own logo, and update the path in `client/src/config.ts`.

## Deploying to GitHub Pages

### Option 1: Automatic Deployment (Recommended)

This repository includes a GitHub Actions workflow that automatically deploys to GitHub Pages on every push to the main branch.

1. Push your code to GitHub:
```bash
git add .
git commit -m "Initial commit"
git push origin main
```

2. Enable GitHub Pages:
   - Go to your repository settings
   - Navigate to "Pages" in the sidebar
   - Under "Source", select "GitHub Actions"

3. Your site will be automatically deployed to `https://yourusername.github.io/repository-name/`

### Option 2: Manual Deployment

1. Build the project:
```bash
pnpm build
```

2. The built files will be in `client/dist/`

3. Deploy the `client/dist/` directory to your hosting provider

### Custom Domain

To use a custom domain:

1. Add a `CNAME` file to `client/public/` with your domain:
```
yourdomain.com
```

2. Configure your domain's DNS settings to point to GitHub Pages

3. Enable custom domain in your repository settings

## Project Structure

```
article-blog/
├── client/
│   ├── public/           # Static assets
│   │   ├── images/       # Article images
│   │   └── logo.svg      # Site logo
│   ├── src/
│   │   ├── components/   # Reusable components
│   │   ├── pages/        # Page components
│   │   │   └── articles/ # Article files
│   │   ├── lib/          # Utilities and helpers
│   │   ├── types/        # TypeScript types
│   │   ├── config.ts     # Site configuration
│   │   └── index.css     # Global styles
│   └── index.html        # HTML template
├── .github/
│   └── workflows/
│       └── deploy.yml    # GitHub Actions workflow
├── ARTICLE_TEMPLATE.tsx  # Template for new articles
└── README.md             # This file
```

## Tips and Best Practices

### Writing Articles

- Use descriptive IDs in kebab-case (e.g., "introduction-to-react")
- Add meaningful tags for better searchability
- Include cover images for visual appeal
- Estimate read time to help readers
- Use semantic HTML headings (h2, h3) for structure

### Images

- Optimize images before adding them (use WebP format when possible)
- Use descriptive alt text for accessibility
- Keep images under 500KB for fast loading
- Use consistent aspect ratios for a cohesive look

### Performance

- The blog is optimized for static hosting
- All articles are bundled at build time
- Search is client-side for instant results
- Images are lazy-loaded automatically

### SEO

- Each article page has proper meta tags
- Semantic HTML structure for better indexing
- Clean URLs for article pages
- Fast loading times for better rankings

## Troubleshooting

### Articles not showing up

- Make sure you've imported and registered the article in `client/src/lib/articles.ts`
- Check that the article ID is unique and in kebab-case
- Verify the metadata is exported correctly

### Images not loading

- Ensure images are in `client/public/images/`
- Use absolute paths starting with `/` (e.g., `/images/photo.jpg`)
- Check image file names match exactly (case-sensitive)

### Build errors

- Run `pnpm install` to ensure all dependencies are installed
- Check for TypeScript errors with `pnpm run type-check`
- Clear the build cache: `rm -rf client/dist && pnpm build`

## License

MIT License - feel free to use this for your own blog!

## Support

For issues or questions, please open an issue on GitHub.

---

Happy blogging! 🎉
