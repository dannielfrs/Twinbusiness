import { useContext, useEffect, useState } from "react"
import Button from "@/components/molecules/Button/Button/Button"
import styles from './styles.module.scss'
import editimg from '@/../public/images/Events/editar@2.png'
import deleteimg from '@/../public/images/Events/eliminar@2.png'
import save from '@/../public/images/Events/save.svg'
import { LinkContext } from "@/context/authenticated/events/register/createEvent/link/LinkContext"

interface ComponentProps {
  onHide?: () => any
}

export const ModalLinksStreaming: React.FC<ComponentProps> = ({ onHide }) => {

  const { loading, data, getData, createItem, updateItem, deleteItem } = useContext(LinkContext)
  const [linksData, setLinksData] = useState<any[]>([])
  const [link, setLink] = useState<string>()

  useEffect(() => {
    getData('1')
  }, [])

  useEffect(() => {
    if (data.length > 0) {
      const result = data.map((item: any, index: any) => (
        { ...item, uuid: index + 1, disabled: true }
      ))
      setLinksData(result)
    }
  }, [data])

  const handleAddItem = () => {
    const item = {
      url: '',
      id: '',
      uuid: linksData.length + 1,
      disabled: false,
      actions: { edit: false, delete: true, add: true }
    }
    setLinksData([...linksData, item])
  }

  const handleSaveitem = (e: any, item: any) => {
    if (e.key === 'Enter') {
      if (item.id !== '' && e.target.value !== '') updateItem(e.target.value, item.id, '1')
      else if (e.target.value !== '') createItem(e.target.value, '1')
    }
  }

  const handleSave = (item: any) => {
      if (link !== '') createItem(link, '1')
  }

  const handleDeleteItem = (item: any, index: number) => {
    if (item.id !== '') {
      deleteItem(item.id, '1')
    } else {
      const array = [...linksData]
      if (index !== -1) {
        array.splice(index, 1)
        array.map((item, i) => (
          item.uuid = i + 1
        ))
        setLinksData(array)
      }
    }
  }

  const handleEditItem = (index: number) => {
    const array = [...linksData]
    array[index].disabled = false
    setLinksData(array)
  }

  return (
    <div className={styles.modal}>
      <div className={`${styles.content_modal} ${styles['small']}`}>
        <div className={styles.subcontent_modal}>
          <div className={styles.divtitle}>
            <h1>¡ Agrega tus links !</h1>
          </div>
          <div className={styles.backgroundColorGray}>
            <div className={styles.ModalContent}>
              <div className={styles.divtitle}>
                <h2>Links del evento</h2>
              </div>
              <div className={styles.divList}>
                {linksData.length > 0 && linksData.map((item: any, index: number) => {
                  return (
                    <div className={styles.item} key={index}>
                      <input
                        defaultValue={item.url}
                        disabled={item.disabled}
                        onKeyDown={(e) => handleSaveitem(e, item)}
                        className={`${styles.inputCustom} ${item.disabled ? styles.input_disabled : ''}`}
                        onChange={(e) => setLink(e.target.value)}
                      />
                      {item.actions.edit &&
                        <div className={styles.icons} onClick={() => handleEditItem(index)}>
                          <img src={editimg.src} />
                        </div>}
                      {item.actions.delete &&
                        <div className={styles.icons} onClick={() => handleDeleteItem(item, index)}>
                          <img src={deleteimg.src} />
                        </div>}
                      {item.actions.add &&
                        <div className={styles.icons} onClick={(e) => handleSave(item)}>
                          <img src={save.src} className={styles.img19} />
                        </div>}
                    </div>
                  )
                })}
              </div>
              <div className={styles.button_add} onClick={handleAddItem}>
                <div className={styles.addLabel} >
                  <label>+</label>
                </div>
                <label className={styles.labelctm}>Agregar link</label>
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
  )
}
