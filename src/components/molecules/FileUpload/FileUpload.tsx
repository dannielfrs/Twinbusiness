'use client'
import { FileUpload as FileUploadAtom } from '@/components/atoms/FileUpload/FileUpload';
import styles from './styles.module.scss';
import React, { ReactNode } from 'react';

interface FileUploadProps {
  id?: string;
  name?: string;
  url?: string;
  accept?: string;
  maxFileSize?: number;
  children?: ReactNode;
  onUpload?: () => void;
  className?: string;
  style?: any;
  variant?: string;
  items?: any;
  label?: any,
  required?: boolean,
  error?: boolean,
  position?: string,
  label2?: string
}

const FileUpload: React.FC<FileUploadProps> = (props) => {
  const {
    variant = 'default',
    label,
    required,
    error,
    position = 'bottom',
    className
  } = props;

  return (
    <div className={`${styles['fileupload_' + variant]} ${styles.fileupload}`}>
      {label &&
        <div className={styles.labeldiv}
          style={{
            display: `${position === 'right' ? 'inline-block' : 'block'}`
          }}>
          {variant === 'white' && required && <span className={styles.requiredSpan}>* </span>}
          <label>{label}</label>
          {variant === 'white' && !required && <span className={styles.optionalSpan}> (Opcional)</span>}
        </div>
      }
      <FileUploadAtom
        {...props}
        className={`${styles[variant]} ${className}`}
      />
    </div>
  );
};

export default FileUpload;
