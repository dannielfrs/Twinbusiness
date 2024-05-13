import { useContext, useEffect, useState } from "react"
import Image from "next/image"
import Button from "@/components/molecules/Button/Button/Button"
import styles from './styles.module.scss'
import editimg from '@/../public/images/Events/editar@2.png'
import deleteimg from '@/../public/images/Events/eliminar@2.png'
// import save from '@/../public/images/Events/save.svg'
import { Alert4 } from "@/components/molecules/Alert4/Alert4"
import { PhoneNumberContext } from '@/context/authenticated/events/register/phoneNumber'

interface ComponentProps {
  onHide?: () => any
}

export const ModalPhoneNumber: React.FC<ComponentProps> = ({ onHide }) => {

  const { loading, data, savedSuccess, createItem, updateItem, deleteItem } = useContext(PhoneNumberContext)
  const [phoneData, setPhoneData] = useState<any[]>([])
  const [number, setNumber] = useState<string>()

  useEffect(() => {
    const result = data.map((item: any, index: any) => (
      { ...item, uuid: index + 1, disabled: true }
    ))
    setPhoneData(result)
  }, [data])

  const handleAddItem = () => {
    const item = {
      phone_number: '',
      id: '',
      uuid: phoneData.length + 1,
      disabled: false,
      actions: { edit: false, delete: true, add: true }
    }
    setPhoneData([...phoneData, item])
    setNumber('')
  }

  const handleSaveitem = (e: any, item: any) => {
    if (e.key === 'Enter') {
      if (item.id !== '' && e.target.value.length === 10) updateItem(e.target.value, item.id)
      else if (e.target.value.length === 10) createItem(e.target.value)
    }
  }

  const handleSave = (item: any) => {
    if (item.id !== '' && number?.length === 10) updateItem(number, item.id)
    else if (number?.length === 10) createItem(number)
  }

  const handleDeleteItem = (item: any, index: number) => {
    if (item.id !== '') {
      deleteItem(item.id)
    } else {
      const array = [...phoneData]
      if (index !== -1) {
        array.splice(index, 1)
        array.map((item, i) => (
          item.uuid = i + 1
        ))
        setPhoneData(array)
      }
    }
  }

  const handleEditItem = (index: number) => {
    const array = [...phoneData]
    array[index].disabled = false
    array[index].actions.edit = false
    array[index].actions.add = true
    setPhoneData(array)
    setNumber('')
  }

  return (
    <>
      <div className={styles.modal}>
        <div className={`${styles.content_modal} ${styles['small']}`}>
          <div className={styles.subcontent_modal}>
            <div className={styles.divtitle}>
              <h1>¡ Agrega tus contactos !</h1>
            </div>
            <div className={styles.backgroundColorGray}>
              <div className={styles.ModalContent}>
                <div className={styles.divtitle}>
                  <h2>Telefonos de la empresa</h2>
                </div>
                <div className={styles.divList}>
                  {phoneData.length > 0 && phoneData.map((item: any, index: number) => {
                    return (
                      <div className={styles.item} key={index}>
                        <input
                          defaultValue={item.phone_number}
                          disabled={item.disabled}
                          onKeyDown={(e) => handleSaveitem(e, item)}
                          className={`${styles.inputCustom} ${item.disabled ? styles.input_disabled : ''}`}
                          minLength={10}
                          maxLength={10}
                          onChange={(e) => setNumber(e.target.value)}
                        />
                        <div className={styles.item_actions}>
                          {item.actions.add &&
                            <div className={styles.action_button} onClick={(e) => handleSave(item)}>
                              {/* <img src={save.src} className={styles.img19} /> */}
                              Guardar
                            </div>}
                          {item.actions.edit &&
                            <div className={styles.icons} onClick={() => handleEditItem(index)}>
                              <Image src={editimg.src} alt='icon' width={15} height={15} />
                            </div>}
                          {item.actions.delete &&
                            <div className={styles.icons} onClick={() => handleDeleteItem(item, index)}>
                              <Image src={deleteimg.src} alt='icon' width={15} height={15} />
                            </div>}
                        </div>
                      </div>
                    )
                  })}
                </div>
                <div className={styles.button_add} onClick={handleAddItem}>
                  <div className={styles.addLabel} >
                    <label>+</label>
                  </div>
                  <label className={styles.labelctm}>Agregar contacto</label>
                </div>
              </div>
            </div>
            <div className={styles.divBtns}>
              <div className={styles.btns}>
                <Button
                  borderRadius="10px"
                  variant="grayForm"
                  onClick={onHide}
                >
                  Cerrar
                </Button>
              </div>
              {/* <div className={styles.btns}>
              <Button
                borderRadius="10px"
                variant="blackForm"
                onClick={() => { }}
              >
                Guardar
              </Button>
            </div> */}
            </div>
          </div>
        </div>
        <div className={styles.capa}></div>
      </div>
      <Alert4
        visible={savedSuccess}
        icon='success'
        title='Registrado con éxito'
      // labelButton='Ok'
      // onClickButton={onHide}
      />
    </>
  )
}
