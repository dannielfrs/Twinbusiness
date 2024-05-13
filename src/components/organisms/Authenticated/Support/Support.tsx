'use client'

import React from 'react'
import styles from './Support.module.scss'
import Card from '@/components/molecules/Card/Card'
import { Accordion, AccordionTab } from 'primereact/accordion'
import Image from 'next/image'
import CHAT from '@/../public/images/icons/CHAT.svg'
import WALLET from '@/../public/images/icons/WALLET.svg'
import Guardados from '@/../public/images/icons/Guardados.svg'
import InputText from '@/components/molecules/InputText/InputText'
import search from '@/../public/images/icons/search.svg'
import FormHookProvider from '@/components/layouts/Form/FormHookProvider/FormHookProvider'
import { useForm } from 'react-hook-form'

export default function Support () {
  //
  const methods = useForm()

  const onSubmit = () => { }

  const data = [
    {
      title: '¿Cómo puedo recuperar mi contraseña?',
      contain: 'Para recuperar su contraseña vaya al menú de inicio, opción de recuperar contraseña, escriba el correo o el teléfono con que se registró y su fecha de nacimiento. Presione el botón de aceptar e ingrese el código de verificación. En eso de que no reciba el código de verificación, ingrese su número telefónico y espera a recibir un SMS. Si no recuerda su fecha de nacimiento, entonces solicite una clave provisional directamente en el chat de twinbusiness.'
    },
    {
      title: '¿Cuántos productos puedo subir en mi landing?',
      contain: 'hola'
    },
    {
      title: '¿Qué pasa si no renuevo mi membresía en el segundo año?',
      contain: 'hola'
    },
    {
      title: '¿Me cobran comisión por contactar a un usuario?',
      contain: 'hola'
    },
    {
      title: '¿Qué servicios no se pueden incluir en la plataforma?',
      contain: 'hola'
    },
    {
      title: 'Mi membresía es de socio, ¿Cómo puedo cambiarla a vendemos por ti?',
      contain: 'hola'
    }
  ]

  return (
    <div className={styles.Support}>
      <FormHookProvider className={styles.formCreateAccount} methods={methods} onSubmit={onSubmit}>
        <Card className={styles.ContSupport}>
          <h1>Soporte</h1>
          <div className={styles.question}>
            <p className={styles.titleQ}>¿Cómo te podemos ayudar?</p>
            <div className={styles.search}>
              <InputText
                name='search'
                label=''
                // value={search}
                // onChange={(e) => setSearch(e.target.value)}
                placeholder='Buscar pregunta'
                icon={search}
                iconPosRight
                variant='basic'
                height='50px'
                filter={false}
              />
            </div>
          </div>
          <div className={styles.titleF}>Preguntas frecuentes</div>
          <div className={styles.frequentQuestions}>
            <Accordion activeIndex={0} className={styles.Frequent}>
              {data.map((e, index) => {
                return (
                  <AccordionTab key={index} header={e.title}>
                    <p className='card'>
                      {e.contain}
                    </p>
                  </AccordionTab>
                )
              })}
            </Accordion>
          </div>
          <div className={styles.contBottom}>
            <p className={styles.title}>¿No encuentras la respuesta a tu pregunta?</p>
            <p className={styles.sub}>Prueba lo siguiente:</p>
            <div className={styles.contCards}>
              <Card className={styles.card1}>
                <div className={styles.both}>
                  <Image alt='' src={CHAT} />
                  <p style={{ fontSize: '14px', fontWeight: '700' }}>Chatea con nosotros</p>
                </div>
                <p style={{ fontSize: '13px' }}>Pregunta directamente al equipo especializado de Twinbusiness</p>
              </Card>
              <Card className={styles.card2}>
                <div className={styles.both}>
                  <div className={styles.imgTel}>
                    <Image alt='' src={WALLET} />
                  </div>
                  <p style={{ fontSize: '14px', fontWeight: '700' }}>Contáctanos</p>
                </div>
                <div className={styles.tel}>
                  <p>33 1234 122 34</p>
                  <p>33 1234 122 34</p>
                  <p>33 1234 122 34</p>
                </div>
              </Card>
              <Card className={styles.Card3}>
                <div className={styles.imgEmail}>
                  <Image src={Guardados} alt='icon' />
                </div>
                <p>Envía un e-mail</p>
              </Card>
            </div>
          </div>
        </Card>
      </FormHookProvider>
    </div>
  )
}
