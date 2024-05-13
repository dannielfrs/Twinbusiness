import { useContext, useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import styles from './styles.module.scss'
import { SubmitHandler, FieldValues } from 'react-hook-form'
import FormHookProvider from "@/components/layouts/Form/FormHookProvider/FormHookProvider"
import InputText from '@/components/molecules/InputText/InputText'
import { Checkbox } from "@/components/molecules/CheckboxAltern/Checkbox"
import { RadioButton } from "@/components/molecules/RadioButtonAltern/RadioButton"
import Button from "@/components/molecules/Button/Button/Button"
import plusLogo from '@/../../public/images/icons/plus.svg'
import BackBlackCss from "@/components/molecules/BackBlackCss/BackBlackCss"
import { ModalPackages } from "@/components/organisms/Events/Packages/Forms/Form4/ModalPackages/ModalPackages"
import { PackageProvider } from '@/context/authenticated/events/register/package'
import { WebEventContext } from '@/context/authenticated/events/webEvent'
import Image from "next/image"

interface ComponentProps {
  onClickBack: () => void
}

const Form4: React.FC<ComponentProps> = ({ onClickBack }) => {

  const { dataFifthStep, setFifthStep, getSaleOptions } = useContext(WebEventContext)
  const methods = useForm()
  const [salesOptions, setSalesOptions] = useState<any[]>([])
  const [selectedOptions, setselectedOptions] = useState<any[]>([])
  const [showModalPackage, setShowModalPackage] = useState(false)

  useEffect(() => {
    if (Object.keys(dataFifthStep).length > 0) {
      for (const propertyName in dataFifthStep) {
        if (propertyName === 'send_packages') {
          methods.setValue(propertyName, dataFifthStep[propertyName].toString())
        } else {
          methods.setValue(propertyName, dataFifthStep[propertyName])
        }
      }
      const saleOptions: any[] = []
      dataFifthStep.sale_options.forEach((item: any) => {
        methods.setValue(item.text, true)
        saleOptions.push(item.id)
      })
      setselectedOptions(saleOptions)
    }
    return () => {
      methods.reset()
    }
  }, [dataFifthStep])

  useEffect(() => {
    const getOptions = async () => {
      const response = await getSaleOptions()
      setSalesOptions(response.data.records.sale_option)
    }
    getOptions()
  }, [])

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setFifthStep(data, selectedOptions)
  }

  const inputTextName = {
    label: 'Tipo de promotora?',
    name: 'promoter_type',
    placeholder: 'Ej. Casa productora, Deportes, Musica etc…',
    rules: { required: true },
    required: true,
    variant: 'white'
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
    <div className={styles.ContForm4}>
      <BackBlackCss>
        <FormHookProvider methods={methods} onSubmit={onSubmit}>
          <div className={styles.Form2}>
            <div className={styles.divtitle}>
              <h2>INFORMACIÓN DE SECCIÓN DE LA PROMOTORA</h2>
            </div>
            <div className={styles.row1}>
              <div className={styles.col}>
                <InputText {...inputTextName} />
              </div>
            </div>
            <div className={styles.customLabel}>
              <span className={styles.requiredSpan}>* </span><label>Seleccione las opciones de venta para su vitrina</label>
            </div>
            {salesOptions?.map((item, index) => {
              return (
                <div className={styles.divCheckbox} key={item.id}>
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
            <div className={styles.row2Custom}>
              <div className={styles.customLabel}>
                <span className={styles.requiredSpan}>* </span><label>¿Realiza envíos de boletos o productos del evento?</label>
              </div>
              <div className={styles.customLabel}>
                <label>¿Qué paquetería usas?</label><span className={styles.optionalSpan}> (Opcional)</span>
              </div>
            </div>
            <div className={styles.section_package}>
              <div className={styles.section_radiobutton}>
                <RadioButton
                  name='send_packages'
                  inputId='1'
                  value='1'
                  defaultValue='1'
                  label='Si'
                  rules={{ required: true }}
                  variant='primary'
                />
                <RadioButton
                  name='send_packages'
                  inputId='0'
                  value='0'
                  defaultValue='1'
                  label='No'
                  rules={{ required: true }}
                  variant='primary'
                />
              </div>
              <div className={styles.uploaddiv} onClick={() => setShowModalPackage(true)}>
                Sube la paquetería que manejas <span>{'>'}</span>
              </div>
            </div>
            <Button
              type='button'
              onClick={() => setShowModalPackage(true)}
              variant='transparent'
              height='50px'
              width='250px'
            >
              <div className={styles.button} >
                <div className={styles.button_icon}>
                  <Image alt='icon' src={plusLogo} />
                </div>
                <label>Agregar paquetería</label>
              </div>
            </Button>
            <div className={styles.divButtons}>
              <div className={styles.divButtonsAbsolute}>
                <div className={styles.btns}>
                  <Button
                    type='button'
                    onClick={onClickBack}
                    variant="grayForm"
                    height='10px'
                    borderRadius='10px'
                  >
                    Regresar
                  </Button>
                </div>
                <div className={styles.btns}>
                  <p style={{ fontSize: '16px', textAlign: 'end' }}>Ir a la siguiente sección</p>
                  <Button
                    variant='blackForm'
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
      {showModalPackage &&
        <PackageProvider>
          <ModalPackages onHide={() => setShowModalPackage(false)} />
        </PackageProvider>
      }
    </div>
  )
}

export default Form4
