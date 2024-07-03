import type { Meta, StoryObj } from '@storybook/react';
import { AppLink as AppLinkComponent } from './AppLink';
import '@/app/styles/index.css';

const meta = {
    title: 'shared/AppLink',
    component: AppLinkComponent,
    args: {
        to: '/',
        children: 'App link',
    },
} satisfies Meta<typeof AppLinkComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AppLink: Story = {
    args: {},
};
