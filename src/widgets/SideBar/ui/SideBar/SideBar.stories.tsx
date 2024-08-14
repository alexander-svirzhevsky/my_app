import type { Meta, StoryObj } from '@storybook/react';
import { SideBar as SideBarComponent } from './SideBar';
import '@/app/styles/index.css';

const meta = {
  title: 'widgets/SideBar',
  component: SideBarComponent,
} satisfies Meta<typeof SideBarComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SideBar: Story = {
  args: {},
};
