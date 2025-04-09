import type React from 'react';
import { cn } from '~/lib/utils';

function FeatureRequestList(
  props: React.PropsWithChildren<{ className?: string }>
) {
  const { children, className } = props;
  return (
    <div
      className={cn(
        'grid grid-cols-1 mt-4 space-y-4 max-h-full overflow-y-auto',
        className
      )}
    >
      {children}
    </div>
  );
}

export default FeatureRequestList;
