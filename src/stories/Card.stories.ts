import type { Meta, StoryObj } from '@storybook/react-vite';

import { Card } from './Card';

const meta = {
  title: 'Example/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Card title',
    children: 'Hover to see the highlight trace the card corners while the cursor stays inside.',
  },
};

export const CustomRadius: Story = {
  args: {
    title: 'Sharper corners',
    radius: 6,
    children: 'A smaller corner radius on the rounded corners.',
  },
};
