import type { Meta, StoryObj } from '@storybook/react-vite';

import { Timeline } from './Timeline';

const meta: Meta<typeof Timeline> = {
  title: 'Molecules/Timeline',
  component: Timeline,
};

export default meta;

export const AgentRun: StoryObj<typeof Timeline> = {
  args: {
    label: 'Agent activity',
    items: [
      { id: '1', title: 'Orchestrator started', detail: 'claude-sonnet-4-6', status: 'done' },
      { id: '2', title: 'read_transcript', description: 'coffee-shop-app-interview.md', detail: '1.2s', status: 'done' },
      { id: '3', title: 'InterviewAnalyst', description: 'Clustering 14 quotes into 3 themes…', detail: '8.4s', status: 'active' },
      { id: '4', title: 'PersonaBuilder', detail: 'pending', status: 'pending' },
    ],
  },
};

export const CompletedRun: StoryObj<typeof Timeline> = {
  args: {
    label: 'Agent activity',
    items: [
      { id: '1', title: 'Orchestrator started', detail: '12.1s total', status: 'done' },
      { id: '2', title: 'Artifact submitted', description: 'Persona · rev 2', status: 'done' },
      { id: '3', title: 'Run finished', detail: '0.6k tok out', status: 'done' },
    ],
  },
};
