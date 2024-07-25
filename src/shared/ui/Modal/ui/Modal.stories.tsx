import type { Meta, StoryObj } from '@storybook/react';
import { Modal as ModalComponent } from './Modal';
import '@/app/styles/index.css';

const meta = {
    title: 'shared/Modal',
    component: ModalComponent,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof ModalComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Modal: Story = {
    args: {
        isOpened: true,
        onClose: () => {},
        children:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel amet soluta quo harum quasi dolores architecto provident illum? In dolores corporis maxime fugiat assumenda nostrum dolor labore velit alias tempora?',
    },
};
