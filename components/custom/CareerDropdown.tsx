"use client"

import { useState, useEffect, useRef } from "react"
import { Check, ChevronDown, Search } from "lucide-react"

interface Option {
  value: string
  label: string
}

interface CareerDropdownProps {
  options: Option[]
  placeholder: string
  onChange: (value: string) => void
  value?: string
}

export function CareerDropdown({ options, placeholder, onChange, value }: CareerDropdownProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")
  const dropdownRef = useRef<HTMLDivElement>(null)

  const safeOptions = options?.filter(option => option && option.label) || []
  const filteredOptions = safeOptions.filter((option) => 
    option.label.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="relative" ref={dropdownRef}>
      <div
        className="flex items-center justify-between w-full p-3 text-left bg-white bg-opacity-40 border border-gray-300 rounded-xl cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className={`${value ? "text-black" : "text-zinc-700"}`}>
          {value ? options.find((option) => option.value === value)?.label : placeholder}
        </span>
        <ChevronDown className={`w-5 h-5 transition-transform ${isOpen ? "transform rotate-180" : ""}`} />
      </div>
      {isOpen && (
        <div className="absolute bottom-full left-0 w-full mb-1 bg-white rounded-xl shadow-lg z-50">
          <div className="p-2">
            <div className="flex items-center px-3 py-2 bg-gray-100 rounded-md">
              <Search className="w-4 h-4 text-gray-400" />
              <input
                type="text"
                className="w-full ml-2 text-sm bg-transparent focus:outline-none"
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
          <ul className="py-2 max-h-60 overflow-auto">
            {filteredOptions.map((option) => (
              <li
                key={option.value}
                className="flex items-center px-4 py-2 cursor-pointer hover:bg-gray-100"
                onClick={() => {
                  onChange(option.value)
                  setIsOpen(false)
                  setSearchTerm("")
                }}
              >
                <span className="flex-grow">{option.label}</span>
                {value === option.value && <Check className="w-4 h-4 text-green-500" />}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

