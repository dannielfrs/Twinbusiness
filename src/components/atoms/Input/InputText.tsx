import { InputText as InputTextPrime } from 'primereact/inputtext'
import { useCallback, useEffect, Ref } from 'react'
import { useController, FieldValues, UseControllerReturn } from 'react-hook-form'
import { Skeleton } from 'primereact/skeleton'

interface InputTextProps {
  name: string;
  ref?: Ref<HTMLInputElement>
  type?: string;
  value?: string;
  defaultValue?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  maxLength?: number;
  rules?: any;
  readOnly?: boolean;
  disabled?: boolean;
  onFocus?: () => void;
  onBlur?: () => void;
  onInvalid?: (error: any) => void;
  invalidClassName?: string;
  invalidMessageClassName?: string;
  className?: string;
  style?: React.CSSProperties;
  height?: string;
  loading?: boolean;
  onPaste?: () => void;
  feedback?: boolean;
}

const InputText: React.FC<InputTextProps> = ({
  name,
  ref,
  type = 'text',
  value,
  defaultValue,
  onChange = () => { },
  placeholder = '',
  maxLength,
  rules,
  readOnly = false,
  disabled = false,
  onFocus = () => { },
  onBlur = () => { },
  onInvalid = () => { },
  onPaste = () => { },
  invalidClassName = '',
  invalidMessageClassName = '',
  className = '',
  style,
  height = '30px',
  loading = false
}: InputTextProps) => {
  //
  // react-hook-form controller
  //
  const { field, fieldState: { error } }: UseControllerReturn<FieldValues> = useController({
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
  //
  //
  useEffect(() => {
    onInvalid(error)
  }, [error])
  //
  // Update the react-hook-form value when prop value changes
  //
  useEffect(() => {
    field.onChange(value)
  }, [value])

  return loading ? (
    <Skeleton width="100%" height={height} />
  ) : (
    <>
      <InputTextPrime
        {...field}
        name={name}
        ref={ref}
        type={type}
        value={field.value}
        onChange={handleOnChange}
        placeholder={placeholder}
        maxLength={maxLength}
        style={style}
        readOnly={readOnly}
        disabled={disabled}
        className={`${className} ${error ? invalidClassName : ''}`}
        onFocus={onFocus}
        onBlur={onBlur}
        onPaste={onPaste}
      />
      {error?.message && <span className={invalidMessageClassName}>{error.message}</span>}
    </>
  )
}

export default InputText
