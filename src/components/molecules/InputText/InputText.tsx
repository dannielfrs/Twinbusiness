'use client'

import InputTextAtom from '@/components/atoms/Input/InputText'
import styles from './styles.module.scss'
import { useState, Ref } from 'react'
import Image, { StaticImageData } from 'next/image'

interface InputTextProps {
  name: string;
  ref?: Ref<HTMLInputElement>
  type?: string;
  value?: string;
  defaultValue?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  icon?: string | StaticImageData;
  iconPosRight?: boolean;
  variant?: string;
  height?: string;
  className?: string;
  disabled?: boolean;
  readOnly?: boolean;
  required?: boolean;
  optional?: boolean;
  rules?: any
  error?: string;
  placeholder?: string;
  filter?: boolean;
  imageStyle?: object;
}

const InputText: React.FC<InputTextProps> = (props) => {
  const {
    name,
    label,
    icon,
    iconPosRight = false,
    variant = 'primary' || 'secondary',
    height = '',
    className = '',
    imageStyle = {},
    disabled = false,
    readOnly = false,
    required = false,
    optional = false,
    filter = false,
    error = false,
    defaultValue
  } = props

  const [isInvalid, setIsInvalid] = useState<any>(null)

  const inputTextRender = () => {
    return (
      <InputTextAtom
        {...props}
        onInvalid={(error) => setIsInvalid(error)}
        invalidClassName={styles.invalid}
        invalidMessageClassName={styles.invalid_message}
        className={`${readOnly ? styles.readonly : ''} ${disabled ? styles.disabled : ''}`}
        style={{ height }}
      />
    )
  }

  return (
    <div className={`${styles[variant]} ${className}`}>
      {label && (
        <div className={styles.input_labels}>
          {variant === 'white' && required && <span className={styles.requiredSpan}>* </span>}<label htmlFor={name}>{label}</label>
          {variant === 'secondary' && required && <span className={`${error || isInvalid ? styles.invalid_text : ''}`}>Obligatorio</span>}
          {variant === 'secondary' && optional && <span>Opcional</span>}
          {variant === 'white' || 'bold' && !required && <span className={styles.optionalSpan}></span>}
        </div>
      )}
      {icon ? (
        <span className={iconPosRight ? 'p-input-icon-right' : 'p-input-icon-left'}>
          {filter && <span className={styles.spanFilter}>Filtrar</span>}
          <Image className={styles.imgSearch} src={icon} alt='icon' style={imageStyle} />
          {inputTextRender()}
        </span>
      ) : (
        inputTextRender()
      )}
    </div>
  )
}

export default InputText
