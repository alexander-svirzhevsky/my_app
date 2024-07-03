import type { Meta, StoryObj } from '@storybook/react';
import { ErrorPage as ErrorPageComponent } from './ErrorPage';
import '@/app/styles/index.css';

const meta = {
    title: 'pages/ErrorPage',
    component: ErrorPageComponent,
} satisfies Meta<typeof ErrorPageComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ErrorPage: Story = {
    args: {},
};
