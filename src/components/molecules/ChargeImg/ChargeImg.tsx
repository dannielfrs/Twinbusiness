import { useEffect, useRef, useState } from 'react'
import styles from './ChargeImg.module.scss'
import { Toast } from 'primereact/toast'
import { FileUpload as FileUploadPrime, FileUploadHeaderTemplateOptions, ItemTemplateOptions } from 'primereact/fileupload'
import { Button } from '@/components/atoms/Button'
import { Skeleton } from 'primereact/skeleton'
import addImage from '@/../public/images/icons/addImage.png'
import Image, { StaticImageData } from 'next/image'
import upload from '@/../public/images/icons/upload.png'

interface ChargeImgProps {
  name?: string;
  label?: string;
  placeholder?: string;
  message?: string
  buttonLabel?: string
  multiple?: boolean;
  accept?: string;
  url?: string;
  variant?: string;
  maxFileSize?: number;
  required?: boolean;
  optional?: boolean;
  readOnly?: boolean;
  disabled?: boolean;
  loading?: boolean;
  className?: string;
  width?: string
  height?: string
  defaultImage?: string;
  setFile?: (file: any) => void
  setImg?: (file: any) => void
}

interface CustomFile extends File {
  objectURL?: string | StaticImageData;
}

const ChargeImg: React.FC<ChargeImgProps> = ({
  name = '',
  label,
  placeholder,
  message,
  buttonLabel,
  multiple = false,
  accept,
  url = '',
  maxFileSize,
  required,
  defaultImage,
  optional,
  readOnly = false,
  disabled = false,
  loading,
  variant = 'primary',
  className = '',
  width = '100%',
  height = '100%',
  setFile = () => { },
  setImg = () => { },
}) => {
  const toast = useRef<any>(null)
  const fileUploadRef = useRef<FileUploadPrime>(null)
  const [totalSize, setTotalSize] = useState<number>(0)
  const [defaultImageUrl, setDefaultImageUrl] = useState<string>()

  useEffect(() => {
    if (defaultImage) setDefaultImageUrl(defaultImage)
  }, [defaultImage])

  const onTemplateSelect = (e: { files: File[] }) => {
    let _totalSize = totalSize;
    e.files.forEach((file) => {
      _totalSize += file.size || 0;
    });
    setTotalSize(_totalSize);
  }

  const onTemplateUpload = (e: { files: File[] }) => {
    let _totalSize = 0;
    e.files.forEach((file) => {
      _totalSize += file.size || 0;
    });
    setTotalSize(_totalSize);
    toast.current?.show({ severity: 'info', summary: 'Success', detail: 'File Uploaded' });
  }

  const onTemplateRemove = (file: File, callback: Function) => {
    setDefaultImageUrl('')
    setTotalSize(totalSize - file.size)
    callback()
  }

  const onTemplateClear = () => {
    setTotalSize(0)
  }

  const headerTemplate = (options: FileUploadHeaderTemplateOptions) => {
    const { chooseButton, uploadButton, cancelButton } = options
    return (
      <div className={styles.fileupload_header}>
        {!readOnly && chooseButton}
      </div>
    )
  }

  const itemTemplate = (inFile: object, props: ItemTemplateOptions) => {
    const file = inFile as File
    let objectURL: string | StaticImageData = '';
    if ((file).type === 'application/pdf') {
    } else if ((file).type.includes('image/')) {
      objectURL = (file as CustomFile).objectURL || ''
      setImg((file as CustomFile).objectURL)
      setFile(file)
    }
    return (
      <div className={styles.fileupload_item}>
        <Image
          src={objectURL}
          alt='image'
          width={180}
          height={100}
        />
        {/* <div className={styles.fileupload_item_icon}>
          <Img alt={file.name} role='presentation' src={objectURL} width={35} height={35} />
        </div>
        <div className={styles.fileupload_item_content}>
          <div>{(file).name}</div>
          <div>{props.formatSize}</div>
        </div> */}
        {!(disabled || readOnly) && (
          <Button
            type='button'
            icon='pi pi-times'
            className={styles.fileupload_item_delete}
            onClick={() => onTemplateRemove(file, props.onRemove)}
          />
        )}
      </div>
    )
  }

  const emptyTemplate = () => {
    let imageSrc: string | StaticImageData = addImage
    if (variant === 'primary') {
      imageSrc = addImage;
    } else if (variant === 'secondary') {
      imageSrc = upload;
    }
    return (
      <div className={styles.fileupload_empty}>
        {defaultImageUrl ?
          <div className={styles.fileupload_item}>
            <Image
              src={defaultImageUrl}
              alt='image'
              loader={({ src }) => src}
              width={180}
              height={100}
            />
            {!(disabled || readOnly) && (
              <Button
                type='button'
                icon='pi pi-times'
                className={styles.fileupload_item_delete}
                onClick={() => setDefaultImageUrl('')}
              />
            )}
          </div>
          : <>
            {message && <div className={styles.fileupload_empty_message}>{message}</div>}
            <Image
              src={imageSrc}
              alt='icon'
              width={50}
              height={50}
            />
            {placeholder && <div className={styles.fileupload_empty_placeholder}>{placeholder}</div>}
            {buttonLabel &&
              <div className={styles.fileupload_empty_button} onClick={() => fileUploadRef.current?.getInput().click()}>
                {buttonLabel}
              </div>
            }
          </>
        }
      </div>
    )
  }

  const chooseOptions = {
    label: variant === 'primary' ? 'Buscar en el dispositivo' : variant === 'tertiary' ? 'Subir imagen del producto o servicio' : 'Subir imagen/logo',
    icon: '', iconOnly: false,
    className: variant === 'primary' ? styles.fileupload_choose : variant === 'tertiary' ? styles.fileupload_choose : styles.fileupload_choose2,
  }

  return (
    loading ? <Skeleton width='100%' height={height} /> : (
      <div className={`${styles[variant]} ${className}`}>
        {label && (
          <div className={styles.fileupload_labels}>
            <label htmlFor={name}>{label}</label>
            {required && <div>Obligatorio</div>}
            {optional && <div>Opcional</div>}
          </div>
        )}
        <Toast ref={toast} />
        <FileUploadPrime
          ref={fileUploadRef}
          name={name}
          url={url}
          multiple={multiple}
          accept={accept}
          maxFileSize={maxFileSize}
          onUpload={onTemplateUpload}
          onSelect={onTemplateSelect}
          onError={onTemplateClear}
          onClear={onTemplateClear}
          disabled={disabled || readOnly}
          headerTemplate={headerTemplate}
          chooseOptions={chooseOptions}
          emptyTemplate={emptyTemplate}
          itemTemplate={itemTemplate}
          className={`${readOnly ? styles.readonly : ''} ${disabled ? styles.disabled : ''}`}
          style={{ width, height }}
        />
      </div>
    )
  )
}

export default ChargeImg
