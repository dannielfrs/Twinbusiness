'use client'

import { useContext, useEffect, useState } from 'react'
import styles from './Wallet.module.scss'
import Card from '@/components/molecules/Card/Card'
import { TabPanel, TabView } from 'primereact/tabview'
import Button from '@/components/molecules/Button/Button/Button'
import WalletPersonal from './WalletPersonal/WalletPersonal'
import ModalSignature from './Modals/ModalSignature'
import { WalletDocumentsContext } from '@/context/authenticated/wallet/walletDocuments'
import { UploadData } from './Modals/UploadData/UploadData'
import danger from '@/../../public/images/icons/danger.png'
import camera from '@/../../public/images/icons/iconCamera.png'
import clip from '@/../../public/images/icons/iconClip.png'
import iconUpload from '@/../../public/images/icons/iconUpload.png'
import Identification from './Modals/Identification/Identification'
import { Alert3 } from '@/components/molecules/Alert3/Alert3'
import { Selfie } from '@/components/organisms/Authenticated/Wallet/Modals/Selfie/Selfie'
import { Alert } from '@/components/molecules/Alert/Alert'

export default function Wallet () {
  const { data, successSignature, errorSignature, identificationCompleted, selfieCompleted, addressProofCompleted, sendReviewCompleted, sendReviewFailed } = useContext(WalletDocumentsContext)
  const [activeIndex, setActiveIndex] = useState(0)
  const [activeModal, setActiveModal] = useState(0)
  const [alertError, setAlertError] = useState(false)
  const [alertSuccess, setAlertSuccess] = useState(false)
  const [remainingDays, setRemainingDays] = useState(99)
  const [identificationSuccess, setIdentificationSuccess] = useState(false)
  const [selfieSuccess, setSelfieSuccess] = useState(false)
  const [addressProofSuccess, setAddressProofSuccess] = useState(false)
  const [sendReviewSuccess, setSendReviewSuccess] = useState(false)
  const [sendReviewError, setSendReviewError] = useState(false)

  useEffect(() => {
    if (data.signature !== undefined && activeModal === 0) {
      if (data.signature) {
        if (data.complete_registration === 1) setActiveModal(0)
        else setActiveModal(2)
      } else setActiveModal(1)
    }
    if (data.remaining_days !== undefined) setRemainingDays(data.remaining_days)
  }, [data])

  useEffect(() => {
    if (successSignature) {
      setAlertSuccess(true)
      setActiveModal(0)
    }
    if (errorSignature) {
      setAlertError(true)
      setActiveModal(0)
    }
  }, [successSignature, errorSignature])

  useEffect(() => {
    if (identificationCompleted) {
      setActiveModal(0)
      setIdentificationSuccess(true)
      setTimeout(() => {
        setIdentificationSuccess(false)
        setActiveModal(2)
      }, 4000)
    }
  }, [identificationCompleted])

  useEffect(() => {
    if (selfieCompleted) {
      setActiveModal(0)
      setSelfieSuccess(true)
      setTimeout(() => {
        setSelfieSuccess(false)
        setActiveModal(2)
      }, 4000)
    }
  }, [selfieCompleted])

  useEffect(() => {
    if (addressProofCompleted) {
      setActiveModal(0)
      setAddressProofSuccess(true)
      setTimeout(() => {
        setAddressProofSuccess(false)
        setActiveModal(2)
      }, 4000)
    }
  }, [addressProofCompleted])

  useEffect(() => {
    if (sendReviewCompleted) {
      setActiveModal(0)
      setSendReviewSuccess(true)
      setTimeout(() => {
        setSendReviewSuccess(false)
      }, 4000)
    }
  }, [sendReviewCompleted])

  useEffect(() => {
    if (sendReviewFailed) {
      setActiveModal(0)
      setSendReviewError(true)
      setTimeout(() => {
        setSendReviewError(false)
      }, 4000)
    }
  }, [sendReviewFailed])

  const tabs = [
    { id: 0, label: 'Personal', route: 'system/wallet/personal' },
    { id: 1, label: 'Empresarial', route: 'wallet/personal' },
    { id: 2, label: 'Invitado', route: 'system/wallet/personal' }
  ]

  return (
    <>
      <div className={styles.Wallet}>
        <Card className={styles.CardWallet}>
          {tabs &&
            <div className={styles.tabsBtns}>
              {tabs.map((e) => {
                return (
                  <div key={e.id} className={styles.cont_tabs}>
                    <Button
                      type='button'
                      onClick={() => setActiveIndex(parseInt(e.id.toString()))}
                      className={`${activeIndex === parseInt(e.id.toString()) && styles.active}`}
                      variant={activeIndex === parseInt(e.id.toString()) ? 'tabActive' : 'tabBtn'}
                      height='35px'
                    >
                      {e.label}
                    </Button>
                  </div>
                )
              })}
            </div>}
          <TabView activeIndex={activeIndex} onTabChange={(e) => setActiveIndex(e.index)}>
            <TabPanel header='Personal' className={styles.tab}>
              <div className={styles.m0}>
                <WalletPersonal />
              </div>
            </TabPanel>
            <TabPanel header='Empresarial'>
              <div className='card'>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
                eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo
                enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui
                ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.
              </div>
            </TabPanel>
            <TabPanel header='Invitado'>
              <div className='card'>
                At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti
                quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in
                culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.
                Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.
              </div>
            </TabPanel>
          </TabView>
        </Card>
      </div>
      {activeModal === 1 &&
        <ModalSignature
          title='Firma electronica'
          text='Registrar tu firma para realizar pagos'
          textwo='Es necesario que registres una firma personal,'
          texthre='El cual usaras para confirmar tus pagos y transferencias'
          pass='INGRESA 6 DIGITOS'
          passConfirm='CONFIRMA TU FIRMA'
        />}
      {alertError &&
        <Alert3
          icon='error'
          title='NO HEMOS PODIDO REGISTRAR TU FIRMA'
          content='Con esta firma podrás efectuar tus pagos y transferencias'
          labelButton='Volver a intentar'
          onClickButton={() => { setAlertError(false); setActiveModal(1) }}
        />}
      {alertSuccess &&
        <Alert3
          icon='success'
          title='TU FIRMA HA SIDO REGISTRADA CON ÉXITO'
          content='Con esta firma podrás efectuar tus pagos y transferencias'
          labelButton='OK'
          onClickButton={() => { setAlertSuccess(false); setActiveModal(2) }}
        />}
      {activeModal === 2 &&
        <UploadData
          imgs={danger.src}
          imgsTwo={iconUpload.src}
          imgsThree={camera.src}
          imgsFour={clip.src}
          msj={`Tienes ${remainingDays} dias Para llenar tus datos`}
          title='Para gozar de los beneficios de la plataforma, se le solicita completar los siguientes campos:'
          textBtn='En otro momento'
          textBtnTwo='Enviar'
          closeModal={() => setActiveModal(0)}
          onClickId={() => setActiveModal(3)}
          onClickSelfie={() => setActiveModal(4)}
          onClickAddressProof={() => setActiveModal(5)}
        />}
      {activeModal === 3 &&
        <Identification
          msj='Ingresa tu identificación por ambos lados'
          type='id'
        />}
      {activeModal === 4 && <Selfie />}
      {activeModal === 5 &&
        <Identification
          msj='Ingresa tu comprobante de domicilio'
          type='address'
        />}
      {identificationSuccess &&
        <Alert3
          icon='success'
          title='Tu identificación se ha guardado con éxito'
          content='Estas a tres pasos de terminar tu registro KYC'
        />}
      {selfieSuccess &&
        <Alert3
          icon='success'
          title='Tu selfie se ha guardado con éxito'
          content='Estas a dos pasos de terminar tu registro KYC'
        />}
      {addressProofSuccess &&
        <Alert3
          icon='success'
          title='Tu comprobante de domicilio se ha guardado con éxito'
          content='Estas a un paso de terminar tu registro KYC'
        />}
      <Alert
        visible={sendReviewSuccess}
        title='¡Envio de datos exitoso!'
        icon='success'
      />
      <Alert
        visible={sendReviewError}
        title='Error al enviar los datos!'
        icon='error'
      />
    </>
  )
}
