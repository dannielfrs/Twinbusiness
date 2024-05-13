import { useContext, useEffect, useState } from "react"
import { useForm, SubmitHandler, FieldValues } from "react-hook-form"
import Image from 'next/image'
import styles from './styles.module.scss'
import InputText from "@/components/molecules/InputText/InputText"
import { DataTableActions } from "@/components/molecules/DataTableActions/DataTableActions"
import { SalesPhase } from "./SalesPhase/SalesPhase"
import calendarLogo from '@/../../public/images/icons/calendar.svg'
import plusLogo from '@/../../public/images/icons/plus.svg'
import BackBlackCss from "@/components/molecules/BackBlackCss/BackBlackCss"
import { ColorPicker, ColorPickerChangeEvent } from 'primereact/colorpicker'
import FormHookProvider from "@/components/layouts/Form/FormHookProvider/FormHookProvider"
import Button from "@/components/molecules/Button/Button/Button"
import { ModalRows } from "./ModalRows/ModalRows"
import { ZoneContext } from '@/context/authenticated/events/register/createEvent/zone/zone/ZoneContext'
import { EventStepContext } from '@/context/authenticated/events/register/createEvent/eventStep/EventStepContext'
import { SalesPhaseProvider } from "@/context/authenticated/events/register/createEvent/salesPhase/SalesPhaseProvider"
import { RowsProvider } from "@/context/authenticated/events/register/createEvent/zone/rows/RowsProvider"
import DataTable from '@/components/molecules/DataTable/DataTable'

interface ComponentProps {
  onClickBack: () => void
}

interface Branch {
  id?: string;
  image?: string;
  name?: string;
  color?: string;
  cupos?: string;
  number?: string;
  incluye?: string;
  door?: string;
  price?: string;
  date_inicio?: string;
  date_final?: string;
  price_ticket?: string;
  total_ticket?: string;
  add_ticket?: string;
  avatar?: string;
  dataTableZone?: any;
}

const Form7: React.FC<ComponentProps> = ({ onClickBack }) => {

  const { loading, data, createItem, updateItem, deleteItem, validateTicket } = useContext(ZoneContext)
  const { setActiveStep, setZoneId } = useContext(EventStepContext)
  const methods = useForm()
  const [zoneNumber, setZoneNumber] = useState(0)
  const [showSalesPhase, setShowSalesPhase] = useState<boolean>(false)
  const [showModalRows, setShowModalRows] = useState<boolean>(false)
  const [addTicket, setAddTicket] = useState<boolean>(false)
  const [addZone, setAddZone] = useState<boolean>(false)
  const [addRows, setAddRows] = useState<boolean>(false)
  const [color, setColor] = useState<any>('3629e6')
  const [id, setId] = useState<string>('')

  useEffect(() => {
    if (data.length === 0) {
      setId('')
    }
    else if (addZone) {
      methods.setValue('name', '')
      methods.setValue('quota', '')
      methods.setValue('number', '')
      methods.setValue('port_int', '')
      methods.setValue('event_type', '')
      methods.setValue('include', '')
      methods.setValue('price', '')
      setZoneNumber(data.length)
      setId('')
      setAddZone(false)
    } else {
      const index = data.length - 1
      for (const propertyName in data[index]) {
        if (propertyName === 'color') setColor(data[index][propertyName].replace('#', ''))
        else methods.setValue(propertyName, data[index][propertyName])
      }
      setId(data[index]?.id)
      setZoneNumber(index)
    }
  }, [data])

  useEffect(() => {
    if (addRows && id) {
      setShowModalRows(true)
      setAddRows(false)
    }
    if (addTicket && id) {
      setZoneId(id)
      setActiveStep(8)
      setAddTicket(false)
    }
  }, [id])

  const onSubmit: SubmitHandler<FieldValues> = async (formData, e: any) => {
    const buttonName = e.nativeEvent.submitter.name
    switch (buttonName) {
      case 'add_rows':
        if (id) setShowModalRows(true)
        else {
          setAddRows(true)
          createItem(formData, color)
        }
        break;
      case 'add_ticket':
        if (id) {
          setZoneId(id)
          setActiveStep(8)
        } else {
          setAddTicket(true)
          createItem(formData, color)
        }
        break;
      case 'add_zone':
        if (id) {
          setAddZone(true)
          updateItem(formData, color, id)
        }
        else {
          setAddZone(true)
          createItem(formData, color)
        }
        break;
      case 'continue':
        if (id) {
          await updateItem(formData, color, id)
          validateTicket()
        }
        else {
          await createItem(formData, color)
          validateTicket()
        }
        break;
      default:
        break;
    }
  }

  const handleEditZone = (zoneData: any, index: number) => {
    setZoneNumber(index)
    for (const propertyName in zoneData) {
      if (propertyName === 'color') {
        setColor(zoneData[propertyName].replace('#', ''))
      } else {
        methods.setValue(propertyName, zoneData[propertyName])
      }
      setId(zoneData.id)
    }
  }

  const handleDeleteZone = (id?: string) => {
    deleteItem(id)
  }

  const actionsBodyTemplate = (rowData: Branch, e: any) => {
    return (
      <DataTableActions
        editButton
        deleteButton
        onClickEdit={() => handleEditZone(rowData, e.rowIndex)}
        onClickDelete={() => handleDeleteZone(rowData.id)}
      />
    )
  }

  const dataTableColumns = [
    { id: 1, field: 'name', header: 'Nombre de zona', w: '200px', t: 'center' },
    { id: 2, field: 'actions', header: 'Acciones', body: actionsBodyTemplate, w: '150px', t: 'center' },
  ]

  const inputTex1 = {
    label: 'Nombre de la zona',
    name: 'name',
    placeholder: 'Ej. VIP, general',
    required: false,
    variant: 'white',
    rules: { required: true }
  }

  const inputTex3 = {
    label: '¿Cuál es el cupo de la zona?',
    name: 'quota',
    placeholder: 'Ej. 16,000 cupos',
    required: false,
    variant: 'white',
    rules: { required: true }
  }

  const inputTex4 = {
    label: 'Numero de zona',
    name: 'number',
    placeholder: 'Ej. Zona 01',
    required: false,
    variant: 'white',
    rules: { required: true }
  }

  const inputTex5 = {
    label: '¿Puerta de entrada?',
    name: 'port_int',
    placeholder: 'Ej. Puerta 01',
    required: false,
    variant: 'white',
    rules: { required: true }
  }

  const inputTex6 = {
    label: 'Tipo de evento',
    name: 'event_type',
    placeholder: 'Ej. presencial',
    required: false,
    variant: 'white',
    rules: { required: true }
  }

  const inputTex7 = {
    label: '¿Qué incluye la zona?',
    name: 'include',
    placeholder: 'Ej. Mesas, sillas, etc.',
    required: false,
    variant: 'white',
    rules: { required: true }
  }

  const inputTex8 = {
    label: 'Precio de zona',
    name: 'price',
    placeholder: 'Ej. 3000 MXN',
    required: false,
    variant: 'white',
    rules: { required: true }
  }

  return (
    <>
      <div className={styles.form}>
        <BackBlackCss>
          <FormHookProvider methods={methods} onSubmit={onSubmit}>
            <div className={styles.Form2}>
              <div className={styles.divtitle}>
                <h2>Crea zona {zoneNumber + 1} de tu evento</h2>
              </div>
              <div className={styles.row2}>
                <div className={styles.inputText}>
                  <div>
                    <InputText {...inputTex1} />
                  </div>
                </div>
                <div></div>
                <div className={styles.inputText}>
                  <div>
                    <div className={styles.form_input}>
                      <div className={styles.form_input_label}>Color de zona</div>
                      <div className={styles.form_input_content}>
                        <ColorPicker
                          value={color}
                          onChange={(e: ColorPickerChangeEvent) => setColor(e.value)}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.row2}>
                <div className={styles.inputText}>
                  <div>
                    <InputText {...inputTex3} />
                  </div>
                </div>
                <div></div>
                <div className={styles.inputText}>
                  <div>
                    <InputText {...inputTex4} />
                  </div>
                </div>
              </div>
              <div className={styles.row2}>
                <div className={styles.inputText}>
                  <div>
                    <InputText {...inputTex5} />
                  </div>
                </div>
                <div></div>
                <div className={styles.inputText}>
                  <div>
                    <InputText {...inputTex6} />
                  </div>
                </div>
              </div>
              <div className={styles.row2}>
                <div className={styles.inputText}>
                  <div>
                    <InputText {...inputTex7} />
                  </div>
                </div>
                <div></div>
                <div className={styles.inputText}>
                  <div>
                    <InputText {...inputTex8} />
                  </div>
                </div>
              </div>
              <div className={styles.form_calendar}>
                <div className={styles.form_calendar_title}>Inicio de la fase de venta/Final de la fase de ventas</div>
                <div className={styles.button_calendar} onClick={() => setShowSalesPhase(true)}>
                  <label>Seleccionar fecha</label>
                  <Image src={calendarLogo.src} alt='icon' width={20} height={20} />
                </div>
              </div>
              <div className={styles.form_list}>
                <div className={styles.form_table}>
                  <DataTable
                    columns={dataTableColumns}
                    data={data}
                    loading={false}
                    selectionMode='single'
                    rowHeight='40px'
                    variant='primary'
                  />
                </div>
              </div>
              <div className={styles.form_buttons}>
                <Button
                  name='add_rows'
                  variant='transparent'
                  height='50px'
                  width='200px'
                >
                  <div className={styles.button} >
                    <div className={styles.button_icon}>
                      <Image alt='icon' src={plusLogo} />
                    </div>
                    <label>Agregar filas</label>
                  </div>
                </Button>
                <Button
                  name='add_ticket'
                  variant='transparent'
                  height='50px'
                  width='200px'
                >
                  <div className={styles.button} >
                    <div className={styles.button_icon}>
                      <Image alt='icon' src={plusLogo} />
                    </div>
                    <label>Agregar boleto</label>
                  </div>
                </Button>
                <Button
                  name='add_zone'
                  variant='transparent'
                  height='50px'
                  width='200px'
                >
                  <div className={styles.button} >
                    <div className={styles.button_icon}>
                      <Image alt='icon' src={plusLogo} />
                    </div>
                    <label>Nueva zona</label>
                  </div>
                </Button>
              </div>
              <div className={styles.divButtons}>
                <div className={styles.divButtonsAbsolute}>
                  <div className={styles.btns}>
                    <Button
                      type='button'
                      variant='grayForm'
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
                      name='continue'
                      variant="blackForm"
                      borderRadius='10px'
                      className={styles.blackBtn}
                    >
                      Continuar
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </FormHookProvider>
          {showSalesPhase &&
            <SalesPhaseProvider>
              <SalesPhase onHide={() => setShowSalesPhase(false)} />
            </SalesPhaseProvider>}
        </BackBlackCss>
      </div>
      {showModalRows &&
        <RowsProvider id={id}>
          <ModalRows onHide={() => { setShowModalRows(false), setAddRows(false) }} id={id} />
        </RowsProvider>}
    </>
  )
}

export default Form7
