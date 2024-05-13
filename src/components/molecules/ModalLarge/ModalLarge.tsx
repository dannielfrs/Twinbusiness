import { ReactNode } from "react"
import styles from './styles.module.scss'

interface ComponentProps {
  onHide?: any
  children?: ReactNode
}

export const ModalLarge: React.FC<ComponentProps> = ({ onHide, children }) => {

  return (
    <div className={styles.modal}>
      {children}
      <div className={styles.modal_buttons}>
        {/* <div className={styles.btndv}>
          <Button
            type='button'
            variant="grayForm"
            onClick={onHide}
            borderRadius="10px"
            height="50px"
          >
            Regresar
          </Button>
        </div> */}
        {/* <div className={styles.btndv}>
          <Button
              variant="blackForm"
              borderRadius="10px"
              height="50px"
            >
              Guardar
            </Button>
        </div> */}
      </div>
    </div>
  )
}
