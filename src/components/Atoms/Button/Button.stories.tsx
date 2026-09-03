import type { Meta, StoryObj } from '@storybook/react-vite';

import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Atoms/Button',
  component: Button,
};

export default meta;

export const Primary: StoryObj<typeof Button> = {
  args: { variant: 'primary', children: 'Primary action' },
};

export const Secondary: StoryObj<typeof Button> = {
  args: { children: 'Secondary action' },
};

export const Ghost: StoryObj<typeof Button> = {
  args: { variant: 'ghost', children: 'Ghost action' },
};

export const Loading: StoryObj<typeof Button> = {
  args: { variant: 'primary', loading: true, children: 'Saving' },
};

export const Disabled: StoryObj<typeof Button> = {
  args: { disabled: true, children: 'Unavailable' },
};

export const Sizes: StoryObj<typeof Button> = {
  render: () => (
    <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
      <Button size="small">Small</Button>
      <Button size="medium">Medium</Button>
      <Button size="large">Large</Button>
    </div>
  ),
};

export const AllVariants: StoryObj<typeof Button> = {
  render: () => (
    <div style={{ display: 'flex', gap: 12 }}>
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="ghost">Ghost</Button>
    </div>
  ),
};
