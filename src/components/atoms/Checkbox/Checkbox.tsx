'use client'

import { Checkbox as CheckboxPrime } from 'primereact/checkbox'
import { ReactNode } from 'react'

interface CheckboxProps {
    inputId?: string;
    name?: string;
    value?: any;
    onChange?: () => void;
    checked?: boolean;
    children?: ReactNode;
    disabled?: boolean;
    className?: string;
    style?: any;
}

export const Checkbox: React.FC<CheckboxProps> = ({
    inputId,
    name,
    value,
    onChange,
    checked = false,
    children,
    disabled = false,
    className,
    style,
}) => {
    return (
        <CheckboxPrime
            inputId={inputId}
            name={name}
            value={value}
            onChange={onChange}
            checked={checked}
            disabled={disabled}
            className={className}
            style={style}
        >
            {children}
        </CheckboxPrime>
    )
}
