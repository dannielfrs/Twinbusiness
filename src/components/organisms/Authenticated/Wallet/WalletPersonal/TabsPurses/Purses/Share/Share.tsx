'use client'
import React, { useState } from 'react'
import styles from './Share.module.scss'
import Card from '@/components/molecules/Card/Card'
import InputText from '@/components/molecules/InputText/InputText'
import Image from 'next/image'
import Checkbox from '@/components/molecules/Checkbox/Checkbox'
import Button from '@/components/molecules/Button/Button/Button'
import whatsapp from '@/../public/images/Home/ProfileBussines/whatsapp_logo_svg.png'
import messenger from '@/../public/images/Home/ProfileBussines/Messenger-logo-2013-2018.png'
import twitter from '@/../public/images/Home/ProfileBussines/Logo_of_Twitter.svg.webp'
import instagram from '@/../public/images/Home/ProfileBussines/logo_instagram.png'
import imageSearch from '@/../public/images/icons/search.svg'
import logo from '@/../public/images/Home/ProfileBussines/logo.png'
import twinbusiness from '@/../public/images/Home/ProfileBussines/twinbusiness.png'
import robertpattinson from '@/../public/images/icons/robertpattinson.jpg'
import emma_stone from '@/../public/images/icons/emma_stone.jpg'
import andrew from '@/../public/images/icons/andrew.jpg'
import more from '@/../public/images/icons/more.svg'
import dow from '@/../public/images/icons/dow.svg'
import compartir from '@/../public/images/icons/compartir.svg'
import printe from '@/../public/images/icons/printe.svg'
import copygray from '@/../public/images/icons/copygray.svg'

export default function Share ({text}: {text?: string}) {
   const [isModalOpen, setIsModalOpen] = useState(false);
    const users = [
        {
           id: 1209821309812309,
           name: 'Emma Stone',
           image: emma_stone,
        },
        {
           id: 334535982178987,
           name: 'Robert Pattinson',
           image: robertpattinson
        },
        {
           id: 334538597545142,
           name: 'Andrew Garfield',
           image: andrew
        }
    ]
    const [usersSelected, setUsersSelected] = useState<string[]>([]);
    const toggleUserSelected = (userName: string) => {
        setUsersSelected((prevUsersSelected) => {
            if (prevUsersSelected.includes(userName)) {
                return prevUsersSelected.filter((name) => name !== userName);
            } else {
                return [...prevUsersSelected, userName];
            }
        });
      };

      const openModal = () => {
         setIsModalOpen(true);
     };
 
     const closeModal = () => {
         setIsModalOpen(false);
     };
    return(
        <>
         <Card className={`${styles.CardShare} ${styles.noScroll}`}>
            <div className={styles.shareImage}>
               <p className={styles.title}>Compartir</p>
               <div className={styles.ImageMore} onClick={openModal}>
                  <Image src={more} alt=''/>
               </div>
            </div>
            {isModalOpen && ( 
               <Card className={styles.ModalActions}>
                  <div className={styles.ButtonClosed}>
                     <p className={styles.title}>Acciones</p>
                     <p className={styles.closed} onClick={closeModal}>x</p>
                  </div>
                  <div className={styles.container}>
                     <div className={styles.contAction}>
                        <Image alt='' src={dow}/>
                        <p>Descargar</p>
                     </div>
                     <div className={styles.contAction}>
                        <Image alt='' src={compartir}/>
                        <p>Compartir</p>
                     </div>
                     <div className={styles.contAction}>
                        <Image src={printe} alt=''/>
                        <p>Imprimir</p>
                     </div>
                     <div className={styles.contAction}>
                        <Image alt='' src={copygray}/>
                        <p>Copiar</p>
                     </div>
                  </div>
               </Card>
            )}
            <div className={styles.search}>
               <InputText
               label=''
               name='search'
               // value={search}
               // onChange={(e) => setSearch(e.target.value)}
               placeholder='Buscar'
               icon={imageSearch}
               iconPosRight= {true}
               variant='SearchGray'
               height='34px'
               filter={false}
               />
            </div>
            <p className={styles.textSearch}>{text}</p>
            <div className={styles.share}>
               {users.map ((e, key) => {
                  return(
                  <Card className={styles.CardContact} key={key}>
                     <div className={styles.ContInfo}>
                        <div className={styles.image}>
                           <Image src={e.image} alt=''/>
                        </div>
                        <div className={styles.info}>
                           <p className={styles.name}>{e.name}</p>
                           <p className={styles.id}>ID: {e.id}</p>
                        </div>
                     </div>
                     <div className={styles.contCheckImages}>
                        <Checkbox
                           inputId={`terms-${key}`}
                           name={`terms-${key}`}
                           value={e.name}
                           onChange={() => toggleUserSelected(e.name)}
                           checked={usersSelected.includes(e.name)}
                           variant="white"
                        />
                        <div className={styles.twin}>
                           <div className={styles.logo}>
                              <Image alt='' src={logo} />
                           </div>
                           <div className={styles.imagetwin}>
                              <Image src={twinbusiness} alt='' />
                           </div>
                        </div>
                     </div>
                  </Card>
                  )
               })}
            </div>
            <div className={styles.ButtonShare}>
               <Button height='43px' variant='third'>Compartir</Button>
            </div>
            <div className={styles.ContSocialMedia}>
               <div>
                  <Image src={whatsapp} alt=''/>
               </div>
               <div>
                  <Image src={twitter} alt=''/>
               </div>
               <div>
                  <Image src={messenger} alt=''/>
               </div>
               <div>
                  <Image src={instagram} alt=''/>
               </div>
            </div>
         </Card>
        </>
    )
}
