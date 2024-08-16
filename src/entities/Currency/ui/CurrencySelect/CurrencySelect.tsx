import { classNames } from '@/shared/lib/classNames/classNames';
import cn from './Currency.module.css';
import { memo, useCallback } from 'react';
import { Select } from '@/shared/ui/Select/ui/Select/Select';
import { Currency } from '../../model/types/currency';

type CurrencySelectProps = {
  className?: string;
  value?: Currency;
  onChange?: (value: Currency) => void;
  readOnly?: boolean;
};

const options = [
  { value: Currency.RUB, content: Currency.RUB },
  { value: Currency.EUR, content: Currency.EUR },
  { value: Currency.USD, content: Currency.USD },
];

export const CurrencySelect = memo(
  ({ className, value, onChange, readOnly }: CurrencySelectProps) => {
    const onChangeHandler = useCallback(
      (value: string) => {
        onChange?.(value as Currency);
      },
      [onChange],
    );

    return (
      <Select
        className={classNames('', {}, [className])}
        label={'currency'}
        options={options}
        value={value}
        onChange={onChangeHandler}
        readonly={readOnly}
      />
    );
  },
);
