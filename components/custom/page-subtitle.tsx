import PageTitle from "@/components/custom/page-title";

const SubTitle: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  children,
}) => {
  return (
    <div className="flex justify-center lg:justify-start">
      <PageTitle>{children}</PageTitle>
    </div>
  );
};

export default SubTitle;
