import { Article, ArticleView } from '@/entities/Article';

export interface ArticlePageSchema {
  isLoading?: boolean;
  error?: string;
  ids: string[];
  entities: Record<string, Article>;
  view: ArticleView;

  page: number;
  limit?: number;
  hasMore: boolean;
}
