'use client'

import { useContext, useEffect, useState } from 'react'
import styles from './FormSponsors.module.scss'
import { useForm } from 'react-hook-form'
import Button from "@/components/molecules/Button/Button/Button"
import { CardSponsor } from './CardSponsor/CardSponsor'
import FormHookProvider from '@/components/layouts/Form/FormHookProvider/FormHookProvider'
import { Alert4 } from '@/components/molecules/Alert4/Alert4'
import { SponsorsContext } from '@/context/authenticated/events/register/createEvent/sponsors/SponsorsContext'

interface ComponentProps {
  mode?: string
  onHide?: () => void
}

export const FormSponsors: React.FC<ComponentProps> = ({ onHide = () => { } }) => {

  const { loading, data, saveData, savedSuccess, deleteItem, closeSponsors } = useContext(SponsorsContext)
  const methods = useForm()
  const [sponsorsData, setSponsorsData] = useState<any>([])

  useEffect(() => {
    setSponsorsData(data)
  }, [data])

  useEffect(() => {
    if (closeSponsors) onHide()
  }, [closeSponsors])

  const onSubmit = () => {
    saveData(sponsorsData)
  }

  const handleAddItem = () => {
    const item = {
      id: '',
      name: '',
      number: sponsorsData.length + 1,
      logo: null,
    }
    setSponsorsData([...sponsorsData, item])
  }

  const handleSetName = (name: string, index: number) => {
    const array = [...sponsorsData]
    array[index].name = name
    setSponsorsData(array)
  }

  const handleDeleteItem = (item: any, index: number) => {
    if (item.id !== '') {
      deleteItem(item.id)
    } else {
      const array = [...sponsorsData]
      if (index !== -1) {
        array.splice(index, 1)
        array.map((item, i) => {
          if (item.id === '') return item.number = i + 1
        })
        setSponsorsData(array)
      }
    }
  }

  return (
    <div className={styles.section}>
      <FormHookProvider methods={methods} onSubmit={onSubmit}>
        <div className={styles.ContGuest}>
          <div className={styles.ContTop}>
            <div className={styles.textLeft}>
              <p className={styles.titleInfo}>Información de patrocinadores</p>
              <p className={styles.textInfo}>Los datos de los patrocinadores estarán disponibles para que los incluyas en tu vitrina.</p>
              <p className={styles.textInfo} style={{ width: 500 }}>Solo se guardarán los patrocinadores con imagen y nombre</p>
            </div>
            <div className={styles.totalSponsor}>Patrocinadores totales {data.length}</div>
          </div>
          <div style={{ width: '360px' }}>
            <Button
              type='button'
              onClick={handleAddItem}
              variant="blackForm"
              borderRadius="10px"
              height="50px"
            >
              Agregar patrocinadores
            </Button>
          </div>
          <div className={styles.ContCards}>
            {sponsorsData.map((item: any, index: number) => {
              return (
                <div className={styles.Card} key={item.number}>
                  <CardSponsor
                    number={item.number}
                    index={index}
                    defaultImage={item.multimedia?.url}
                    name={item.name}
                    setName={(name: string) => handleSetName(name, index)}
                    onClickDelete={() => handleDeleteItem(item, index)}
                    sponsorsData={sponsorsData}
                    setSponsorsData={setSponsorsData}
                  />
                </div>
              )
            })}
          </div>
          <div className={styles.section_footer}>
            <div style={{ width: '200px' }}>
              <Button
                type='button'
                onClick={onHide}
                variant="grayForm"
                height='50px'
                borderRadius='10px'
              >
                Regresar
              </Button>
            </div>
            <div style={{ width: '200px' }}>
              <Button
                variant="blackForm"
                borderRadius='10px'
                height='50px'
              >
                Continuar
              </Button>
            </div>
          </div>
        </div>
      </FormHookProvider>
      <Alert4
        visible={savedSuccess}
        icon='success'
        title='PATROCINADORES GUARDADOS CON ÉXITO'
      // labelButton='Ok'
      // onClickButton={onHide}
      />
    </div>
  )
}
