import { useContext, useEffect, useState } from 'react'
import styles from './Selfie.module.scss'
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form'
import FormHookProvider from '@/components/layouts/Form/FormHookProvider/FormHookProvider'
import { ImageUpload } from '@/components/molecules/Upload/ImageUpload/ImageUpload'
import { ProgressSpinner } from 'primereact/progressspinner'
import { WalletDocumentsContext } from '@/context/authenticated/wallet/walletDocuments'

interface ComponentProps {
    title?: string
}

export const Selfie: React.FC<ComponentProps> = ({ title }) => {

    const { data, selfieOptions, saveDocument, loading, setSelfieCompleted } = useContext(WalletDocumentsContext)
    const methods = useForm()
    const [imageFile, setImageFile] = useState<File | null>(null)
    const [imageUrl, setImageUrl] = useState<string>()
    const [fileSent, setFileSent] = useState<boolean>(false)
    const [selfie] = selfieOptions?.filter((item: any) => item.text === 'Selfie')

    const onSubmit: SubmitHandler<FieldValues> = () => { }

    const getData = () => {
        const docData = data.validation_document.filter((item: any) => item.document.text === 'Selfie')
        if (docData.length === 1) {
            setImageUrl(docData[0].multimedia[0].url)
        }
        if (fileSent && docData.length === 1) {
            setSelfieCompleted(true)
        }
    }

    useEffect(() => {
        setSelfieCompleted(false)
    }, [])

    useEffect(() => {
        getData()
    }, [data])

    useEffect(() => {
        if (imageFile !== null && imageFile !== undefined) {
            saveDocument(selfie.id, imageFile, '0')
            setFileSent(true)
        }
    }, [imageFile])

    return (
        <FormHookProvider methods={methods} onSubmit={onSubmit}>
            <div className={styles.modal_wrapper}>
                <div className={styles.modal_shadow}>
                    <div className={styles.modal}>
                        <div className={styles.modal_title}>Reconocimiento facial</div>
                        <div className={styles.modal_body}>
                            <ImageUpload
                                name='fileupload_selfie'
                                accept='image/png, image/jpg, image/jpeg'
                                // icon={}
                                defaultImage={imageUrl}
                                setImageFile={setImageFile}
                                width='270px'
                                height='405px'
                                className={styles.fileupload}
                                rules={{ required: false }}
                            />
                            {loading &&
                                <div className={styles.modal_loading}>
                                    <div>Validando tus datos</div>
                                    <ProgressSpinner style={{ width: '30px', height: '30px' }} />
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </FormHookProvider>
    )
}
