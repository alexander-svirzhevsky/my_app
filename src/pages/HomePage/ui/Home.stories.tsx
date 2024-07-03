import type { Meta, StoryObj } from '@storybook/react';
import { Home as HomeComponent } from './Home';
import '@/app/styles/index.css';

const meta = {
    title: 'pages/Home',
    component: HomeComponent,
} satisfies Meta<typeof HomeComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Home: Story = {
    args: {},
};
