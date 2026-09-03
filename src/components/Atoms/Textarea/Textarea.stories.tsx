import type { Meta, StoryObj } from '@storybook/react-vite';

import { Textarea } from './Textarea';

const meta: Meta<typeof Textarea> = {
  title: 'Atoms/Textarea',
  component: Textarea,
};

export default meta;

export const Default: StoryObj<typeof Textarea> = {
  args: { label: 'Interview notes', placeholder: 'Paste a raw transcript…' },
};

export const WithError: StoryObj<typeof Textarea> = {
  args: { label: 'Interview notes', error: 'Transcript cannot be empty.' },
};
