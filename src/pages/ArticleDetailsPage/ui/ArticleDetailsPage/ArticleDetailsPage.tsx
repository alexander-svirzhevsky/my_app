import { classNames } from '@/shared/lib/classNames/classNames';
import cn from './ArticleDetailsPage.module.css';
import { ArticleDetails } from '@/entities/Article';
import { useParams } from 'react-router-dom';
import { Text } from '@/shared/ui/Text';
import { ArticleCommentsList } from '@/features/ArticleCommentsList';
import { AddNewComment } from '@/features/AddNewComment';
import { useCallback } from 'react';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { addNewCommentForArticle } from '../../model/services/addNewCommentForArticle';

type ArticleDetailsPageProps = {
  className?: string;
};

export const ArticleDetailsPage = ({ className }: ArticleDetailsPageProps) => {
  const { id } = useParams<{ id: string }>();
  const dispath = useAppDispatch();

  const onSubmitText = useCallback((text: string) => {
    dispath(addNewCommentForArticle(text));
  }, []);

  return (
    <div className={classNames(cn['ArticleDetailsPage'], {}, [className])}>
      <ArticleDetails articleId={id} />
      <Text
        title='Comments'
        className={cn.comments}
      />
      <AddNewComment onSubmitText={onSubmitText} />
      <ArticleCommentsList />
    </div>
  );
};
