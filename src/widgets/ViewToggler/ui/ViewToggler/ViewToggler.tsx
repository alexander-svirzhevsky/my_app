import { classNames } from '@/shared/lib/classNames/classNames';
import cn from './ViewToggler.module.css';
import { ArticleView } from '@/entities/Article';
import ListIcon from '@/shared/assets/list.svg';
import TileIcon from '@/shared/assets/tile.svg';
import { Button } from '@/shared/ui/Button';
import { Icon } from '@/shared/ui/Icon/Icon';

type ViewTogglerProps = {
  className?: string;
  currentView: ArticleView;
  onViewChange?: (newView: ArticleView) => void;
};

const views = [
  {
    view: ArticleView.SMALL,
    icon: TileIcon,
  },
  {
    view: ArticleView.BIG,
    icon: ListIcon,
  },
];

export const ViewToggler = ({ className, currentView, onViewChange }: ViewTogglerProps) => {
  const onViewToggle = (view: ArticleView) => {
    return () => {
      onViewChange?.(view);
    };
  };

  return (
    <div className={classNames(cn['ViewToggler'], {}, [className])}>
      {views.map((view) => (
        <Button onClick={onViewToggle(view.view)}>
          <Icon
            Svg={view.icon}
            className={classNames('', {
              [cn.active]: currentView === view.view,
            })}
          />
        </Button>
      ))}
    </div>
  );
};
