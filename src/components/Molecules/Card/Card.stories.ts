import type { Meta, StoryObj } from '@storybook/react-vite';

import heroImage from '../../../assets/hero.png';

import { Card } from './Card';

const meta = {
  title: 'Molecules/Card',
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
    title: 'Wireless Headphones',
    imageSrc: heroImage,
    imageAlt: 'Product photo of wireless headphones',
    price: '$79.00',
  },
};
