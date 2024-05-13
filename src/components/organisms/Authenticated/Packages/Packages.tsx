'use client'

import { useContext } from 'react'
import styles from './Packages.module.scss'
import Card from '@/components/molecules/Card/Card'
import CardPackage from './CardPackage/CardPackge'
import Image from 'next/image'
import Grupo from '@/../public/images/icons/Grupo.png'
import grupo_twin from '@/../public/images/icons/grupo_twin.png'
import bitcoin from '@/../public/images/icons/bitcoin.png'
import visa from '@/../public/images/icons/visa.png'
import master_card from '@/../public/images/icons/master_card.png'
import { WebEventContext } from '@/context/authenticated/events/webEvent'
import { PackagesContext } from '@/context/authenticated/home/packages'

export default function Packages() {

  const { setFirstStep } = useContext(WebEventContext)
  const { memberships } = useContext(PackagesContext)

  const handleSelect = (text: string, disabled: boolean) => {
    if (!disabled) {
      const [membership] = memberships.filter((item, index) => (item.text === text))
      if (membership) setFirstStep(membership.id)
    }
  }

  const data = [
    {
      id: 1,
      title: '',
      subtitle: 'Aceptamos criptomonedas',
      text1: 'Recomenado para pequeñas, medianas y grandes empresas',
      text2: '¡Publica y vende sin comisiones!',
      name: 'PAQUETE SOCIO',
      type: 'MXN',
      time: 'Mensuales',
      price: '2500',
      buttonType: 'gray' as const,
      disabled: true
    },
    {
      id: 2,
      title: '',
      subtitle: 'Aceptamos criptomonedas',
      text1: 'Paquete recomendado por twinbusiness:',
      text2: '¡Mayores resultados con menor esfuerzo!',
      name: 'PAQUETE VENDEMOS POR TI',
      type: 'MXN',
      time: 'Mensuales',
      price: '4167',
      buttonType: 'gray' as const,
      disabled: true
    },
    {
      id: 3,
      title: 'CREA TU EVENTO',
      subtitle: 'Aceptamos criptomonedas',
      text1: 'Recomenado para pequeñas, medianas y grandes empresas',
      text2: '¡Vende boletaje, administra y coordina tu evento!',
      name: 'PAQUETE DE EVENTOS',
      type: '',
      time: '',
      price: '',
      buttonType: 'black' as const,
      disabled: false
    }
  ]

  return (
    <div className={styles.Packages}>
      <Card className={styles.cardP}>
        <div className={styles.ContTitle}>ELIGE EL PAQUETE QUE MÁS SE ACOMODE A TUS NECESIDADES</div>
        <div className={styles.cards}>
          {data.map((e, key) => {
            return (
              <CardPackage
                key={key}
                title={e.title}
                subtitle={e.subtitle}
                text1={e.text1}
                text2={e.text2}
                name={e.name}
                type={e.type}
                time={e.time}
                price={e.price}
                buttonType={e.buttonType}
                onClickSelect={() => handleSelect(e.text2, e.disabled)}
              />
            )
          })}
        </div>
        <div className={styles.PaymentMethods}>
          <p className={styles.text}>Aceptamos pagos con: Criptomonedas, Twin, Twincoin, Bitcoin, moneda local o mediante métodos de pago como: VISA, MasterCard, transferencia y depósito.</p>
          <div className={styles.imagePay}>
            <div className={styles.twins}>
              <Image alt='icon' src={Grupo} />
              <Image alt='icon' src={grupo_twin} />
              <Image alt='icon' src={bitcoin} />
            </div>
            <div className={styles.master}>
              <div className={styles.imgVisa}>
                <Image alt='icon' src={visa} />
              </div>
              <div className={styles.imgMaster}>
                <Image alt='icon' src={master_card} />
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  )
}
