import { classNames } from '@/shared/lib/classNames/classNames';
import cn from './ArticleSortSelect.module.css';
import { Select, SelectOption } from '@/shared/ui/Select/ui/Select/Select';
import { useMemo } from 'react';
import { ArticlesSortField } from '../../model/types/arctilce';
import { SortOrder } from '@/shared/types';

type ArticleSortSelectProps = {
  className?: string;
  order: SortOrder;
  sort: ArticlesSortField;
  onChangeOrder: (newOrder: SortOrder) => void;
  onChangeSort: (newSort: ArticlesSortField) => void;
};

export const ArticleSortSelect = ({
  className,
  order,
  sort,
  onChangeOrder,
  onChangeSort,
}: ArticleSortSelectProps) => {
  const orderOptions = useMemo<SelectOption<SortOrder>[]>(
    () => [
      {
        value: 'asc',
        content: 'Asc',
      },
      {
        value: 'desc',
        content: 'Desc',
      },
    ],
    [],
  );
  const sortFieldOptions = useMemo<SelectOption<ArticlesSortField>[]>(
    () => [
      {
        value: ArticlesSortField.VIEWS,
        content: ArticlesSortField.VIEWS,
      },
      {
        value: ArticlesSortField.TITLE,
        content: ArticlesSortField.TITLE,
      },
      {
        value: ArticlesSortField.CREATED,
        content: ArticlesSortField.CREATED,
      },
    ],
    [],
  );

  return (
    <div className={classNames(cn['ArticleSortSelect'], {}, [className])}>
      <Select<SortOrder>
        options={orderOptions}
        label='Sort'
        value={order}
        onChange={onChangeOrder}
      />
      <Select<ArticlesSortField>
        options={sortFieldOptions}
        label='Sort by'
        value={sort}
        onChange={onChangeSort}
      />
    </div>
  );
};
