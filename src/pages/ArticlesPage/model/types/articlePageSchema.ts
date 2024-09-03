import { Article, ArticlesSortField, ArticleView } from '@/entities/Article';
import { ArticleType } from '@/entities/Article/model/types/arctilce';
import { SortOrder } from '@/shared/types';

export interface ArticlePageSchema {
  isLoading?: boolean;
  error?: string;
  ids: string[];
  entities: Record<string, Article>;
  view: ArticleView;

  page: number;
  limit?: number;
  hasMore: boolean;

  // filters
  order: SortOrder;
  sort: ArticlesSortField;
  search: string;
  type: ArticleType;

  _inited: boolean;
}
