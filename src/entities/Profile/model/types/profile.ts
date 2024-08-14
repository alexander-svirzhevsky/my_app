import { Country, Currency } from '@/shared/constant/common';

export type ProfileType = {
  firstname: string;
  lastname: string;
  age: number;
  currency: Currency;
  country: Country;
  city: string;
  username: string;
  avatar: string;
};

export type ProfileSchema = {
  data?: ProfileType;
  isLoading: boolean;
  error?: string;
  readonly: boolean;
};
