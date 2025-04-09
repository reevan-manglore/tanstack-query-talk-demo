import type React from 'react';
import { cn } from '~/lib/utils';

function ColumnLayout(props: React.PropsWithChildren<{ className?: string }>) {
  const { children, className } = props;
  return (
    <div className={cn('grid gap-6 md:grid-cols-[1fr_400px] my-2 ', className)}>
      {children}
    </div>
  );
}

export default ColumnLayout;
