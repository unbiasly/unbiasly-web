import { cn } from "@/lib/utils";

const SubTitle: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  children,
  className,
}) => {
  return (
    <div className={cn("inline-block", className)}>
      <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-light leading-tight tracking-tight text-ink">
        {children}
      </h2>
      <div className="h-[2px] bg-accent w-12 mt-3" />
    </div>
  );
};

export default SubTitle;
