import { StateSchema } from '@/app/providers/StoreProvider';
import { getAuthPassword } from './getAuthPassword';

describe('getAuthPassword', () => {
  test('return correct value', () => {
    const state: DeepPartial<StateSchema> = {
      auth: {
        password: '123',
      },
    };

    expect(getAuthPassword(state as StateSchema)).toEqual('123');
  });
});
