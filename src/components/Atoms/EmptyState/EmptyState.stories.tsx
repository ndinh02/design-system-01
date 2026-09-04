import type { Meta, StoryObj } from '@storybook/react-vite';

import { Button } from '../Button/Button';
import { EmptyState } from './EmptyState';

const meta: Meta<typeof EmptyState> = {
  title: 'Atoms/EmptyState',
  component: EmptyState,
};

export default meta;

export const NoArtifacts: StoryObj<typeof EmptyState> = {
  args: {
    icon: '◇',
    title: 'No artifacts yet',
    description: 'Ask the agent to run discovery and deliverables will appear here.',
    action: <Button variant="primary">Run discovery</Button>,
  },
};

export const TitleOnly: StoryObj<typeof EmptyState> = {
  args: { title: 'Nothing here' },
};
