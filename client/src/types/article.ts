/**
 * Article Metadata Interface
 * 
 * Each article exports metadata that will be used for:
 * - Article listing on homepage
 * - Search functionality
 * - SEO and meta tags
 */

export interface ArticleMetadata {
  // Required fields
  id: string; // Unique identifier (use kebab-case, e.g., "my-first-article")
  title: string; // Article title
  description: string; // Short description/summary
  date: string; // Publication date (YYYY-MM-DD format)
  
  // Optional fields
  author?: string; // Author name
  tags?: string[]; // Article tags/categories
  coverImage?: string; // Path to cover image
  readTime?: number; // Estimated read time in minutes
}

export interface Article {
  metadata: ArticleMetadata;
  component: React.ComponentType;
}
