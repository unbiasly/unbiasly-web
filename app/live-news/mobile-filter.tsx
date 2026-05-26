"use client";

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
import { Switch } from "@/components/ui/switch";
import { DateFilter, dateFiltersData, useFilter } from "./hooks";
import { useState } from "react";

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
  const { isHindiSelected, onLanguageCheckChanged, onChangeSelectedMonth } = useFilter(
    false,
    dateFiltersData[0]
  );
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenFilter = () => {
    onLanguageCheckChanged(isHindiSelectedInitial);
    onChangeSelectedMonth(selectedMonthInitial);
    setIsOpen(true);
  };

  const handleApplyFilter = () => {
    onApplyFilter(isHindiSelected, selectedMonthInitial);
    setIsOpen(false);
  };

  return (
    <Drawer open={isOpen} onOpenChange={setIsOpen}>
      <DrawerTrigger asChild>
        <button
          onClick={handleOpenFilter}
          className="inline-flex items-center gap-2 px-4 py-2.5 border border-ink/20 text-[12px] font-mono tracking-wider uppercase hover:border-accent hover:text-accent transition-colors"
        >
          <span>Filter</span>
          <span className="font-mono text-[10px]">{isHindiSelectedInitial ? "HI" : "EN"}</span>
        </button>
      </DrawerTrigger>
      <DrawerContent className="bg-paper border-t border-rule">
        <DrawerHeader className="text-left">
          <DrawerTitle className="font-display text-2xl font-medium tracking-tight">
            Filter the feed
          </DrawerTitle>
          <DrawerDescription className="text-[13px] text-ink-muted">
            Choose your language. More filters coming soon.
          </DrawerDescription>
        </DrawerHeader>
        <div className="px-6 py-4">
          <div className="flex items-center justify-between border-y border-rule py-5">
            <div className="font-mono text-[11px] tracking-[0.2em] uppercase">Language</div>
            <div className="flex items-center gap-3">
              <span className={isHindiSelected ? "text-ink-muted text-sm" : "text-ink text-sm font-medium"}>
                English
              </span>
              <Switch checked={isHindiSelected} onCheckedChange={onLanguageCheckChanged} />
              <span className={isHindiSelected ? "text-ink text-sm font-medium" : "text-ink-muted text-sm"}>
                Hindi
              </span>
            </div>
          </div>
        </div>
        <DrawerFooter className="px-6 pb-8">
          <button
            onClick={handleApplyFilter}
            className="w-full bg-ink text-paper py-3.5 text-[13px] font-mono tracking-[0.15em] uppercase hover:bg-accent transition-colors"
          >
            Apply
          </button>
          <DrawerClose asChild>
            <button className="w-full py-2 text-[12px] text-ink-muted hover:text-ink">
              Cancel
            </button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default MobileFilter;
