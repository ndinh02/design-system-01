import React from 'react';

import { Button } from './Button';
import { Card } from './Card';
import { Header } from './Header';
import './homepage.css';

type User = {
  name: string;
};

export interface HomePageProps {
  user?: User;
  onLogin?: () => void;
  onLogout?: () => void;
  onCreateAccount?: () => void;
}

/** Composed layout showing Header, Card and Button working together */
export const HomePage = ({ user, onLogin, onLogout, onCreateAccount }: HomePageProps) => (
  <div className="storybook-homepage">
    <Header user={user} onLogin={onLogin} onLogout={onLogout} onCreateAccount={onCreateAccount} />

    <main className="storybook-homepage__content">
      <div className="storybook-homepage__grid">
        <Card title="Starter plan">
          <p>Everything you need to get a project off the ground.</p>
          <Button label="Choose plan" size="small" />
        </Card>

        <Card title="Pro plan">
          <p>More power for growing teams, with priority support.</p>
          <Button label="Choose plan" primary size="small" />
        </Card>

        <Card title="Enterprise">
          <p>Custom limits, SSO, and a dedicated account manager.</p>
          <Button label="Contact sales" size="small" />
        </Card>
      </div>
    </main>
  </div>
);
