'use client'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import FormHookProvider from '@/components/layouts/Form/FormHookProvider/FormHookProvider'
import InputText from '@/components/molecules/InputText/InputText'
import Card from '@/components/molecules/Card/Card'
import Checkbox from '@/components/molecules/Checkbox/Checkbox';
import Button from "@/components/molecules/Button/Button/Button";
import Modal from "@/components/layouts/Modal/Modal";
import ModalAlert from "@/components/layouts/ModalAlert/ModalAlert";

import plusLogo from '@/../../public/images/icons/plus.svg';
import search from '@/../../public/images/icons/search.svg'
import logo from '@/../public/images/Home/ProfileBussines/logo.png'
import twin from '@/../public/images/Home/ProfileBussines/twinbusiness.png'
import user1 from '@/../public/images/Home/ProfileBussines/Rounded.png'
import user2 from '@/../public/images/Home/ProfileBussines/Rounded1.png'
import user3 from '@/../public/images/Home/ProfileBussines/Rounded2.png'
import user4 from '@/../public/images/Home/ProfileBussines/Rounded3.png'
import user5 from '@/../public/images/Home/ProfileBussines/Rounded4.png'
import tw from '@/../public/images/Home/ProfileBussines/Logo_of_Twitter.svg.webp'
import msg from '@/../public/images/Home/ProfileBussines/Messenger-logo-2013-2018.png'
import ig from '@/../public/images/Home/ProfileBussines/logo_instagram.png'
import wha from '@/../public/images/Home/ProfileBussines/whatsapp_logo_svg.png'

import styles from './ShareProfile.module.scss'

const usersList = [
    {
        img: user1?.src,
        name: 'Edgar Corr',
        role: 'Empresario secundario',
        tel: '33 2342-43445',
        email: 'Edgarcorr@gmail.com',
        dateRegistered: '12/06/2022'
    },
    {
        img: user2?.src,
        name: 'Edgar Corr',
        role: 'Empresario secundario',
        tel: '33 2342-43445',
        email: 'Edgarcorr@gmail.com',
        dateRegistered: '12/06/2022'
    },
    {
        img: user3?.src,
        name: 'Edgar Corr',
        role: 'Empresario secundario',
        tel: '33 2342-43445',
        email: 'Edgarcorr@gmail.com',
        dateRegistered: '12/06/2022'
    },
    {
        img: user4?.src,
        name: 'Edgar Corr',
        role: 'Empresario secundario',
        tel: '33 2342-43445',
        email: 'Edgarcorr@gmail.com',
        dateRegistered: '12/06/2022'
    },
    {
        img: user5?.src,
        name: 'Edgar Corr',
        role: 'Empresario secundario',
        tel: '33 2342-43445',
        email: 'Edgarcorr@gmail.com',
        dateRegistered: '12/06/2022'
    }
];
export default function ShareProfile() {
    const [usersSelected, setUsersSelected] = useState('');
    const [showInfo, setShowModalInfo] = useState(false);
    const [typeAlert, setTypeAlert] = useState('success');
    const [textAlert, setTextAlert] = useState('');
    const [textButton, setTextButton] = useState('');

    const saveDatas = () => {
        setShowModalInfo(true);

        let successMessage = 'Tu perfil se compartio con éxito';
        let errorMessage = '';

        if (typeAlert === 'success') {
            setTextAlert(successMessage);
            setTypeAlert('success');
            setTextButton('OK');
        } else {
            setTextAlert(errorMessage);
            setTypeAlert('error');
            setTextButton('Reintentar');
        }
    }

    const methods = useForm()
    
    const onSubmit = () => { }

    return (
        <>
            <FormHookProvider methods={methods} onSubmit={onSubmit}>
                <div className={`${styles.ShareProfile} ${styles.noScroll}`}>
                    <Card className={styles.CardProfile}>
                        <div className={styles.titlediv}>
                            <p className={styles.title}>Compartir mi Perfil</p>
                            <div>
                                <InputText
                                    label=''
                                    name='search'
                                    // value={search}
                                    // onChange={(e) => setSearch(e.target.value)}
                                    placeholder='Buscar usuario'
                                    icon={search}
                                    iconPosRight={true}
                                    //filter
                                    variant='search'
                                    height='50px'
                                />
                            </div>
                            <div className={styles.adddiv}>
                                <p className={styles.title}>AGREGAR NUEVO EVENTO</p>
                                <img src={plusLogo?.src} />
                            </div>
                        </div>

                        <div className={styles.divshare}>
                            <div className={`${styles.card}`}>
                                <div className={styles.title}>
                                    <div className={styles.divText}>
                                        <p>La persona que le vas a compartir esta registrada en twinbusiness? Buscalo acá</p>
                                    </div>

                                    <div className={styles.divTitle}>
                                        <h1>Compartir</h1>
                                    </div>
                                </div>
                                <div className={styles.container}>
                                    {usersList.map((item, key) => {
                                        return (
                                            <div className={`${styles.card} ${styles.carduser}`} key={key}>
                                                <div className={styles.photodiv}>
                                                    <img src={item.img} />
                                                    <h4>{item.name}</h4>
                                                </div>
                                                <div className={styles.divcontact}>
                                                    <p>Puesto: {item.role}</p>
                                                    <p>Numero: {item.tel}</p>
                                                </div>
                                                <div className={styles.divcontact}>
                                                    <p>Correo: {item.email}</p>
                                                    <p>Fecha de registro: {item.dateRegistered}</p>
                                                </div>
                                                <div className={styles.actions}>
                                                    <Checkbox
                                                        inputId="terms"
                                                        name="terms"
                                                        value={usersSelected}
                                                        onChange={() => setUsersSelected(usersSelected === '' ? item.name : '')}
                                                        checked={usersSelected === '' ? false : true}
                                                        variant="white"
                                                    />
                                                    <div className={styles.logos}>
                                                        <img src={twin.src} />
                                                        <img src={logo.src} />
                                                    </div>
                                                </div>
                                            </div>

                                        )
                                    })}

                                </div>
                            </div>
                        </div>
                        <div className={styles.DivSocialMedias}>
                            <div className={styles.iconSM}>
                                <img src={wha.src} />
                            </div>
                            <div className={styles.iconSM}>
                                <img src={tw.src} />
                            </div>
                            <div className={styles.iconSM}>
                                <img src={msg.src} />
                            </div>
                            <div className={styles.iconSM}>
                                <img src={ig.src} />
                            </div>
                            <div className={styles.btn}>
                                <Button
                                    variant="blackForm"
                                    onClick={saveDatas}
                                    borderRadius={'10px'}
                                >Compartir</Button>
                            </div>
                        </div>
                    </Card>

                </div>
            </FormHookProvider>
            <Modal
                title={""}
                content={<ModalAlert
                    text={textAlert}
                    buttonText={textButton}
                    variant={typeAlert}
                    closeModal={() => setShowModalInfo(false)}
                    style={{ width: '80%' }}
                />}
                buttons={[]}
                show={showInfo}
                size="medium"
                variant="white"
            />

        </>
    )
}