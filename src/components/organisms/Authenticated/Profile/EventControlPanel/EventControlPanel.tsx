'use client'

import { useContext, useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import Image from 'next/image'
import styles from './styles.module.scss'
import FormHookProvider from '@/components/layouts/Form/FormHookProvider/FormHookProvider'
import Card from '@/components/molecules/Card/Card'
import { CardEventProfile } from '../CardEventProfile/CardEventProfile'
import CardNotifications from '../CardNotifications/CardNotifications'
import CardStatistics from '../CardStatistics/CardStatistics'
import Modal from "@/components/layouts/Modal/Modal"
import { useForm } from 'react-hook-form'
import MisFavoritos from '@/../public/images/IconosBlancos/MisFavoritos.svg'
import news from '@/../public/images/IconosBlancos/news.svg'
import eventos from '@/../public/images/IconosBlancos/eventos.svg'
import subastas from '@/../public/images/IconosBlancos/subastas.svg'
import promociones from '@/../public/images/IconosBlancos/promociones.svg'
import directorio from '@/../public/images/IconosBlancos/directorio.svg'
import notifications from '@/../public/images/IconosBlancos/notifications.svg'
import shopping from '@/../public/images/IconosBlancos/shopping.svg'
import carrito from '@/../public/images/IconosBlancos/carrito.svg'
import ventas from '@/../public/images/IconosBlancos/ventas.svg'
import ryan_gosling from '@/../public/images/icons/ryan_gosling.jpg'
import registro from '@/../public/images/IconosBlancos/registro.svg'
import nfts from '@/../public/images/IconosBlancos/nfts.svg'
import pagoseguro from '@/../public/images/IconosBlancos/pagoseguro.svg'
import stores from '@/../public/images/IconosBlancos/stores.svg'
import flagMx from '@/../public/images/icons/mx_flag.png'
import search from '@/../public/images/IconosBlancos/search.svg'
import qr from '@/../../public/images/icons/codigoqr.png'
import { ModalEventQr } from '@/components/organisms/Authenticated/Profile/ModalEventQr/ModalEventQr'
import { EventControlPanelContext } from '@/context/authenticated/profile/company/eventControlPanel/EventControlPanelContext'

export default function EventControlPanel() {

  const { loading, data } = useContext(EventControlPanelContext)
  const { id } = useParams()
  const methods = useForm()
  const [showQR, setShowQR] = useState(false)
  const [cardsTopGrid, setCardsTopGrid] = useState<any[]>([])
  const [cardsMainGrid, setCardsMainGrid] = useState<any[]>([])
  const [showEventQr, setshowEventQr] = useState<boolean>(false)

  const topGrid = [
    {
      number: 8,
      imageSrc: MisFavoritos,
      titleFontSize: '18px',
      showButton: false,
      url: '/system/profile/company/event/1/adminstaff'
    },
    {
      number: 27,
      imageSrc: notifications,
      titleFontSize: '16px',
      showButton: true,
      textButton: 'Generar',
      backgroundColor: '#000000',
      url: `/system/profile/company/event/${id}/dashboard/personal-recharge-banks`
    },
    {
      number: 17,
      imageSrc: search,
      titleFontSize: '18px',
      showButton: true,
      textButton: 'Escanear',
      width: '100%'
    },
    {
      number: 9,
      imageSrc: eventos,
      titleFontSize: '20px',
      backgroundColor: '#000000',
      showButton: true,
      textButton: 'Generar',
    },
    {
      number: 28,
      imageSrc: shopping,
      titleFontSize: '26px',
      backgroundColor: 'transparent linear-gradient(211deg, #383838 0%, #000A0D 100%)',
      showButton: true,
      textButton: 'Recargar',
      url: `/system/profile/company/event/${id}/dashboard/recharging-banks`
    },
    {
      number: 18,
      imageSrc: shopping,
      titleFontSize: '20px',
      backgroundColor: 'transparent linear-gradient(211deg, #383838 0%, #000A0D 100%)',
      showButton: true,
      textButton: 'Otorgar',
    },
    {
      number: 10,
      imageSrc: subastas,
      titleFontSize: '20px',
      backgroundColor: '#000000',
      showButton: true,
      textButton: 'Generar'
    },
    {
      number: 29,
      imageSrc: subastas,
      titleFontSize: '20px',
      backgroundColor: '#000000',
      showButton: true,
      textButton: 'Generar'
    },
    {
      number: 21,
      imageSrc: carrito,
      titleFontSize: '20px',
      backgroundColor: 'transparent linear-gradient(211deg, #383838 0%, #000A0D 100%)',
      showButton: false,
      textButton: 'Escanear',
    },
  ]

  const mainGrid = [
    {
      number: 1,
      imageSrc: registro,
      titleFontSize: '39px',
      showButton: true,
      textButton: 'Ver',
      backgroundColor: 'transparent linear-gradient(270deg, #000000 0%, #585858 100%)',
      width: '32%'
    },
    {
      number: 11,
      imageSrc: news,
      titleFontSize: '22px',
      backgroundColor: '#000000',
      showButton: true,
      textButton: 'Asignar',
      width: '17%'
    },
    {
      number: 30,
      imageSrc: ventas,
      titleFontSize: '22px',
      backgroundColor: 'transparent linear-gradient(247deg, #000000 0%, #4E4E4E 100%)',
      showButton: true,
      textButton: 'Ver',
      width: '17%'
    },
    {
      number: 22,
      imageSrc: ventas,
      titleFontSize: '18px',
      backgroundColor: 'transparent linear-gradient(247deg, #000000 0%, #4E4E4E 100%)',
      showButton: false,
      textButton: 'Ver',
      width: '17%'
    },
    {
      number: 23,
      imageSrc: ventas,
      titleFontSize: '18px',
      backgroundColor: 'transparent linear-gradient(247deg, #000000 0%, #4E4E4E 100%)',
      showButton: false,
      textButton: 'Ver',
      width: '17%'
    },
    {
      number: 2,
      imageSrc: nfts,
      titleFontSize: '39px',
      showButton: true,
      textButton: 'Ver',
      backgroundColor: 'transparent linear-gradient(211deg, #383838 0%, #000A0D 100%)',
      width: '32%'
    },
    {
      number: 12,
      imageSrc: nfts,
      titleFontSize: '39px',
      showButton: true,
      textButton: 'Vender',
      backgroundColor: 'transparent linear-gradient(211deg, #383838 0%, #000A0D 100%)',
      width: '30%'
    },
    {
      number: 19,
      imageSrc: nfts,
      titleFontSize: '39px',
      showButton: true,
      textButton: 'Ver',
      backgroundColor: 'transparent linear-gradient(211deg, #383838 0%, #000A0D 100%)',
      width: '38%'
    },
    {
      number: 3,
      imageSrc: news,
      titleFontSize: '22px',
      backgroundColor: '#000000',
      showButton: true,
      textButton: 'Vender',
      width: '20%'
    },
    {
      number: 13,
      imageSrc: news,
      titleFontSize: '22px',
      backgroundColor: 'transparent linear-gradient(247deg, #000000 0%, #4E4E4E 100%)',
      showButton: true,
      textButton: 'Asignar',
      width: '30%'
    },
    {
      number: 20,
      imageSrc: news,
      titleFontSize: '32px',
      backgroundColor: '#000000',
      showButton: false,
      width: '20%',
      url: '/system/profile/company/event/1/input-inventories'
    },
    {
      number: 26,
      imageSrc: news,
      titleFontSize: '32px',
      backgroundColor: '#000000',
      showButton: false,
      width: '30%',
      url: '/system/profile/company/event/1/input-inventories'
    },
    {
      number: 4,
      imageSrc: news,
      titleFontSize: '32px',
      backgroundColor: 'transparent linear-gradient(211deg, #383838 0%, #000A0D 100%)',
      showButton: true,
      textButton: 'Ver',
      width: '18%',
      url: '/system/profile/company/event/1/input-inventories'
    },
    {
      number: 5,
      imageSrc: news,
      titleFontSize: '32px',
      backgroundColor: '#000000',
      showButton: true,
      textButton: 'Ver',
      width: '18%',
      url: '/system/profile/company/event/1/input-inventories'
    },
    {
      number: 14,
      imageSrc: news,
      titleFontSize: '32px',
      backgroundColor: '#000000',
      showButton: true,
      textButton: 'Vender',
      width: '46%',
      url: '/system/profile/company/event/1/input-inventories'
    },
    {
      number: 31,
      imageSrc: news,
      titleFontSize: '32px',
      backgroundColor: '#000000',
      showButton: true,
      textButton: 'Ver',
      width: '18%',
      url: '/system/profile/company/event/1/input-inventories'
    },
    {
      number: 6,
      imageSrc: news,
      titleFontSize: '32px',
      backgroundColor: 'transparent linear-gradient(211deg, #383838 0%, #000A0D 100%)',
      showButton: true,
      textButton: 'Ver',
      width: '36%',
      url: '/system/profile/company/event/1/input-inventories'
    },
    {
      number: 15,
      imageSrc: news,
      titleFontSize: '32px',
      backgroundColor: 'transparent linear-gradient(247deg, #000000 0%, #4E4E4E 100%)',
      showButton: true,
      textButton: 'Asignar',
      width: '24%',
      url: '/system/profile/company/event/1/input-inventories'
    },
    {
      number: 24,
      imageSrc: news,
      titleFontSize: '32px',
      backgroundColor: '#000000',
      showButton: true,
      textButton: 'Ver',
      width: '20%',
      url: '/system/profile/company/event/1/input-inventories'
    },
    {
      number: 32,
      imageSrc: news,
      titleFontSize: '32px',
      backgroundColor: '#000000',
      showButton: true,
      textButton: 'Ver',
      width: '20%',
      url: '/system/profile/company/event/1/input-inventories'
    },
    {
      number: 7,
      imageSrc: news,
      titleFontSize: '22px',
      backgroundColor: '#000000',
      showButton: true,
      textButton: 'Ver',
      width: '17%'
    },
    {
      number: 16,
      imageSrc: news,
      titleFontSize: '22px',
      backgroundColor: 'transparent linear-gradient(211deg, #383838 0%, #000A0D 100%)',
      showButton: true,
      textButton: 'Vender',
      width: '17%'
    },
    {
      number: 25,
      imageSrc: news,
      titleFontSize: '22px',
      backgroundColor: '#000000',
      showButton: true,
      textButton: 'Entregar',
      width: '17%'
    },
    {
      number: 33,
      imageSrc: news,
      titleFontSize: '22px',
      backgroundColor: '#000000',
      showButton: false,
      width: '17%'
    },
    {
      number: 34,
      imageSrc: news,
      titleFontSize: '22px',
      backgroundColor: 'transparent linear-gradient(247deg, #000000 0%, #4E4E4E 100%)',
      showButton: true,
      textButton: 'Realizar',
      width: '16%'
    },
    {
      number: 35,
      imageSrc: news,
      titleFontSize: '22px',
      backgroundColor: 'transparent linear-gradient(247deg, #000000 0%, #4E4E4E 100%)',
      showButton: true,
      textButton: 'Ver',
      width: '16%'
    },
  ]

  useEffect(() => {
    if (Object.keys(data).length > 0) {
      const result = topGrid.map((item: any, index: number) => {
        let [card] = data.tools.filter((element: any) => element.number === item.number)
        card = { ...item, ...card }
        return card
      })
      setCardsTopGrid(result)
      const result2 = mainGrid.map((item: any, index: number) => {
        let [card] = data.tools.filter((element: any) => element.number === item.number)
        card = { ...item, ...card }
        return card
      })
      setCardsMainGrid(result2)
    }
  }, [data])

  const onSubmit = () => { }

  return (
    <>
      <div className={`${styles.Profile} ${styles.noScroll}`}>
        <Card className={styles.CardProfile}>
          <p className={styles.title}>Información del Evento</p>
          <div className={styles.spaces}>
            <div className={styles.section_top}>
              <div className={styles.section_top_event}>
                <CardEventProfile
                  onClickQr={() => setshowEventQr(true)}
                />
              </div>
              <div className={styles.section_top_grid}>
                {cardsTopGrid.map((item: any) => {
                  return (
                    <CardNotifications
                      key={item.id}
                      number={item.number}
                      title={item.text}
                      imageSrc={item.imageSrc}
                      titleFontSize={item.titleFontSize}
                      showButton={item.showButton}
                      textButton={item.textButton}
                      url={item.url}
                      style={{
                        width: item?.width || '100%',
                        background: item?.backgroundColor || 'linear-gradient(233deg, #2B2929 0%, #4E4E4E 100%) 0% 0% no-repeat padding-box',
                      }}
                    />
                  )
                })}
              </div>
            </div>
            <div className={styles.section_main_grid}>
              {cardsMainGrid.map((item: any) => {
                return (
                  <div key={item.id} className={styles.section_main_item} style={{ width: item?.width }}>
                    <CardNotifications
                      number={item.number}
                      title={item.text}
                      imageSrc={item.imageSrc}
                      titleFontSize={item.titleFontSize}
                      showButton={item.showButton}
                      textButton={item.textButton}
                      url={item.url}
                      style={{
                        height: '100%',
                        background: item?.backgroundColor || 'linear-gradient(233deg, #2B2929 0%, #4E4E4E 100%) 0% 0% no-repeat padding-box',
                      }}
                    />
                  </div>
                )
              })}
            </div>
          </div>
          <FormHookProvider methods={methods} onSubmit={onSubmit}>
            <div className={styles.graphics}>
              <div className={styles.grafica1}>
                <CardStatistics
                  doughnutLabels={['Ventas locales', 'Ventas nacionales', 'Ventas internacionales']}
                  doughnutValues={[25, 25, 50]}
                  title='Estadísticas de ventas, boletaje'
                />
              </div>
              <div className={styles.grafica2}>
                <CardStatistics
                  doughnutLabels={['Visitas locales', 'Visitas nacionales', 'Visitas internacionales', 'Guardados', 'Favoritos', 'Compartidos']}
                  doughnutValues={[12, 10, 3, 50, 25, 25]}
                  title='Estadísticas de visitas al evento'
                />
              </div>
            </div>
          </FormHookProvider>
        </Card>
      </div>
      <Modal
        title={""}
        content={<QRContent setShowQR={setShowQR} />}
        buttons={[]}
        show={showQR}
        size="medium"
        variant="white"
      />
      <ModalEventQr
        visible={showEventQr}
        onHide={() => setshowEventQr(false)}
        labelButton='OK'
      />
    </>
  )
}

const QRContent = ({ setShowQR }: { setShowQR: any }) => {
  const obkInfo = {
    image: ryan_gosling,
    descriptiontitle: 'IBF Boca de iguanas',
    date: {
      dateStart: 'Inicia 07/08/2022',
      dateEnd: 'Finaliza 07/08/2022',
      hourStart: 'Hora 12:00 P.M.',
      hourEnd: 'Hora 16:00 P.M.'
    },
    infoUser: {
      name: 'Evelyn Miselotti',
      email: 'email@mail.com',
      rol: 'Roll : Empresario secundario'
    }
  }
  return (
    <div className={styles.qrcontent}>
      <div className={styles.divtitle}>
        <p>QR DE INGRESO</p>
        <div className={styles.closediv} onClick={() => setShowQR(false)}>
          <label>x</label>
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.infodate}>
          <div className={styles.picture}>
            <Image src={obkInfo.image} alt="" />
          </div>
          <div className={styles.description}>
            <p className={styles.titlep}>{obkInfo.descriptiontitle}</p>

            <div className={styles.dates}>
              <div>
                <p>{obkInfo.date.dateStart}</p>
                <p>{obkInfo.date.dateEnd}</p>
              </div>
              <div>
                <p>{obkInfo.date.hourStart}</p>
                <p>{obkInfo.date.hourEnd}</p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.infouser}>
          <div className={styles.picture}>
            <Image src={obkInfo.image} alt="" />
          </div>
          <div className={styles.description}>
            <p className={styles.titlep}>{obkInfo.infoUser.name}</p>
            <p>{obkInfo.infoUser.email}</p>
            <p>{obkInfo.infoUser.rol}</p>
          </div>
        </div>
        <div className={styles.qrdiv}>
          <Image src={qr} alt="" />
        </div>
        <div className={styles.footer}>
          <p>Muestra este QR con tu identificación para acceder al evento</p>
        </div>
      </div>
    </div>
  )
}