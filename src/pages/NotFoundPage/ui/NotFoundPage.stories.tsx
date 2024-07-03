import type { Meta, StoryObj } from '@storybook/react';
import { NotFoundPage as NotFoundPageComponent } from './NotFoundPage';
import '@/app/styles/index.css';

const meta = {
    title: 'pages/NotFoundPage',
    component: NotFoundPageComponent,
} satisfies Meta<typeof NotFoundPageComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const NotFoundPage: Story = {
    args: {},
};
