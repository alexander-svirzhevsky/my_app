import { StateSchema } from '@/app/providers/StoreProvider';
import { getAuthUsername } from './getAuthUsername';

describe('getAuthUsername', () => {
  test('return correct value', () => {
    const state: DeepPartial<StateSchema> = {
      auth: {
        username: 'test',
      },
    };

    expect(getAuthUsername(state as StateSchema)).toEqual('test');
  });
});
