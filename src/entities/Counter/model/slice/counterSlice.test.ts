import { counterActions, counterReducer } from './counterSlice';

describe('counterSlice.test', () => {
    test('decremented', () => {
        const state = {
            value: 0,
        };
        expect(counterReducer(state, counterActions.decremented())).toEqual({ value: -1 });
    });
    test('incremented', () => {
        const state = {
            value: 0,
        };
        expect(counterReducer(state, counterActions.incremented())).toEqual({ value: 1 });
    });
    test('should work with empty state', () => {
        expect(counterReducer(undefined, counterActions.incremented())).toEqual({ value: 1 });
    });
});
