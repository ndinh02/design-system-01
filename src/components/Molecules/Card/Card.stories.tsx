import type { Meta, StoryObj } from '@storybook/react-vite';

import { Badge } from '../../Atoms/Badge/Badge';
import { Button } from '../../Atoms/Button/Button';
import { Card } from './Card';

const meta: Meta<typeof Card> = {
  title: 'Molecules/Card',
  component: Card,
};

export default meta;

export const Basic: StoryObj<typeof Card> = {
  args: {
    title: 'Discovery session',
    children: <p>Two transcripts analyzed. Three themes and one persona drafted.</p>,
  },
};

export const WithMedia: StoryObj<typeof Card> = {
  args: {
    title: 'Coffee shop ordering',
    media: (
      <img
        src="https://placehold.co/600x400/5e90db/ffffff?text=Coffee"
        alt="Latte on a café table"
      />
    ),
    children: <p>Journey map drafted from the BrewLine interviews.</p>,
  },
};

export const WithEyebrowMetaFooter: StoryObj<typeof Card> = {
  args: {
    eyebrow: 'Persona',
    title: 'Maya, the time-pressed regular',
    meta: (
      <>
        <Badge tone="success">approved</Badge>
        <span>rev 2 · from 2 transcripts</span>
      </>
    ),
    children: (
      <p>
        Orders 4–5×/week from independent shops. Time is the whole trade: wrong order twice
        and the deal is off.
      </p>
    ),
    footer: (
      <>
        <Button size="small" variant="primary">
          Approve
        </Button>
        <Button size="small">Regenerate</Button>
      </>
    ),
  },
};

export const LongContent: StoryObj<typeof Card> = {
  args: {
    eyebrow: 'Insight cluster',
    title: 'Loyalty spread across too many apps',
    children: (
      <p>
        Participants collect stamps in three different apps and redeem none of them because
        they forget the apps exist. One app containing all their shops would win instantly —
        the aggregator pattern. Screenshots of usual orders act as a low-tech workaround when
        an app is slow; a recurring 6:35 alarm labeled "order coffee" shows how much of the
        ritual has moved onto the person instead of the product.
      </p>
    ),
  },
};
