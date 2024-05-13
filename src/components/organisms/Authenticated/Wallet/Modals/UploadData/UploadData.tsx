import { useContext, useEffect, useState } from 'react'
import styles from './UploadData.module.scss'
import Image from 'next/image'
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form'
import TWINBUSINESS from '@/../public/images/Home/logoGrande2.png'
import FormHookProvider from '@/components/layouts/Form/FormHookProvider/FormHookProvider'
import Button from '@/components/molecules/Button/Button/Button'
import { WalletDocumentsContext } from '@/context/authenticated/wallet/walletDocuments'

interface ComponentProps {
  title?: string;
  msj?: string;
  imgs?: string;
  imgsTwo?: string;
  imgsThree?: string;
  imgsFour?: string;
  type?: string;
  closeModal?: any;
  textBtn?: string;
  textBtnTwo?: string;
  textwo?: string;
  texthre?: string;
  pass?: string;
  passConfirm?: string;
  onClickId: () => void;
  onClickSelfie: () => void;
  onClickAddressProof: () => void;
}

export const UploadData: React.FC<ComponentProps> = ({
  title,
  msj,
  imgs,
  imgsTwo,
  imgsThree,
  imgsFour,
  textBtn,
  textBtnTwo,
  closeModal,
  onClickId,
  onClickSelfie,
  onClickAddressProof,
}) => {

  const { data, documentTypesList, sendReview } = useContext(WalletDocumentsContext)
  const methods = useForm()
  const [showId, setShowId] = useState<boolean>(false)
  const [showSelfie, setShowSelfie] = useState<boolean>(false)
  const [showAddressProof, setShowAddressProof] = useState<boolean>(false)
  const [idCompleted, setIdCompleted] = useState<boolean>(false)
  const [selfieCompleted, setSelfieCompleted] = useState<boolean>(false)
  const [addressProofCompleted, setAddressProofCompleted] = useState<boolean>(false)
  const [docsCompleted, setDocsCompleted] = useState<boolean>(false)

  useEffect(() => {
    if (data?.validation_document?.length > 0) {
      setIdCompleted(data.validation_document.some((item: any) => item.document.text === 'Identificación' || item.document.text === 'Pasaporte'))
      setSelfieCompleted(data.validation_document.some((item: any) => item.document.text === 'Selfie'))
      setAddressProofCompleted(data.validation_document.some((item: any) => item.document.text === 'Comprobante de domicilio'))
    }
  }, [data])

  useEffect(() => {
    if (documentTypesList.length > 0) {
      setShowId(documentTypesList.some((item: any) => item.text === 'Identificación'))
      setShowSelfie(documentTypesList.some((item: any) => item.text === 'Selfie'))
      setShowAddressProof(documentTypesList.some((item: any) => item.text === 'Comprobante de domicilio'))
    }
  }, [documentTypesList])

  useEffect(() => {
    if (idCompleted && selfieCompleted && addressProofCompleted) {
      setDocsCompleted(true)
    }
  }, [idCompleted, selfieCompleted, addressProofCompleted])

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    if (docsCompleted) {
      sendReview()
    }
  }

  return (
    <div className={styles.modal_wrapper}>
      <FormHookProvider methods={methods} onSubmit={onSubmit}>
        <div className={styles.modalback}>
          <div className={styles.modal}>
            <div className={styles.imageTime}>
              <Image alt='logo' src={TWINBUSINESS} />
            </div>
            <div className={styles.fDiv}>
              <div className={styles.imgs}>
                {imgs && (
                  <Image
                    alt='icon'
                    src={imgs}
                    width={30}
                    height={30}
                  />
                )}
                <div className={styles.msj}>{msj}</div>
                {imgs && (
                  <Image
                    alt='icon'
                    src={imgs}
                    width={30}
                    height={30}
                  />
                )}
              </div>
              <div className={styles.title}>{title}</div>
              <div className={styles.section_items_container}>
                {showId &&
                  <div className={`${styles.section_item} ${idCompleted ? styles.button_disabled : ''}`} onClick={onClickId}>
                    <div className={styles.text}>Identificación</div>
                    <div>
                      {imgsTwo && (
                        <Image
                          alt='icon'
                          src={imgsTwo}
                          width={20}
                          height={20}
                        />
                      )}
                    </div>
                  </div>
                }
                {showSelfie &&
                  <div className={`${styles.section_item} ${selfieCompleted ? styles.button_disabled : ''}`} onClick={onClickSelfie}>
                    <div className={styles.text}>Selfie</div>
                    <div>
                      {imgsThree && (
                        <Image
                          alt='icon'
                          src={imgsThree}
                          width={20}
                          height={20}
                        />
                      )}
                    </div>
                  </div>
                }
                {showAddressProof &&
                  <div className={`${styles.section_item} ${addressProofCompleted ? styles.button_disabled : ''}`} onClick={onClickAddressProof}>
                    <div className={styles.text}>Comprobante de domicilio</div>
                    <div>
                      {imgsFour && (
                        <Image
                          alt='icon'
                          src={imgsFour}
                          width={25}
                          height={25}
                        />
                      )}
                    </div>
                  </div>
                }
              </div>
              <div className={styles.section_buttons}>
                <div style={{ width: 150 }}>
                  <Button
                    type='button'
                    fontSize='14px'
                    borderRadius="10px"
                    variant='whitebtn'
                    onClick={closeModal}
                  >
                    {textBtn}
                  </Button>
                </div>
                <div style={{ width: 150 }}>
                  <Button
                    fontSize='14px'
                    borderRadius="10px"
                    variant='blackbtn'
                    className={docsCompleted ? '' : styles.button_disabled}
                  >
                    {textBtnTwo}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </FormHookProvider>
    </div>
  )
}
