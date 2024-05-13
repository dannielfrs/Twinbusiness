import React, { useState } from 'react'
import styles from './RechargeBalance.module.scss'
import Card from '@/components/molecules/Card/Card'
import InputText from '@/components/molecules/InputText/InputText'
import Checkbox from '@/components/molecules/Checkbox/Checkbox'
import Image from 'next/image'
import danger from '@/../public/images/icons/danger.png'
import success from '@/../public/images/icons/success.png'
import publicidad2 from '@/../public/images/icons/publicidad2.jpg'
import qrTwin from '@/../public/images/icons/qrTwin.png'


export default function RechargeBalance ({closeModal2}: {closeModal2?: () => void;}) {
    const [debito, setDebito] = useState('');
    const [cash, setCash] = useState('');
    const [credito, setCredito] = useState('');
    const [twin, setTwin] = useState('');
    const [twc, setTwc] = useState('');
    const [btc, setBtc] = useState('');
    type Section = 'card1' | 'card2' | 'card3';

    const [sectionsVisibility, setSectionsVisibility] = useState({
        card0: true,
        card1: false,
        card2: false,
        card3: false,
      });
    
      const toggleSectionVisibility = (section: Section) => {
        setSectionsVisibility((prevVisibility) => ({
          ...prevVisibility,
          [section]: !prevVisibility[section],
        }));
      };
  return(
    <>
    <div className={styles.RechargeBalance}>
      <div className={styles.modalback}>
        <div className={styles.modal}>
        {sectionsVisibility.card0 && (
          <>
          <p className={styles.titleScan}>ESCANER/BANCO</p>  
          <div className={styles.closed} onClick={closeModal2}>
            <p>x</p>
          </div>
          <div className={styles.qrImage} 
            onClick={() => {setSectionsVisibility({
              card0: false,
              card1: true,
              card2: false,
              card3: false,
           })}}
          >
            <Image alt='' src={qrTwin}/>
          </div>
          </>
        )}
        {sectionsVisibility.card1 && (
          <Card className={styles.cardText}>
            <p className={styles.title}>Recargas de saldo</p>
            <div className={styles.closed} onClick={closeModal2}>
              <p>x</p>
            </div>
            <div className={styles.currentBalance}>
                <p className={styles.text}>Saldo actual:</p>
                <div className={styles.contNumber}>
                  <p className={styles.text2}>MXN</p>
                  <p className={styles.text3}>$3,400.00</p>
                </div>
            </div>
            <div className={styles.contInput}>
              <InputText label='Saldo a recargar' name='' variant='inputBig' height='125px' placeholder='0.00'/>
            </div>
            <div className={styles.buttons}>
              <div className={styles.cancel} onClick={closeModal2}>
                <p>Cancelar</p>
              </div>
              <div className={styles.recharge} 
                onClick={() => {setSectionsVisibility({
                    card0: false,
                    card1: false,
                    card2: true,
                    card3: false,
                 })}}
              >
                <p>Recargar</p>
              </div>
            </div>
            <div className={styles.contOptions}>
                <div className={styles.contCheck}>
                    <Checkbox
                        inputId="cash"
                        name="cash"
                        value={cash}
                        onChange={() => setCash(cash === '' ? 'ok' : '')}
                        checked={cash === '' ? false : true}
                        variant="white"
                        label="EFECTIVO"
                    />
                </div>
                <div className={styles.contCheck}>
                    <Checkbox
                        inputId="debito"
                        name="debito"
                        value={debito}
                        onChange={() => setDebito(debito === '' ? 'ok' : '')}
                        checked={debito === '' ? false : true}
                        variant="white"
                        label="TARJETA DE DÉBITO"
                    />
                </div>
                <div className={styles.contCheck}>
                    <Checkbox
                        inputId="credito"
                        name="credito"
                        value={credito}
                        onChange={() => setCredito(credito === '' ? 'ok' : '')}
                        checked={credito === '' ? false : true}
                        variant="white"
                        label="TARJETA DE CRÉDITO"
                    />
                </div>
                <div className={styles.contCheck}>
                    <Checkbox
                        inputId="twin"
                        name="twin"
                        value={twin}
                        onChange={() => setTwin(twin === '' ? 'ok' : '')}
                        checked={twin === '' ? false : true}
                        variant="white"
                        label="RECARGA EN TWIN"
                    />
                </div>
                <div className={styles.contCheck}>
                    <Checkbox
                        inputId="twc"
                        name="twc"
                        value={twc}
                        onChange={() => setTwc(twc === '' ? 'ok' : '')}
                        checked={twc === '' ? false : true}
                        variant="white"
                        label="RECARGA EN TWC"
                    />
                </div>
                <div className={styles.contCheck}>
                    <Checkbox
                        inputId="btc"
                        name="btc"
                        value={btc}
                        onChange={() => setBtc(btc === '' ? 'ok' : '')}
                        checked={btc === '' ? false : true}
                        variant="white"
                        label="RECARGA EN BTC"
                    />
                </div>
            </div>
          </Card>
        )}
        {sectionsVisibility.card2 && (
          <Card className={styles.alert}>
            <div className={styles.ImageDanger}>
                <Image alt='' src={danger}/>
            </div>
            <p>ALERTA</p>
            <p>TOTAL DE SALDO A RECARGAR</p>
            <div className={styles.input}>
              <InputText variant='inputBig' height='125px' name='' defaultValue='$4,000.00 MXN'/>
            </div>
            <div className={styles.buttons}>
                <div className={styles.confirm} 
                    onClick={() => {setSectionsVisibility({
                        card0: false,
                        card1: false,
                        card2: false,
                        card3: true,
                    })}}
                >
                    <p>CONFIRMAR RECARGA</p>
                </div>
                <div className={styles.cancel}
                    onClick={() => {setSectionsVisibility({
                        card0: false,
                        card1: true,
                        card2: false,
                        card3: false,
                     })}}
                >
                    <p>Cancelar</p>
                </div>
            </div>
          </Card>
        )}
        {sectionsVisibility.card3 && (
            <div className={styles.success}>
                <p className={styles.title}>¡Recarga exitosa!</p>
                <div className={styles.imageSuccess}>
                    <Image alt='' src={success}/>
                </div>
                <div className={styles.buttonOk} onClick={closeModal2}>
                    <p>OK</p>
                </div>
                <p className={styles.text}>Publicidad</p>
                <div className={styles.contimage}>
                    <Image src={publicidad2} alt=''/>
                </div>
            </div>
        )}
        </div>
      </div>
    </div>
    </>
  )
}