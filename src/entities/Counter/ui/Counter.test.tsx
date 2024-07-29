import { fireEvent, render, screen } from '@testing-library/react';
import { SideBar } from '@/widgets/SideBar';
import { componentRender } from '@/shared/lib/tests/componentRender/componentRender';
import { Counter } from './Counter';
import { userEvent } from '@storybook/test';

describe('Counter', () => {
    test('render', () => {
        componentRender(<Counter />, {
            initialState: {
                counter: {
                    value: 0,
                },
            },
        });

        expect(screen.getByTestId('value-title')).toHaveTextContent('0');
    });
    test('increment', () => {
        componentRender(<Counter />, {
            initialState: {
                counter: {
                    value: 0,
                },
            },
        });
        fireEvent.click(screen.getByRole('button', { name: /increment/ }));
        expect(screen.getByTestId('value-title')).toHaveTextContent('1');
    });
    test('decrement', () => {
        componentRender(<Counter />, {
            initialState: {
                counter: {
                    value: 0,
                },
            },
        });
        fireEvent.click(screen.getByRole('button', { name: /decrement/ }));
        expect(screen.getByTestId('value-title')).toHaveTextContent('-1');
    });
});
