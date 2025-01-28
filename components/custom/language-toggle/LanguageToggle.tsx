import React from 'react'
import './LanguageToggle.css'
import { APP_CONSTANTS } from '@/lib/constants/constants'

type LanguageToggleProps = {
    checked: boolean;
    onCheckedChange: (checked: boolean) => void;
};

const LanguageToggle: React.FC<LanguageToggleProps> = ({ checked, onCheckedChange }) => {
    return (
        <label className="switch" aria-label="Toggle Filter">
            <input 
                type="checkbox" 
                checked={checked} 
                onChange={(e) => onCheckedChange(e.target.checked)} 
            />
            <span>{APP_CONSTANTS.ENGLISH}</span>
            <span>{APP_CONSTANTS.HINDI}</span>
        </label>
    )
}

export default LanguageToggle