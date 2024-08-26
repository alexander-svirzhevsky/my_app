import { classNames } from '@/shared/lib/classNames/classNames';
import cn from './ArticleDetailsPage.module.css';
import { ArticleDetails } from '@/entities/Article';
import { useParams } from 'react-router-dom';
import { Text } from '@/shared/ui/Text';
import { ArticleCommentsList } from '@/features/ArticleCommentsList';

type ArticleDetailsPageProps = {
  className?: string;
};

export const ArticleDetailsPage = ({ className }: ArticleDetailsPageProps) => {
  const { id } = useParams<{ id: string }>();

  return (
    <div className={classNames(cn['ArticleDetailsPage'], {}, [className])}>
      <ArticleDetails articleId={id} />
      <Text
        title='Comments'
        className={cn.comments}
      />
      <ArticleCommentsList />
    </div>
  );
};
