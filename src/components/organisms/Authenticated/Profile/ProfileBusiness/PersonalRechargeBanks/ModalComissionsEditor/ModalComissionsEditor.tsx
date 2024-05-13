import React, { useState } from 'react'
import styles from './ModalComissionsEditor.module.scss'
import Card from '@/components/molecules/Card/Card'
import andrew from '@/../public/images/icons/andrew.jpg'
import Image from 'next/image'
import Checkbox from '@/components/molecules/Checkbox/Checkbox'
import logo from '@/../public/images/Home/ProfileBussines/logo.png'
import twin from '@/../public/images/Home/ProfileBussines/twinbusiness.png'
import InputText from '@/components/molecules/InputText/InputText'
import editar from '@/../public/images/icons/editar.svg'
import Button from '@/components/molecules/Button/Button/Button'

export default function ModalComissionsEditor ({closeModal2}: {closeModal2?: () => void;}) {
  const [usersSelected, setUsersSelected] = useState('');
  return(
    <>
      <div className={styles.ModalComissionsEditor}>
        <div className={styles.modalback}>
          <div className={styles.modal}>
            <p onClick={closeModal2} className={styles.closed}>x</p>
            <Card className={styles.CardCenter}>
              <p className={styles.title}>Editor de comisiones para banco de recargas</p>
              <Card className={styles.contProfile}>
                <div className={styles.both}>
                  <Card className={styles.profile}>
                    <Image src={andrew} alt='' />
                  </Card>
                  <div className={styles.user}>
                    <p className={styles.name}>Andrew Garfield</p>
                    <p className={styles.email}>andrew.garfield@gmail.com</p>
                  </div>
                </div>
                <div className={styles.actions}>
                  <Checkbox
                      inputId="terms"
                      name="terms"
                      value={usersSelected}
                      onChange={() => setUsersSelected(usersSelected === '' ? 'ok' : '')}
                      checked={usersSelected === '' ? false : true}
                      variant="white"
                  />
                  <div className={styles.logos}>
                      <Image alt='' src={twin}/>
                      <Image alt='' src={logo}/>
                  </div>
                </div>
              </Card>
              <p className={styles.subtitle}>La comisión o nomina se pagará al final del evento</p>
              <Card className={styles.comission}>
                <p>Comisión inicial</p>
                <p>5%</p>
              </Card>
              <div style={{width: '476px'}}>
                <InputText 
                  name='' 
                  placeholder='Nueva comisión' 
                  variant='comission'
                  icon={editar}
                  height='40px'
                />
              </div>
              <div style={{width: '352px'}}>
                <Button height='40px' variant='third'>Guardar cambios</Button>
              </div>
              <div style={{width: '267px'}}>
                <Button height='40px' variant='whiteAlert' onClick={closeModal2}>Cancelar</Button>
              </div>
            </Card>
          </div>
        </div>
      </div>   
    </>
  )
}