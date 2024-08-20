import { classNames } from '@/shared/lib/classNames/classNames';
import cn from './ArticleCodeBlockComponent.module.css';
import { ArticleCodeBlock } from '../../model/types/arctilce';
import { Code } from '@/shared/ui/Code';

type ArticleCodeBlockComponentProps = {
  className?: string;
  block: ArticleCodeBlock;
};

export const ArticleCodeBlockComponent = ({ className, block }: ArticleCodeBlockComponentProps) => {
  return (
    <div className={classNames(cn['ArticleCodeBlockComponent'], {}, [className])}>
      <Code text={block.code} />
    </div>
  );
};
