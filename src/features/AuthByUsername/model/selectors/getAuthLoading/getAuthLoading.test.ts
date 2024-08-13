import { StateSchema } from '@/app/providers/StoreProvider';
import { DeepPartial } from '@/shared/lib/ts';
import { getAuthLoading } from './getAuthLoading';

describe('getAuthLoading', () => {
  test('return correct value', () => {
    const state: DeepPartial<StateSchema> = {
      auth: {
        isLoading: false,
      },
    };

    expect(getAuthLoading(state as StateSchema)).toEqual(false);
  });
});
