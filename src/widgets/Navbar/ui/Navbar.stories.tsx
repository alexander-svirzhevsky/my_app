import type { Meta, StoryObj } from '@storybook/react';
import { Navbar as NavbarComponent } from './Navbar';
import '@/app/styles/index.css';

const meta = {
    title: 'widgets/Navbar',
    component: NavbarComponent,
} satisfies Meta<typeof NavbarComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Navbar: Story = {
    args: {},
};
