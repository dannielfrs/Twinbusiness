'use client'

import { Checkbox as CheckboxAtom } from '@/components/atoms/Checkbox/Checkbox'
import styles from './styles.module.scss'

interface CheckboxProps {
  inputId?: string;
  name?: string;
  value?: any;
  onChange?: (e?: any) => void;
  checked?: boolean;
  disabled?: boolean;
  className?: string;
  style?: any;
  variant?: string;
  label?: any;
  variant2?: string;
}

const Checkbox: React.FC<CheckboxProps> = (props) => {
  const {
    className,
    variant = 'default',
    variant2 = 'label',
    label = '',
  } = props

  return (
    <div className={styles.checkbox}>
      <CheckboxAtom
        {...props}
        className={`${styles[variant]} ${className}`}
      />
      {label && <label className={`${styles[variant2]} ${className}`}>{label}</label>}
    </div>
  )
}

export default Checkbox
