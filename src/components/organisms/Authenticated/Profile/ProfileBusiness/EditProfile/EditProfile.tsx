'use client'

import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import FormHookProvider from '@/components/layouts/Form/FormHookProvider/FormHookProvider'
import InputText from '@/components/molecules/InputText/InputText'
import { Dropdown } from '@/components/molecules/Dropdown/Dropdown'
import { RadioButton } from "@/components/molecules/RadioButtonAltern/RadioButton"
import Checkbox from '@/components/molecules/Checkbox/Checkbox'
import Button from "@/components/molecules/Button/Button/Button"
import Modal from "@/components/layouts/Modal/Modal"
import ModalAlert from "@/components/layouts/ModalAlert/ModalAlert"
import CardBusine from '../CardBusine/CardBusine'
import edit from '@/../../public/icons/edit.svg'
import mx_flag from '@/../public/images/icons/mx_flag.png'
import styles from './EditProfile.module.scss'

const inputText1 = {
    label: '',
    name: 'name_perfil',
    placeholder: 'Nombre de promotora u organizador independiente',
    required: false,
    variant: 'white'
}
const inputText2 = {
    label: '',
    name: 'name_representante',
    placeholder: 'Nombre del representante',
    required: false,
    variant: 'white'
}
const inputText3 = {
    label: '',
    name: 'genero',
    placeholder: 'Genero',
    required: false,
    variant: 'white'
}
const inputText4 = {
    label: '',
    name: 'oficio',
    placeholder: 'Oficio',
    required: false,
    variant: 'white'
}
const inputText5 = {
    label: '',
    name: 'fecha_nac',
    placeholder: 'Fecha de nacimiento',
    required: false,
    variant: 'white'
}
const inputText6 = {
    label: '',
    name: 'tel',
    placeholder: 'Teléfono móvil',
    required: false,
    variant: 'white'
}
const inputText7 = {
    label: '',
    name: 'email',
    placeholder: 'Correo',
    required: false,
    variant: 'white'
}
const inputText8 = {
    label: '',
    name: 'pass',
    placeholder: 'Contraseña',
    required: false,
    variant: 'white'
}
const inputText9 = {
    label: '',
    name: 'firmaelectronica',
    placeholder: 'Firma electrónica',
    required: false,
    variant: 'white'
}
const inputText10 = {
    label: '',
    name: 'rfc',
    placeholder: 'RFC (Opcional)',
    required: false,
    variant: 'white'
}
const listsSelect = [
    { label: 'Dirección completa', value: 0 },
    { label: 'Twin', value: 1 },
    { label: 'Twin', value: 2 }
]
const profGeneral = {
    id: 1,
    imageProfile: edit,
    name: 'Integrate SA de CV',
    email: 'Integrate@twin.com',
    tel: 3328258090,
    profile: 'Perfil Promotora',
    image: mx_flag
};
const profGeneral2 = {
    id: 2,
    imageProfile: '',
    name: 'Integrate SA de CV',
    email: 'Integrate@twin.com',
    tel: 3328258090,
    profile: 'Perfil Promotora',
    image: mx_flag
};


interface EditProfileProps {
    setShowEditView?: any;
}

const EditProfile: React.FC<EditProfileProps> = ({ setShowEditView }) => {

    const [showInfo, setShowModalInfo] = useState(false)
    const [typeAlert, setTypeAlert] = useState('success')
    const [textAlert, setTextAlert] = useState('')
    const [textButton, setTextButton] = useState('')
    const [listSelected, setListSelected] = useState('')

    const methods = useForm()

    const onSubmit = () => { }

    return (
        <>
            <FormHookProvider methods={methods} onSubmit={onSubmit}>
                <div className={`${styles.EditProfile}`}>
                    <div className={styles.content}>
                        <div>
                            <div className={styles.divtitle}>
                                <h2>Editor perfil</h2>
                            </div>
                            <div className={styles.form}>
                                <div className={styles.subform}>
                                    <div className={styles.inputdiv}>
                                        <InputText {...inputText1} />
                                    </div>
                                    <div className={styles.divedit}>
                                        <img src={edit.src} />
                                    </div>
                                </div>
                                <div className={styles.subform}>
                                    <div className={styles.inputdiv}>
                                        <InputText {...inputText2} />
                                    </div>
                                    <div className={styles.divedit}>
                                        <img src={edit.src} />
                                    </div>
                                </div>
                                <div className={styles.subform}>
                                    <div className={styles.inputdiv}>
                                        <InputText {...inputText3} />
                                    </div>
                                    <div className={styles.divedit}>
                                        <img src={edit.src} />
                                    </div>
                                </div>
                                <div className={styles.subform}>
                                    <div className={styles.inputdiv}>
                                        <InputText {...inputText4} />
                                    </div>
                                    <div className={styles.divedit}>
                                        <img src={edit.src} />
                                    </div>
                                </div>
                                <div className={styles.subform}>
                                    <div className={styles.inputdiv}>
                                        <InputText {...inputText5} />
                                    </div>
                                    <div className={styles.divedit}>
                                        <img src={edit.src} />
                                    </div>
                                </div>
                                <div className={styles.subform}>
                                    <div className={styles.inputdiv}>
                                        <InputText {...inputText6} />
                                    </div>
                                    <div className={styles.divedit}>
                                        <img src={edit.src} />
                                    </div>
                                </div>
                                <div className={styles.subform}>
                                    <div className={styles.inputdiv}>
                                        <InputText {...inputText7} />
                                    </div>
                                    <div className={styles.divedit}>
                                        <img src={edit.src} />
                                    </div>
                                </div>
                                <div className={styles.subform}>
                                    <div className={styles.inputdiv}>
                                        <InputText {...inputText8} />
                                    </div>
                                    <div className={styles.divedit}>
                                        <img src={edit.src} />
                                    </div>
                                </div>
                                <div className={styles.subform}>
                                    <div className={styles.inputdiv}>
                                        <InputText {...inputText9} />
                                    </div>
                                    <div className={styles.divedit}>
                                        <img src={edit.src} />
                                    </div>
                                </div>
                                <div className={styles.subform}>
                                    <div className={styles.inputdiv}>
                                        <div className={styles.customselect}>
                                            <Dropdown
                                                name='foryou'
                                                onChange={(e) => setListSelected(e.value)}
                                                options={listsSelect}
                                                optionLabel='label'
                                                placeholder='Dirección completa (Opcional)'
                                                variant='primary'
                                                height='30px'
                                                label=''
                                                className='select'
                                                panelClassName='panel'
                                                dropdownIcon=''
                                                value
                                                style={{ textAlign: 'left' }}
                                            />
                                        </div>
                                    </div>
                                    <div className={styles.divedit}>
                                        <img src={edit.src} />
                                    </div>
                                </div>
                                <div className={styles.subform}>
                                    <div className={styles.inputdiv}>
                                        <InputText {...inputText10} />
                                    </div>
                                    <div className={styles.divedit}>
                                        <img src={edit.src} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className={styles.divtitle}>
                                <h2>PERFIL PROMOTORA</h2>
                            </div>
                            <div className={styles.cardcontent}>
                                <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '15px' }}>
                                    <div>Editor de Perfil con fotografía</div>
                                    <RadioButton
                                        name='profile_editor'
                                        inputId='with_picture'
                                        value='with_picture'
                                        defaultValue='with_picture'
                                        label=''
                                        rules={{ required: false }}
                                        variant='primary'
                                    />
                                </div>
                                <CardBusine
                                    imageProfile={profGeneral.imageProfile}
                                    name={profGeneral.name}
                                    tel={profGeneral.tel}
                                    email={profGeneral.email}
                                    profile={profGeneral.profile}
                                    image={profGeneral.image}
                                />
                                <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '15px' }}>
                                    <div>Editor de Perfil sin fotografía</div>
                                    <RadioButton
                                        name='profile_editor'
                                        inputId='without_picture'
                                        value='without_picture'
                                        defaultValue='with_picture'
                                        label=''
                                        rules={{ required: false }}
                                        variant='primary'
                                    />
                                </div>
                                <CardBusine
                                    imageProfile={profGeneral2.imageProfile}
                                    name={profGeneral2.name}
                                    tel={profGeneral2.tel}
                                    email={profGeneral2.email}
                                    profile={profGeneral2.profile}
                                    image={profGeneral2.image}
                                />
                                <div className={styles.cardbottom}>
                                    <label>El diseño de tarjeta que selecciones se mostrará como Perfil</label>
                                    <div className={styles.divbtn}>
                                        <Button
                                            variant="blackForm"
                                            //onClick={() => setShowEditView(false)}
                                            borderRadius='10px'
                                        >
                                            GUARDAR CAMBIOS
                                        </Button>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
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

export default EditProfile
