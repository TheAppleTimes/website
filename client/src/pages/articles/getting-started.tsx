import type { ArticleMetadata } from "@/types/article";

export const metadata: ArticleMetadata = {
  id: "getting-started",
  title: "Getting Started with Your Article Blog",
  description: "Learn how to create and manage articles on your new blog platform",
  date: "2024-01-15",
  author: "Blog Admin",
  tags: ["tutorial", "getting-started"],
  readTime: 3,
};

export default function GettingStarted() {
  return (
    <article className="prose prose-lg dark:prose-invert max-w-none">
      <header className="mb-8">
        <h1 className="text-4xl font-bold mb-4">{metadata.title}</h1>
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          {metadata.author && <span>By {metadata.author}</span>}
          {metadata.date && <span>{new Date(metadata.date).toLocaleDateString()}</span>}
          {metadata.readTime && <span>{metadata.readTime} min read</span>}
        </div>
        {metadata.tags && metadata.tags.length > 0 && (
          <div className="flex gap-2 mt-4">
            {metadata.tags.map(tag => (
              <span
                key={tag}
                className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </header>
      
      <section className="space-y-6">
        <h2>Welcome to Your Article Blog!</h2>
        <p>
          This is your new article-focused blog platform. It's designed to be simple,
          fast, and easy to customize. All your articles are stored as code files,
          giving you complete control and making it perfect for GitHub Pages hosting.
        </p>
        
        <h2>Creating Your First Article</h2>
        <p>
          To create a new article, follow these steps:
        </p>
        <ol>
          <li>Copy the <code>ARTICLE_TEMPLATE.tsx</code> file from the root directory</li>
          <li>Paste it into <code>client/src/pages/articles/</code> with a new name (e.g., <code>my-first-post.tsx</code>)</li>
          <li>Update the metadata at the top of the file with your article information</li>
          <li>Write your article content in the component</li>
          <li>Import and register your article in <code>client/src/lib/articles.ts</code></li>
        </ol>
        
        <h2>Adding Images</h2>
        <p>
          Images are easy to add to your articles. Simply place your images in the{" "}
          <code>client/public/images/</code> folder and reference them in your article
          using absolute paths like <code>/images/your-image.jpg</code>.
        </p>
        <p>
          You can add images anywhere in your article - at the top, in the middle,
          or at the end. The template includes examples of all these patterns.
        </p>
        
        <h2>Customizing Your Blog</h2>
        <p>
          Your blog is highly customizable. Edit the <code>client/src/config.ts</code> file
          to change:
        </p>
        <ul>
          <li>Site title and description</li>
          <li>Logo and branding</li>
          <li>Color scheme</li>
          <li>Fonts and typography</li>
          <li>Layout settings</li>
        </ul>
        
        <h2>Search Functionality</h2>
        <p>
          Your blog includes built-in search functionality. Readers can search through
          article titles, descriptions, tags, and author names to find exactly what
          they're looking for.
        </p>
        
        <h2>Dark Mode</h2>
        <p>
          The blog automatically detects and respects the user's system preference for
          light or dark mode, providing a comfortable reading experience at any time of day.
        </p>
        
        <h2>Deploying to GitHub Pages</h2>
        <p>
          This blog is designed to work seamlessly with GitHub Pages. Simply push your
          code to a GitHub repository, enable GitHub Pages in the repository settings,
          and your blog will be live!
        </p>
        
        <p className="mt-8">
          Happy writing! 🎉
        </p>
      </section>
    </article>
  );
}
