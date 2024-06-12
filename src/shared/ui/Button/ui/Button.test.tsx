import { render, screen } from '@testing-library/react';
import { Button } from '@/shared/ui/Button';

describe('button', () => {
    test('render', () => {
        render(<Button>Test</Button>);

        expect(screen.getByText('Test')).toBeInTheDocument();
    });
});
