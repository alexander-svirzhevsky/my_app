import { StateSchema } from '@/app/providers/StoreProvider';
import { getAuthError } from './getAuthError';

describe('getAuthError', () => {
  test('returns correct value', () => {
    const state: DeepPartial<StateSchema> = {
      auth: {
        error: 'some error',
      },
    };

    expect(getAuthError(state as StateSchema)).toEqual('some error');
  });
});
