import { cn } from "@/lib/utils";

const PageTitle: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div className={cn("inline-block", className)} {...props}>
      <div className="text-2xl leading-consistent lg:text-4xl lg:leading-consistent font-bold text-white">
        {children}
      </div>
    </div>
  );
};

export default PageTitle;
