"use client"
import { Check } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { cn } from "@/lib/utils"
import { Language } from "@/service/api.interface"

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

  return (
    <Accordion type="single" collapsible className="w-full max-w-xs">
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
                onClick={() => onChange(language.id)}
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
  )
}
