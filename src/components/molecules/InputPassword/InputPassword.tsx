import { useState } from 'react'
import styles from './styles.module.scss'
import InputTextAtom from '@/components/atoms/Input/InputText'
import Image from 'next/image'
import Eye from '@/../public/images/icons/Eye.svg'
import Eyeclose from '@/../public/images/icons/Eyeclose.svg'

interface InputPasswordProps {
  name: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  label?: string;
  icon?: boolean;
  feedback?: boolean;
  rules?: Record<string, unknown>;
  readOnly?: boolean;
  disabled?: boolean;
  className?: string;
  visible?: boolean;
  required?: boolean;
  optional?: boolean;
  error?: boolean;
  defaultValue?: string;
}

export const InputPassword: React.FC<InputPasswordProps> = ({
  name,
  value,
  onChange = () => { },
  placeholder = '',
  label,
  icon = true,
  feedback,
  rules,
  readOnly = false,
  disabled = false,
  defaultValue = '',
  className = '',
  visible,
  required = false,
  optional = false,
  error,
}) => {
  const [visibleText, setVisibleText] = useState(true)

  return (
    <div className={`${styles.input} ${className}`}>
      {label && (
        <div className={styles.titles_inputs}>
          <label htmlFor={name}>{label}</label>
        </div>
      )}
      {icon && visible && visibleText ? (
        <div
          className={`${error ? styles.icon_right_invalid : styles.icon_right}`}
          onClick={() => setVisibleText(false)}
        >
          <Image src={Eye} alt='icon' />
        </div>
      ) : (
        icon && (
          <div className={styles.icon_right} onClick={() => setVisibleText(true)}>
            <Image src={Eyeclose} alt='icon' />
          </div>
        )
      )}
      {icon ? (
        <span className="p-input-icon-left">
          <InputTextAtom
            type={!visibleText ? 'text' : 'password'}
            name={name}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            feedback={feedback}
            // toggleMask={visibleText}
            rules={rules}
            readOnly={readOnly}
            disabled={disabled}
            invalidClassName={styles.invalid}
            invalidMessageClassName={styles.invalid_message}
            className={`${readOnly ? styles.readonly : ''} ${disabled ? styles.disabled : ''}`}
          />
        </span>
      ) : (
        <InputTextAtom
          type={!visibleText ? 'text' : 'password'}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          feedback={feedback}
          // toggleMask={visibleText}
          rules={rules}
          readOnly={readOnly}
          disabled={disabled}
          invalidClassName={styles.invalid}
          invalidMessageClassName={styles.invalid_message}
          className={`${readOnly ? styles.readonly : ''} ${disabled ? styles.disabled : ''}`}
        />
      )}
    </div>
  )
}
