import { cn } from '@/shared/lib';

type PageHeadingProps = {
  className?: string;
  highlight: string;
  caption: string;
};

export const PageHeading = (props: PageHeadingProps) => {
  const { className = '', highlight, caption } = props;

  return (
    <h1
      className={cn('text-shadow-promo-title text-center font-chibola text-5xl/tight', className)}
    >
      <span className="text-[4rem] text-secondary">{highlight}</span>
      <br />
      <span className="text-foreground-secondary">{caption}</span>
    </h1>
  );
};
