import { cn } from "@/lib/utils";

const ContentContainer: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div
      className={cn("mx-auto max-w-[1400px] px-6 lg:px-12", className)}
      {...props}
    >
      {children}
    </div>
  );
};

export default ContentContainer;
