import { classNames } from '@/shared/lib/classNames/classNames';
import cn from './ArticleListItem.module.css';
import { memo, useCallback } from 'react';
import {
  Article,
  ArticleBlockType,
  ArticleTextBlock,
  ArticleView,
} from '../../model/types/arctilce';
import { Text } from '@/shared/ui/Text';
import { Icon } from '@/shared/ui/Icon/Icon';
import EyeIcon from '@/shared/assets/eye.svg';
import { Card } from '@/shared/ui/Card';
import { useHover } from '@/shared/lib/useHover/useHover';
import { Avatar } from '@/shared/ui/Avatar';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';
import { useNavigate } from 'react-router-dom';
import { Routes } from '@/shared/constant/routes';

type ArticleListItemProps = {
  className?: string;
  article: Article;
  view: ArticleView;
};

export const ArticleListItem = memo(({ className, article, view }: ArticleListItemProps) => {
  const [isHover, bindHover] = useHover();
  const navigate = useNavigate();

  const onOpenArticle = useCallback(() => {
    navigate(Routes.Articles + '/' + article.id);
  }, [article.id, navigate]);

  const types = (
    <Text
      text={article.type.join(', ')}
      className={cn.types}
    />
  );
  const views = (
    <>
      <Text
        text={String(article.views)}
        className={cn.views}
      />
      <Icon
        Svg={EyeIcon}
        className={cn.icon}
      />
    </>
  );

  if (view === ArticleView.BIG) {
    const textBlock = article.blocks.find(
      (block) => block.type === ArticleBlockType.TEXT,
    ) as ArticleTextBlock;

    return (
      <div className={classNames(cn.ArticleListItem, {}, [className, cn[view]])}>
        <Card className={cn.card}>
          <div className={cn.header}>
            <Avatar
              size={30}
              src={article.user.avatar}
            />
            <Text
              text={article.user.username}
              className={cn.username}
            />
            <Text
              text={article.createdAt}
              className={cn.date}
            />
          </div>
          <Text
            title={article.title}
            className={cn.title}
          />
          {types}
          <img
            src={article.img}
            className={cn.img}
            alt={article.title}
          />
          {textBlock && (
            <ArticleTextBlockComponent
              block={textBlock}
              className={cn.textBlock}
            />
          )}
          <div className={cn.footer}>
            <Button
              onClick={onOpenArticle}
              theme={ButtonTheme.PRIMARY}
            >
              Читать далее...
            </Button>
            {views}
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div
      {...bindHover}
      className={classNames(cn.ArticleListItem, {}, [className, cn[view]])}
    >
      <Card
        className={cn.card}
        onClick={onOpenArticle}
      >
        <div className={cn.imageWrapper}>
          <img
            alt={article.title}
            src={article.img}
            className={cn.img}
          />
          <Text
            text={article.createdAt}
            className={cn.date}
          />
        </div>
        <div className={cn.infoWrapper}>
          {types}
          {views}
        </div>
        <Text
          text={article.title}
          className={cn.title}
        />
      </Card>
    </div>
  );
});
