import type { Meta, StoryObj } from '@storybook/react';
import { ToggleThemeButton as ToggleThemeButtonComponent } from './ToggleThemeButton';
import '@/app/styles/index.css';

const meta = {
    title: 'widgets/ToggleThemeButton',
    component: ToggleThemeButtonComponent,
} satisfies Meta<typeof ToggleThemeButtonComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ToggleThemeButton: Story = {
    args: {},
};
