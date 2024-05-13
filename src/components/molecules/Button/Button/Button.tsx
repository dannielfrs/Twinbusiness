"use client"

import { Button as ButtonAtom } from '@/components/atoms/Button'
import styles from './styles.module.scss'
import React from 'react'

interface ButtonProps {
  variant?: string;
  height?: string;
  width?: string;
  type?: "submit" | "reset" | "button";
  name?: string;
  icon?: any
  fontSize?: string;
  className?: string;
  borderRadius?: string;
  tooltip?: any
  tooltipOptions?: any
  disabled?: boolean;
  children?: React.ReactNode;
  onClick?: (e?: any) => void;
  style?: any;
}

const Button: React.FC<ButtonProps> = (props) => {
  const {
    variant = 'primary',
    height = '',
    width = '',
    className = '',
    disabled,
    borderRadius = '',
    children,
    fontSize,
    onClick,
    style
  } = props

  const styleCustom = {
    height, width, borderRadius, fontSize
  }

  return (
    <ButtonAtom
      {...props}
      className={`${styles.button} ${styles[variant]} ${className} ${disabled ? styles.button_disabled : ''}`}
      style={{ ...styleCustom, ...style }}
    >
      {children}
    </ButtonAtom>
  )
}

export default Button
