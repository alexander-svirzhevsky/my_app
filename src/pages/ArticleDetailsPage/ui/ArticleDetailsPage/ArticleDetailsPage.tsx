import { classNames } from '@/shared/lib/classNames/classNames';
import cn from './ArticleDetailsPage.module.css';
import { ArticleDetails } from '@/entities/Article';
import { useNavigate, useParams } from 'react-router-dom';
import { Text } from '@/shared/ui/Text';
import { ArticleCommentsList } from '@/features/ArticleCommentsList';
import { AddNewComment } from '@/features/AddNewComment';
import { useCallback } from 'react';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { addNewCommentForArticle } from '../../model/services/addNewCommentForArticle';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import { Routes } from '@/shared/constant/routes';
import { Page } from '@/widgets/Page';

type ArticleDetailsPageProps = {
  className?: string;
};

export const ArticleDetailsPage = ({ className }: ArticleDetailsPageProps) => {
  const { id } = useParams<{ id: string }>();
  const dispath = useAppDispatch();
  const navigate = useNavigate();

  const onSubmitText = useCallback((text: string) => {
    dispath(addNewCommentForArticle(text));
  }, []);

  const onBackToList = useCallback(() => {
    navigate(Routes.Articles);
  }, []);

  return (
    <Page>
      <div className={classNames(cn['ArticleDetailsPage'], {}, [className])}>
        <Button
          theme={ButtonTheme.PRIMARY}
          onClick={onBackToList}
        >
          Назад к списку
        </Button>
        <ArticleDetails articleId={id} />
        <Text
          title='Comments'
          className={cn.comments}
        />
        <AddNewComment onSubmitText={onSubmitText} />
        <ArticleCommentsList />
      </div>
    </Page>
  );
};
