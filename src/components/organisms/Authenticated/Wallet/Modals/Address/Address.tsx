import { useContext, useEffect, useState } from 'react'
import styles from './Address.module.scss'
import Button from '@/components/molecules/Button/Button/Button'
import imgFront from '@/../public/images/icons/iconUpload.png'
import Image from 'next/image'
import { TabPanel, TabView } from 'primereact/tabview'
import { ImageUpload } from '@/components/molecules/Upload/ImageUpload/ImageUpload'
import { ProgressSpinner } from 'primereact/progressspinner'
import { WalletDocumentsContext } from '@/context/authenticated/wallet/walletDocuments'

interface ComponentProps {
}

export const Address: React.FC<ComponentProps> = () => {

  const { data, addressProofOptions, saveDocument, loading, setAddressProofCompleted } = useContext(WalletDocumentsContext)
  const [activeIndex, setActiveIndex] = useState(0)
  const [imageFile, setImageFile] = useState<File | null>(null)
  const [imageUrl, setImageUrl] = useState<string>()
  const [fileSent, setFileSent] = useState<boolean>(false)
  const [address] = addressProofOptions?.filter((item: any) => item.text === 'Comprobante de domicilio')

  const tabs = [
    { id: 0, label: 'Comprobante', img: imgFront }
  ]

  const getData = () => {
    const docData = data.validation_document.filter((item: any) => item.document.text === 'Comprobante de domicilio')
    if (docData.length === 1) {
      setImageUrl(docData[0].multimedia[0].url)
    }
    if (fileSent && docData.length === 1) {
      setAddressProofCompleted(true)
    }
  }

  useEffect(() => {
    setAddressProofCompleted(false)
  }, [])

  useEffect(() => {
    getData()
  }, [data])

  useEffect(() => {
    if (imageFile !== null && imageFile !== undefined) {
      saveDocument(address.id, imageFile, '0')
      setFileSent(true)
    }
  }, [imageFile])

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
                    height='130px'
                    width='150px'
                  >
                    <div className={styles.cardIn}>
                      <Image
                        src={e.img}
                        alt='logo'
                        width={64}
                        height={80}
                      >
                      </Image>
                      <label>{e.label}</label>
                    </div>
                  </Button>
                </div>
              )
            })}
          </div>
        }
        <TabView activeIndex={activeIndex} onTabChange={(e) => setActiveIndex(e.index)}>
          <TabPanel header='Frente'>
            <div>
              <ImageUpload
                name='fileupload_adddress'
                title='Buscar comprobante'
                accept='image/png, image/jpg, image/jpeg'
                defaultImage={imageUrl}
                setImageFile={setImageFile}
                width='270px'
                height='305px'
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
