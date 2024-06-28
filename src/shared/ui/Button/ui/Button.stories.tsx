import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Button, ButtonTheme } from './Button';
import '@/app/styles/index.css';

const meta = {
    title: 'shared/Button',
    component: Button,
    parameters: {
        layout: 'centered',
    },
    args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        children: 'Primary Button',
        theme: ButtonTheme.PRIMARY,
    },
};

export const Clear: Story = {
    args: {
        children: 'Clear Button',
    },
};
