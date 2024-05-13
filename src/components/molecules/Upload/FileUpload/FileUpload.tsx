import { useState, useEffect, useRef, ReactNode } from 'react'
import Image from 'next/image'
import styles from './styles.module.scss'
import { useController } from 'react-hook-form'
import { Skeleton } from 'primereact/skeleton'
import arrowUpload from '@/../public/images/icons/arrow_upload.svg'

interface ComponentProps {
  name?: string
  label?: string
  rightLabel?: string
  placeholder?: string
  icon?: any
  accept?: string
  setFile?: (file: File) => void
  defaultFile?: string
  disabled?: boolean
  iconDisable?: boolean
  rightComponent?: ReactNode
  loading?: boolean
  required?: boolean
  optional?: boolean
  rules?: any
  width?: string
  height?: string
  className?: string
}

export const FileUpload: React.FC<ComponentProps> = ({
  name = 'fileupload',
  label,
  rightLabel,
  placeholder,
  icon = arrowUpload,
  iconDisable = false,
  rightComponent = <></>,
  accept = 'image/png, image/jpg, image/jpeg',
  setFile = () => { },
  defaultFile,
  disabled = false,
  loading = false,
  required = false,
  optional = false,
  rules,
  width = '100%',
  height = '30px',
  className = ''
}) => {
  const [fileNameUploaded, setFileNameUploaded] = useState<string | null>(null)
  const inputTypeFile = useRef<HTMLInputElement>(null)

  const { field, fieldState: { error } } = useController({
    name,
    rules
  })

  useEffect(() => {
    if (defaultFile) setFileNameUploaded(defaultFile)
  }, [defaultFile])

  useEffect(() => {
    return () => {
      field.onChange({ target: { value: '', files: [] } })
    }
  }, [])

  const onChangeFile = (e: any) => {
    field.onChange(e)
    if (e.target.value === '') {
      setFileNameUploaded(null)
    }
    const file = e.target.files[0]
    setFile(file)
    if (file) {
      setFileNameUploaded(file.name)
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
      <div className={styles.fileupload_labels}>
        {label && <label className={styles.fileupload_label}>{required && <span>*</span>}{label}{optional && <div>(opcional)</div>}</label>}
        {rightLabel && <label className={styles.fileupload_label_right}>{rightLabel}</label>}
      </div>
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
            {fileNameUploaded
              ? (
                <>
                  <p className={styles.fileupload_filename}>{fileNameUploaded}</p>
                  {/* <div className={styles.fileupload_delete} onClick={(e) => handleDeleteFile(e)}>
                    <i className='pi pi-times' />
                  </div> */}
                </>)
              : (
                <div className={styles.fileupload_empty}>
                  <div>{placeholder}</div>
                </div>
              )}
            {iconDisable ?
              rightComponent
              :
              <Image
                src={icon}
                alt='icon'
              />
            }
          </div>)}
      {error && <span className={styles.invalid_message}>{error.message}</span>}
    </div>
  )
}
