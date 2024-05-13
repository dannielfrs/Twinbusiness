'use client'
import React, { useEffect, useMemo, useState } from 'react'
import styles from './Anchor.module.scss'
import Card from '@/components/molecules/Card/Card'
import Image from 'next/image'
import tarjetatwin from '@/../public/images/icons/tarjetatwin.png'
import copy from '@/../public/images/icons/copy.svg'
import EyeOpen from '@/../public/images/icons/Eye.svg'
import Button from '@/components/molecules/Button/Button/Button'
import EyeClosed from '@/../public/images/icons/Eyeclose.svg'
import Checkbox from '@/components/molecules/Checkbox/Checkbox'
import InputText from '@/components/molecules/InputText/InputText'
import FormHookProvider from '@/components/layouts/Form/FormHookProvider/FormHookProvider'
import { useForm } from 'react-hook-form'
import mexico from '@/../public/images/icons/mexico.png'
import InputTextCode from '@/components/molecules/InputText/InputTextCode/InputTextCode'
import Recurso from '@/../public/images/icons/Recurso.png'
import SpeiTransfer from './SpeiTransfer/SpeiTransfer'
import Share from '../Purses/Share/Share'

interface FormProps {
   bancaria?: string;
   setBancaria?: any;
}
type Section = 'card1' | 'card2' | 'card3' | 'card4' | 'card5' | 'card6';
const Anchor: React.FC<FormProps> = (props) => {
   const {
      bancaria,
      setBancaria
    } = props;
   const methods = useForm()

   const onSubmit = () => { }
   
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
   const [selectedCard, setSelectedCard] = useState<string | null>(null);
   const toggleUserSelected = (userName: string) => {
      setUsersSelected([userName]);
  
      
      setSelectedCard(userName);
   };
   
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
    const [validate, setValidate] = useState(true)
    const [codeValues, setCodeValues] = useState(['', '', '', '', '', ''])
     useEffect(() => {
         const values = codeValues.filter((item) => item !== '')
         if (values.length === 6) setValidate(false)
       }, [codeValues])
     
      const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
         const newValue = e.target.value
         const array = [...codeValues]
         array[index] = newValue
         setCodeValues(array)
         if (newValue.length === 1 && e.target.nextElementSibling !== null) {
            (e.target.nextElementSibling as HTMLInputElement).focus();
         } else if (newValue.length === 1 && e.target.nextElementSibling === null) {
           e.target.blur()
         }
      }
     
      const handleOnPaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
         const textPasted = e.clipboardData.getData('text/plain')
         setCodeValues(textPasted.split('').slice(0, 6))
         if (e.target instanceof HTMLInputElement) {
            e.target.blur();
          }
      }
     
       const InputTextCode1 = useMemo(() => ({
         name: 'code1',
         type: 'password',
         value: codeValues[0],
         onChange: (e: React.ChangeEvent<HTMLInputElement>) => handleInputChange(e, 0),
         onPaste: () => handleOnPaste,
         height: '31px',
         rules: { required: true }
       }), [codeValues])
     
      const InputTextCode2 = useMemo(() => ({
         name: 'code2',
         type: 'password',
         value: codeValues[1],
         onChange: (e: React.ChangeEvent<HTMLInputElement>) => handleInputChange(e, 0),
         onPaste: () => handleOnPaste,
         height: '31px',
         rules: { required: true }
      }), [codeValues])
   
      const InputTextCode3 = useMemo(() => ({
         name: 'code3',
         type: 'password',
         value: codeValues[2],
         onChange: (e: React.ChangeEvent<HTMLInputElement>) => handleInputChange(e, 0),
         onPaste: () => handleOnPaste,
         height: '31px',
         rules: { required: true }
      }), [codeValues])
     
       const InputTextCode4 = useMemo(() => ({
         name: 'code4',
         type: 'password',
         value: codeValues[3],
         onChange: (e: React.ChangeEvent<HTMLInputElement>) => handleInputChange(e, 0),
         onPaste: () => handleOnPaste,
         height: '31px',
         rules: { required: true }
      }), [codeValues])
   
      const InputTextCode5 = useMemo(() => ({
         name: 'code5',
         type: 'password',
         value: codeValues[4],
         onChange: (e: React.ChangeEvent<HTMLInputElement>) => handleInputChange(e, 0),
         onPaste: () => handleOnPaste,
         height: '31px',
         rules: { required: true }
      }), [codeValues])
     
      const InputTextCode6 = useMemo(() => ({
         name: 'code6',
         type: 'password',
         value: codeValues[5],
         onChange: (e: React.ChangeEvent<HTMLInputElement>) => handleInputChange(e, 0),
         onPaste: () => handleOnPaste,
         height: '31px',
         rules: { required: true }
      }), [codeValues])
      
      const [sectionsVisibility, setSectionsVisibility] = useState({
         card1: true,
         card2: true,
         card3: true,
         card4: false,
         card5: false,
         card6: false
       });
     
       const toggleSectionVisibility = (section: Section) => {
         setSectionsVisibility((prevVisibility) => ({
           ...prevVisibility,
           [section]: !prevVisibility[section],
         }));
       };
  
  return (
    <>
      <FormHookProvider methods={methods} onSubmit={onSubmit}>
         <div className={styles.cards}>
            {sectionsVisibility.card1 && (
               <Card className={styles.card1}>
                  <p className={styles.title}>Monedero personal</p>
                  <div className={styles.container}>
                     <p className={styles.subtitle}>FONDEAR</p>
                     <p className={styles.text1}>Métodos de recarga</p>
                     <p className={styles.text2}>Seleccionar uno de los monederos para realizar fondeo</p>
                     <div className={styles.contButton}>
                        <Button variant='third'
                           onClick={() => {setSectionsVisibility({
                              card1: true,
                              card2: true,
                              card3: true,
                              card4: false,
                              card5: false,
                              card6: false
                           })}}
                        >Tarjeta de débito o crédito</Button>
                        <Button variant='third'>Tiendas autorizadas</Button>
                        <Button variant='third' 
                          onClick={() => {setSectionsVisibility({
                           card1: true,
                           card2: false,
                           card3: false,
                           card4: false,
                           card5: true,
                           card6: true
                        })}}
                        >Transferencias SPEI</Button>
                        <Button variant='third'>Depósito</Button>
                     </div>
                  </div>
               </Card>
            )}
            {sectionsVisibility.card2 && ( 
               <Card className={styles.card2}>
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
                  <div className={styles.NewCard}>
                     <Button variant='third' 
                       onClick={() => {setSectionsVisibility({
                          card1: true,
                          card2: false,
                          card3: true,
                          card4: true,
                          card5: false,
                          card6: false
                       })}} 
                     >Nueva tarjeta</Button>
                  </div>
               </Card>
            )}
            {sectionsVisibility.card4 && (
               <Card className={styles.card4}>
                  <p className={styles.title}>Fondear</p>
                  <div className={styles.contCard}>
                     <p className={styles.titleNumber}>No. de tarjeta</p>
                     <Card className={styles.numberCard}>
                        <Image src={isEyeOpen ? EyeClosed : EyeOpen} alt='' onClick={toggleEye} />
                        <p className={styles.number}>{cardNumber}</p>
                     </Card>
                     <div className={styles.contExpire}>
                        <div className={styles.cont1}>
                           <InputText label='Expira' variant='center' name='' placeholder='MM/YY'/>
                        </div>
                        <div className={styles.cont2}>
                           <InputText label='CVV' variant='center' name='' placeholder='XXX'/>
                        </div>
                     </div>
                     <div className={styles.CreditCard}>
                        <p>Tarjetas de débito o crédito</p>
                        <div className={styles.CardTwin}>
                           <Image src={Recurso} alt=''/>
                        </div>
                     </div>
                     <div>
                        <Checkbox
                           inputId="bancaria"
                           name="bancaria"
                           value={bancaria}
                           onChange={() => setBancaria(bancaria === '' ? 'ok' : '')}
                           checked={bancaria === '' ? false : true}
                           variant="white"
                           label="Guardar tarjeta"
                        />
                     </div>
                  </div>
                  <div className={styles.buttons}>
                     <div className={styles.button1}>
                     <Button height='43px' variant='third' 
                        onClick={() => {setSectionsVisibility({
                           card1: true,
                           card2: true,
                           card3: true,
                           card4: false,
                           card5: false,
                           card6: false
                        })}}
                     >Cancelar</Button> 
                     </div>
                     <div className={styles.button2}>
                     <Button height='43px' variant='gray-color'>Guardar</Button>
                     </div>
                  </div>
               </Card>
            )}
            {sectionsVisibility.card3 && (
               <Card className={styles.card3}>
                  <p className={styles.title}>Monedero MXN</p>
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
                  <div className={styles.contCommission}>
                     <p className={styles.titleCommission}>Comisión</p>
                     <Card className={styles.commission}>
                        <p className={styles.text1}>3%</p>
                        <p className={styles.text2}>Uso de terminal</p>
                        <p className={styles.text3}>MXN</p>
                     </Card>
                  </div>
                  <div className={styles.Limit}>
                     <p style={{fontSize: '18px', fontWeight: '700', width: '100%'}}>Límite de fondeo</p>
                     <Card className={styles.contLimit}>
                        <p className={styles.textLimit}>Sin límite</p>
                        <p className={styles.textLimit}>MXN</p>
                     </Card>
                  </div>
                  <div className={styles.amount}>
                     <p className={styles.title}>Monto a fondear</p>
                     <Card className={styles.CardMonto}>
                        <p>1,000.00</p>
                        <p>MXN</p>
                     </Card>
                  </div>
                  <div className={styles.InputTextCode}>
                     <p className={styles.text}>Firma del usuario que fondea</p>
                     <div className={styles.container_code}>
                        <InputTextCode {...InputTextCode1} />
                        <InputTextCode {...InputTextCode2} />
                        <InputTextCode {...InputTextCode3} />
                        <InputTextCode {...InputTextCode4} />
                        <InputTextCode {...InputTextCode5} />
                        <InputTextCode {...InputTextCode6} />
                     </div>
                  </div>
                  <div className={styles.NewCard}>
                     <Button variant='third'>Fondear</Button>
                  </div>
               </Card>
            )}
            {sectionsVisibility.card5 && (
               <SpeiTransfer />
            )}
            {sectionsVisibility.card6 && (
               <Share text='Busca aquí el perfil previamente registrado en Twinbusiness para que puedas mandar tu numero SPEI'/>
            )}
         </div>   
      </FormHookProvider>
    </>
  )
}

export default Anchor;