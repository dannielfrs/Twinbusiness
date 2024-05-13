import styles from './styles.module.scss'
import Image from 'next/image'
import twin from '@/../public/images/Home/logoGrande2.png'
import Button from '@/components/molecules/Button/Button/Button'
import success from '@/../public/images/icons/success.png'
import cancel from '@/../../public/images/icons/cancel.png'

interface ComponentProps {
  title?: string;
  icon?: string;
  content?: string;
  labelButton?: string;
  onClickButton?: () => void;
}

export const Alert3: React.FC<ComponentProps> = ({
  title,
  icon,
  content,
  labelButton,
  onClickButton,
}) => {

  let alertIcon = success

  switch (icon) {
    case 'success':
      alertIcon = success
      break
    case 'error':
      alertIcon = cancel
      break
    default:
      break
  }

  return (
    <div className={styles.alert}>
      <div className={styles.alert_modal}>
        <div className={styles.alert_container}>
          <div className={styles.alert_logo}>
            <Image alt='logo' src={twin} />
          </div>
          <div className={styles.alert_body}>
            {icon &&
              <div className={styles.alert_icon}>
                <Image
                  alt='icon'
                  src={alertIcon}
                  width={50}
                  height={50}
                />
              </div>
            }
            <div className={styles.alert_title}>{title}</div>
            {labelButton &&
              <div className={styles.alert_button}>
                <Button
                  borderRadius="10px"
                  variant='blackbtn'
                  onClick={onClickButton}
                >
                  {labelButton}
                </Button>
              </div>
            }
          </div>
          <div className={styles.alert_content}>
            {content}
          </div>
        </div>
      </div>
    </div>
  )
}
