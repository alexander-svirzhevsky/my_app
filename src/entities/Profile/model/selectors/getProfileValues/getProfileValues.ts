import { StateSchema } from '@/app/providers/StoreProvider';

export const getProfileValues = (state: StateSchema) => state.profile?.data;
