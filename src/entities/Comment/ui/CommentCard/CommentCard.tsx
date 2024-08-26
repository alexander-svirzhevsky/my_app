import { classNames } from '@/shared/lib/classNames/classNames';
import cn from './CommentCard.module.css';
import { Comment } from '../../model/types/comments';
import { Avatar } from '@/shared/ui/Avatar';
import { Text } from '@/shared/ui/Text';
import { Skeleton } from '@/shared/ui/Skeleton';

type CommentCardProps = {
  className?: string;
  comment: Comment;
  isLoading: boolean;
};

export const CommentCard = ({ className, comment, isLoading }: CommentCardProps) => {
  if (isLoading) {
    return (
      <div className={classNames(cn['CommentCard'], {}, [className])}>
        <div className={cn.header}>
          <Skeleton
            width={30}
            height={30}
            border='50%'
          />
          <Skeleton
            height={16}
            width={100}
          />
        </div>
        <Skeleton
          width='100%'
          height={50}
          className={cn.text}
        />
      </div>
    );
  }

  return (
    <div className={classNames(cn['CommentCard'], {}, [className])}>
      <div className={cn.header}>
        {comment.user.avatar && (
          <Avatar
            size={30}
            src={comment.user.avatar}
          />
        )}
        <Text title={comment.user.username} />
      </div>
      <Text
        className={cn.text}
        text={comment.text}
      />
    </div>
  );
};
