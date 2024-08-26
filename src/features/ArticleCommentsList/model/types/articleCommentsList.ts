import { Comment } from '@/entities/Comment';

export interface ArticleCommentsListSchema {
  isLoading?: boolean;
  error?: string;
  ids: string[];
  entities: Record<string, Comment>;
}
