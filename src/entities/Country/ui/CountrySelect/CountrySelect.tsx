import { classNames } from '@/shared/lib/classNames/classNames';
import cn from './CountrySelect.module.css';
import { Country } from '../../model/types/country';
import { memo, useCallback } from 'react';
import { Select } from '@/shared/ui/Select/ui/Select/Select';

type CountrySelectProps = {
  className?: string;
  value?: Country;
  onChange?: (value: Country) => void;
  readOnly?: boolean;
};

const options = [
  { value: Country.Armenia, content: Country.Armenia },
  { value: Country.Russia, content: Country.Russia },
  { value: Country.Belarus, content: Country.Belarus },
  { value: Country.Kazakhstan, content: Country.Kazakhstan },
  { value: Country.Ukraine, content: Country.Ukraine },
];

export const CountrySelect = memo(
  ({ className, value, onChange, readOnly }: CountrySelectProps) => {
    const onChangeHandler = useCallback(
      (value: string) => {
        onChange?.(value as Country);
      },
      [onChange],
    );

    return (
      <Select
        className={classNames('', {}, [className])}
        label={'country'}
        options={options}
        value={value}
        onChange={onChangeHandler}
        readonly={readOnly}
      />
    );
  },
);
