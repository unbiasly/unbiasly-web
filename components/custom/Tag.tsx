export const Tag: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ children }) => {
    return (
      <div className="inline-block rounded-[20px] bg-[#E3E3E3] text-[#666666] py-[6px] px-[16px] text-xs leading-consistent lg:text-base lg:leading-consistent">
        {children}
      </div>
    );
  };