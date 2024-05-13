import { useContext, useEffect, useState } from 'react'
import styles from './Id.module.scss'
import Button from '@/components/molecules/Button/Button/Button'
import imgFront from '@/../public/images/icons/frente.png'
import imgBacks from '@/../public/images/icons/reverso.png'
import Image from 'next/image'
import { ProgressSpinner } from 'primereact/progressspinner'
import { TabPanel, TabView } from 'primereact/tabview'
import { ImageUpload } from '@/components/molecules/Upload/ImageUpload/ImageUpload'
import { WalletDocumentsContext } from '@/context/authenticated/wallet/walletDocuments'

interface ComponentProps {
}

const Id: React.FC<ComponentProps> = () => {

  const { data, idOptions, saveDocument, loading, setIdentificationCompleted } = useContext(WalletDocumentsContext)
  const [activeIndex, setActiveIndex] = useState<number>(0)
  const [frontImageFile, setFrontImageFile] = useState<File | null>(null)
  const [backImageFile, setBackImageFile] = useState<File | null>(null)
  const [frontImageUrl, setFrontImageUrl] = useState<string>()
  const [backImageUrl, setBackImageUrl] = useState<string>()
  const [fileSent, setFileSent] = useState<boolean>(false)
  const [ident] = idOptions?.filter((item) => item.text === 'Identificación')

  const tabs = [
    { id: 0, label: 'Frente', img: imgFront },
    { id: 1, label: 'Reverso', img: imgBacks }
  ]

  const getData = () => {
    const docData = data.validation_document.filter((item: any) => item.document.text === 'Identificación')
    docData.forEach((item: any) => {
      if (item.back === 0) setFrontImageUrl(item.multimedia[0].url)
      else setBackImageUrl(item.multimedia[0].url)
    })
    if (fileSent && docData.length === 2) {
      setIdentificationCompleted(true)
    }
  }

  useEffect(() => {
    setIdentificationCompleted(false)
  }, [])

  useEffect(() => {
    getData()
  }, [data])

  useEffect(() => {
    if (frontImageFile !== null && frontImageFile !== undefined) {
      saveDocument(ident.id, frontImageFile, '0')
      setFileSent(true)
    }
  }, [frontImageFile])

  useEffect(() => {
    if (backImageFile !== null && backImageFile !== undefined) {
      saveDocument(ident.id, backImageFile, '1')
      setFileSent(true)
    }
  }, [backImageFile])

  return (
    <div style={{ width: '100%' }}>
      <div className={styles.textAlign}>
        {tabs &&
          <div className={styles.tabsBtns} >
            {tabs.map((e) => {
              return (
                <div key={e.id} className={styles.cont_tabs}>
                  <Button
                    type='button'
                    onClick={() => setActiveIndex(parseInt(e.id.toString()))}
                    className={`${activeIndex === parseInt(e.id.toString()) && styles.active}`}
                    variant={activeIndex === parseInt(e.id.toString()) ? 'tabActive' : 'tabBtn'}
                    height='100px'
                    width='150px'
                  >
                    <div className={styles.cardIn}>
                      <Image
                        src={e.img}
                        alt='logo'
                        width={64}
                        height={44}
                        style={{ borderRadius: '10%' }}
                      />
                      <label>{e.label}</label>
                    </div>
                  </Button>
                </div>
              )
            })}
          </div>
        }
        <TabView activeIndex={activeIndex} onTabChange={(e) => setActiveIndex(e.index)}>
          <TabPanel header='Frente' style={{ width: '600px' }}>
            <div style={{ width: '70%' }}>
              <ImageUpload
                name='fileupload_front'
                title='Buscar identificación'
                accept='image/png, image/jpg, image/jpeg'
                defaultImage={frontImageUrl}
                setImageFile={setFrontImageFile}
                height='200px'
                rules={{ required: false }}
              />
              {loading &&
                <div className={styles.modal_loading}>
                  <div>Validando tus datos</div>
                  <ProgressSpinner style={{ width: '30px', height: '30px' }} />
                </div>
              }
            </div>
          </TabPanel>
          <TabPanel header='Reverso' style={{ width: '600px' }}>
            <div style={{ width: '70%' }}>
              <ImageUpload
                name='fileupload_back'
                title='Buscar identificación'
                accept='image/png, image/jpg, image/jpeg'
                defaultImage={backImageUrl}
                setImageFile={setBackImageFile}
                height='200px'
                rules={{ required: false }}
              />
              {loading &&
                <div className={styles.modal_loading}>
                  <div>Validando tus datos</div>
                  <ProgressSpinner style={{ width: '30px', height: '30px' }} />
                </div>
              }
            </div>
          </TabPanel>
        </TabView>
      </div>
    </div>
  )
}

export default Id
