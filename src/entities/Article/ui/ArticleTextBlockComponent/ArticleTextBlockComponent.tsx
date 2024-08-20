import { classNames } from '@/shared/lib/classNames/classNames';
import cn from './ArticleTextBlockComponent.module.css';
import { ArticleTextBlock } from '../../model/types/arctilce';
import { Text } from '@/shared/ui/Text';

type ArticleTextBlockComponentProps = {
  className?: string;
  block: ArticleTextBlock;
};

export const ArticleTextBlockComponent = ({ className, block }: ArticleTextBlockComponentProps) => {
  return (
    <div className={classNames(cn['ArticleTextBlockComponent'], {}, [className])}>
      {block.title && (
        <Text
          title={block.title}
          className={cn.title}
        />
      )}
      {block.paragraphs.map((paragraph, index) => (
        <Text
          key={index}
          text={paragraph}
          className={cn.paragraph}
        />
      ))}
    </div>
  );
};
