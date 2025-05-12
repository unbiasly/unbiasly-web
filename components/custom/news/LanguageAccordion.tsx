"use client"
import { Check } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { cn } from "@/lib/utils"
import { Language } from "@/service/api.interface"
import { useEffect, useRef, useState } from "react"

type LanguageAccordionProps = {
  selectedLanguage: Language
  onChange: (language: Language) => void
}

export const LanguageAccordion = ({ selectedLanguage, onChange }: LanguageAccordionProps) => {
  const languages = [
    { id: Language.ENGLISH, label: "English" },
    { id: Language.HINDI, label: "हिन्दी" },
    { id: Language.BENGALI, label: "বাংলা" },
  ]

  const [openItem, setOpenItem] = useState<string | null>(null); // Use null instead of undefined
  const accordionRef = useRef<HTMLDivElement>(null);

  // Handle document clicks for outside detection
  useEffect(() => {
    // Close the accordion when clicking outside of it
    const handleClickOutside = (e: MouseEvent) => {
      if (accordionRef.current && !accordionRef.current.contains(e.target as Node)) {
        setOpenItem(null); // Close accordion if click is outside
      }
    };
    
    // Add click event listener
    document.addEventListener("mousedown", handleClickOutside);
    
    return () => {
      document.removeEventListener("mousedown", handleClickOutside); // Cleanup
    };
  }, []);

  return (
    <div className="max-w-xs" ref={accordionRef}>
      <Accordion 
        type="single" 
        collapsible 
        className="w-full max-w-xs"
        value={openItem as string} // Cast to string
        onValueChange={setOpenItem}
      >
        <AccordionItem value="language-selector" className="border-none">
          <AccordionTrigger className="py-3 px-4 bg-[#1e1e1e] text-white rounded-md hover:no-underline">
            <span className="font-medium">
              {languages.find(lang => lang.id === selectedLanguage)?.label || "Select Language"}
            </span>
          </AccordionTrigger>
          <AccordionContent className="mt-2 bg-[#1e1e1e] rounded-md shadow-md">
            <ul className="py-1">
              {languages.map((language) => (
                <li
                  key={language.id}
                  className={cn(
                    "flex items-center justify-between px-4 py-2 cursor-pointer hover:bg-zinc-800 text-white",
                    selectedLanguage === language.id && "bg-zinc-600"
                  )}
                  onClick={() => {
                    onChange(language.id);
                    setOpenItem(null); // Close accordion when a language is selected
                  }}
                >
                  <span>{language.label}</span>
                  {selectedLanguage === language.id && (
                    <Check className="h-4 w-4 text-gray-100" />
                  )}
                </li>
              ))}
            </ul>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}
