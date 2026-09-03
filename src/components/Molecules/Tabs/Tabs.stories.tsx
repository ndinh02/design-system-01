import type { Meta, StoryObj } from '@storybook/react-vite';

import { Tabs } from './Tabs';

const meta: Meta<typeof Tabs> = {
  title: 'Molecules/Tabs',
  component: Tabs,
};

export default meta;

export const ArtifactHistory: StoryObj<typeof Tabs> = {
  args: {
    label: 'Artifact versions',
    items: [
      { key: 'v3', label: 'rev 3 (current)', content: <p>Persona approved after evidence check.</p> },
      { key: 'v2', label: 'rev 2', content: <p>Added goals after second transcript.</p> },
      { key: 'v1', label: 'rev 1', content: <p>First draft from interview P1.</p> },
    ],
  },
};

export const WithDisabled: StoryObj<typeof Tabs> = {
  args: {
    label: 'Demo tabs',
    items: [
      { key: 'a', label: 'Insights', content: <p>Three themes found.</p> },
      { key: 'b', label: 'Locked', disabled: true, content: <p>Hidden.</p> },
      { key: 'c', label: 'Journey', content: <p>Five stages mapped.</p> },
    ],
  },
};
