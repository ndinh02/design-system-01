import type { Meta, StoryObj } from '@storybook/react-vite';

import { Input } from './Input';

const meta: Meta<typeof Input> = {
  title: 'Atoms/Input',
  component: Input,
};

export default meta;

export const Default: StoryObj<typeof Input> = {
  args: { label: 'Project name', placeholder: 'BrewLine discovery' },
};

export const WithHint: StoryObj<typeof Input> = {
  args: {
    label: 'Research question',
    hint: 'One sentence — what are you trying to learn?',
    placeholder: 'Why do commuters abandon ordering apps?',
  },
};

export const WithError: StoryObj<typeof Input> = {
  args: { label: 'Project name', error: 'A project name is required.' },
};

export const Disabled: StoryObj<typeof Input> = {
  args: { label: 'Project name', value: 'Locked project', disabled: true },
};
