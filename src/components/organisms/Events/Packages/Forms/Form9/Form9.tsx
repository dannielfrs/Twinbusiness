'use client'

import { useContext, useEffect, useState } from 'react'
import styles from './Form9.module.scss'
import { Checkbox } from "@/components/molecules/CheckboxAltern/Checkbox"
import Button from '@/components/molecules/Button/Button/Button'
import { useRouter } from 'next/navigation'
import BackBlackCss from '@/components/molecules/BackBlackCss/BackBlackCss'
import FormHookProvider from '@/components/layouts/Form/FormHookProvider/FormHookProvider'
import { useForm } from 'react-hook-form'
import { Step9Context } from '@/context/authenticated/events/register/createEvent/step9/Step9Context'

interface ComponentProps {
  onClickBack: () => void
}

const Form9: React.FC<ComponentProps> = ({ onClickBack }) => {

  const { loading, data, paymentMethodOptions, setStep9 } = useContext(Step9Context)
  const methods = useForm()
  const router = useRouter()
  const [selectedOptions, setselectedOptions] = useState<any[]>([])
  const [all, setAll] = useState(false)

  useEffect(() => {
    if (data.length > 0) {
      const paymentOptions: any[] = []
      data.forEach((item: any) => {
        methods.setValue(item.text, item.selected)
        if (item.selected) paymentOptions.push(item.id)
      })
      setselectedOptions(paymentOptions)
    }
  }, [data])

  const onSubmit = () => {
    setStep9(selectedOptions)
  }

  const handleSelectAll = (e: any) => {
    if (e.checked) {
      const paymentOptions: any[] = []
      paymentMethodOptions.forEach((item: any) => {
        methods.setValue(item.text, true)
        paymentOptions.push(item.id)
      })
      setselectedOptions(paymentOptions)
    } else {
      paymentMethodOptions.forEach((item: any) => {
        methods.setValue(item.text, false)
      })
      setselectedOptions([])
    }
  }

  const onOptionsChange = (e: any) => {
    let _selectedOptions = [...selectedOptions]
    if (e.checked)
      _selectedOptions.push(e.value)
    else
      _selectedOptions = _selectedOptions.filter(item => item !== e.value)
    setselectedOptions(_selectedOptions)
  }

  return (
    <div className={styles.PaymentMethods}>
      <BackBlackCss>
        <FormHookProvider methods={methods} onSubmit={onSubmit}>
          <div className={styles.form}>
            <p className={styles.title}>Métodos de pago</p>
            <p className={styles.subtitle}>Métodos de pago que son aceptados en su evento</p>
            <div className={styles.contOptions}>
              {paymentMethodOptions?.map((item, index) => {
                return (
                  <div className={styles.contCheck} key={item.id}>
                    <Checkbox
                      inputId={item.id}
                      name={item.text}
                      label={item.text}
                      value={item.id}
                      onChange={(e) => onOptionsChange(e)}
                      variant='primary'
                      rules={{ required: selectedOptions.length === 0 }}
                    />
                  </div>
                )
              })}
            </div>
            <Checkbox
              inputId='all'
              name='all'
              label='Seleccionar todo'
              value={all}
              onChange={(e) => handleSelectAll(e)}
              variant='secondary'
              rules={{ required: false }}
            />
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
        </FormHookProvider>
      </BackBlackCss>
    </div>
  )
}

export default Form9
