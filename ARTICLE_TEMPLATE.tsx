/**
 * ARTICLE TEMPLATE
 * 
 * Copy this file to create a new article:
 * 1. Copy this file to client/src/pages/articles/your-article-name.tsx
 * 2. Update the metadata below with your article information
 * 3. Write your article content in the ArticleContent component
 * 4. Import and register your article in client/src/lib/articles.ts
 * 
 * IMPORTANT: The metadata export is required for the article system to work!
 */

import type { ArticleMetadata } from "@/types/article";

/**
 * Article Metadata
 * This information is used for the article listing and search functionality
 */
export const metadata: ArticleMetadata = {
  id: "your-article-id", // Use kebab-case (e.g., "my-awesome-article")
  title: "Your Article Title",
  description: "A brief description of your article that will appear in the article listing",
  date: "2024-01-01", // Publication date in YYYY-MM-DD format
  author: "Your Name", // Optional
  tags: ["example", "tutorial"], // Optional - used for filtering and search
  coverImage: "/images/your-cover-image.jpg", // Optional - path to cover image in client/public/
  readTime: 5, // Optional - estimated read time in minutes
};

/**
 * Article Content Component
 * 
 * Write your article content here using standard React/JSX.
 * You can use markdown-like formatting with the Streamdown component.
 * 
 * Image Support:
 * - Place images in client/public/images/
 * - Reference them with absolute paths: /images/your-image.jpg
 * - Use standard <img> tags or the Image component below
 */
export default function ArticleContent() {
  return (
    <article className="prose prose-lg dark:prose-invert max-w-none">
      {/* Cover Image (optional) */}
      {metadata.coverImage && (
        <img
          src={metadata.coverImage}
          alt={metadata.title}
          className="w-full h-64 object-cover rounded-lg mb-8"
        />
      )}
      
      {/* Article Header */}
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
      
      {/* Article Content - Replace this section with your content */}
      <section className="space-y-6">
        <h2>Introduction</h2>
        <p>
          Start writing your article content here. You can use regular HTML elements
          or import components as needed.
        </p>
        
        <h2>Adding Images</h2>
        <p>
          To add images in your article, place them in the <code>client/public/images/</code> folder
          and reference them like this:
        </p>
        
        {/* Example: Image in the middle of content */}
        <figure className="my-8">
          <img
            src="/images/example.jpg"
            alt="Example image"
            className="w-full rounded-lg"
          />
          <figcaption className="text-center text-sm text-muted-foreground mt-2">
            Image caption goes here
          </figcaption>
        </figure>
        
        <p>
          Continue your content after the image. You can add as many images as you need
          throughout your article.
        </p>
        
        <h2>Multiple Images</h2>
        <p>
          You can also display multiple images in a grid:
        </p>
        
        {/* Example: Multiple images in a grid */}
        <div className="grid grid-cols-2 gap-4 my-8">
          <img
            src="/images/example1.jpg"
            alt="Example 1"
            className="w-full rounded-lg"
          />
          <img
            src="/images/example2.jpg"
            alt="Example 2"
            className="w-full rounded-lg"
          />
        </div>
        
        <h2>Conclusion</h2>
        <p>
          Wrap up your article here. The prose classes will automatically style
          your content with proper typography.
        </p>
        
        {/* Example: Image at the end */}
        <img
          src="/images/conclusion.jpg"
          alt="Conclusion"
          className="w-full rounded-lg mt-8"
        />
      </section>
    </article>
  );
}
