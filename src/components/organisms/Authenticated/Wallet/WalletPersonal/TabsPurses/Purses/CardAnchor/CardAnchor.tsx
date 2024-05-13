import React, { useState } from 'react'
import styles from './CardAnchor.module.scss'
import InputText from '@/components/molecules/InputText/InputText';
import Checkbox from '@/components/molecules/Checkbox/Checkbox';
import Button from '@/components/molecules/Button/Button/Button';
import Card from '@/components/molecules/Card/Card';

export default function CardAnchor ({buttonNewCard}: {buttonNewCard?: React.ReactNode}) {
    const [selectedCard, setSelectedCard] = useState<string | null>(null);
    const cards = [
        {
           id: 1,
           name: 'Bancomer ****4321',
        },
        {
           id: 2,
           name: 'HSBC ****4562',
        },
        {
           id: 3,
           name: 'Santander ****5420',
        },
        {
           id: 4,
           name: 'Santander ****5420'
        },
        {
           id: 5,
           name: 'HSBC ****4562',
        },
        {
           id: 6,
           name: 'Santander ****5420',
        },
        {
           id: 7,
           name: 'Santander ****5420'
        }
      ]
      const [usersSelected, setUsersSelected] = useState<string[]>([]);
      const toggleUserSelected = (userName: string) => {
        setUsersSelected([userName]);
    
        
        setSelectedCard(userName);
      };
    return(
        <>
         <Card className={styles.fondear}>
               <p className={styles.title}>Fondear</p>
               <div className={styles.bank}>
                  <p className={styles.title}>Banco que fondea</p>
                  <div className={styles.contAccount2}>
                     <p>{selectedCard}</p>
                  </div>
                  <div>
                     <InputText height='40px' variant='ShadowInset' name='amount' defaultValue='1,000.000 ' label='Cantidad a fondear'/>
                  </div>
                  <div className={styles.cardsSave}>
                     <p className={styles.title}>Tarjetas guardadas</p>
                     <div className={styles.containers}>
                        {cards.map((e, key) => {
                           return(
                              <>
                              <div className={styles.contAccount} key={key}>
                                 <p>{e.name}</p>
                                 <Checkbox
                                    inputId={`terms-${key}`}
                                    name={`terms-${key}`}
                                    value={e.name}
                                    onChange={() => toggleUserSelected(e.name)}
                                    checked={usersSelected.includes(e.name)}
                                    variant="white"
                                 /> 
                              </div>
                              </>
                           )
                        })}
                     </div>
                  </div>
               </div>
               <div className={styles.NewCard} >
                  {buttonNewCard}
               </div>
            </Card>
        </>
    )
}