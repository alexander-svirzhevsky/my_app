import { StateSchema } from '@/app/providers/StoreProvider';

export const getUserMountedValue = (state: StateSchema) => state.user._mounted;
