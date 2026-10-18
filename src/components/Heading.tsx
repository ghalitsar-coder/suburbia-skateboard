import clsx from 'clsx';

type HeadingProps = {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  size?: 'xl' | 'lg' | 'md' | 'sm' | 'xs';
  children: React.ReactNode;
  className?: string;
};

export function Heading({ as: Comp = 'h1', className, children, size = 'lg' }: HeadingProps) {
  return (
    <Comp
      className={clsx(
        'font-sans uppercase',
        size === 'xl' && 'text-fluid-xl',
        size === 'lg' && 'text-fluid-lg',
        size === 'md' && 'text-fluid-md',
        size === 'sm' && 'text-fluid-sm',
        size === 'xs' && 'text-fluid-xs',
        className,
      )}
    >
      {children}
    </Comp>
  );
}
