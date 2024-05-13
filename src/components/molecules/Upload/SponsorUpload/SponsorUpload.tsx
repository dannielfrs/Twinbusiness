import { useEffect, useRef, useState } from 'react'
import styles from './styles.module.scss'
import { Toast } from 'primereact/toast'
import { FileUpload as FileUploadPrime, FileUploadHeaderTemplateOptions, ItemTemplateOptions } from 'primereact/fileupload'
import { Button } from '@/components/atoms/Button'
import { Skeleton } from 'primereact/skeleton'
import Image, { StaticImageData } from 'next/image'
import ChargeImg2 from '@/../public/icons/ChargeImg2.svg'

interface ComponentProps {
  name?: string;
  value?: any;
  label?: string;
  placeholder?: string;
  message?: string
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
  setImg?: React.Dispatch<React.SetStateAction<StaticImageData | undefined | string>>;
  // setFile?: React.Dispatch<React.SetStateAction<string | StaticImageData | undefined>>;
  setFile?: Function;
}

interface CustomFile extends File {
  objectURL?: string | StaticImageData;
}

export const SponsorUpload: React.FC<ComponentProps> = ({
  name = '',
  value,
  label,
  placeholder,
  message,
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
  setImg = () => { },
  setFile = () => { },
}) => {
  const toast = useRef<any>(null)
  const fileUploadRef = useRef<FileUploadPrime>(null)
  const [totalSize, setTotalSize] = useState<number>(0)
  const [defaultImageUrl, setDefaultImageUrl] = useState<string>()

  useEffect(() => {
    if (defaultImage) setDefaultImageUrl(defaultImage)
  }, [defaultImage])

  const onTemplateSelect = (e: { files: File[] }) => {
    setDefaultImageUrl('')
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
    setFile(null)
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
      objectURL = (file as CustomFile).objectURL || ''; // Make sure to handle Next.js static images correctly
      setImg(objectURL)
      setFile(file)
    }
    return (
      <div className={styles.fileupload_item}>
        <Image
          alt={file.name}
          role='presentation'
          src={objectURL}
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
    return (
      <div className={styles.fileupload_empty}>
        {defaultImageUrl ?
          <div className={styles.fileupload_empty_default}>
            <Image
              src={defaultImageUrl}
              alt='icon'
              loader={({ src }) => src}
              width={180}
              height={100}
            />
            {!(disabled || readOnly) && (
              <Button
                type='button'
                icon='pi pi-times'
                className={styles.fileupload_empty_delete}
                onClick={() => setDefaultImageUrl('')}
              />
            )}
          </div>
          : <>
            <Image
              src={ChargeImg2}
              alt='icon'
              width={180}
              height={100}
            />
          </>
        }
      </div>
    )
  }

  const chooseOptions = { label: 'Subir imagen/logo', icon: '', iconOnly: false, className: styles.fileupload_choose }

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
