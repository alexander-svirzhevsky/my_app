import { fireEvent, render, screen } from '@testing-library/react';
import { SideBar } from '@/widgets/SideBar';
import { renderWithTranslation } from '@/shared/lib/tests/renderWithTranslation/renderWithTranslation';

describe('sidebar', () => {
    test('render', () => {
        renderWithTranslation(<SideBar />);

        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });

    test('test toggle', () => {
        renderWithTranslation(<SideBar />);

        const sidebarToggle = screen.getByTestId('sidebar-toggle');
        fireEvent.click(sidebarToggle);

        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
    });
});
