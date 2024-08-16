import { classNames } from '@/shared/lib/classNames/classNames';
import { Input } from '@/shared/ui/Input';
import { ProfileType } from '@/features/EditableProfileCard';
import cn from './ProfileCard.module.css';
import { CountrySelect } from '@/entities/Country/ui/CountrySelect/CountrySelect';
import { Country } from '@/entities/Country';
import { Currency, CurrencySelect } from '@/entities/Currency';
import { Avatar } from '@/shared/ui/Avatar';

type ProfileCardProps = {
  className?: string;
  profile: ProfileType;
  readonly: boolean;
  onEditUsername: (value: string) => void;
  onEditFirstname: (value: string) => void;
  onEditLastname: (value: string) => void;
  onEditAge: (value: string) => void;
  onChangeCountry: (value: Country) => void;
  onChangeCurrency: (value: Currency) => void;
  onChangeAvatar: (value: string) => void;
};

export const ProfileCard = ({
  className,
  profile,
  readonly,
  onEditUsername,
  onEditFirstname,
  onEditLastname,
  onEditAge,
  onChangeCountry,
  onChangeCurrency,
  onChangeAvatar,
}: ProfileCardProps) => {
  return (
    <div className={classNames(cn['ProfileCard'], {}, [className])}>
      <Avatar
        size={100}
        src={profile.avatar}
      />
      <Input
        label='username'
        value={profile.username}
        onChange={onEditUsername}
        readOnly={readonly}
      />
      <Input
        label='firstname'
        value={profile.firstname}
        onChange={onEditFirstname}
        readOnly={readonly}
      />
      <Input
        label='lastname'
        value={profile.lastname}
        onChange={onEditLastname}
        readOnly={readonly}
      />
      <Input
        label='age'
        value={`${profile.age}`}
        onChange={onEditAge}
        readOnly={readonly}
      />
      <CountrySelect
        value={profile.country}
        readOnly={readonly}
        onChange={onChangeCountry}
      />
      <CurrencySelect
        value={profile.currency}
        readOnly={readonly}
        onChange={onChangeCurrency}
      />
      <Input
        label='avatar url'
        value={profile.avatar}
        onChange={onChangeAvatar}
        readOnly={readonly}
      />
    </div>
  );
};
