import { cn } from "@/lib/utils";

const PageTitle: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div className={cn("inline-block", className)} {...props}>
      <h1 className="font-display text-3xl md:text-5xl lg:text-6xl font-light leading-[0.95] tracking-tightest text-ink">
        {children}
      </h1>
      <div className="h-[3px] bg-accent w-16 mt-4" />
    </div>
  );
};

export default PageTitle;
