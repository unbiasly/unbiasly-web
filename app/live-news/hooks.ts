import { useState } from "react";

export type DateFilter = {
  label: string;
  value: string;
};

export const dateFiltersData: Array<DateFilter> = [
  {
    label: "July 2024",
    value: "07/2024",
  },
  {
    label: "June 2024",
    value: "06/2024",
  },
];

export const useFilter = (
  isHindiSelectedInitial: boolean,
  selectedMonthInitial: DateFilter
) => {
  const [isHindiSelected, setIsHindiSelected] = useState(
    isHindiSelectedInitial
  );
  const [selectedMonth, setSelectedMonth] = useState(selectedMonthInitial);

  const onLanguageCheckChanged = (checked: boolean) => {
    setIsHindiSelected(checked);
  };

  const onChangeSelectedMonth = (month: DateFilter) => {
    setSelectedMonth(month);
  };

  return {
    isHindiSelected,
    selectedMonth,
    onLanguageCheckChanged,
    onChangeSelectedMonth,
  };
};
