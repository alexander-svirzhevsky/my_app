import type { Meta, StoryObj } from '@storybook/react';
import { Loader as LoaderComponent } from './Loader';
import '@/app/styles/index.css';

const meta = {
    title: 'shared/Loader',
    component: LoaderComponent,
} satisfies Meta<typeof LoaderComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Loader: Story = {
    args: {},
};
