import { useContext, useEffect } from "react"
import { useForm, SubmitHandler, FieldValues } from "react-hook-form"
import styles from './styles.module.scss'
import { RadioButton } from "@/components/molecules/RadioButtonAltern/RadioButton"
import InputText from "@/components/molecules/InputText/InputText"
import { InputTextArea } from '@/components/molecules/InputTextArea/InputTextArea'
import BackBlackCss from "@/components/molecules/BackBlackCss/BackBlackCss"
import FormHookProvider from "@/components/layouts/Form/FormHookProvider/FormHookProvider"
import Button from "@/components/molecules/Button/Button/Button"
import { TicketStep1Context } from '@/context/authenticated/events/register/createEvent/zone/ticket/TicketStep1Context'

interface ComponentProps {
  onClickBack: () => void
}

const Form6: React.FC<ComponentProps> = ({ onClickBack }) => {

  const { loading, data, ticketTypeOptions, setStep1, setRefresh, ticketId } = useContext(TicketStep1Context)
  const methods = useForm()

  useEffect(() => {
    if (Object.keys(data).length > 0) {
      for (const propertyName in data) {
        if (propertyName === 'ticket_type') {
          methods.setValue(propertyName, data[propertyName].id)
        } else {
          methods.setValue(propertyName, data[propertyName])
        }
      }
    }
  }, [data])

  useEffect(() => {
    setRefresh((prev:number)=>{ return (prev+1)})
  }, [])

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setStep1(data)
  }

  return (
    <div className={styles.form}>
      <BackBlackCss>
        <FormHookProvider methods={methods} onSubmit={onSubmit}>
          <div className={styles.Form2}>
            <div className={styles.divtitle}>
              <h2>Crea tus tipos de boletos</h2>
            </div>
            <div className={styles.customLabel}>
              <label>Tipo de boleto que tendrá el evento</label>
            </div>
            <div className={`${styles.row4} ${styles.divCheckbox} ${styles.marginB50}`}>
              {ticketTypeOptions?.map((item, index) => {
                return (
                  <div className={styles.divCheckbox} key={item.id}>
                    <RadioButton
                      name='ticket_type'
                      inputId={item.id}
                      value={item.id}
                      label={item.text}
                      variant='primary'
                      rules={{ required: true }}
                    />
                  </div>
                )
              })}
            </div>
            <div className={styles.inputText}>
              <div className={styles.customLabel}>
                <label>Nombre del boleto</label>
              </div>
              <div>
                <InputText
                  name='name'
                  label=''
                  placeholder='Ej. coachela Festival'
                  required={false}
                  variant='white'
                  rules={{ required: true }}
                />
              </div>
            </div>
            <div className={`${styles.inputText} ${styles.marginB50}`}>
              <div className={styles.customLabel}>
                <label>¿Qué incluye el boleto?</label>
              </div>
              <div>
                <InputText
                  name='include'
                  label=''
                  placeholder='Ej. barra libre, servicio de mozos, etc.'
                  required={false}
                  variant='white'
                  rules={{ required: true }}
                />
              </div>
            </div>
            <div className={styles.inputText}>
              <div className={styles.customLabel}>
                <label>Restricciones del evento</label>
              </div>
              <div className={styles.input_text}>
                <InputTextArea
                  name='restrictions'
                  label=''
                  placeholder='Ej. prohibido niños menores de 5 años, bebidas alcohólicas, armas blancas, animales, etc.'
                  rules={{ required: true }}
                />
              </div>
            </div>
            <div className={styles.divButtons}>
              <div className={styles.divButtonsAbsolute}>
                <div className={styles.btns}>
                  <Button
                    type='button'
                    variant="grayForm"
                    onClick={onClickBack}
                    height='10px'
                    borderRadius='10px'
                  >
                    Regresar
                  </Button>
                </div>
                <div className={styles.btns}>
                  <p style={{ fontSize: '16px', textAlign: 'end' }}>Ir a la siguiente sección</p>
                  <Button
                    variant="blackForm"
                    borderRadius='10px'
                  >
                    Continuar
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </FormHookProvider>
      </BackBlackCss>
    </div>
  )
}

export default Form6
