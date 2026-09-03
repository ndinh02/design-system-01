import type { Meta, StoryObj } from '@storybook/react-vite';

import { Avatar } from './Avatar';

const meta: Meta<typeof Avatar> = {
  title: 'Atoms/Avatar',
  component: Avatar,
};

export default meta;

export const Initials: StoryObj<typeof Avatar> = {
  args: { name: 'Maya Nguyen' },
};

export const SingleName: StoryObj<typeof Avatar> = {
  args: { name: 'Dev' },
};

export const WithPhoto: StoryObj<typeof Avatar> = {
  args: {
    name: 'Maya Nguyen',
    src: 'https://placehold.co/96x96/5e90db/ffffff?text=M',
  },
};

export const Sizes: StoryObj<typeof Avatar> = {
  render: () => (
    <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
      <Avatar name="Maya Nguyen" size="small" />
      <Avatar name="Maya Nguyen" size="medium" />
      <Avatar name="Maya Nguyen" size="large" />
    </div>
  ),
};
