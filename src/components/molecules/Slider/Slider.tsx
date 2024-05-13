import { Slider as SliderAtom } from '@/components/atoms/Slider';
import { useState } from 'react';
import styles from './styles.module.scss';
import { CountryOption, SelectedCountryProps } from '@/components/organisms/Home/GuestHeader/types';

interface SliderProps {
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
  error?: any; // Replace 'any' with the actual type of error.
  variant?: string;
  height?: string;
  label?: string;
  min?: number;
  max?: number;
}

export const Slider: React.FC<SliderProps> = ({
  name,
  value,
  defaultValue,
  onChange,
  variant = 'primary',
  className = '',
  required = false,
  optional = false,
  error,
  height = '5px',
  label,
  min,
  max
}) => {
  const [onFocus, setOnFocus] = useState(false);
  const [isInvalid, setIsInvalid] = useState<any>(null);

  const focus = () => {
    setOnFocus(true);
  };

  const blur = () => {
    setOnFocus(false);
  };

  return (
    <div className={`${styles.slider} ${styles.slider_icon} ${styles[variant]} ${className}`}>
      {label &&
        <div className={styles.slider_labels}>
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


      <div className={styles.minmaxdivlabels}>
        <div className={styles.minleft}>
          <label>Min</label>
        </div>
        <div className={styles.maxright}>
          <label>Max</label>
        </div>
      </div>
      <SliderAtom
        name={name}
        value={value}
        defaultValue={defaultValue}
        onChange={onChange}
        onInvalid={(error) => setIsInvalid(error)}
        invalidMessageClassName={styles.invalid_message}
        className={`${className}`}
        height={height}
        style={{ height }}
        max={max}
      />
      <div className={styles.minmaxdivlabels}>
        <div className={styles.minleft}>
          <label>{min}</label>
        </div>
        <div className={styles.maxright}>
          <label>{max}</label>
        </div>
      </div>
    </div>
  );
};
