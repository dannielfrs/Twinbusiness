import { MultiSelect as MultiSelectPrime } from 'primereact/multiselect'
import { useCallback, useEffect } from 'react'
import { Skeleton } from 'primereact/skeleton'
import { useController, FieldPath, FieldValues } from 'react-hook-form'
import { CountryOption } from '@/components/organisms/Home/GuestHeader/types'

interface MultiSelectProps {
  name?: string
  value?: any
  defaultValue?: any
  onChange?: (e: any) => void
  options: any[]
  optionLabel?: string
  optionGroupLabel?: any
  optionGroupChildren?: any
  placeholder?: string
  dropdownIcon?: string
  editable?: boolean
  loading?: boolean
  filter?: boolean
  filterIcon?: string
  filterPlaceholder?: string
  scrollHeight?: string
  height?: string
  rules?: any
  readOnly?: boolean
  disabled?: boolean
  onInvalid?: (error: any) => void
  invalidClassName?: string
  invalidMessageClassName?: string
  panelClassName?: string
  className?: string
  style?: React.CSSProperties
  itemTemplate?: (option: CountryOption) => React.ReactNode
  valueTemplate?: (option: any, props: any) => React.ReactNode
  focus?: (e: React.FocusEvent<HTMLInputElement>) => void
  blur?: (e: React.FocusEvent<HTMLInputElement>) => void
}

export const MultiSelect: React.FC<MultiSelectProps> = ({
  name = '',
  value,
  defaultValue,
  onChange = () => { },
  options,
  optionLabel,
  placeholder = '',
  dropdownIcon,
  editable,
  loading = false,
  filter = false,
  filterIcon,
  filterPlaceholder,
  scrollHeight,
  height,
  rules,
  readOnly = false,
  disabled = false,
  onInvalid,
  invalidClassName = '',
  invalidMessageClassName = '',
  panelClassName = '',
  className = '',
  style,
  itemTemplate,
  valueTemplate,
  focus,
  blur,
  optionGroupLabel,
  optionGroupChildren
}) => {
  const { field, fieldState: { error } } = useController({
    name: name as FieldPath<FieldValues>,
    rules,
    defaultValue,
  });

  const handleOnChange = useCallback((e: any) => {
    onChange(e)
    field.onChange(e.value)
  }, [field, onChange])

  useEffect(() => {
    if (value) {
      handleOnChange({ target: { value } })
    }
  }, [value])

  useEffect(() => {
    if (error) {
      onInvalid!(error)
    }
  }, [error, onInvalid])

  return (
    loading ? (
      <Skeleton width="100%" height={height} />
    ) : (
      <>

        <MultiSelectPrime
          {...field}
          name={name}
          value={field.value}
          onChange={handleOnChange}
          options={options}
          optionLabel={optionLabel}
          placeholder={placeholder}
          dropdownIcon={dropdownIcon}
          itemTemplate={itemTemplate ? (option: CountryOption) => itemTemplate(option) : undefined}
          optionGroupLabel={optionGroupLabel}
          optionGroupChildren={optionGroupChildren}
          //valueTemplate={valueTemplate ? (option: any, props: any) => valueTemplate(option, props) : undefined}
          //editable={editable}
          filter={filter}
          filterPlaceholder={filterPlaceholder}
          scrollHeight={scrollHeight}
          disabled={disabled || readOnly}
          panelClassName={`${panelClassName} ${className} ${error ? invalidClassName : ''}`}
          style={style}
          onFocus={focus}
          onBlur={blur}
        />
        {error?.message && <span className={invalidMessageClassName}>{error.message}</span>}
      </>
    )
  )
}
