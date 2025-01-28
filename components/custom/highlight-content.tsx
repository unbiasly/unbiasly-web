import { cn } from "@/lib/utils";

const HighlightContent: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div
      className={cn(
        "md:px-41 px-6 py-5 lg:py-8 w-full text-xl sm:text-lg text-[#FFFFFF] bg-[#191919] mt-6 lg:mt-12",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default HighlightContent;
