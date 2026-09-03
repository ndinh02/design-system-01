import type { Meta, StoryObj } from '@storybook/react-vite';

import { Badge } from './Badge';

const meta: Meta<typeof Badge> = {
  title: 'Atoms/Badge',
  component: Badge,
};

export default meta;

export const Neutral: StoryObj<typeof Badge> = {
  args: { children: 'draft' },
};

export const Accent: StoryObj<typeof Badge> = {
  args: { tone: 'accent', children: 'persona' },
};

export const Success: StoryObj<typeof Badge> = {
  args: { tone: 'success', children: 'approved' },
};

export const Warning: StoryObj<typeof Badge> = {
  args: { tone: 'warning', children: 'in review' },
};

export const Danger: StoryObj<typeof Badge> = {
  args: { tone: 'danger', children: 'superseded' },
};

export const AllTones: StoryObj<typeof Badge> = {
  render: () => (
    <div style={{ display: 'flex', gap: 8 }}>
      <Badge>neutral</Badge>
      <Badge tone="accent">accent</Badge>
      <Badge tone="success">success</Badge>
      <Badge tone="warning">warning</Badge>
      <Badge tone="danger">danger</Badge>
    </div>
  ),
};
