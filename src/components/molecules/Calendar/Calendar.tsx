import { Calendar as CalendarAtom } from '@/components/atoms/Calendar'
import { useState } from 'react'
import styles from './styles.module.scss'

interface CalendarProps {
  name?: string;
  value?: any;
  defaultValue?: any;
  onChange?: (e: any) => void;
  onInvalid?: (error: any) => void;
  className?: string;
  invalidMessageClassName?: string;
  style?: React.CSSProperties;
  required?: boolean;
  optional?: boolean;
  rules?: any
  error?: any;
  variant?: string;
  height?: string;
  label?: string;
  min?: number;
  max?: number;
  inline?: boolean;
  showWeek?: boolean;
  selectionMode?: any;
}

export const Calendar: React.FC<CalendarProps> = ({
  name,
  value,
  defaultValue,
  onChange,
  variant = 'primary',
  className = '',
  required = false,
  optional = false,
  rules,
  error,
  height = '180px',
  label,
  inline,
  showWeek,
  selectionMode,
  style
}) => {
  const [isInvalid, setIsInvalid] = useState<any>(null)

  return (
    <div className={`${styles.calendar} ${styles.calendar_icon} ${styles[variant]} ${className}`}>
      {label &&
        <div className={styles.calendar_labels}>
          <div className={styles.labeldiv}>
            <div>
              <label htmlFor={name}>{label}</label>
            </div>
            <div className={styles.maxright}>
              <label>{defaultValue} {label}</label>
            </div>
          </div>
          {required && <span className={`${error || isInvalid ? styles.invalid_text : ''}`}>Obligatorio</span>}
          {optional && <span>Opcional</span>}
        </div>}
      <CalendarAtom
        name={name}
        value={value}
        defaultValue={defaultValue}
        onChange={onChange}
        rules={rules}
        inline={inline}
        showWeek={showWeek}
        selectionMode={selectionMode}
        onInvalid={(error) => setIsInvalid(error)}
        invalidClassName={styles.invalid}
        invalidMessageClassName={styles.invalid_message}
        // className={`${readOnly ? styles.readonly : ''} ${disabled ? styles.disabled : ''}`}
        height={height}
        style={style}
      />
    </div>
  )
}
