import { classNames } from '@/shared/lib/classNames/classNames';
import cn from './ArticleImageBlockComponent.module.css';
import { ArticleImageBlock } from '../../model/types/arctilce';
import { Text } from '@/shared/ui/Text';

type ArticleImageBlockComponentProps = {
  className?: string;
  block: ArticleImageBlock;
};

export const ArticleImageBlockComponent = ({ className, block }: ArticleImageBlockComponentProps) => {
  return (
    <div className={classNames(cn['ArticleImageBlockComponent'], {}, [className])}>
      <img
        src={block.src}
        className={cn.img}
        alt={block.title}
      />
      {block.title && <Text text={block.title} />}
    </div>
  );
};
