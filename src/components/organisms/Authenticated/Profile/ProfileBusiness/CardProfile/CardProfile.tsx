import { memo } from 'react'
import { useRouter } from 'next/navigation'
import styles from './CardProfile.module.scss'
import Image from 'next/image'
import notification from '@/../../public/images/IconosBlancos/notification.png'
import share from '@/../../public/images/IconosBlancos/share.png'
import edit from '@/../../public/images/IconosBlancos/edit.png'
import { StaticImport } from 'next/dist/shared/lib/get-img-props'
import Button from '@/components/molecules/Button/Button/Button'
import qr from '@/../../public/images/icons/codigoqr.png'
import blackBackground from '@/../../public/images/icons/black_background.svg'
import certificate_icon from '@/../public/images/Home/ProfileBussines/certifcate.png'
import mxFlag from '@/../public/images/icons/mx_flag.png'

interface ComponentProps {
  type: string
  eventId?: string
  imageProfile?: string | StaticImport
  name?: string
  eventType?: string
  email?: string
  tel?: number
  address?: string
  date?: string
  startTime?: string
  endTime?: string
  profile?: string
  certification?: string
  showQrCode?: boolean
  onClickQr?: any
  actions?: any
}

export const CardProfile: React.FC<ComponentProps> = memo(({
  type,
  eventId,
  imageProfile,
  name,
  eventType,
  email,
  tel,
  address,
  date,
  startTime,
  endTime,
  profile,
  certification,
  showQrCode = true,
  onClickQr = () => { },
  actions,
}) => {

  const router = useRouter()

  const handleEdit = (e: any) => {
    e.stopPropagation()
    if (type === 'company') {
      router.push('/system/profile/company/edit')
    }
  }

  const handleNotifications = (e: any) => {
    e.stopPropagation()
  }

  const handleShare = (e: any) => {
    e.stopPropagation()
    if (type === 'company') {
      router.push('/system/profile/company/share')
    }
  }

  return (
    <div className={`${styles.card} ${type === 'event' && styles.card_event}`} onClick={type === 'event' ? () => { router.push(`/system/profile/company/event/${eventId}/dashboard`) } : () => { }}>
      <div className={styles.card_container}>
        <div className={styles.card_banner}>
          {imageProfile &&
            <Image
              src={imageProfile}
              alt='picture'
              loader={({ src }) => src}
              width={10}
              height={10}
            />}
        </div>
        <div className={styles.card_content}>
          <div className={styles.card_title}>{name}</div>
          <div className={styles.card_group}>
            <div className={styles.card_info}>
              <div className={styles.card_info_content}>
                {type === 'company' &&
                  <>
                    <p>{email}</p>
                    <p>TEL. {tel}</p>
                    <p>{address}</p>
                    <p>{profile}</p>
                  </>
                }
                {type === 'event' &&
                  <>
                    <p>Tipo: {eventType}</p>
                    <div className={styles.card_date}>
                      <p>Fecha del evento</p>
                      <p>Inicia: {`${startTime} ${date}`}</p>
                      <p>Termina: {`${endTime} ${date}`}</p>
                    </div>
                    <p>{address}</p>
                  </>
                }
                <p className={styles.certification}>{certification}</p>
              </div>
              <div className={styles.card_info_icons}>
                {certification &&
                  <div className={styles.certificate}>
                    <Image src={certificate_icon} alt='certificate' />
                  </div>
                }
                <div className={styles.imageNationality}>
                  <Image src={mxFlag} alt='flag' />
                </div>
              </div>
            </div>
            <div className={styles.card_aside}>
              <div className={styles.card_code} onClick={onClickQr}>
                {showQrCode &&
                  <Image
                    src={qr}
                    alt='qr_code'
                  />
                }
              </div>
              <div className={styles.card_actions}>
                {actions?.edit &&
                  <div>
                    <Button
                      type='button'
                      onClick={handleEdit}
                      tooltip='Editar'
                      tooltipOptions={{ position: 'top' }}
                      variant='button_actions'
                      height='30px'
                      className={styles.button_action}
                    >
                      <Image src={edit} alt='edit' />
                    </Button>
                  </div>
                }
                {actions?.notifications &&
                  <div>
                    <Button
                      type='button'
                      onClick={handleNotifications}
                      tooltip='Notificaciones'
                      tooltipOptions={{ position: 'top' }}
                      variant='button_actions'
                      height='30px'
                      className={styles.button_action}
                    >
                      <Image src={notification} alt='notification' />
                    </Button>
                  </div>
                }
                {actions?.share &&
                  <div>
                    <Button
                      type='button'
                      onClick={handleShare}
                      tooltip='Compartir'
                      tooltipOptions={{ position: 'top' }}
                      variant='button_actions'
                      height='30px'
                      className={styles.button_action}
                    >
                      <Image src={share} alt='share' />
                    </Button>
                  </div>
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
})

CardProfile.displayName = 'CardProfile'