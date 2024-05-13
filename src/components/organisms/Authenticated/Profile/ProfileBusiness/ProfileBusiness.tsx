'use client'

import { useContext, useState } from 'react'
import { useRouter } from 'next/navigation'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/pagination'
import styles from './ProfileBusiness.module.scss'
import FormHookProvider from '@/components/layouts/Form/FormHookProvider/FormHookProvider'
import Card from '@/components/molecules/Card/Card'
import { CardProfile } from './CardProfile/CardProfile'
import { CardStatistics } from './CardStatistics/CardStatistics'
import Button from "@/components/molecules/Button/Button/Button"
import { useForm } from 'react-hook-form'
import plusLogo from '@/../../public/images/icons/plus.svg'
import qrCode from '@/../../public/images/icons/qr.png'
import Image from 'next/image'
import { CompanyProfileContext } from '@/context/authenticated/profile/company/CompanyProfile/CompanyProfileContext'
import { ModalQr } from '@/components/molecules/ModalQr/ModalQr'

export default function ProfileBusiness() {
  //
  const { loading, data } = useContext(CompanyProfileContext)
  const router = useRouter()
  const methods = useForm()
  const [showModalQr, setShowModalQr] = useState<boolean>(false)
  const hideMainView = true

  const onSubmit = () => { }

  return (
    <>
      <FormHookProvider methods={methods} onSubmit={onSubmit}>
        {hideMainView &&
          <div className={`${styles.Profile} ${styles.noScroll}`}>
            <Card className={styles.CardProfile}>
              <div className={styles.section_header}>
                <div className={styles.section_header_left}>
                  <p className={styles.title}>PERFIL PROMOTORA</p>
                </div>
                <div className={styles.section_header_right}>
                  <p className={styles.title}>EVENTOS REGISTRADOS</p>
                  <Button
                    type='button'
                    onClick={() => router.push('/system/events/register')}
                    variant='add'
                    height='50px'
                    width='260px'
                  >
                    <Image src={plusLogo} alt='icon' />
                    <label>Agregar nuevo evento</label>
                  </Button>
                </div>
              </div>
              <div className={styles.slider}>
                <Swiper
                  slidesPerView='auto'
                  spaceBetween={10}
                  pagination={{ clickable: true }}
                  className={styles.swiper}
                >
                  <SwiperSlide className={styles.swiperslide}>
                    <div style={{ width: 600 }}>
                      <CardProfile
                        type='company'
                        imageProfile={data.banner?.url}
                        name={data.company_name}
                        tel={data.phone_number}
                        address={''}
                        email={data.mail}
                        profile='Perfil empresarial'
                        certification='Empresa certificada'
                        onClickQr={() => setShowModalQr(true)}
                        actions={data.actions}
                      />
                    </div>
                  </SwiperSlide>
                  {data.events?.map((item: any, index: number) => {
                    return (
                      <SwiperSlide key={item.id} className={styles.swiperslide}>
                        <div style={{ width: 600 }}>
                          <CardProfile
                            type='event'
                            eventId={item.id}
                            imageProfile={item.banner?.url}
                            name={item.name}
                            eventType={item.type}
                            date={item.date}
                            startTime={item.start_time}
                            endTime={item.end_time}
                            address={item.address}
                            certification='Empresa certificada'
                            actions={item.actions}
                          />
                        </div>
                      </SwiperSlide>
                    )
                  })}
                </Swiper>
              </div>
              <div className={styles.spaces} />
              <div className={styles.graphics}>
                <div className={styles.grafica1}>
                  <CardStatistics
                    doughnutLabels={['Ventas locales', 'Ventas nacionales', 'Ventas internacionales']}
                    doughnutValues={[25, 25, 50]}
                    title='ESTADISTICAS VENTA DE LA PROMOTORA'
                    text='Productos vendidos 1849 pza'
                  />
                </div>
                <div className={styles.grafica2}>
                  <CardStatistics
                    doughnutLabels={['Visitas locales', 'Visitas nacionales', 'Visitas internacionales', 'Guardados', 'Favoritos', 'Compartidos']}
                    doughnutValues={[12, 10, 3, 50, 25, 25]}
                    title='ESTADISTICAS VENTAS DEL EVENTO'
                    text='Boletos vendidos 1250 paz'
                  />
                </div>
              </div>
            </Card>
          </div>
        }
        <ModalQr
          visible={showModalQr}
          labelButton='OK'
          onClickButton={() => setShowModalQr(false)}
        >
          <div style={{ width: '100%' }}>
            <CardProfile
              type='company'
              imageProfile={data.banner}
              name={data.company_name}
              tel={data.phone_number}
              address=''
              email={data.mail}
              profile='Perfil empresarial'
              certification='Empresa certificada'
              showQrCode={false}
              actions={data.actions}
            />
          </div>
          <Image
            src={qrCode}
            alt='qr_code'
            loader={({ src }) => src}
            width={230}
            height={230}
          />
        </ModalQr>
      </FormHookProvider>
    </>
  )
}