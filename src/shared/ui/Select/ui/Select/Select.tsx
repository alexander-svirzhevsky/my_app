import { ChangeEvent, memo, useMemo } from 'react';
import cn from './Select.module.css';
import { classNames } from '@/shared/lib/classNames/classNames';

export interface SelectOption {
  value: string;
  content: string;
}

interface SelectProps {
  className?: string;
  label?: string;
  options?: SelectOption[];
  value?: string;
  onChange?: (value: string) => void;
  readonly?: boolean;
}

export const Select = memo((props: SelectProps) => {
  const { className, label, options, onChange, value, readonly } = props;

  const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    if (onChange) {
      onChange(e.target.value);
    }
  };

  const optionsList = useMemo(
    () =>
      options?.map((opt) => (
        <option
          className={cn.option}
          value={opt.value}
          key={opt.value}
        >
          {opt.content}
        </option>
      )),
    [options],
  );

  return (
    <div className={classNames(cn.Wrapper, {}, [className])}>
      {label && <span className={cn.label}>{`${label}: `}</span>}
      <select
        disabled={readonly}
        className={cn.select}
        value={value}
        onChange={onChangeHandler}
      >
        {optionsList}
      </select>
    </div>
  );
});
