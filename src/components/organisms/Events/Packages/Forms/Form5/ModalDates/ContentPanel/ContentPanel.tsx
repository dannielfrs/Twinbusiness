import { useContext, useEffect, useState } from "react"
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form'
import InputText from '@/components/molecules/InputText/InputText'
import Button from "@/components/molecules/Button/Button/Button"
import styles from './styles.module.scss'
import deleteimg from '@/../public/images/Events/eliminar@2.png'
import FormHookProvider from '@/components/layouts/Form/FormHookProvider/FormHookProvider'
import { DateContext } from "@/context/authenticated/events/register/createEvent/date/DateContext"
import { Alert4 } from "@/components/molecules/Alert4/Alert4"

interface ComponentProps {
  title?: string
  onHide?: () => any
}

const ContentPanel: React.FC<ComponentProps> = ({ title, onHide = () => { } }) => {

  const { loading, data, saveData, deleteItem, savedSuccess } = useContext(DateContext)
  const methods = useForm()
  const [listData, setListData] = useState<any[]>([])

  useEffect(() => {
    if (data.length > 0) {
      const result = data.map((item: any, index: number) => (
        { ...item, uuid: index + 1, disabled: true }
      ))
      setListData(result)
    } else {
      setListData([])
    }
  }, [data])

  const onSubmit: SubmitHandler<FieldValues> = () => {
    saveData(listData)
  }

  const handleAddItem = () => {
    const item = {
      id: '',
      uuid: listData.length + 1,
      disabled: false,
      actions: { edit: false, delete: true }
    }
    setListData([...listData, item])
  }

  const handleSaveitem = (e: any, item: any) => {
    // if (e.key === 'Enter') {
    //   if (item.start_date && item.end_date && item.start_time && item.end_time) {
    //     createItem(item)
    //   }
    // }
  }

  const handleDeleteItem = (item: any, index: number) => {
    if (item.id !== '') {
      deleteItem(item.id)
    } else {
      const array = [...listData]
      if (index !== -1) {
        array.splice(index, 1)
        array.map((item, i) => (
          item.uuid = i + 1
        ))
        setListData(array)
      }
    }
  }

  const handleOnChange = (e: any, index: number) => {
    const array = [...listData]
    array[index] = {
      ...array[index],
      [e.target.name]: e.target.value
    }
    setListData(array)
  }

  return (
    <FormHookProvider methods={methods} onSubmit={onSubmit}>
      <div className='card'>
        <div className={styles.section_header}>{title}</div>
        <div className={styles.Panel}>
          <div className={styles.row2}>
            <div>
              <h1>Nombre del evento</h1>
            </div>
            <div>
              <h1>Fechas de eventos recurrentes</h1>
            </div>
          </div>
          <div className={styles.row1}>
            <InputText
              name='eventnamelocation'
              label=''
              placeholder='Festival de taquilla'
              variant='white'
              height='60px'
            />
          </div>
          {listData.map((item: any, index: number) => {
            return (
              <div key={item.uuid} className={styles.rowEnterEvent}>
                <div>
                  <h1>Ingresar fecha de eventos recurrentes</h1>
                  <div className={styles.rowDates}>
                    <div className={styles.divLabel}>
                      <label>Fecha inicia</label>
                    </div>
                    <div className={styles.inputCustom}>
                      <div className={styles.rowInput}>
                        <input
                          name='start_date'
                          type='date'
                          defaultValue={item.start_date}
                          onChange={(e) => handleOnChange(e, index)}
                          onKeyDown={(e) => handleSaveitem(e, item)}
                          disabled={item.disabled}
                          className={`${styles.inputCustom} ${item.disabled ? styles.input_disabled : ''}`}
                        />
                      </div>
                    </div>
                  </div>
                  <div className={styles.rowDates}>
                    <div className={styles.divLabel}>
                      <label>Fecha finaliza</label>
                    </div>
                    <div className={styles.inputCustom}>
                      <div className={styles.rowInput}>
                        <input
                          name='end_date'
                          type='date'
                          defaultValue={item.end_date}
                          onChange={(e) => handleOnChange(e, index)}
                          onKeyDown={(e) => handleSaveitem(e, item)}
                          disabled={item.disabled}
                          className={`${styles.inputCustom} ${item.disabled ? styles.input_disabled : ''}`}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className={styles.hoursdiv}>
                    <label>Las fechas seleccionadas la podrás editar en vitrina</label>
                  </div>
                  <div className={styles.rowDates}>
                    <div className={styles.divLabel}>
                      <label>Hora de Inicio</label>
                    </div>
                    <div className={styles.inputCustom}>
                      <div className={styles.rowInput}>
                        <input
                          name='start_time'
                          type='time'
                          defaultValue={item.start_time}
                          onChange={(e) => handleOnChange(e, index)}
                          onKeyDown={(e) => handleSaveitem(e, item)}
                          disabled={item.disabled}
                          className={`${styles.inputCustom} ${item.disabled ? styles.input_disabled : ''}`}
                        />
                      </div>
                    </div>
                  </div>
                  <div className={styles.rowDates}>
                    <div className={styles.divLabel}>
                      <label>Hora de Finalización</label>
                    </div>
                    <div className={styles.inputCustom}>
                      <div className={styles.rowInput}>
                        <input
                          name='end_time'
                          type='time'
                          defaultValue={item.end_time}
                          onChange={(e) => handleOnChange(e, index)}
                          onKeyDown={(e) => handleSaveitem(e, item)}
                          disabled={item.disabled}
                          className={`${styles.inputCustom} ${item.disabled ? styles.input_disabled : ''}`}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.form_actions}>
                  {item.actions.delete &&
                    <div className={styles.form_button_delete} onClick={() => handleDeleteItem(item, index)}>
                      <img src={deleteimg.src} />
                    </div>}
                </div>
              </div>
            )
          })
          }
          <div className={styles.divfooteradd}>
            <div className={styles.row2}>
              <div
                className={styles.addNewElement}
                onClick={handleAddItem}
              >
                <div className={styles.addLabel}>
                  <label>+</label>
                </div>
                <label> Agregar fechas recurrentes</label>
              </div>
              <div className={styles.datesdivright}>
                <h1>Fechas totales: {data.length} dias</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.section_footer}>
        <div style={{ width: '170px' }}>
          <Button
            type='button'
            variant="grayForm"
            onClick={onHide}
            borderRadius="10px"
            height="50px"
          >
            Regresar
          </Button>
        </div>
        <div style={{ width: '170px' }}>
          <Button
            variant="blackForm"
            borderRadius="10px"
            height="50px"
          >
            Guardar
          </Button>
        </div>
      </div>
      <Alert4
        visible={savedSuccess}
        icon='success'
        title='¡EVENTOS RECURRENTES GUARDADOS CON ÉXITO!'
        labelButton='Ok'
        onClickButton={onHide}
      />
    </FormHookProvider>
  )
}

export default ContentPanel