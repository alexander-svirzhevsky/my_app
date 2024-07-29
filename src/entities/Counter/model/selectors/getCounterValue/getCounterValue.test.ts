import { getCounterValue } from './getCounterValue';

describe('getCounterValue.test', () => {
    test('should return counter value', () => {
        const state = {
            counter: { value: 0 },
        };
        expect(getCounterValue(state)).toEqual(0);
    });
});
