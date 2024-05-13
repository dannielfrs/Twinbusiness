'use client'

import { useEffect, useState } from 'react'
import styles from './CardSponsor.module.scss'
import Image from 'next/image'
import InputText from '@/components/molecules/InputText/InputText'
import { StaticImageData } from 'next/dist/shared/lib/get-img-props'
import cross from '@/../public/icons/x.svg'
import { SponsorUpload } from '@/components/molecules/Upload/SponsorUpload/SponsorUpload'

interface ComponentProps {
  number?: number
  defaultImage?: string | StaticImageData
  name?: string
  setName?: any
  onClickDelete?: any
  sponsorsData?: any
  setSponsorsData?: any
  index: number
}

export const CardSponsor: React.FC<ComponentProps> = ({
  number = 0,
  defaultImage,
  name,
  setName = () => { },
  onClickDelete = () => { },
  sponsorsData,
  setSponsorsData,
  index,
}) => {

  const [image, setImage] = useState()

  useEffect(() => {
    const array = [...sponsorsData]
    array[index].logo = image
    setSponsorsData(array)
  }, [image])

  return (
    <div className={styles.CardSponsor}>
      <Image alt='icon' src={cross} className={styles.button_close} onClick={() => onClickDelete()} />
      <p className={styles.title}>Patrocinador #{number}</p>
      <div style={{ height: '165px', width: '100%' }}>
        <SponsorUpload
          name={`sponsor_${index}`}
          defaultImage={defaultImage as string}
          setFile={setImage}
          multiple={false}
          accept='image/png, image/jpg, image/jpeg'
          variant='primary'
          width='100%'
          height='100%'
        />
      </div>
      <div className={styles.ShadowInside}>
        <div className={styles.input_labels}>
          <label>Nombre del patrocinador</label>
        </div>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className='p-inputtext'
        />
      </div>
    </div>
  )
}