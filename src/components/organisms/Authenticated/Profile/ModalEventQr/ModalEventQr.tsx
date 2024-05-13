import { memo, useContext } from 'react'
import styles from './styles.module.scss'
import { Modal } from '@/components/atoms/Modal/Modal'
import Button from '@/components/molecules/Button/Button/Button'
import Image from 'next/image'
import qr from '@/../public/images/icons/qr.png'
import { CardEventInfo } from '@/components/molecules/CardEventInfo/CardEventInfo'
import { EventControlPanelContext } from '@/context/authenticated/profile/company/eventControlPanel/EventControlPanelContext'
import { CardUserInfo } from '@/components/molecules/CardUserInfo/CardUserInfo'

interface ComponentProps {
  visible?: boolean
  onHide?: () => void // Callback to invoke when dialog is hidden
  dismissableMask?: boolean
  labelButton?: string
}

export const ModalEventQr: React.FC<ComponentProps> = memo(({
  visible,
  onHide = () => { },
  dismissableMask,
  labelButton,
}) => {

  const { loading, data } = useContext(EventControlPanelContext)

  return (
    <Modal
      visible={visible}
      onHide={onHide}
      closable={false}
      dismissableMask={dismissableMask}
      maskClassName={styles.mask}
      className={styles.modal}
    >
      <div className={styles.modal_container}>
        <div className={styles.modal_header}>QR DE INGRESO</div>
        <div style={{ width: '75%' }}>
          <CardEventInfo
            name={data.event?.name}
            imageUrl={data.event?.banner?.url}
            startDate={data.event?.date}
            startTime={data.event?.start_time}
            endDate={data.event?.date}
            endTime={data.event?.end_time}
          />
        </div>
        <div style={{ width: '50%' }}>
          <CardUserInfo
            name='Evelyn'
            profilePicture=''
            email='email@mail.com'
            role='Empresario secundario'
          />
        </div>
        <Image
          src={qr}
          alt='qr'
          width={260}
          height={260}
        />
        <div className={styles.modal_message}>Muestra este QR con tu identificación para acceder al evento</div>
        <div className={styles.modal_buttons}>
          {labelButton &&
            <div style={{ width: '220px' }}>
              <Button
                onClick={onHide}
                variant='blackAlert'
                height='50px'
                borderRadius="20px"
              >
                {labelButton}
              </Button>
            </div>
          }
        </div>
      </div>
    </Modal>
  )
})

ModalEventQr.displayName = 'ModalEventQr'
