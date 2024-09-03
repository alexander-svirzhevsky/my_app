import { classNames } from '@/shared/lib/classNames/classNames';
import cn from './Tabs.module.css';
import { ReactNode, useCallback } from 'react';
import { Card } from '../Card';
import { CardTheme } from '../Card/ui/Card/Card';

export type TabItem = {
  value: string;
  content: ReactNode;
};

type TabsProps = {
  className?: string;
  tabs: TabItem[];
  value: string;
  onTabClick: (tab: TabItem) => void;
};
export const Tabs = ({ className, tabs, value, onTabClick }: TabsProps) => {
  const onClick = useCallback((tab: TabItem) => {
    return () => {
      onTabClick(tab);
    };
  }, []);

  console.log('value: ', value);
  console.log(tabs);

  return (
    <div className={classNames(cn['Tabs'], {}, [className])}>
      {tabs.map((tab) => (
        <Card
          onClick={onClick(tab)}
          theme={value === tab.value ? CardTheme.OUTLINE : CardTheme.STANDART}
        >
          {tab.content}
        </Card>
      ))}
    </div>
  );
};
