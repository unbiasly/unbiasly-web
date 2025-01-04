import { cn } from "@/lib/utils";

const PageTitle: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div className={cn("inline-block", className)} {...props}>
      <div className="text-xl leading-consistent lg:text-2.5xl lg:leading-consistent font-bold text-black">
        {children}
      </div>
      <div className="h-1 lg:h-2 bg-[#D9D9D9] rounded-lg w-full mt-0.5 lg:mt-2" />
    </div>
  );
};

export default PageTitle;
