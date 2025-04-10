import { useAutoAnimate } from '@formkit/auto-animate/react';

import { cn } from '~/lib/utils';
import FeatureRequestCard, {
  FeatureRequestSkeleton,
} from '~/components/feature-request-card';

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
  const [parentref] = useAutoAnimate({ easing: 'ease-out' });

  return (
    <div
      ref={parentref}
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

export function FeatureRequestLoading() {
  return (
    <div className="max-h-full overflow-y-auto">
      {Array.from({ length: 5 }).map((_, index) => (
        <FeatureRequestSkeleton key={index} />
      ))}
    </div>
  );
}

export function FeatureRequestError({ error }: { error: string }) {
  return (
    <div
      className={cn(
        'grid grid-cols-1 mt-4 space-y-4 max-h-full overflow-y-auto'
      )}
    >
      <p className="text-red-500 text-center">{error}</p>
    </div>
  );
}

export function DebugBanner({
  search,
  debugInfo,
}: {
  search: string;
  debugInfo: string | null;
}) {
  return (
    <>
      {debugInfo && (
        <p className="text-xs text-purple-600 mb-2 p-2 bg-purple-100 rounded-md">
          Last response came from: {debugInfo}
        </p>
      )}
      <p className="text-sm text-blue-600 mb-2">
        Showing results for: "{search}"
      </p>
    </>
  );
}
