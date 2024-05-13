import { useCallback, useEffect } from 'react'
import { InputTextarea as InputTextareaPrime } from 'primereact/inputtextarea'
import { Skeleton } from 'primereact/skeleton'
import { useController, FieldValues, UseControllerProps } from 'react-hook-form'

interface InputTextAreaProps extends UseControllerProps<FieldValues> {
  name: string;
  value?: string;
  defaultValue?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
  maxLength?: number;
  rows?: number;
  loading?: boolean;
  height?: string;
  rules?: Record<string, unknown>;
  readOnly?: boolean;
  disabled?: boolean;
  invalidClassName?: string;
  invalidMessageClassName?: string;
  className?: string;
  style?: React.CSSProperties;
  onBlur?: (e: React.FocusEvent<HTMLTextAreaElement>) => void;
  onFocus?: (e: React.FocusEvent<HTMLTextAreaElement>) => void;
}

export const InputTextArea: React.FC<InputTextAreaProps> = ({
  name,
  value = '',
  defaultValue,
  onChange = () => { },
  placeholder = '',
  maxLength,
  rows,
  loading,
  height,
  rules,
  readOnly = false,
  disabled = false,
  invalidClassName = '',
  invalidMessageClassName = '',
  className = '',
  style,
  onBlur = () => { },
  onFocus = () => { },
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
  const handleOnChange = useCallback((e: React.ChangeEvent<HTMLTextAreaElement>) => {
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
    loading
      ? <Skeleton width='100%' height={height} />
      : (
        <>
          <InputTextareaPrime
            {...field}
            name={name}
            value={field.value}
            onChange={handleOnChange}
            placeholder={placeholder}
            maxLength={maxLength}
            rows={rows}
            readOnly={readOnly}
            disabled={disabled}
            className={`${className} ${error ? invalidClassName : ''}`}
            style={style}
            onBlur={onBlur}
            onFocus={onFocus}
          />
          {error && <span className={invalidMessageClassName}>{error.message}</span>}
        </>
      )
  )
}
