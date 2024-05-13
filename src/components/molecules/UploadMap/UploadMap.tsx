import React, { useEffect, useRef, useState } from 'react'
import styles from './UploadMap.module.scss'
import { Toast } from 'primereact/toast'
import { FileUpload as FileUploadPrime, ItemTemplateOptions } from 'primereact/fileupload'
import { Skeleton } from 'primereact/skeleton'
import Img from '@/components/atoms/Img/Img'
import { StaticImageData } from 'next/image'

interface UploadMapProps {
  name?: string
  value?: any
  label?: string
  placeholder?: string
  multiple?: boolean
  accept?: string
  url?: string
  maxFileSize?: number
  required?: boolean
  optional?: boolean
  readOnly?: boolean
  disabled?: boolean
  loading?: boolean
  className?: string
  typeUpload?: any
  defaultImg: any
}

interface CustomFile extends File {
  objectURL?: string | StaticImageData
}

const UploadMap: React.FC<UploadMapProps> = ({
  name = '',
  value,
  label,
  placeholder,
  multiple,
  accept,
  url = '',
  maxFileSize,
  required,
  optional,
  readOnly = false,
  disabled = false,
  loading,
  className = '',
  typeUpload,
  defaultImg
}) => {
  const toast = useRef<any>(null)
  const [totalSize, setTotalSize] = useState<number>(0)
  const fileUploadRef = useRef<FileUploadPrime>(null)

  useEffect(() => {
    if (value) {
      fileUploadRef.current?.setFiles(value)
    }
  }, [value])

  const onTemplateSelect = (e: { files: File[] }) => {
    let _totalSize = totalSize;
    e.files.forEach((file) => {
      _totalSize += file.size || 0
    })
    setTotalSize(_totalSize)
  }

  const onTemplateUpload = (e: { files: File[] }) => {
    let _totalSize = 0
    e.files.forEach((file) => {
      _totalSize += file.size || 0
    });
    setTotalSize(_totalSize)
    toast.current?.show({ severity: 'info', summary: 'Success', detail: 'File Uploaded' })
  };

  const onTemplateRemove = (event: Event | undefined, file: CustomFile, callback: () => void) => {
    if (event) {
      const syntheticEvent = event as unknown as React.SyntheticEvent<Element, Event>;
      syntheticEvent.stopPropagation(); // Evitar la propagación del evento si es necesario
    }
    setTotalSize(totalSize - file.size)
    callback()
  };


  const onTemplateClear = () => {
    setTotalSize(0);
  };

  const headerTemplate = (options: { chooseButton: React.ReactNode }) => {
    const { chooseButton } = options;
    return (
      <div className={styles.fileupload_header}>
        {!readOnly && chooseButton}
      </div>
    );
  };

  const itemTemplate = (file: object, props: ItemTemplateOptions) => {
    let objectURL: string | StaticImageData = '';
    if ((file as CustomFile).type === 'application/pdf') {
      // objectURL = pdf;
    } else if ((file as CustomFile).type.includes('image/')) {
      objectURL = (file as CustomFile).objectURL || ''; // Make sure to handle Next.js static images correctly
    }
    return (
      <div className={styles.fileupload_item}>
        <div className={styles.fileupload_item_icon}>
          <Img alt={(file as CustomFile).name} role='thumbnail' loader={({ src }) => src} src={objectURL} width={35} height={35} />
        </div>
        <div className={styles.fileupload_item_content}>
          <div>{(file as CustomFile).name}</div>
          <div>{props.formatSize}</div>
        </div>
        {/* {!(disabled || readOnly) && (
          <Button
            type='button'
            icon='pi pi-times'
            className={styles.fileupload_item_delete}
            onClick={(event) => onTemplateRemove(event, file, props.onRemove )}
          />
        )} */}
      </div>
    );
  };

  //   const emptyTemplate = () => {
  //     return (
  //         <>
  //         <div className={styles.textImage}>
  //             <div className={styles.image}>
  //                 <Image src={addImage} alt=''></Image>
  //             </div>
  //             <div className={styles.fileupload_empty}>
  //                 Arrastra y suelta una imagen o video
  //             </div>
  //         </div>
  //         </>
  //     );
  //   };

  const chooseOptions = { label: 'SUBIR MAPA INTERNO', icon: '', iconOnly: false, className: styles.fileupload_choose };

  return (
    loading ? <Skeleton width='100%' height={'70px'} /> : (
      <div className={`${styles.fileupload} ${className}`}>
        {label && (
          <div className={styles.fileupload_labels}>
            <label htmlFor={name}>{label}</label>
            {required && <div>Obligatorio</div>}
            {optional && <div>Opcional</div>}
          </div>
        )}
        <Toast ref={toast} />
        <FileUploadPrime
          emptyTemplate={defaultImg && <img src={defaultImg} alt="Imagen predeterminada" />}
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
          itemTemplate={itemTemplate}
          //   emptyTemplate={emptyTemplate}
          chooseOptions={chooseOptions}
          className={`${readOnly ? styles.readonly : ''} ${disabled ? styles.disabled : ''}`}
        />
      </div>
    )
  )
}

export default UploadMap
