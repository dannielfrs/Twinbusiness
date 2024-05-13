import { useCallback, useEffect } from 'react'
import { Password } from 'primereact/password'
import { useController } from 'react-hook-form'

interface InputPasswordProps {
  name: string;
  value?: string;
  defaultValue?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  feedback?: boolean;
  toggleMask?: boolean;
  rules?: Record<string, unknown>;
  readOnly?: boolean;
  disabled?: boolean;
  onFocus?: () => void;
  onBlur?: () => void;
  invalidClassName?: string;
  className?: string;
  type?: string;
}

export const InputPassword: React.FC<InputPasswordProps> = ({
  name,
  value,
  defaultValue,
  onChange = () => { },
  placeholder = '',
  feedback,
  toggleMask,
  rules,
  readOnly = false,
  disabled = false,
  onFocus = () => { },
  onBlur = () => { },
  invalidClassName = '',
  className = '',
  type,
}) => {
  //
  // react-hook-form controller
  //
  const { field, fieldState: { error } } = useController({
    name,
    rules,
    defaultValue,
  })
  //
  // When component changes update the react-hook-form value and execute onChange prop
  //
  const handleOnChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e)
    field.onChange(e.target.value)
  }, [field, onChange])
  //
  // Update the react-hook-form value when prop value changes
  //
  useEffect(() => {
    field.onChange(value)
  }, [value])

  return (
    <Password
      {...field}
      type={type}
      name={name}
      value={field.value}
      onChange={handleOnChange}
      placeholder={placeholder}
      feedback={feedback}
      toggleMask={toggleMask}
      readOnly={readOnly}
      disabled={disabled}
      className={`${className} ${error ? invalidClassName : ''}`}
      onFocus={onFocus}
      onBlur={onBlur}
    />
  )
}
