import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import styles from './styles.module.scss'
import { useController } from 'react-hook-form'
import { Skeleton } from 'primereact/skeleton'
import imageIcon from '@/../public/images/icons/addImage.png'

interface ComponentProps {
  name?: string;
  label?: string;
  placeholder?: string;
  icon?: any;
  accept?: string;
  setImageFile?: (file: File) => void;
  defaultImage?: string;
  disabled?: boolean;
  loading?: boolean;
  rules?: any;
  width?: string;
  height?: string;
  className?: string;
}

export const ProfileUpload: React.FC<ComponentProps> = ({
  name = 'fileupload',
  label,
  placeholder,
  icon = imageIcon,
  accept = 'image/png, image/jpg, image/jpeg',
  setImageFile = () => { },
  defaultImage,
  disabled = false,
  loading = false,
  rules,
  width = '100%',
  height = '660px',
  className = ''
}) => {
  const [imageUploadedUrl, setImageUploadedUrl] = useState<string | null>(null)
  const inputTypeFile = useRef<HTMLInputElement>(null)

  const { field, fieldState: { error } } = useController({
    name,
    rules
  })

  useEffect(() => {
    if (defaultImage) setImageUploadedUrl(defaultImage)
  }, [defaultImage])

  useEffect(() => {
    return () => {
      field.onChange({ target: { value: '', files: [] } })
    }
  }, [])

  const onChangeFile = (e: any) => {
    field.onChange(e)
    if (e.target.value === '') {
      setImageUploadedUrl(null)
    }
    const file = e.target.files[0]
    setImageFile(file)
    if (file) {
      const reader = new FileReader()
      reader.onload = () => {
        setImageUploadedUrl(URL.createObjectURL(file))
      }
      reader.readAsDataURL(file)
    }
  }

  const activateInput = () => {
    if (!disabled && inputTypeFile.current) inputTypeFile.current.click()
  }

  const handleDeleteFile = (e: any) => {
    e.stopPropagation()
    onChangeFile({ target: { value: '', files: [] } })
  }

  return (
    <div className={`${styles.fileupload} ${className}`}>
      {label && <label className={styles.fileupload_label}>{label}</label>}
      {loading
        ? <Skeleton width={width} height={height} />
        : (
          <div
            onClick={activateInput}
            className={`${styles.fileupload_content} ${error ? styles.invalid : ''}`}
            style={{ width, height }}
          >
            <input
              {...field}
              type='file'
              name={name}
              ref={inputTypeFile}
              onChange={(e) => onChangeFile(e)}
              accept={accept}
              className={styles.fileupload_input_hidden}
            />
            {imageUploadedUrl
              ? (
                <>
                  <Image
                    src={imageUploadedUrl}
                    loader={({ src }) => src}
                    alt='image'
                    className={styles.fileupload_image}
                    width={535}
                    height={285}
                  />
                  {!disabled &&
                    <div className={styles.fileupload_delete} onClick={(e) => handleDeleteFile(e)}>
                      <i className='pi pi-times' />
                    </div>
                  }
                </>)
              : (
                <div className={styles.fileupload_empty}>
                  <Image
                    src={icon}
                    alt='icon'
                  />
                  {placeholder && <div>{placeholder}</div>}
                  {!disabled &&
                    <div className={styles.fileupload_edit}>
                      <i className='pi pi-plus' />
                    </div>
                  }
                </div>
              )}
          </div>)}
      {error && <span className={styles.invalid_message}>{error.message}</span>}
    </div>
  )
}
