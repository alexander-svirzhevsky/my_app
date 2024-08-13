import axios from 'axios';
import { loginByUsername } from './login';
import { userActions } from '@/entities/User';
import { TestAsyncThunk } from '@/shared/lib/tests/TestAsyncThunk/TestAsyncThunk';

jest.mock('axios');

const mockedAxios = jest.mocked(axios, { shallow: false });

describe('login', () => {
  // let dispath: Dispatch;
  // let getState: () => StateSchema;

  // beforeEach(() => {
  //   dispath = jest.fn();
  //   getState = jest.fn();
  // });

  test('fulfilled status', async () => {
    const userValue = { id: '123', username: '123' };

    mockedAxios.post.mockReturnValue(Promise.resolve({ data: userValue }));

    const thunk = new TestAsyncThunk(loginByUsername);
    const result = await thunk.callThunk({ username: '123', password: '123' });
    // const action = loginByUsername({ username: '123', password: '123' });
    // const result = await action(dispath, getState, undefined);

    expect(thunk.dispath).toHaveBeenCalledWith(userActions.setAuthData(userValue));
    expect(thunk.dispath).toHaveBeenCalledTimes(3);
    expect(mockedAxios.post).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toEqual(userValue);
  });

  test('rejected status', async () => {
    mockedAxios.post.mockReturnValue(Promise.resolve({ status: 403 }));

    const thunk = new TestAsyncThunk(loginByUsername);
    const result = await thunk.callThunk({ username: '123', password: '123' });
    // const action = loginByUsername({ username: '123', password: '123' });
    // const result = await action(dispath, getState, undefined);

    expect(thunk.dispath).toHaveBeenCalledTimes(2);
    expect(mockedAxios.post).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toEqual('Wrond credentials');
  });
});
