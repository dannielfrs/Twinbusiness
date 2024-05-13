'use client'

import React, { useState } from 'react'
import styles from './Soon.module.scss'
import Link from 'next/link'
import Image from 'next/image'
import logo_small from '@/../public/images/Events/logo_small.png'
import CerrarSesion from '@/../public/images/icons/CerrarSesion.svg'
import EliminarCuenta from '@/../public/images/icons/EliminarCuenta.svg'
import Alert2 from '@/components/molecules/Alert2/Alert2'

export default function Soon () {
  const [showModal, setShowModal] = useState(false)

  const handleCloseSession = () => {
    // Agrega aquí la lógica para cerrar sesión
    // Después de cerrar sesión, redirige a la página de inicio
    setShowModal(false)
    // Agrega aquí la lógica para redireccionar a la página de inicio
  }
  return (
    <div className={styles.Soon}>
      <div className={styles.sidebar}>
        <div className={styles.iconHome}>
          <Link href='/system/home'>
            <Image
              src={logo_small}
              alt='logo'
              className={styles.logo}
            />
          </Link>
        </div>
        <div className={styles.icons}>
          <div className={styles.close} onClick={() => setShowModal(true)}>
            <div className={styles.image}>
              <Image src={CerrarSesion} alt='' />
            </div>
            <p className={styles.text} onClick={handleCloseSession}>Cerrar sesión</p>
          </div>
          <div className={styles.delete}>
            <div className={styles.image}>
              <Image src={EliminarCuenta} alt='' />
            </div>
            <p className={styles.text}>Eliminar cuenta</p>
          </div>
        </div>
      </div>
      <div style={{ width: '1200px' }}>
        <p>¡Próximamente todas las funciones!</p>
      </div>
    </div>
  )
}
