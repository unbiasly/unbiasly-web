import { Language } from "@/service/api.interface";
import { useState } from "react";

export const useFilter = (
  selectedLanguageInitial: Language,
) => {
  const [selectedLanguage, setSelectedLanguage] = useState(selectedLanguageInitial);

//   const onLanguageCheckChanged = (checked: boolean) => {
//     setSelectedLanguage(checked);
//   };
    const changeLanguage = (language: Language) => {
    setSelectedLanguage(language);
  };

  return {
    selectedLanguage,
    // onLanguageCheckChanged,
    changeLanguage,
  };
};
