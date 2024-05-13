'use client'

import React, { useState } from 'react'
import styles from './WalletPersonal.module.scss'
import { TabPanel, TabView } from 'primereact/tabview'
import Image from 'next/image'
import mexico from '@/../public/images/icons/mexico.png'
import grupo from '@/../public/images/icons/Grupo.png'
import grupo_twin from '@/../public/images/icons/grupo_twin.png'
import bitcoin01 from '@/../public/images/icons/bitcoin01.png'
import formaderayo from '@/../public/images/icons/formaderayo.png'
import TabsPurses from './TabsPurses/TabsPurses'

export default function WalletPersonal() {
  const [activeIndex, setActiveIndex] = useState(0)

  const tabs = [
    {
      id: 0,
      image: mexico,
      coin: 'MXN',
      number: '1.00',
      coin2: 'USD',
      number2: '20.00',
      title: 'Precio/T.cambio'
    },
    {
      id: 1,
      image: grupo,
      coin: 'TWIN',
      number: '1.00',
      coin2: 'MXN',
      number2: '20.00',
      title: 'Precio/T.cambio'
    },
    {
      id: 2,
      image: grupo_twin,
      coin: 'TWC',
      number: '1.00',
      coin2: 'MXN',
      number2: '60.00',
      title: 'Precio/T.cambio'
    },
    {
      id: 3,
      image: bitcoin01,
      coin: 'BTC',
      number: '1.00',
      coin2: 'MXN',
      number2: '327,056.40',
      title: 'Precio/T.cambio'
    },
    {
      id: 4,
      image: formaderayo,
      text: 'Lightning'
    }
  ]
  return (
    <>
      <div className={styles.WalletPersonal}>
        {tabs &&
          <div className={styles.tabsBtns}>
            {tabs.map((e) => {
              return (
                <div key={e.id} className={styles.cont_tabs}>
                  <div onClick={() => setActiveIndex(parseInt(e.id.toString()))} className={`${activeIndex === parseInt(e.id.toString()) ? styles.tabActive : styles.tabBtn}`}>
                    <div className={styles.image}>
                      {e.image &&
                        <Image alt='icon' src={e.image} />}
                    </div>
                    <p className={styles.onlytext}>{e.text}</p>
                    <div className={styles.right}>
                      <p className={styles.title}>{e.title}</p>
                      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                        <p>{e.coin}</p>
                        <p>{e.number}</p>
                      </div>
                      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                        <p>{e.coin2}</p>
                        <p>{e.number2}</p>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>}
        <TabView activeIndex={activeIndex} onTabChange={(e) => setActiveIndex(e.index)}>
          <TabPanel header="Personal" className={styles.tab}>
            <div className={styles.m0}>
              <TabsPurses />
            </div>
          </TabPanel>
          <TabPanel header="Empresarial">
            <div className="card">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
              eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo
              enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui
              ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.
            </div>
          </TabPanel>
          <TabPanel header="Invitado">
            <div className="card">
              At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti
              quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in
              culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.
              Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.
            </div>
          </TabPanel>
        </TabView>
      </div>
    </>
  )
}
