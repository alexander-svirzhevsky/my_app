import { classNames } from '@/shared/lib/classNames/classNames';
import cn from './CommentList.module.css';
import { Comment } from '../../model/types/comments';
import { Text } from '@/shared/ui/Text';
import { CommentCard } from '../CommentCard/CommentCard';

type CommentListProps = {
  className?: string;
  comments?: Comment[];
  isLoading?: boolean;
};

export const CommentList = ({ className, comments, isLoading }: CommentListProps) => {
  return (
    <div className={classNames(cn['CommentList'], {}, [className])}>
      {comments?.length ? (
        comments.map((comment) => (
          <CommentCard
            key={comment.text}
            comment={comment}
            isLoading={isLoading}
          />
        ))
      ) : (
        <Text text='No comments' />
      )}
    </div>
  );
};
