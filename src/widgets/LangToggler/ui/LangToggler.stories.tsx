import type { Meta, StoryObj } from '@storybook/react';
import { LangToggler as LangTogglerComponent } from './LangToggler';
import '@/app/styles/index.css';

const meta = {
    title: 'widgets/LangToggler',
    component: LangTogglerComponent,
} satisfies Meta<typeof LangTogglerComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LangToggler: Story = {
    args: {},
};
