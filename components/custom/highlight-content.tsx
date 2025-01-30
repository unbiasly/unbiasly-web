import { cn } from "@/lib/utils";

const HighlightContent: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div
      className={cn(
        "w-full text-center px-5 py-5 lg:py-8 text-lg sm:text-xl text-[#FFFFFF] bg-[#191919] mt-6 lg:mt-12",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default HighlightContent;