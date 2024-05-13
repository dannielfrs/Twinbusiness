'use client'

import { useState } from 'react'
import styles from './Invite.module.scss'
import Card from '@/components/molecules/Card/Card'
import Image from 'next/image'
import InputText from '@/components/molecules/InputText/InputText'
import CardBuy from '../../RechargingBanks/CuttingSales/CardBuy/CardBuy'
import fightclub from '@/../public/images/icons/fightclub.jpg'
import imageSearch from '@/../public/images/icons/search.svg'
import fotografia from '@/../public/images/icons/fotografia.jpg'
import carrito from '@/../public/images/icons/carrito.jpg'
import FormHookProvider from '@/components/layouts/Form/FormHookProvider/FormHookProvider'
import { useForm } from 'react-hook-form'
import arroba from '@/../public/images/icons/arroba.svg'
import iconUpload from '@/../public/images/icons/iconUpload.png'
import copygray from '@/../public/images/icons/copygray.svg'
import scan from '@/../public/images/icons/scan.svg'
import robertpattinson from '@/../public/images/icons/robertpattinson.jpg'
import icon1 from '@/../public/images/icons/Quienes somos.svg'
import twinLogin from '@/../public/images/icons/twinLogin.svg'
import Checkbox from '@/components/molecules/Checkbox/Checkbox'
import emma_stone from '@/../public/images/icons/emma_stone.jpg'
import andrew from '@/../public/images/icons/andrew.jpg'
import Button from '@/components/molecules/Button/Button/Button'
import more from '@/../public/images/icons/more.svg'
import ModalElectronicSignature from './ModalElectronicSignature/ModalElectronicSignature'

export default function Invite () {

    const methods = useForm()
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [usersSelected, setUsersSelected] = useState<string[]>([])

    const onSubmit = () => { }

    const openModal = () => {
        setIsModalOpen(true)
    }

    const closeModal = () => {
        setIsModalOpen(false)
    }

    const data = [
        {
            id: 1,
            image: fotografia,
            question: '¿No sabes cómo editar tus fotos?',
            text: 'Compra un paquete que te sube tus fotos con fondo blanco o transparente',
            showButton: true
        },
        {
            id: 2,
            image: carrito,
            question: '¿Tienes más de 50 productos?',
            text: 'Amplia tu espacio de productos , servicios, subastas o bolsas de compras con alguno de nuestros paquetes',
            showButton: true
        }
    ]

    const users = [
        {
            id: 1,
            name: 'Robert Pattinson',
            image: robertpattinson,
            email: 'robertpattinson@gmail.com',
            number: '33 5453-5452'
        },
        {
            id: 2,
            name: 'Emma Stone',
            image: emma_stone,
            email: 'emma_stone@gmail.com',
            number: '33 5453-5452'
        },
        {
            id: 3,
            name: 'Andrew Garfield',
            image: andrew,
            email: 'andrew@gmail.com',
            number: '33 5453-5452'
        }
    ]

    const toggleUserSelected = (userName: string) => {
        setUsersSelected((prevUsersSelected) => {
            if (prevUsersSelected.includes(userName)) {
                return prevUsersSelected.filter((name) => name !== userName);
            } else {
                return [...prevUsersSelected, userName];
            }
        })
    }

    return (
        <FormHookProvider methods={methods} onSubmit={onSubmit}>
            <div className={styles.Invite}>
                <Card className={styles.CardInvite}>
                    <p className={styles.title}>Personal banco de recargas</p>
                    <div className={styles.containerTop}>
                        <div className={styles.cont1}>
                            <Card className={styles.cardBank}>
                                <div className={styles.Image}>
                                    <Image src={fightclub} alt='' />
                                </div>
                                <div className={styles.right}>
                                    <p className={styles.title}>IBF Boca de iguanas</p>
                                    <div className={styles.start}>
                                        <div className={styles.day}>
                                            <p>Inicia</p>
                                            <p>07/08/2022</p>
                                        </div>
                                        <div className={styles.hour}>
                                            <p>Hora</p>
                                            <p>12:00 PM</p>
                                        </div>
                                    </div>
                                    <div className={styles.start}>
                                        <div className={styles.day}>
                                            <p>Finaliza</p>
                                            <p>07/08/2022</p>
                                        </div>
                                        <div className={styles.hour}>
                                            <p>Hora</p>
                                            <p>16:00 PM</p>
                                        </div>
                                    </div>
                                </div>
                            </Card>
                            <div className={styles.search}>
                                <p className={styles.titleSearch}>Buscar por no. de teléfono o correo</p>
                                <InputText
                                    label=''
                                    name='search'
                                    // value={search}
                                    // onChange={(e) => setSearch(e.target.value)}
                                    placeholder="Buscar perfil para invitar"
                                    icon={imageSearch}
                                    iconPosRight={true}
                                    variant='SearchGray'
                                    height='34px'
                                    filter={false}
                                />
                            </div>
                        </div>
                        <div className={styles.containerCards}>
                            {data.map((e, key) => {
                                return (
                                    <div className={styles.ContainerBuy} key={key}>
                                        <CardBuy
                                            image={e.image}
                                            text={e.text}
                                            question={e.question}
                                            showButton={e.showButton}
                                        />
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    <Card className={`${styles.CardBottom} ${styles.noScroll}`}>
                        <div className={styles.titlesBoth}>
                            <div className={styles.left}>
                                <p>Invitar personal de banco/recargas</p>
                                <Image src={arroba} alt='' />
                                <Image src={iconUpload} alt='' />
                                <Image src={copygray} alt='' />
                                <Image src={scan} alt='' />
                            </div>
                            <p>Personal banco de recargas 3</p>
                        </div>
                        <div className={styles.ContainerUser}>
                            {users.map((e, key) => {
                                return (
                                    <>
                                        <Card className={styles.CardUser} key={key}>
                                            <div className={styles.infoProfile}>
                                                <div className={styles.image}>
                                                    <Image src={e.image} alt='' />
                                                </div>
                                                <p className={styles.name}>{e.name}</p>
                                            </div>
                                            <div className={styles.contact}>
                                                <p>Correo: {e.email}</p>
                                                <p>Número: {e.number}</p>
                                            </div>
                                            <div className={styles.actions}>
                                                <div className={styles.icons}>
                                                    <Image alt='' src={icon1} />
                                                    <Image src={twinLogin} alt='' />
                                                </div>
                                                <Checkbox
                                                    inputId={`terms-${key}`}
                                                    name={`terms-${key}`}
                                                    value={e.name}
                                                    onChange={() => toggleUserSelected(e.name)}
                                                    checked={usersSelected.includes(e.name)}
                                                    variant="white"
                                                />
                                                <div className={styles.more}>
                                                    <Image alt='' src={more} />
                                                </div>
                                            </div>
                                        </Card>
                                    </>
                                )

                            })}
                        </div>
                        <div className={styles.buttonInvite}>
                            <Button height='40px' variant='third' onClick={openModal}>Invitar</Button>
                        </div>
                        {isModalOpen && (
                            <ModalElectronicSignature closeModal={closeModal} />
                        )}
                    </Card>
                </Card>
            </div>
        </FormHookProvider>
    )
}
