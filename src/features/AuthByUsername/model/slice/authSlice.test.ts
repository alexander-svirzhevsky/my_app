import { DeepPartial } from '@/shared/lib/ts';
import { AuthSchema } from '../types/authSchema';
import { authActions, authReducer } from './authSlice';

describe('authSlice.test', () => {
  test('setName', () => {
    const state: DeepPartial<AuthSchema> = {
      username: '123',
    };

    expect(authReducer(state as AuthSchema, authActions.setName('111'))).toEqual({
      username: '111',
    });
  });
  test('setPassword', () => {
    const state: DeepPartial<AuthSchema> = {
      password: '123',
    };

    expect(authReducer(state as AuthSchema, authActions.setPassword('111'))).toEqual({
      password: '111',
    });
  });
});
