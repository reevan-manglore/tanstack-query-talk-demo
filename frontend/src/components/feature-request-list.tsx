import { useAutoAnimate } from '@formkit/auto-animate/react';

import { useQuery } from '@tanstack/react-query';
import { cn } from '~/lib/utils';
import FeatureRequestCard, {
  FeatureRequestSkeleton,
} from '~/components/feature-request-card';

import { getFeatures } from '~/services/api-service';
import useGetSearchParam from '~/hooks/use-get-search-param';

function FeatureRequestList() {
  const [parentref] = useAutoAnimate({ easing: 'ease-out' });

  const search = useGetSearchParam();
  const {
    data: featureRequests,
    isLoading,
    error,
  } = useQuery({
    queryFn: () => getFeatures(search),
    queryKey: ['feature-requests', 'search', search],
    networkMode: 'always',
  });

  if (isLoading) {
    return (
      <div
        className={cn(
          'grid grid-cols-1 mt-4 space-y-4 max-h-full overflow-y-auto'
        )}
      >
        {Array.from({ length: 5 }).map((_, index) => (
          <FeatureRequestSkeleton key={index} />
        ))}
      </div>
    );
  }

  if (error) {
    return <FeatureRequestError error={error.message} />;
  }

  return (
    <>
      <DebugBanner
        search={search}
        debugInfo={featureRequests?.data?.requestIdentifier ?? null}
      />
      <div
        ref={parentref}
        className={cn(
          'grid grid-cols-1 mt-4 space-y-4 max-h-full overflow-y-auto'
        )}
      >
        {featureRequests?.data?.features.map((request) => (
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
