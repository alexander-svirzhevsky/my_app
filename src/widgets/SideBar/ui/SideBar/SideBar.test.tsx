import { fireEvent, render, screen } from '@testing-library/react';
import { SideBar } from '@/widgets/SideBar';
import { componentRender } from '@/shared/lib/tests/componentRender/componentRender';

describe('sidebar', () => {
    test('render', () => {
        componentRender(<SideBar />);

        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });

    test('test toggle', () => {
        componentRender(<SideBar />);

        const sidebarToggle = screen.getByTestId('sidebar-toggle');
        fireEvent.click(sidebarToggle);

        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
    });
});
