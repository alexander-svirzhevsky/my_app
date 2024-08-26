import { classNames } from '@/shared/lib/classNames/classNames';
import cn from './ArticleCommentsList.module.css';
import { CommentList } from '@/entities/Comment';
import {
  DynamicModuleLoader,
  ReducersList,
} from '@/shared/lib/dynamicModuleLoader/DynamicModuleLoader';
import {
  articleCommentsListReducer,
  getArticleComments,
} from '../../model/slices/articleCommentsListSlice';
import { useSelector } from 'react-redux';
import { getArticleCommentsListIsLoading } from '../../model/selectros/comments';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useEffect } from 'react';
import { getCommentByArticleId } from '../../model/services/getCommentByArticleId/getCommentByArticleId';
import { useParams } from 'react-router-dom';

type ArticleCommentsListProps = {
  className?: string;
};

const reducers: ReducersList = {
  articleDetailsComments: articleCommentsListReducer,
};

export const ArticleCommentsList = ({ className }: ArticleCommentsListProps) => {
  const comments = useSelector(getArticleComments.selectAll);
  const isLoading = useSelector(getArticleCommentsListIsLoading);
  const dispath = useAppDispatch();
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    dispath(getCommentByArticleId(id));
  }, []);

  return (
    <DynamicModuleLoader
      name='articleDetailsComments'
      reducers={reducers}
      removeAfterUnmount
    >
      <div className={classNames(cn['ArticleCommentsList'], {}, [className])}>
        <CommentList
          comments={comments}
          isLoading={isLoading}
        />
      </div>
    </DynamicModuleLoader>
  );
};
