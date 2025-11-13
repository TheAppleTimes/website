import type { ArticleMetadata } from "@/types/article";

export const metadata: ArticleMetadata = {
  id: "example-article",
  title: "Example Article: Image Support Demo",
  description: "A demonstration of how to use images in your articles with various layouts and positioning options",
  date: "2024-01-10",
  author: "Blog Admin",
  tags: ["example", "images", "demo"],
  readTime: 4,
};

export default function ExampleArticle() {
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
        <h2>Introduction</h2>
        <p>
          This is an example article that demonstrates the various ways you can incorporate
          images into your blog posts. Whether you want to add a single hero image, multiple
          images throughout your content, or create image galleries, this template has you covered.
        </p>
        
        <h2>Single Image Example</h2>
        <p>
          You can add a single image anywhere in your article. Here's an example of an image
          placed in the middle of the content with a caption:
        </p>
        
        <figure className="my-8">
          <div className="w-full h-64 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
            <span className="text-white text-xl font-semibold">Example Image Placeholder</span>
          </div>
          <figcaption className="text-center text-sm text-muted-foreground mt-2">
            This is where your image caption would appear
          </figcaption>
        </figure>
        
        <p>
          The image above is centered and includes a caption. You can replace the placeholder
          with your actual image by placing it in <code>client/public/images/</code> and
          updating the <code>src</code> attribute.
        </p>
        
        <h2>Text Flow with Images</h2>
        <p>
          One of the key features of this blog platform is the ability to seamlessly integrate
          images into your text flow. You can write a paragraph, insert an image, and then
          continue writing below it without any issues.
        </p>
        
        <div className="w-full h-48 bg-gradient-to-br from-green-500 to-teal-600 rounded-lg flex items-center justify-center my-6">
          <span className="text-white text-xl font-semibold">Another Image Placeholder</span>
        </div>
        
        <p>
          As you can see, the text continues naturally after the image. This makes it easy
          to create engaging, visually rich articles that keep readers interested.
        </p>
        
        <h2>Multiple Images in a Grid</h2>
        <p>
          Sometimes you want to display multiple images side by side. Here's how you can
          create a simple two-column grid:
        </p>
        
        <div className="grid grid-cols-2 gap-4 my-8">
          <div className="w-full h-48 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-semibold">Image 1</span>
          </div>
          <div className="w-full h-48 bg-gradient-to-br from-pink-500 to-rose-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-semibold">Image 2</span>
          </div>
        </div>
        
        <p>
          You can adjust the grid to show three or four columns by changing the{" "}
          <code>grid-cols-2</code> class to <code>grid-cols-3</code> or <code>grid-cols-4</code>.
        </p>
        
        <h2>Responsive Images</h2>
        <p>
          All images in this template are responsive by default. They'll automatically scale
          to fit different screen sizes, ensuring your blog looks great on desktop, tablet,
          and mobile devices.
        </p>
        
        <h2>Best Practices</h2>
        <p>
          When adding images to your articles, keep these tips in mind:
        </p>
        <ul>
          <li>Use descriptive alt text for accessibility</li>
          <li>Optimize images for web to keep load times fast</li>
          <li>Use consistent image dimensions for a cohesive look</li>
          <li>Add captions to provide context</li>
          <li>Consider using WebP format for better compression</li>
        </ul>
        
        <h2>Conclusion</h2>
        <p>
          With these image techniques, you can create visually stunning articles that engage
          your readers. Experiment with different layouts and find what works best for your
          content!
        </p>
        
        <div className="w-full h-64 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-lg flex items-center justify-center mt-8">
          <span className="text-white text-xl font-semibold">Closing Image Placeholder</span>
        </div>
      </section>
    </article>
  );
}
