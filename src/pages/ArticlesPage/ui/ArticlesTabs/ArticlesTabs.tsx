import { classNames } from '@/shared/lib/classNames/classNames';
import cn from './ArticlesTabs.module.css';
import { useMemo } from 'react';
import { ArticleType } from '@/entities/Article/model/types/arctilce';
import { TabItem, Tabs } from '@/shared/ui/Tabs/Tabs';

type ArticlesTabsProps = {
  className?: string;
  value: ArticleType;
  onChangeTabType: (tab: TabItem) => void;
};

export const ArticlesTabs = ({ className, value, onChangeTabType }: ArticlesTabsProps) => {
  const typeTabs = useMemo<TabItem[]>(() => {
    return [
      {
        value: ArticleType.ALL,
        content: 'All',
      },
      {
        value: ArticleType.IT,
        content: 'IT',
      },
      {
        value: ArticleType.ECONOMICS,
        content: 'Econimics',
      },
      {
        value: ArticleType.SCIENCE,
        content: 'Sciense',
      },
    ];
  }, []);

  const onTabClick = (tab: TabItem) => {
    onChangeTabType(tab);
  };

  return (
    <div className={classNames(cn['ArticlesTabs'], {}, [className])}>
      <Tabs
        onTabClick={onTabClick}
        tabs={typeTabs}
        value={value}
      />
    </div>
  );
};
