import { useContext, useState } from "react"
import { useForm, SubmitHandler, FieldValues } from "react-hook-form"
import styles from './styles.module.scss'
import FormHookProvider from "@/components/layouts/Form/FormHookProvider/FormHookProvider"
import InputText from "@/components/molecules/InputText/InputText"
import Button from "@/components/molecules/Button/Button/Button"
import { Slider } from "@/components/molecules/Slider/Slider"
import { Calendar } from "@/components/molecules/Calendar/Calendar"
import { SalesPhaseContext } from '@/context/authenticated/events/register/createEvent/salesPhase/SalesPhaseContext'
import { alertSuccess, closeAlert } from '@/utilities/alerts'

export const SalesPhase = ({ onHide }: { onHide: () => void }) => {
  
  const { loading, data, saveItem } = useContext(SalesPhaseContext)
  const methods = useForm()
  const [daysEvent, setDaysEvent] = useState(0)
  const [monthsEvent, setMonthsEvent] = useState(0)
  const [dates, setDates] = useState(null)
  
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    let fase = saveItem(data, dates)
    fase.then((res:any)=>{
      alertSuccess('', 'Fase de venta guardada', false)
      const timer = setTimeout(() => {
        closeAlert()      
        onHide()
      }, 1500);
    })
  }

  return (
    <FormHookProvider methods={methods} onSubmit={onSubmit}>
      <div className={styles.form}>
        <div className={styles.divtitle}>
          <h2>Crear tu fase de venta</h2>
        </div>
        <div className={styles.card}>
          <div className={styles.row2}>
            <div>
              <InputText
                label='Hora de inicio'
                name='start_time'
                type='time'
                placeholder='8:00 PM'
                required
                variant='white'
                rules={{ required: true }}
              />
            </div>
            <div>
              <InputText
                label='Hora de finalización'
                name='end_time'
                type='time'
                placeholder='11:00 PM'
                required
                variant='white'
                rules={{ required: true }}
              />
            </div>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.row2}>
            <div>
              <label>Duración</label>
              <div className={styles.sliderdiv}>
                <Slider
                  name='days_event'
                  onChange={(e) => setDaysEvent(e.value)}
                  defaultValue={daysEvent}
                  variant="white"
                  label="Días"
                  min={0}
                  max={30}
                />
              </div>
              <div className={styles.sliderdiv}>
                <Slider
                  name='months_event'
                  onChange={(e) => setMonthsEvent(e.value)}
                  defaultValue={monthsEvent}
                  variant="white"
                  label="Meses"
                  min={0}
                  max={12}
                />
              </div>
            </div>
            <div>
              <div className={styles.divcalendar}>
                <label>Fecha</label>
                <Calendar
                  name='calendar'
                  value={dates}
                  onChange={(e: any) => setDates(e.value)}
                  selectionMode="range"
                  variant="white"
                  inline
                  rules={{ required: true }}
                />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.form_footer}>
          <div style={{ width: '25%' }}>
            <Button
              type='button'
              variant="grayForm"
              onClick={onHide}
              height='10px'
              borderRadius='10px'
            >
              Regresar
            </Button>
          </div>
          <div style={{ width: '25%' }}>
            <Button
              variant="blackForm"
              height='10px'
              borderRadius='10px'
            >
              Guardar
            </Button>
          </div>
        </div>
      </div>
    </FormHookProvider>
  )
}