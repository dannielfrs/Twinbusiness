import { ReactNode, memo } from 'react'
import styles from './styles.module.scss'
import Button from '../Button/Button/Button'
import { Modal } from '@/components/atoms/Modal/Modal'

interface ComponentProps {
  visible?: boolean
  onHide?: () => void // Callback to invoke when dialog is hidden
  dismissableMask?: boolean
  labelButton?: string
  onClickButton?: () => void
  children?: ReactNode
}

export const ModalQr: React.FC<ComponentProps> = memo(({
  visible,
  onHide = () => { },
  dismissableMask,
  labelButton,
  onClickButton,
  children
}) => {

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
        {children}
        <p className={styles.modal_message}>Al escanear el QR, se mostrarán tus datos como tarjeta de presentación</p>
        <div className={styles.modal_buttons}>
          {labelButton &&
            <div style={{ width: '219px' }}>
              <Button
                onClick={onClickButton}
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

ModalQr.displayName = 'ModalQr'
