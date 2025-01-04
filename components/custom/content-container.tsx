import { cn } from "@/lib/utils";

const ContentContainer: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div className={cn("md:px-41 px-6", className)} {...props}>
      {children}
    </div>
  );
};

export default ContentContainer;
