import { classNames } from '@/shared/lib/classNames/classNames';
import cn from './AddNewComment.module.css';
import { Input } from '@/shared/ui/Input';
import {
  DynamicModuleLoader,
  ReducersList,
} from '@/shared/lib/dynamicModuleLoader/DynamicModuleLoader';
import { addNewCommentActions, addNewCommentReducer } from '../../model/slice/addNewCommentSlice';
import { useSelector } from 'react-redux';
import { getAddNewCommentText } from '../../model/selectors/addNewComment';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import { useCallback } from 'react';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';

type AddNewCommentProps = {
  className?: string;
  onSubmitText: (text: string) => void;
};

const reducers: ReducersList = {
  addNewComment: addNewCommentReducer,
};

export const AddNewComment = ({ className, onSubmitText }: AddNewCommentProps) => {
  const text = useSelector(getAddNewCommentText);
  const dispath = useAppDispatch();

  const onTextChange = useCallback(
    (value: string) => {
      dispath(addNewCommentActions.setText(value));
    },
    [dispath],
  );

  const onSubmit = () => {
    onTextChange('');
    onSubmitText(text);
  };

  return (
    <DynamicModuleLoader
      reducers={reducers}
      name='addNewComment'
      removeAfterUnmount
    >
      <div className={classNames(cn['AddNewComment'], {}, [className])}>
        <Input
          label='Add comment'
          value={text}
          onChange={onTextChange}
        />
        <Button
          theme={ButtonTheme.PRIMARY}
          onClick={onSubmit}
        >
          Submit
        </Button>
      </div>
    </DynamicModuleLoader>
  );
};
