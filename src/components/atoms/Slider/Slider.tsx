import { Slider as SliderPrime } from 'primereact/slider'
import { Skeleton } from 'primereact/skeleton'
import { useCallback, useEffect, useState } from 'react'
import { useController, FieldPath, FieldValues } from 'react-hook-form'

interface SliderProps {
  name?: string
  value?: any
  defaultValue?: any
  onChange?: (e: any) => void
  onInvalid?: (error: any) => void
  className?: string
  invalidMessageClassName?: string
  style?: React.CSSProperties
  height?: string
  max?: number
}

export const Slider: React.FC<SliderProps> = ({
  name = '',
  value,
  defaultValue,
  onChange = () => { },
  onInvalid,
  className = '',
  style,
  invalidMessageClassName,
  height,
  max
}) => {
  const { field, fieldState: { error } } = useController({
    name: name as FieldPath<FieldValues>,
    defaultValue,
  });
  const [showSkeleton, setShowSkeleton] = useState(true)

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

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSkeleton(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  return (
    showSkeleton ? (
      <Skeleton width="100%" height={height} />
    ) : (
      <>
        <SliderPrime
          {...field}
          name={name}
          value={field.value}
          onChange={handleOnChange}
          max={max}
        />
        {error?.message && <span className={invalidMessageClassName}>{error.message}</span>}
      </>
    )
  )
}
