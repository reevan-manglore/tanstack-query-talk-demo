import { useEffect, useState } from 'react';
import { useAutoAnimate } from '@formkit/auto-animate/react';

import { cn } from '~/lib/utils';

import FeatureRequestCard, {
  FeatureRequestSkeleton,
} from '~/components/feature-request-card';
import { Feature, getFeatures } from '~/services/api-service';
import useGetSearchParam from '~/hooks/use-get-search-param';

function FeatureRequestList() {
  const [parentref] = useAutoAnimate({ easing: 'ease-out' });

  const [featureRequests, setFeatureRequests] = useState<Feature[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [debugInfo, setDebugInfo] = useState<string | null>(null);
  const search = useGetSearchParam();
  useEffect(() => {
    let isActive = true;
    setIsLoading(true);
    getFeatures(search)
      .then((data) => {
        if (!isActive) {
          return;
        }
        setFeatureRequests(data.data?.features || []);
        setDebugInfo(data.data?.requestIdentifier || null);
        setIsLoading(false);
        setError(null);
      })
      .catch((error) => {
        console.error('Error fetching feature requests:', error);
        setIsLoading(false);
        setError('Failed to load feature requests');
      });

    return () => {
      isActive = false;
    };
  }, [search]);

  if (isLoading) {
    return (
      <div className="max-h-full overflow-y-auto">
        {Array.from({ length: 5 }).map((_, index) => (
          <FeatureRequestSkeleton key={index} />
        ))}
      </div>
    );
  }
  if (error) {
    return <FeatureRequestError error={error} />;
  }

  return (
    <>
      <DebugBanner debugInfo={debugInfo} search={search} />
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
    </>
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
