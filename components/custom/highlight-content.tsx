import { cn } from "@/lib/utils";

const HighlightContent: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div
      className={cn(
        "border-y border-rule bg-rule-soft/50 py-12 lg:py-20",
        className
      )}
      {...props}
    >
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">{children}</div>
    </div>
  );
};

export default HighlightContent;
