'use client'

import { useContext, useState } from 'react'
import styles from './Sidebar.module.scss'
import Image from 'next/image'
import logo_small from '@/../public/images/Events/logo_small.png'
import arrowBack from '@/../public/images/Events/back.png'
import Link from 'next/link'
import tag from '@/../public/images/icons/tag.png'
import MISCOMPRAS from '@/../public/images/icons/MISCOMPRAS.svg'
import MisEventos from '@/../public/images/icons/MisEventos.svg'
import PAGOSEGURO from '@/../public/images/icons/PAGOSEGURO.svg'
import Micarrito from '@/../public/images/icons/Micarrito.svg'
import Canal_compradores from '@/../public/images/icons/Canal_compradores.svg'
import MisSuscripciones from '@/../public/images/icons/MisSuscripciones.svg'
import LoMasVendido from '@/../public/images/icons/LoMasVendido.svg'
import TiendasCertificadas from '@/../public/images/icons/TiendasCertificadas.svg'
import Misfavoritos from '@/../public/images/icons/Misfavoritos.svg'
import Guardados from '@/../public/images/icons/Guardados.svg'
import Ventaspersonales from '@/../public/images/icons/Ventaspersonales.svg'
import Misnoticias from '@/../public/images/icons/Misnoticias.svg'
import control29 from '@/../public/images/companies/control(29).svg'
import control35 from '@/../public/images/companies/control(35).svg'
import control5 from '@/../public/images/companies/control(5).svg'
import control6 from '@/../public/images/companies/control(6).svg'
import control8 from '@/../public/images/companies/control(8).svg'
import control7 from '@/../public/images/companies/control(7).svg'
import control12 from '@/../public/images/companies/control(12).svg'
import control1 from '@/../public/images/companies/control(1).svg'
import control3 from '@/../public/images/companies/control(3).svg'
import control22 from '@/../public/images/companies/control(22).svg'
import control14 from '@/../public/images/companies/control(14).svg'
import control16 from '@/../public/images/companies/control(16).svg'
import control4 from '@/../public/images/companies/control(4).svg'
import { AuthContext } from '@/context'
import { useRouter } from 'next/navigation'
import { Alert4 } from '@/components/molecules/Alert4/Alert4'

export default function Sidebar({
  backHref,
  showMenu,
  inventoryShowIcons,
  onClick
}: {
  backHref?: string,
  showMenu?: boolean,
  inventoryShowIcons?: boolean,
  onClick?: () => void;
}) {

  const { onLogOut } = useContext(AuthContext)
  const router = useRouter()
  const [showLogout, setShowLogout] = useState<boolean>(false)
  const [showDeleteAccount, setShowDeleteAccount] = useState<boolean>(false)

  const routes = [
    { link: '#', title: 'MIS COMPRAS', image: MISCOMPRAS },
    { link: '#', title: 'MIS EVENTOS', image: MisEventos },
    { link: '#', title: 'PAGO SEGURO', image: PAGOSEGURO },
    { link: '#', title: 'FINANZAS' },
    { link: '#', title: 'MI CARRITO', image: Micarrito },
    { link: '#', title: 'MIS SUBASTAS' },
    { link: '#', title: 'CANAL DE COMPRADORES', image: Canal_compradores },
    { link: '#', title: 'RESULTADOS BUSCAMOS POR TI' },
    { link: '#', title: 'MIS SUSCRIPCIONES A PROMOCIONES/ REBAJAS', image: MisSuscripciones },
    { link: '#', title: 'LO MÁS VENDIDO', image: LoMasVendido },
    { link: '#', title: 'TIENDAS CERTIFICADAS', image: TiendasCertificadas },
    { link: '#', title: 'MIS FAVORITOS', image: Misfavoritos },
    { link: '#', title: 'GUARDADOS', image: Guardados },
    { link: '#', title: 'VENTAS PERSONALES', image: Ventaspersonales },
    { link: '#', title: 'MIS NOTICIAS FAVORITAS', Misnoticias }
  ]

  const inventory = [
    { link: '#', title: '', image: control29, subTitle: 'Estadisticas de ventas' },
    { link: '#', title: '', image: control35, subTitle: 'Inventarios de insumos' },
    { link: '#', title: 'Comandero', image: control5, subTitle: 'Punto de venta' },
    { link: '/system/profile/company/event/1/commanding-staff', title: 'Bartendender', image: control6, subTitle: 'Despachador' },
    { link: '#', title: '', image: control8, subTitle: 'QR menú publico' },
    { link: '#', title: '', image: control7, subTitle: 'Editor de menú' },
    { link: '#', title: '', image: control12, subTitle: 'Usuarios anonimos' },
    { link: '#', title: '', image: control1, subTitle: 'Lista de productos/ servicios' },
    { link: '#', title: '', image: control3, subTitle: 'Personal secundario' },
    { link: '#', title: '', image: control22, subTitle: 'Estadísticas de propinas' },
    { link: '#', title: '', image: control14, subTitle: 'Corte de caja' },
    { link: '#', title: '', image: control16, subTitle: 'Calificación personal' },
    { link: '#', title: '', image: control4, subTitle: '' }
  ]

  const onClickBack = () => {
    if (onClick) onClick()
    else if (backHref) router.push(backHref)
    else router.back()
  }

  return (
    <div className={`${styles.sidebar} ${styles.noScroll}`}>
      <div className={styles.sidebar_header}>
        <Link href='/system/home'>
          <Image
            src={logo_small}
            alt='logo'
            className={styles.logo}
          />
        </Link>
        <div className={styles.sidebar_buttonback} onClick={onClickBack}>
          <Image
            src={arrowBack}
            alt='icon'
          />
        </div>
      </div>
      {!showMenu &&
        <Image
          src={tag}
          alt='tag'
          className={styles.tag}
        />
      }
      {showMenu &&
        <div className={styles.sidebar_menu}>
          {routes.map((item: any, index: number) => {
            return (
              <Link href={item.link} className={styles.sidebar_menu_item} key={index}>
                <Image
                  src={item.image}
                  alt='icon'
                />
                <p className={styles.title}>{item.title}</p>
              </Link>
            )
          })}
          <Link href='#' onClick={() => setShowLogout(true)} className={styles.sidebar_menu_item}>
            <Image
              src={Guardados}
              alt='icon'
            />
            <p className={styles.title}>CERRAR SESIÓN</p>
          </Link>
          <Link href='#' onClick={() => setShowDeleteAccount(true)} className={styles.sidebar_menu_item}>
            <Image
              src={Guardados}
              alt='icon'
            />
            <p className={styles.title}>ELIMINAR CUENTA</p>
          </Link>
        </div>
      }
      {inventoryShowIcons &&
        <div className={styles.sidebar_menu}>
          {inventory.map((route, index) => {
            return (
              <Link href={route.link} className={styles.sidebar_menu_item} key={index}>
                <p className={styles.title}>{route.title}</p>
                <Image
                  src={route.image}
                  alt={'icon'}
                />
                <p className={styles.title}>{route.subTitle}</p>
              </Link>
            )
          })}
        </div>
      }
      <Alert4
        visible={showLogout}
        icon='success'
        title='Alerta'
        content='¿Estás seguro que quieres cerrar sesión? Esperamos verte de vuelta pronto en nuestra plataforma.'
        labelButton1='Cancelar'
        labelButton='Cerrar sesión'
        onClickButton1={() => setShowLogout(false)}
        onClickButton={onLogOut}
      />
      <Alert4
        visible={showDeleteAccount}
        icon='success'
        content='Lamentamos que hayas decidido eliminar tu cuenta. Esperamos verte de vuelta en el futuro'
        labelButton1='Cancelar'
        labelButton='Eliminar cuenta'
        onClickButton1={() => setShowDeleteAccount(false)}
        onClickButton={() => { }}
      />
    </div>
  )
}
