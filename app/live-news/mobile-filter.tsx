import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { DateFilter, dateFiltersData, useFilter } from "./hooks";
import { useState } from "react";
import Image from "next/image";
import FilterIcon from "@/public/icons/filter.png";

type MobileFilterProps = {
  isHindiSelectedInitial: boolean;
  selectedMonthInitial: DateFilter;
  onApplyFilter: (isHindiSelected: boolean, selectedMonth: DateFilter) => void;
};

const MobileFilter: React.FC<MobileFilterProps> = ({
  isHindiSelectedInitial,
  selectedMonthInitial,
  onApplyFilter,
}) => {
  const {
    isHindiSelected,
    selectedMonth,
    onLanguageCheckChanged,
    onChangeSelectedMonth,
  } = useFilter(false, dateFiltersData[0]);
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenFilter = () => {
    onLanguageCheckChanged(isHindiSelectedInitial);
    onChangeSelectedMonth(selectedMonthInitial);
    setIsOpen(true);
  };

  const handleApplyFilter = () => {
    onApplyFilter(isHindiSelected, selectedMonth);
    setIsOpen(false);
  };

  const handleCloseFilter = () => {
    setIsOpen(false);
  };

  return (
    <Drawer open={isOpen}>
      <DrawerTrigger onClick={handleOpenFilter}>
        <Image
          src={FilterIcon}
          alt="Copy blog link"
          className="w-6 h-6 cursor-pointer"
        />
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <div className="flex justify-between items-center">
            <DrawerTitle className="text-left">Filter</DrawerTitle>
            <DrawerClose>
              <Image
                src="/cross.svg"
                alt="Close filter"
                onClick={handleCloseFilter}
                width={20}
                height={20}
                color="gray-14"
              />
            </DrawerClose>
          </div>
          <DrawerDescription>
            <div className="text-xs leading-consistent font-bold text-gray-29 flex gap-x-3 pt-5 items-center">
              <div>English</div>
              <Switch
                checked={isHindiSelected}
                onCheckedChange={onLanguageCheckChanged}
                className=""
              />
              <div>Hindi</div>
            </div>
          </DrawerDescription>
        </DrawerHeader>
        <DrawerFooter>
          <DrawerClose>
            <Button
              className="bg-gray-29 rounded-[20px] w-[232px] text-xs font-bold"
              onClick={handleApplyFilter}
            >
              Apply Changes
            </Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default MobileFilter;
