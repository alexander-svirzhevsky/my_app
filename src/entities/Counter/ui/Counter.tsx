import { useDispatch, useSelector } from 'react-redux';
import { counterActions } from '../model/slice/counterSlice';
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue';

type CounterProps = {};

export const Counter = ({}: CounterProps) => {
    const dispatch = useDispatch();
    const counterValue = useSelector(getCounterValue);

    const increment = () => {
        dispatch(counterActions.incremented());
    };
    const decrement = () => {
        dispatch(counterActions.decremented());
    };

    return (
        <>
            <h1 data-testid='value-title'>{counterValue}</h1>
            <button onClick={increment}>increment</button>
            <button onClick={decrement}>decrement</button>
        </>
    );
};
