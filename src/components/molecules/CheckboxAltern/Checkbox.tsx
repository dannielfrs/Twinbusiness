import { Checkbox as CheckboxAtom } from '@/components/atoms/CheckboxAltern'
import styles from './styles.module.scss'

interface ComponentProps {
  inputId?: string
  name: string
  value?: any
  defaultValue?: any
  onChange?: (e?: any) => void
  icon?: any
  label?: string
  tooltip?: string
  tooltipOptions?: any
  rules?: any
  readOnly?: boolean
  disabled?: boolean
  variant?: string
  className?: string
}

export const Checkbox: React.FC<ComponentProps> = ({
  inputId,
  name = '',
  value,
  defaultValue,
  onChange = () => { },
  icon,
  label,
  tooltip,
  tooltipOptions,
  rules,
  readOnly = false,
  disabled = false,
  variant = 'primary',
  className = ''
}) => {
  return (
    <div className={`${styles.checkbox} ${styles[variant]} ${className}`}>
      <CheckboxAtom
        inputId={inputId}
        name={name}
        value={value}
        defaultValue={defaultValue}
        onChange={onChange}
        icon={icon}
        tooltip={tooltip}
        tooltipOptions={tooltipOptions}
        rules={rules}
        readOnly={readOnly}
        disabled={disabled}
        invalidClassName={styles.invalid}
        className={`${readOnly ? styles.readonly : ''} ${disabled ? styles.disabled : ''}`}
      />
      {label && <label htmlFor={inputId}>{label}</label>}
    </div>
  )
}
