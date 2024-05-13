import { MultiSelect as MultiSelectAtom } from '@/components/atoms/Selects/MultiSelect';
import { useState } from 'react';
import styles from './styles.module.scss';
import { CountryOption, SelectedCountryProps } from '@/components/organisms/Home/GuestHeader/types';

interface MultiSelectProps {
  name: string;
  value: any;
  defaultValue?: any;
  onChange?: any;
  options: any[]; // Replace 'any' with the actual type of options.
  optionLabel?: string;
  label?: string;
  optionGroupLabel?: any;
  optionGroupChildren?: any;
  icon?: string;
  dropdownIcon?: string;
  placeholder?: string;
  filter?: boolean;
  variant: string;
  rules?: any;
  readOnly?: boolean;
  disabled?: boolean;
  height: string;
  loading?: boolean;
  itemTemplate?: (option: CountryOption) => React.ReactNode;
  valueTemplate?: (option: any, props: SelectedCountryProps) => React.ReactNode;
  panelClassName: string;
  className?: string;
  required?: boolean;
  optional?: boolean;
  error?: any; // Replace 'any' with the actual type of error.
  scrollHeight?: string;
}

const MultiSelect: React.FC<MultiSelectProps> = ({
  name,
  value,
  defaultValue,
  onChange,
  options,
  optionLabel = 'label',
  label,
  icon,
  dropdownIcon = 'i-arrow',
  placeholder = '- Selecciona una opción -',
  filter = false,
  variant = 'primary',
  rules,
  readOnly = false,
  disabled = false,
  height = '45px',
  loading = false,
  itemTemplate,
  valueTemplate,
  panelClassName,
  className = '',
  required = false,
  optional = false,
  error,
  optionGroupLabel,
  optionGroupChildren,
  scrollHeight
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
    <div className={`${styles.dropdown} ${icon && styles.dropdown_icon} ${styles[variant]} ${className}`}>
      {label &&
        <div className={styles.dropdown_labels}>
          <label htmlFor={name}>{label}</label>
          {required && <span className={`${error || isInvalid ? styles.invalid_text : ''}`}>Obligatorio</span>}
          {optional && <span>Opcional</span>}
        </div>}
      {icon && <i className={icon} />}
      <MultiSelectAtom
        name={name}
        value={value}
        defaultValue={defaultValue}
        onChange={onChange}
        options={options}
        optionLabel={optionLabel}
        placeholder={placeholder}
        dropdownIcon={dropdownIcon}
        filter={filter}
        filterPlaceholder='Buscar'
        rules={rules}
        readOnly={readOnly}
        disabled={disabled}
        loading={loading}
        onInvalid={(error) => setIsInvalid(error)}
        focus={focus}
        blur={blur}
        panelClassName={`${styles[variant]} ${panelClassName}`}
        invalidClassName={styles.invalid}
        invalidMessageClassName={styles.invalid_message}
        className={`${readOnly ? styles.readonly : ''} ${disabled ? styles.disabled : ''}`}
        itemTemplate={itemTemplate}
        valueTemplate={valueTemplate}
        height={height}
        style={{ height }}
        optionGroupLabel={optionGroupLabel}
        optionGroupChildren={optionGroupChildren} 
        scrollHeight={scrollHeight}
      />
    </div>
  );
};

export default MultiSelect;