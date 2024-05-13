'use client'

import React from 'react'
import styles from './ProfilePersonal.module.scss'
import FormHookProvider from '@/components/layouts/Form/FormHookProvider/FormHookProvider'
import Card from '@/components/molecules/Card/Card'
// import CardProfile from '../CardProfile/CardProfile'
import CardNotifications from '../CardNotifications/CardNotifications'
import CardStatistics from '../CardStatistics/CardStatistics'
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
import compradores from '@/../public/images/IconosBlancos/compradores.svg'
import contratos from '@/../public/images/IconosBlancos/contratos.svg'
import explorador from '@/../public/images/IconosBlancos/explorador.svg'
import caja from '@/../public/images/IconosBlancos/caja.svg'
import registro from '@/../public/images/IconosBlancos/registro.svg'
import nfts from '@/../public/images/IconosBlancos/nfts.svg'
import pagoseguro from '@/../public/images/IconosBlancos/pagoseguro.svg'
import stores from '@/../public/images/IconosBlancos/stores.svg'
import search from '@/../public/images/IconosBlancos/search.svg'
import save from '@/../public/images/IconosBlancos/save.svg'
import { CardPersonalProfile } from '../CardPersonalProfile/CardPersonalProfile'
import { ProfileProvider } from '@/context/authenticated/profile/personal/profile/ProfileProvider'

export default function ProfilePersonal() {
  const methods = useForm()

  const onSubmit = () => { }

  const data1 = [
    {
      id: 1,
      imageSrc: registro,
      titleFontSize: '39px',
      subtitleFontSize: '19px',
      title: '¡Registro de marca!',
      subtitle: '¿Te gustaría registrar tu marca?',
      showButton: true,
      textButton: 'Registrar'
      // backgroundColor: 'transparent linear-gradient(270deg, #000000 0%, #585858 100%) 0% 0% no-repeat padding-box;',
    },
    {
      id: 2,
      imageSrc: nfts,
      titleFontSize: '39px',
      subtitleFontSize: '19px',
      title: 'Tienda de NFTs',
      subtitle: 'Compra y vende NFTs',
      showButton: true,
      textButton: 'Ver'
      // backgroundColor: 'transparent linear-gradient(211deg, #383838 0%, #000A0D 100%) 0% 0% no-repeat padding-box;',
    },
    {
      id: 3,
      titleFontSize: '29px',
      subtitleFontSize: '19px',
      title: 'Finanzas',
      subtitle: 'Datos financieros, explora tus resúmenes y gráficos financieros',
      showButton: true,
      textButton: 'Ver',
      // backgroundColor: 'transparent linear-gradient(270deg, #000000 0%, #585858 100%) 0% 0% no-repeat padding-box;',
      number: 4
    },
    {
      id: 4,
      imageSrc: pagoseguro,
      titleFontSize: '39px',
      title: 'Pago seguro',
      showButton: true,
      textButton: 'Ver',
      backgroundColor: '#000000',
      number: 3
    },
    {
      id: 5,
      imageSrc: stores,
      titleFontSize: '39px',
      title: 'Tiendas certificadas',
      showButton: true,
      textButton: 'Ver',
      backgroundColor: '#000',
      number: 11
    }
  ]
  
  const data2 = [
    {
      id: 1,
      imageSrc: MisFavoritos,
      titleFontSize: '18px',
      subtitleFontSize: '15px',
      title: 'Sus favoritos aparecerán en esta tarjeta',
      subtitle: '¿Cuál es su bebida favorita?',
      number: 12,
      showButton: false
    },
    {
      id: 2,
      imageSrc: eventos,
      titleFontSize: '23px',
      subtitleFontSize: '12px',
      title: '¡Te invitamos a ver los eventos que tenemos para ti!',
      subtitle: 'Activalo con tres pasos sencillos',
      // backgroundColor: '#000000 0% 0% no-repeat padding-box;',
      showButton: true,
      textButton: 'Activar'
    },
    {
      id: 3,
      imageSrc: subastas,
      titleFontSize: '36px',
      subtitleFontSize: '12px',
      title: 'Subastas',
      subtitle: 'Conoce las subastas activas',
      backgroundColor: '#000000',
      number: 6,
      showButton: true,
      textButton: 'Ver'
    },
    {
      id: 4,
      imageSrc: news,
      titleFontSize: '18px',
      subtitleFontSize: '12px',
      title: '¡Usted no tiene noticias!',
      subtitle: 'Mantente informado',
      // backgroundColor: '#000000 0% 0% no-repeat padding-box;',
      number: 16,
      showButton: true,
      textButton: 'Ver'
    },
    {
      id: 5,
      imageSrc: news,
      titleFontSize: '18px',
      subtitleFontSize: '12px',
      title: 'Datos de facturación ¿Quieres facturar?',
      subtitle: 'Suba ahora sus datos de facturación',
      backgroundColor: '#000000',
      showButton: true,
      textButton: 'Ver'
    },
    {
      id: 6,
      imageSrc: promociones,
      titleFontSize: '18px',
      subtitleFontSize: '12px',
      title: '¡Promociones y Rebajas!',
      subtitle: 'Suscríbete y Recibe Promociones Y Rebajas',
      // backgroundColor: '#000000 0% 0% no-repeat padding-box;',
      showButton: true,
      textButton: 'Ver',
      number: 9
    },
    {
      id: 7,
      imageSrc: directorio,
      titleFontSize: '18px',
      subtitleFontSize: '12px',
      title: 'Directorio empresarial',
      subtitle: 'Explorar empresas y contactos',
      backgroundColor: '#000000',
      showButton: true,
      textButton: 'Ver',
      number: 21
    }
  ]

  const data3 = [
    {
      id: 1,
      imageSrc: notifications,
      titleFontSize: '30px',
      title: 'Configurar notificaciones',
      number: 17,
      showButton: false
      // backgroundColor: '#000000 0% 0% no-repeat padding-box;'
    },
    {
      id: 2,
      imageSrc: shopping,
      titleFontSize: '18px',
      subtitleFontSize: '12px',
      title: '¡No tiene compras!',
      subtitle: 'Visite y compre algún producto, servicio o boletos para tus eventos favoritos',
      // backgroundColor: 'linear-gradient(211deg, #383838 0%, #000A0D 100%) 0% 0% no-repeat padding-box;',
      showButton: true,
      textButton: 'Ir al carrusel'
    },
    {
      id: 3,
      imageSrc: carrito,
      titleFontSize: '18px',
      subtitleFontSize: '12px',
      title: '¡Consulta tu carrito de compras!',
      subtitle: 'Paga en un clic los articulos guardados en tu carrito',
      // backgroundColor: 'transparent linear-gradient(211deg, #383838 0%, #000A0D 100%) 0% 0% no-repeat padding-box;',
      number: 5,
      showButton: true,
      textButton: 'Ir al carrito'
    },
    {
      id: 4,
      imageSrc: ventas,
      titleFontSize: '24px',
      title: 'Ventas personales',
      backgroundColor: '#000000',
      number: 15,
      showButton: false
    },
    {
      id: 5,
      imageSrc: compradores,
      titleFontSize: '18px',
      subtitleFontSize: '12px',
      title: '¡Canal de Compradores!',
      subtitle: 'Aquí tendrás un registro de los productos o servicios que has ofrecido',
      // backgroundColor: 'transparent linear-gradient(211deg, #383838 0%, #000A0D 100%) 0% 0% no-repeat padding-box;',
      showButton: false,
      number: 7
    },
    {
      id: 6,
      imageSrc: contratos,
      titleFontSize: '18px',
      subtitleFontSize: '12px',
      title: 'Contratos inteligentes',
      subtitle: 'Crea contratos seguros con tecnología blockchain',
      // backgroundColor: 'transparent linear-gradient(211deg, #383838 0%, #000A0D 100%) 0% 0% no-repeat padding-box;',
      showButton: false,
      number: 19
    },
    {
      id: 7,
      imageSrc: explorador,
      titleFontSize: '18px',
      subtitleFontSize: '12px',
      title: 'Explorador de bloques',
      subtitle: 'Listado de transacciones en blockchain',
      backgroundColor: ' #000',
      showButton: false,
      number: 20
    },
    {
      id: 8,
      imageSrc: caja,
      titleFontSize: '18px',
      subtitleFontSize: '12px',
      title: 'Lo más vendido',
      subtitle: 'Conoce aquí los productos más vendidos',
      // backgroundColor: 'transparent linear-gradient(211deg, #383838 0%, #000A0D 100%) 0% 0% no-repeat padding-box;',
      showButton: false,
      number: 10
    },
    {
      id: 9,
      titleFontSize: '23px',
      title: '¿Quiénes somos?',
      // backgroundColor: 'transparent linear-gradient(211deg, #383838 0%, #000A0D 100%) 0% 0% no-repeat padding-box;',
      showButton: false,
      number: 22
    }
  ]

  const data4 = [
    {
      id: 1,
      imageSrc: search,
      titleFontSize: '14px',
      subtitleFontSize: '9px',
      title: 'Buscamos por ti',
      subtitle: 'Tambien te mostramos el historial de tus busquedas',
      number: 8,
      showButton: true,
      textButton: 'Ver',
      width: '48%'
    },
    {
      id: 2,
      titleFontSize: '14px',
      title: 'Denuncias',
      backgroundColor: '#000000',
      showButton: true,
      textButton: 'Ver',
      width: '48%',
      number: 24
    },
    {
      id: 3,
      imageSrc: save,
      titleFontSize: '14px',
      title: 'Guardados',
      backgroundColor: '#000000',
      number: 13,
      showButton: true,
      textButton: 'Ver',
      width: '48%'
    },
    {
      id: 4,
      imageSrc: news,
      titleFontSize: '18px',
      subtitleFontSize: '12px',
      title: '¡Usted no tiene noticias!',
      subtitle: 'Mantente informado',
      backgroundColor: '#000000',
      number: 16,
      showButton: true,
      textButton: 'Ver',
      width: '48%'
    }
  ]

  return (
    <div className={`${styles.Profile} ${styles.noScroll}`}>
      <Card className={styles.CardProfile}>
        <p className={styles.title}>PANEL DE CONTROL</p>
        <div className={styles.spaces}>
          <div className={styles.Cards1}>
            <div style={{ width: '510px' }}>
              <ProfileProvider>
                <CardPersonalProfile />
              </ProfileProvider>
            </div>
            {data1.map((e, key) => {
              return (
                <CardNotifications
                  key={key}
                  imageSrc={e.imageSrc}
                  titleFontSize={e.titleFontSize}
                  subtitleFontSize={e.subtitleFontSize}
                  title={e.title}
                  subtitle={e.subtitle}
                  number={e.number}
                  showButton={e.showButton}
                  textButton={e.textButton}
                  backgroundColor={e.backgroundColor}
                />
              )
            })}
          </div>
          <div className={styles.Cards2}>
            {data2.map((e, key) => {
              return (
                <CardNotifications
                  key={key}
                  imageSrc={e.imageSrc}
                  titleFontSize={e.titleFontSize}
                  subtitleFontSize={e.subtitleFontSize}
                  title={e.title}
                  subtitle={e.subtitle}
                  number={e.number}
                  backgroundColor={e.backgroundColor}
                  textButton={e.textButton}
                  showButton={e.showButton}
                />
              )
            })}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
              {data4.map((e, key) => {
                return (
                  <CardNotifications
                    key={key}
                    imageSrc={e.imageSrc}
                    titleFontSize={e.titleFontSize}
                    subtitleFontSize={e.subtitleFontSize}
                    title={e.title}
                    subtitle={e.subtitle}
                    number={e.number}
                    backgroundColor={e.backgroundColor}
                    textButton={e.textButton}
                    showButton={e.showButton}
                    width={e.width}
                  />
                )
              })}
            </div>
          </div>
          <div className={styles.Cards3}>
            {data3.map((e, key) => {
              return (
                <CardNotifications
                  key={key}
                  imageSrc={e.imageSrc}
                  titleFontSize={e.titleFontSize}
                  subtitleFontSize={e.subtitleFontSize}
                  title={e.title}
                  subtitle={e.subtitle}
                  number={e.number}
                  backgroundColor={e.backgroundColor}
                  textButton={e.textButton}
                  showButton={e.showButton}
                />
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
                title='Estadísticas de ventas personales'
              />
            </div>
            <div className={styles.grafica2}>
              <CardStatistics
                doughnutLabels={['Visitas locales', 'Visitas nacionales', 'Visitas internacionales', 'Guardados', 'Favoritos', 'Compartidos']}
                doughnutValues={[12, 10, 3, 50, 25, 25]}
                title='Estadísticas de visitas a tus anuncios'
              />
            </div>
          </div>
        </FormHookProvider>
      </Card>
    </div>
  )
}
