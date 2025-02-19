import { useState } from "react";

export const useFilter = (
  isHindiSelectedInitial: boolean,
) => {
  const [isHindiSelected, setIsHindiSelected] = useState(isHindiSelectedInitial);

  const onLanguageCheckChanged = (checked: boolean) => {
    setIsHindiSelected(checked);
  };

  return {
    isHindiSelected,
    onLanguageCheckChanged,
  };
};
