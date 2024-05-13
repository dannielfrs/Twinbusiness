import { useState, useEffect, useContext } from "react"
import { useForm, SubmitHandler, FieldValues } from "react-hook-form"
import Button from "@/components/molecules/Button/Button/Button"
import deleteimg from '@/../public/images/Events/eliminar@2.png'
import styles from './styles.module.scss'
import InputText from "@/components/molecules/InputText/InputText"
import plusLogo from '@/../../public/images/icons/plus.svg'
import Image from "next/image"
import FormHookProvider from "@/components/layouts/Form/FormHookProvider/FormHookProvider"
import { RowsContext } from '@/context/authenticated/events/register/createEvent/zone/rows/RowsContext'

interface ComponentProps {
  id: string
  onHide?: () => any
}

export const ModalRows: React.FC<ComponentProps> = ({ id, onHide = () => { } }) => {

  const { loading, data, saveData, savedSuccess } = useContext(RowsContext)
  const methods = useForm()
  const [rows, setRows] = useState([{ name: '', quantity: '' }])

  useEffect(() => {
    if (data.length > 0) {
      setRows(data)
    }
  }, [data])

  useEffect(() => {
    if (savedSuccess) onHide()
  }, [savedSuccess])

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    saveData(rows, id)
  }

  const addRow = () => {
    setRows([...rows, { name: '', quantity: '' }])
  }

  const handleInputChange = (e: any, index: number, prop: string) => {
    const array = [...rows]
    array[index] = { ...array[index], [prop]: e.target.value }
    setRows(array)
  }

  const deleteRow = (index: number) => {
    const array = [...rows]
    array.splice(index, 1)
    setRows(array)
  }

  return (
    <div className={styles.modal}>
      <div className={styles.content_modal}>
        <div className={styles.subcontent_modal}>
          <FormHookProvider methods={methods} onSubmit={onSubmit}>
            <div className={styles.backgroundColorGray}>
              <div className={styles.ModalContent}>
                <div className={styles.divtitle}>
                  <h2>Agregar filas</h2>
                </div>
                <div className={styles.divList}>
                  <div className={styles.both}>
                    <p className={styles.text1}>Cantidad de asientos presenciales en zona 500</p>
                    <p className={styles.text2}>Cantidad de asientos presenciales total 1,500</p>
                  </div>
                  <div className={styles.inputs}>
                    {rows.map((item, index) => (
                      <div key={index} style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                        <div style={{ width: '287px' }}>
                          <InputText
                            name={`name_${index}`}
                            label='Nombre de la fila'
                            placeholder='Ej. H'
                            value={item.name}
                            onChange={(e) => handleInputChange(e, index, 'name')}
                            required={false}
                            variant='bold'
                            rules={{ required: true }}
                          />
                        </div>
                        <div style={{ width: '287px' }}>
                          <InputText
                            name={`quantity_${index}`}
                            label='Cantidad'
                            placeholder='Max. 250'
                            value={item.quantity}
                            onChange={(e) => handleInputChange(e, index, 'quantity')}
                            required={false}
                            variant='bold'
                            rules={{ required: true }}
                          />
                        </div>
                        {index !== 0 &&
                          <div className={styles.delete} onClick={() => deleteRow(index)}>
                            <Image alt='icon' src={deleteimg} />
                          </div>}
                      </div>
                    ))}
                  </div>
                  <div className={styles.NewRow} onClick={addRow}>
                    <div className={styles.image}>
                      <Image alt='icon' src={plusLogo} />
                    </div>
                    <div>Agregar filas</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.divBtns}>
              <div className={styles.btns}>
                <Button
                  type='button'
                  borderRadius="10px"
                  variant="grayForm"
                  onClick={onHide}
                >
                  Cerrar
                </Button>
              </div>
              <div className={styles.btns}>
                <Button
                  borderRadius="10px"
                  variant="blackForm"
                >
                  Guardar
                </Button>
              </div>
            </div>
          </FormHookProvider>
        </div>
      </div>
    </div>
  )
}