import clsx from 'clsx';
import type { CSSProperties, ElementType, ReactNode } from 'react';

type BoundedProps = {
  as?: ElementType;
  className?: string;
  style?: CSSProperties;
  children: ReactNode;
};

export function Bounded({ as: Comp = 'section', className, children, ...restProps }: BoundedProps) {
  return (
    <Comp
      className={clsx('px-6 py-fluid-10 [.header+&]:pt-44 [.header+&]:md:pt-32', className)}
      {...restProps}
    >
      <div className="mx-auto w-full max-w-6xl">{children}</div>
    </Comp>
  );
}
