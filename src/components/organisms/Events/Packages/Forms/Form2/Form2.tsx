import { useContext, useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import styles from './styles.module.scss'
import { SubmitHandler, FieldValues } from 'react-hook-form'
import BackBlackCss from "@/components/molecules/BackBlackCss/BackBlackCss"
import FormHookProvider from "@/components/layouts/Form/FormHookProvider/FormHookProvider"
import Button from "@/components/molecules/Button/Button/Button"
import InputText from '@/components/molecules/InputText/InputText'
import { RadioButton } from "@/components/molecules/RadioButtonAltern/RadioButton"
import { FileUpload } from "@/components/molecules/Upload/FileUpload/FileUpload"
import { WebEventContext } from '@/context/authenticated/events/webEvent'

interface ComponentProps {
  onClickBack: () => void
}

const Form2: React.FC<ComponentProps> = ({ onClickBack }) => {

  const { dataThirdStep, getCompanyType, saveDocument, setThirdStep } = useContext(WebEventContext)
  const methods = useForm()
  const [companyType, setCompanyType] = useState<any[]>([])
  const [idFile, setIdFile] = useState<File | null>(null)
  const [idFileName, setIdFileName] = useState<string>()
  const [addressProofFile, setAddressProofFile] = useState<File | null>(null)
  const [addressProofFileName, setAddressProofFileName] = useState<string>()
  const [taxProofFile, setTaxProofFile] = useState<File | null>(null)
  const [taxProofFileName, setTaxProofFileName] = useState<string>()
  const [governmentPermitsFile, setGovernmentPermitsFile] = useState<File | null>(null)
  const [governmentPermitsFileName, setGovernmentPermitsFileName] = useState<string>()
  const [certificationCompanyFile, setCertificationCompanyFile] = useState<File | null>(null)
  const [certificationCompanyFileName, setCertificationCompanyFileName] = useState<string>()

  useEffect(() => {
    if (Object.keys(dataThirdStep).length > 0) {
      for (const propertyName in dataThirdStep) {
        if (propertyName === 'company_type') {
          methods.setValue(propertyName, dataThirdStep[propertyName]?.text)
          if (dataThirdStep[propertyName] === null) {
            methods.setValue('company_type', 'Promotora')
          }
        } else if (propertyName === 'have_more_branches') {
          methods.setValue(propertyName, dataThirdStep[propertyName]?.toString())
        } else {
          methods.setValue(propertyName, dataThirdStep[propertyName])
        }
      }
      setIdFileName(dataThirdStep?.legal_agent?.name)
      setAddressProofFileName(dataThirdStep?.proof_of_address?.name)
      setTaxProofFileName(dataThirdStep?.proof_of_tax?.name)
      setGovernmentPermitsFileName(dataThirdStep?.government_permits?.name)
      setCertificationCompanyFileName(dataThirdStep?.certification_company?.name)
    }
  }, [dataThirdStep])

  useEffect(() => {
    const getCompany = async () => {
      const response = await getCompanyType()
      setCompanyType(response.data.records.company_type)
    }
    getCompany()
  }, [])

  useEffect(() => {
    if (idFile !== null && idFile !== undefined) saveDocument('1', idFile)
  }, [idFile])

  useEffect(() => {
    if (addressProofFile !== null && addressProofFile !== undefined) saveDocument('2', addressProofFile)
  }, [addressProofFile])

  useEffect(() => {
    if (taxProofFile !== null && taxProofFile !== undefined) saveDocument('3', taxProofFile)
  }, [taxProofFile])

  useEffect(() => {
    if (governmentPermitsFile !== null && governmentPermitsFile !== undefined) saveDocument('4', governmentPermitsFile)
  }, [governmentPermitsFile])

  useEffect(() => {
    if (certificationCompanyFile !== null && certificationCompanyFile !== undefined) saveDocument('5', certificationCompanyFile)
  }, [certificationCompanyFile])

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    // if (idFile !== null && idFile !== undefined) await saveDocument('1', idFile)
    // if (addressProofFile !== null && addressProofFile !== undefined) await saveDocument('2', addressProofFile)
    // if (taxProofFile !== null && taxProofFile !== undefined) await saveDocument('3', taxProofFile)
    // if (governmentPermitsFile !== null && governmentPermitsFile !== undefined) await saveDocument('4', governmentPermitsFile)
    // if (certificationCompanyFile !== null && certificationCompanyFile !== undefined) await saveDocument('5', certificationCompanyFile)
    const [company] = companyType.filter((item) => item.text === data.company_type)
    setThirdStep(data, company.id)
  }

  const inputTextName = {
    label: 'Nombre de razón social',
    name: 'company_name',
    placeholder: 'Escriba el nombre de razón social de la empresa',
    rules: { required: true },
    required: true,
    variant: 'white'
  }

  const inputRFC = {
    label: 'No. De identificación de impuestos',
    name: 'tax_identification_number',
    placeholder: '(RFC / Tax ID / NIT)',
    rules: { required: true },
    required: true,
    variant: 'white'
  }

  const inputLegalName = {
    label: 'Nombre del representante legal',
    name: 'name_legal_representative',
    placeholder: 'Nombre y apellidos',
    rules: { required: true },
    required: true,
    variant: 'white'
  }

  return (
    <div className={styles.ContForm2}>
      <BackBlackCss>
        <FormHookProvider methods={methods} onSubmit={onSubmit}>
          <div className={styles.Form2}>
            <div className={styles.divtitle}>
              <h2>DATOS DE LA EMPRESA PROMOTORA</h2>
            </div>
            <div className={styles.row2}>
              <div className={styles.col}>
                <div>¿Eres empresa u organizador independiente?</div>
                <RadioButton
                  name='company_type'
                  inputId='Promotora'
                  value='Promotora'
                  defaultValue='Promotora'
                  label='Promotora'
                  rules={{ required: true }}
                  variant='primary'
                />
                <RadioButton
                  name='company_type'
                  inputId='Independiente'
                  value='Indenpendiente'
                  defaultValue='Indenpendiente'
                  label='Independiente'
                  rules={{ required: true }}
                  variant='primary'
                />
              </div>
              <div className={styles.col}>
                <InputText {...inputTextName} />
              </div>
            </div>
            <div className={styles.row2}>
              <div className={styles.col}>
                <InputText {...inputRFC} />
              </div>
              <div className={styles.col}>
                <InputText {...inputLegalName} />
              </div>
            </div>
            <div className={styles.row1}>
              <div className={styles.col}>
                <div>Cuentas con mas sucursales</div>
                <RadioButton
                  name='have_more_branches'
                  inputId='1'
                  value='1'
                  defaultValue='1'
                  label='Si'
                  comment='(Se agregaran mas adelante en tu editor)'
                  rules={{ required: true }}
                  variant='primary'
                />
                <RadioButton
                  name='have_more_branches'
                  inputId='0'
                  value='0'
                  defaultValue='1'
                  label='No'
                  rules={{ required: true }}
                  variant='primary'
                />
              </div>
            </div>
            <div className={styles.row1}>
              <div className={styles.col}>
                <FileUpload
                  name='fileupload_id'
                  label='Identificación de representante legal'
                  placeholder='Subir documento'
                  accept='application/pdf'
                  defaultFile={idFileName}
                  setFile={setIdFile}
                  height='30px'
                  required
                  rules={{ required: !idFileName }}
                // rules={{ required: false }}
                />
              </div>
            </div>
            <div className={styles.row1}>
              <div className={styles.col}>
                <FileUpload
                  name='fileupload_address_proof'
                  label='Comprobante de domicilio'
                  placeholder='Subir documento'
                  accept='application/pdf'
                  defaultFile={addressProofFileName}
                  setFile={setAddressProofFile}
                  height='30px'
                  optional
                  // rules={{ required: !addressProofFileName }}
                  rules={{ required: false }}
                />
              </div>
            </div>
            <div className={styles.row1}>
              <div className={styles.col}>
                <FileUpload
                  name='fileupload_tax_proof'
                  label='Comprobante de situación fiscal'
                  placeholder='Subir documento'
                  accept='application/pdf'
                  defaultFile={taxProofFileName}
                  setFile={setTaxProofFile}
                  height='30px'
                  optional
                  // rules={{ required: !taxProofFileName }}
                  rules={{ required: false }}
                />
              </div>
            </div>
            <div className={styles.row2}>
              <div className={styles.col}>
                <FileUpload
                  name='fileupload_government_permits'
                  label='Permisos Gubernamentales'
                  placeholder='Subir documento'
                  accept='application/pdf'
                  defaultFile={governmentPermitsFileName}
                  setFile={setGovernmentPermitsFile}
                  height='30px'
                  optional
                  // rules={{ required: !governmentPermitsFileName }}
                  rules={{ required: false }}
                />
              </div>
              <div className={styles.col}>
                <FileUpload
                  name='fileupload_certification_company'
                  label='Certificaciones de tu empresa'
                  placeholder='Subir documento'
                  accept='application/pdf'
                  defaultFile={certificationCompanyFileName}
                  setFile={setCertificationCompanyFile}
                  height='30px'
                  optional
                  rules={{ required: false }}
                />
              </div>
            </div>
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

export default Form2