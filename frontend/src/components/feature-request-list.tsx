import type React from 'react';
import { cn } from '~/lib/utils';
import FeatureRequestCard from '~/components/feature-request-card';

const featureRequests = [
  {
    id: 1,
    title: 'Add dark mode',
    liked: false,
    createdAt: new Date().toISOString(),
  },
  {
    id: 2,
    title: 'Improve search speed',
    liked: false,
    createdAt: new Date().toISOString(),
  },
  {
    id: 3,
    title: 'Better mobile support',
    liked: false,
    createdAt: new Date().toISOString(),
  },
  {
    id: 4,
    title: 'Add keyboard shortcuts',
    liked: false,
    createdAt: new Date().toISOString(),
  },
  {
    id: 5,
    title: 'Improve accessibility',
    liked: false,
    createdAt: new Date().toISOString(),
  },
  {
    id: 6,
    title: 'Add custom themes',
    liked: false,
    createdAt: new Date().toISOString(),
  },
  {
    id: 7,
    title: 'Integrate with third-party APIs',
    liked: false,
    createdAt: new Date().toISOString(),
  },
  {
    id: 8,
    title: 'Add user profiles',
    liked: false,
    createdAt: new Date().toISOString(),
  },
];
function FeatureRequestList() {
  return (
    <div
      className={cn(
        'grid grid-cols-1 mt-4 space-y-4 max-h-full overflow-y-auto'
      )}
    >
      {featureRequests.map((request) => (
        <FeatureRequestCard key={request.id} request={request} />
      ))}
    </div>
  );
}

export default FeatureRequestList;
