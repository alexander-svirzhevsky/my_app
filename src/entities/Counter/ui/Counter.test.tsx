import { fireEvent, screen } from '@testing-library/react';
import { componentRender } from '@/shared/lib/tests/componentRender/componentRender';
import { Counter } from './Counter';
import { StateSchema } from '@/app/providers/StoreProvider';

describe('Counter', () => {
  const state: DeepPartial<StateSchema> = {
    counter: { value: 0 },
  };
  test('render', () => {
    componentRender(<Counter />, {
      initialState: state as StateSchema,
    });

    expect(screen.getByTestId('value-title')).toHaveTextContent('0');
  });
  test('increment', () => {
    componentRender(<Counter />, {
      initialState: state as StateSchema,
    });
    fireEvent.click(screen.getByRole('button', { name: /increment/ }));
    expect(screen.getByTestId('value-title')).toHaveTextContent('1');
  });
  test('decrement', () => {
    componentRender(<Counter />, {
      initialState: state as StateSchema,
    });
    fireEvent.click(screen.getByRole('button', { name: /decrement/ }));
    fireEvent.click(screen.getByRole('button', { name: /decrement/ }));
    expect(screen.getByTestId('value-title')).toHaveTextContent('-1');
  });
});
