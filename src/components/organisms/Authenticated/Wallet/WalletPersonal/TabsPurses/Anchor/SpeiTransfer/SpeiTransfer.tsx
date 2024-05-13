import React, { useState } from 'react'
import styles from './SpeiTransfer.module.scss'
import Card from '@/components/molecules/Card/Card'
import Image from 'next/image'
import mexico from '@/../public/images/icons/mexico.png'
import EyeClosed from '@/../public/images/icons/Eyeclose.svg'
import EyeOpen from '@/../public/images/icons/Eye.svg'
import copy from '@/../public/images/icons/copy.svg'

export default function SpeiTransfer () {
  const [isEyeOpen, setIsEyeOpen] = useState(false);
  const [cardNumber, setCardNumber] = useState('1425 4785 9541');
  
  const toggleEye = () => {
    setIsEyeOpen(!isEyeOpen);
    if (isEyeOpen) {
    setCardNumber('1425 4785 9541');
    } else {
        setCardNumber('XXXX XXXX XXXX');
    }
  };
    return(
        <>
        <Card className={styles.SpeiTransfer}>
            <p className={styles.title}>Fondear con SPEI</p>
            <div className={styles.WalletToAnchor}>
                <p className={styles.title}>Monedero a fondear</p>
                <Card className={styles.cont1}>
                    <div className={styles.flag}>
                        <Image alt='' src={mexico} />
                    </div>
                    <div className={styles.both}>
                        <p className={styles.text1}>Monedero Personal</p>
                        <p className={styles.text2}>Saldo disponible</p>
                    </div>
                    <div className={styles.numberCard}>
                        <Image src={isEyeOpen ? EyeClosed : EyeOpen} alt='' onClick={toggleEye} />
                        <p className={styles.number}>{cardNumber}</p>
                    </div>
                </Card>
            </div>
            <div className={styles.beneficiary}>
                <p>Beneficiario</p>
                <Card className={styles.name}>
                    Edgar Coss
                </Card>
            </div>
            <div className={styles.amount}>
                <p>Monto</p>
                <Card className={styles.number}>
                    $545.00 MXN
                </Card>
            </div>
            <div className={styles.account}>
                <p>Cuenta a fondear con SPEI</p>
                <Card className={styles.number}>
                    6235 5431 6542 8766
                    <div className={styles.ContCopy}>
                        <Image src={copy} alt=''/>
                    </div>
                </Card>
            </div>
            <p className={styles.important}>IMPORTANTE</p>
            <p className={styles.text}>Solamente puede depositar desde cuentas bancarias bajo tu nombre. Puedes depositar hasta $2,974,122.75 MXN.</p>
        </Card>
        </>
    )
}