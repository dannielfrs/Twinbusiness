import { Checkbox as CheckboxPrime } from 'primereact/checkbox'
import { useController } from 'react-hook-form'

interface CheckboxProps {
  inputId?: string
  name: string
  value?: any
  defaultValue?: any
  onChange?: (e?: any) => void
  icon?: any
  tooltip?: string
  tooltipOptions?: any
  rules?: any
  readOnly?: boolean
  disabled?: boolean
  invalidClassName?: string
  className?: string
  multiple?: boolean
}

export const Checkbox: React.FC<CheckboxProps> = ({
  inputId,
  name,
  value,
  defaultValue,
  onChange = () => { },
  icon,
  tooltip,
  tooltipOptions,
  rules,
  readOnly = false,
  disabled = false,
  invalidClassName = '',
  className = '',
  multiple = false
}) => {
  const { field, fieldState: { error } } = useController({
    name,
    rules,
    defaultValue
  })

  const handleOnChange = (e: any) => {
    // if (multiple) {
    //   let selectedOptions = field.value
    //   if (e.checked) {
    //     selectedOptions.push(e.value)
    //   } else {
    //     selectedOptions = selectedOptions.filter((item: any) => item !== e.value)
    //   }
    //   field.onChange(selectedOptions)
    // } else {
    //   field.onChange(e.checked)
    // }
    field.onChange(e.checked)
    onChange(e)
  }

  return (
    <CheckboxPrime
      {...field}
      inputId={inputId}
      inputRef={field.ref}
      value={value}
      onChange={handleOnChange}
      checked={field.value}
      // checked={multiple ? field.value.some((item) => item === value) : field.value}
      icon={icon}
      tooltip={tooltip}
      tooltipOptions={tooltipOptions}
      readOnly={readOnly}
      disabled={disabled}
      className={`${className} ${error ? invalidClassName : ''}`}
    />
  )
}
