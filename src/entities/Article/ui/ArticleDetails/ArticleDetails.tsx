import { classNames } from '@/shared/lib/classNames/classNames';
import cn from './ArticleDetails.module.css';
import { DynamicModuleLoader, ReducersList } from '@/shared/lib/dynamicModuleLoader/DynamicModuleLoader';
import { articleDetailsReducer } from '../../model/slice/articleDetailsSlice';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { memo, useCallback, useEffect } from 'react';
import { getArticleDetailsById } from '../../model/services/getArticleDetailsById/getArticleDetailsById';
import { useSelector } from 'react-redux';
import { getArticleDetailsData, getArticleDetailsError, getArticleDetailsIsLoading } from '../../model/selectors/articleDetails';
import { Article, ArticleBlock, ArticleBlockType } from '../../model/types/arctilce';
import { ArticleCodeBlockComponent } from '../ArticleCodeBlockComponent/ArticleCodeBlockComponent';
import { ArticleImageBlockComponent } from '../ArticleImageBlockComponent/ArticleImageBlockComponent';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';
import { Text, TextTheme } from '@/shared/ui/Text';
import { Avatar } from '@/shared/ui/Avatar';
import EyeIcon from '@/shared/assets/eye.svg';
import CalendarIcon from '@/shared/assets/calendar.svg';
import { TextSize } from '@/shared/ui/Text/ui/Text';
import { Icon } from '@/shared/ui/Icon/Icon';
import { Skeleton } from '@/shared/ui/Skeleton';

type ArticleDetailsProps = {
  className?: string;
  articleId: string;
};

const reducers: ReducersList = {
  articleDetails: articleDetailsReducer,
};

export const ArticleDetails = memo(({ className, articleId }: ArticleDetailsProps) => {
  const dispatch = useAppDispatch();
  const data = useSelector(getArticleDetailsData);
  const isLoading = useSelector(getArticleDetailsIsLoading);
  const error = useSelector(getArticleDetailsError);

  const renderBlock = useCallback((block: ArticleBlock) => {
    switch (block.type) {
      case ArticleBlockType.CODE:
        return (
          <ArticleCodeBlockComponent
            block={block}
            className={cn.block}
          />
        );
      case ArticleBlockType.IMAGE:
        return (
          <ArticleImageBlockComponent
            block={block}
            className={cn.block}
          />
        );
      case ArticleBlockType.TEXT:
        return (
          <ArticleTextBlockComponent
            className={cn.block}
            block={block}
          />
        );
      default:
        return null;
    }
  }, []);

  useEffect(() => {
    dispatch(getArticleDetailsById(articleId));
  }, [dispatch, articleId]);

  let content;

  if (isLoading) {
    content = (
      <>
        <Skeleton
          className={cn.avatar}
          width={200}
          height={200}
          border='50%'
        />
        <Skeleton
          className={cn.title}
          width={300}
          height={32}
        />
        <Skeleton
          className={cn.skeleton}
          width={600}
          height={24}
        />
        <Skeleton
          className={cn.skeleton}
          width='100%'
          height={200}
        />
        <Skeleton
          className={cn.skeleton}
          width='100%'
          height={200}
        />
      </>
    );
  }

  if (error) {
    content = (
      <Text
        theme={TextTheme.ERROR}
        text={error}
      />
    );
  }

  if (data && !isLoading) {
    content = (
      <>
        <div className={cn.avatarWrapper}>
          <Avatar
            size={200}
            src={data.img}
            className={cn.avatar}
          />
        </div>
        <Text
          title={data.title}
          text={data.subtitle}
          size={TextSize.L}
        />
        <div className={cn.articleInfo}>
          <Icon
            className={cn.icon}
            Svg={EyeIcon}
          />
          <Text text={String(data.views)} />
        </div>
        <div className={cn.articleInfo}>
          <Icon
            className={cn.icon}
            Svg={CalendarIcon}
          />
          <Text text={data.createdAt} />
        </div>
        {data?.blocks.map(renderBlock)}
      </>
    );
  }

  return (
    <DynamicModuleLoader
      name='articleDetails'
      reducers={reducers}
    >
      <div className={classNames(cn['ArticleDetails'], {}, [className])}>{content}</div>
    </DynamicModuleLoader>
  );
});
