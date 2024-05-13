import { useState } from 'react'
import styles from './Identification.module.scss'
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form'
import FormHookProvider from '@/components/layouts/Form/FormHookProvider/FormHookProvider'
import Button from '@/components/molecules/Button/Button/Button'
import { TabPanel, TabView } from 'primereact/tabview'
import Id from './Id/Id'
import { Passport } from './Passport/Passport'
import { Address } from '../Address/Address'

interface ModalAlertProps {
    msj?: string;
    type?: string;
}

const Identification: React.FC<ModalAlertProps> = ({ msj, type }) => {

    const methods = useForm()
    const [activeIndex, setActiveIndex] = useState(0)

    const onSubmit: SubmitHandler<FieldValues> = (data) => { }

    const tabs = [
        { id: 0, label: ' Identificación', route: 'system/wallet/personal' },
        { id: 1, label: ' Pasaporte', route: 'wallet/personal' },
        { id: 2, label: ' Otro', route: 'system/wallet/personal' }
    ]

    // const tabs = [
    //     { id: 0, label: type === 'ids' ? ' Identificación' : 'Comprobante de domicilio', route: 'system/wallet/personal' },
    //     { id: 1, label: type === 'ids' ? ' Pasaporte' : '', route: 'wallet/personal' },
    //     { id: 2, label: type === 'ids' ? ' Otro' : '', route: 'system/wallet/personal' }
    // ];

    return (
        <div className={styles.Alerts}>
            <FormHookProvider methods={methods} onSubmit={onSubmit}>
                <div className={styles.modalback}>
                    <div className={styles.modal}>
                        <div className={styles.fDiv}>
                            <div className={styles.imgs}>
                                <div className={styles.msj}>{msj}</div>
                            </div>
                        </div>
                        <div style={{ width: '100%' }}>
                            <div className={styles.textAlign}>
                                {tabs &&
                                    <div className={styles.tabsBtns}>
                                        {tabs.map((e) => {
                                            return (
                                                <div key={e.id} className={styles.cont_tabs}>
                                                    <Button
                                                        type='button'
                                                        onClick={() => setActiveIndex(parseInt(e.id.toString()))}
                                                        className={`${activeIndex === parseInt(e.id.toString()) && styles.active}`}
                                                        variant={activeIndex === parseInt(e.id.toString()) ? 'tabActive' : 'tabBtn'}
                                                        height='35px'
                                                    >
                                                        {e.label}
                                                    </Button>
                                                </div>
                                            )
                                        })}
                                    </div>
                                }
                            </div>
                            <TabView activeIndex={activeIndex} onTabChange={(e) => setActiveIndex(e.index)}>
                                <TabPanel header={type === 'ids' ? ' Identificación' : 'Comprobante de domicilio'} className={styles.tab}>
                                    <div className={styles.m0}>
                                        {type === 'id' ? <Id /> : <Address />}
                                    </div>
                                </TabPanel>
                                <TabPanel header='Pasaporte'>
                                    <div className={styles.m0}>
                                        {type === 'id' ? <Passport /> : ''}
                                    </div>
                                </TabPanel>
                                <TabPanel header='Otro'>
                                    <div className='card'>
                                        Otro
                                    </div>
                                </TabPanel>
                            </TabView>
                        </div>
                    </div>
                </div>
            </FormHookProvider>
        </div>
    )
}

export default Identification
