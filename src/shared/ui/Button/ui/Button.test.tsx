import { render, screen } from '@testing-library/react';
import { Button, ButtonTheme } from '@/shared/ui/Button';

describe('button', () => {
    test('render', () => {
        render(<Button>Test</Button>);
        expect(screen.getByText('Test')).toBeInTheDocument();
    });
    test('render primary button', () => {
        render(<Button theme={ButtonTheme.PRIMARY}>Test</Button>);
        expect(screen.getByText('Test')).toHaveClass('primary');
    });
});
