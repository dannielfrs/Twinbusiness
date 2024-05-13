import { Calendar as CalendarPrime } from 'primereact/calendar'
import { useEffect } from 'react'
import { Skeleton } from 'primereact/skeleton'
import { useController, FieldPath, FieldValues } from 'react-hook-form'
import { locale, addLocale } from 'primereact/api'

addLocale('es', {
  firstDayOfWeek: 1,
  dayNames: ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],
  dayNamesShort: ['dom', 'lun', 'mar', 'mié', 'jue', 'vie', 'sáb'],
  dayNamesMin: ['D', 'L', 'M', 'M', 'J', 'V', 'S'],
  monthNames: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
  monthNamesShort: ['ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'sep', 'oct', 'nov', 'dic'],
  today: 'Hoy',
  clear: 'Limpiar'
});
locale('es')

interface CalendarProps {
  name?: string;
  value?: any;
  defaultValue?: any;
  onChange?: (e: any) => void;
  onInvalid?: (error: any) => void;
  loading?: boolean
  rules?: any
  invalidClassName?: string
  invalidMessageClassName?: string
  className?: string
  style?: React.CSSProperties;
  height?: string;
  inline?: boolean;
  showWeek?: boolean;
  selectionMode?: any;
}

export const Calendar: React.FC<CalendarProps> = ({
  name = '',
  value,
  defaultValue,
  onChange = () => { },
  onInvalid = () => { },
  loading,
  rules,
  invalidClassName,
  invalidMessageClassName,
  className,
  style,
  height,
  inline = false,
  showWeek = false,
  selectionMode
}) => {

  const { field, fieldState: { error } } = useController({
    name: name as FieldPath<FieldValues>,
    defaultValue,
    rules
  })

  const handleOnChange = (e: any) => {
    onChange(e)
    field.onChange(e.value)
  }

  useEffect(() => {
    onInvalid(error)
  }, [error])

  useEffect(() => {
    field.onChange(value)
  }, [value])

  return (
    loading ? (
      <Skeleton width="100%" height={height} />
    ) : (
      <>
        <CalendarPrime
          name={name}
          inputId={field.name}
          value={field.value}
          onChange={handleOnChange}
          inline={inline}
          showWeek={showWeek}
          selectionMode={selectionMode}
          style={style}
          className={`${className} ${error ? invalidClassName : ''}`}
        />
        {error?.message && <span className={invalidMessageClassName}>{error.message}</span>}
      </>
    )
  )
}
