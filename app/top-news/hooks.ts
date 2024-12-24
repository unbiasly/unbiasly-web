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
    categoryIdInitial: string
  ) => {
    const [isHindiSelected, setIsHindiSelected] = useState(isHindiSelectedInitial);
    const [categoryId, setCategoryId] = useState(categoryIdInitial);
  
    const onLanguageCheckChanged = (checked: boolean) => {
      setIsHindiSelected(checked);
    };
  
    const onCategoryChanged = (categoryId: string) => {
      setCategoryId(categoryId);
    };
  
    return {
      isHindiSelected,
      categoryId,
      onLanguageCheckChanged,
      onCategoryChanged,
    };
  };
