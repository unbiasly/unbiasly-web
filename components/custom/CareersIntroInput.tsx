import React from 'react'

interface CareersIntroInputProps {
    id: string;
    label: string;
    type: string;
}

const CareersIntroInput: React.FC<CareersIntroInputProps> = ({ id, label, type }) => {
  return (
    <div>
        <label htmlFor={id} className="block text-lg ">{label}</label>
        <input
            id={id}
            type={type}
            className="w-full bg-transparent border-b-2 border-black outline-none"
        />
    </div>
  )
}

export default CareersIntroInput