'use client'
import React, { useState } from 'react'
import styles from './TabsPurses.module.scss'
import Image from 'next/image'
import { TabPanel, TabView } from 'primereact/tabview'
import monederos from '@/../public/images/icons/wallet iconos/monederos.png'
import pagosqr from '@/../public/images/icons/wallet iconos/pagosqr.png'
import cobrarqr from '@/../public/images/icons/wallet iconos/cobrarqr.png'
import fondear from '@/../public/images/icons/wallet iconos/fondear.png'
import enviar from '@/../public/images/icons/wallet iconos/enviar.png'
import remesas from '@/../public/images/icons/wallet iconos/remesas.png'
import ahorros from '@/../public/images/icons/wallet iconos/ahorros.png'
import prestamos from '@/../public/images/icons/wallet iconos/prestamos.png'
import twinpay from '@/../public/images/icons/wallet iconos/twinpay.png'
import canjear from '@/../public/images/icons/wallet iconos/canjear.png'
import movimientos from '@/../public/images/icons/wallet iconos/movimientos.png'
import firma from '@/../public/images/icons/wallet iconos/firma.png'
import Purses from './Purses/Purses'
import Anchor from './Anchor/Anchor'
import QrCharge from './QrCharge/QrCharge'
import QrPayments from './QrPayments/QrPayments'
import Signing from './Signing/Signing'

export default function TabsPurses () {
    const [activeIndex, setActiveIndex] = useState(0)
    const tabs = [
      {
        id: 0,
        image: monederos,
        title: 'Monederos'
      },
      {
        id: 1,
        image: pagosqr,
        title: 'Pagos QR'
      },
      {
        id: 2,
        image: cobrarqr,
        title: 'Cobrar QR'
      },
      {
        id: 3,
        image: fondear,
        title: 'Fondear'
      },
      {
        id: 4,
        image: enviar,
        title: 'Enviar',
      },
      {
        id: 5,
        image: remesas,
        title: 'Remesas'
      },
      {
        id: 6,
        image: ahorros,
        title: 'Ahorros'
      },
      {
        id: 7,
        image: prestamos,
        title: 'Prestamos'
      },
      {
        id: 8,
        image: twinpay,
        title: 'Twinpay'
      },
      {
        id: 9,
        image: canjear,
        title: 'Canjear',
      },
      {
        id: 10,
        image: movimientos,
        title: 'Movimientos'
      },
      {
        id: 11,
        image: firma,
        title: 'Firma',
      },
    ]
    return(
        <>
         <div className={styles.TabsPurses}>
            {tabs &&
                <div className={styles.tabsBtns}>
                    {tabs.map((e) => {
                    return (
                        <div key={e.id} className={styles.cont_tabs}>
                            <div onClick={() => setActiveIndex(parseInt(e.id.toString()))} className={`${activeIndex === parseInt(e.id.toString())  ? styles.tabActive : styles.tabBtn}`}>
                                <div className={styles.image}>
                                    {e.image &&
                                      <Image alt='' src={e.image}/>
                                    }
                                </div>
                                <p className={styles.onlytext}>{e.title}</p>
                            </div>
                        </div>
                    )
                    })}
            </div>}
            <TabView activeIndex={activeIndex} onTabChange={(e) => setActiveIndex(e.index)}>
                <TabPanel header="" className={styles.tab}>
                    <div className={styles.m0}>
                        <Purses />
                    </div>
                </TabPanel>
                <TabPanel header="" className={styles.tab}>
                    <div className={styles.m0}>
                      <QrPayments />
                    </div>
                </TabPanel>
                <TabPanel header="" className={styles.tab}>
                    <div className={styles.m0}>
                      <QrCharge />
                    </div>
                </TabPanel>
                <TabPanel header="" className={styles.tab}>
                    <div className={styles.m0}>
                      <Anchor/>
                    </div>
                </TabPanel>
                <TabPanel header="" className={styles.tab}>
                    <div className={styles.m0}>
                      
                    </div>
                </TabPanel>
                <TabPanel header="" className={styles.tab}>
                    <div className={styles.m0}>
                      
                    </div>
                </TabPanel>
                <TabPanel header="" className={styles.tab}>
                    <div className={styles.m0}>
                      
                    </div>
                </TabPanel>
                <TabPanel header="" className={styles.tab}>
                    <div className={styles.m0}>
                      
                    </div>
                </TabPanel>
                <TabPanel header="" className={styles.tab}>
                    <div className={styles.m0}>
                      
                    </div>
                </TabPanel>
                <TabPanel header="" className={styles.tab}>
                    <div className={styles.m0}>
                      
                    </div>
                </TabPanel>
                <TabPanel header="" className={styles.tab}>
                    <div className={styles.m0}>
                      
                    </div>
                </TabPanel>
                <TabPanel header="" className={styles.tab}>
                    <div className={styles.m0}>
                      <Signing />
                    </div>
                </TabPanel>
            </TabView>
         </div>
        </>
    )
}