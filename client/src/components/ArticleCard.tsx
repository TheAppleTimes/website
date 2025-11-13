import { Link } from "wouter";
import type { ArticleMetadata } from "@/types/article";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

interface ArticleCardProps {
  article: ArticleMetadata;
}

export function ArticleCard({ article }: ArticleCardProps) {
  return (
    <Link href={`/article/${article.id}`}>
      <a className="block h-full transition-transform hover:scale-[1.02]">
        <Card className="h-full flex flex-col hover:shadow-lg transition-shadow">
          {article.coverImage && (
            <div className="w-full h-48 overflow-hidden rounded-t-lg">
              <img
                src={article.coverImage}
                alt={article.title}
                className="w-full h-full object-cover"
              />
            </div>
          )}
          
          <CardHeader>
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
              <time dateTime={article.date}>
                {new Date(article.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </time>
              {article.readTime && (
                <>
                  <span>•</span>
                  <span>{article.readTime} min read</span>
                </>
              )}
            </div>
            <CardTitle className="text-2xl">{article.title}</CardTitle>
            <CardDescription className="text-base mt-2">
              {article.description}
            </CardDescription>
          </CardHeader>
          
          <CardContent className="flex-grow">
            {article.tags && article.tags.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {article.tags.map(tag => (
                  <span
                    key={tag}
                    className="px-2 py-1 bg-secondary text-secondary-foreground rounded-md text-xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </CardContent>
          
          {article.author && (
            <CardFooter>
              <p className="text-sm text-muted-foreground">By {article.author}</p>
            </CardFooter>
          )}
        </Card>
      </a>
    </Link>
  );
}
