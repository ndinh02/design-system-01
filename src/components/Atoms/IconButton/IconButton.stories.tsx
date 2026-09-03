import type { Meta, StoryObj } from '@storybook/react-vite';

import { IconButton } from './IconButton';

const meta: Meta<typeof IconButton> = {
  title: 'Atoms/IconButton',
  component: IconButton,
};

export default meta;

export const Copy: StoryObj<typeof IconButton> = {
  args: { label: 'Copy artifact as JSON', children: '⧉' },
};

export const Close: StoryObj<typeof IconButton> = {
  args: { label: 'Close panel', variant: 'secondary', children: '✕' },
};

export const Disabled: StoryObj<typeof IconButton> = {
  args: { label: 'Undo', disabled: true, children: '↺' },
};
