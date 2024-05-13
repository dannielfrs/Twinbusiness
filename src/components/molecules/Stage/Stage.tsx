import { memo, useEffect, useRef, useState } from 'react'
import styles from './styles.module.scss'
import { toPng } from 'html-to-image'
import { alertError, alertLoading, alertSuccess } from '@/utilities/alerts'

interface ComponentProps {
  type?: string
  zones?: string[]
  generateImage?: boolean
  slideActiveIndex?: number | null
  saveInternalMap?: Function
}

export const Stage: React.FC<ComponentProps> = memo(({ type, zones = [], generateImage = false, slideActiveIndex, saveInternalMap }) => {

  const ref = useRef<HTMLDivElement>(null)
  const baseWidth = 75 / zones.length
  let stageType = ''

  switch (type) {
    case 'rectangle':
      stageType = 'stage_rectangle'

      break
    case 'oval':
      stageType = 'stage_oval'

      break
    case 'circle':
      stageType = 'stage_circle'

      break
    default:
      break
  }

  useEffect(() => {
    let active = false
    if (type == 'rectangle') {
      if (slideActiveIndex == 0)
        active = true
    }

    if (type == 'oval') {
      if (slideActiveIndex == 1)
        active = true
    }

    if (type == 'circle') {
      if (slideActiveIndex == 2)
        active = true
    }
    if (generateImage && active) {
      alertLoading()
      if (ref.current === null) {
        return
      }
      toPng(ref.current, { cacheBust: true, })
        .then((dataUrl) => {
          let img = new Image()
          img.src = dataUrl
          img.setAttribute('name', stageType)
          const link = document.createElement('a')
          link.download = 'my-image-name.png'
          link.href = dataUrl
          // Ejemplo de cadena base64
          const base64Data = dataUrl;
          const base64String = base64Data.split(',')[1];
          // Decodificar la cadena base64 a un array de bytes
          const byteCharacters = atob(base64String);
          const byteNumbers = new Array(byteCharacters.length);
          for (let i = 0; i < byteCharacters.length; i++) {
            byteNumbers[i] = byteCharacters.charCodeAt(i);
          }
          const byteArray = new Uint8Array(byteNumbers);
          // Crear un objeto File
          const file = new File([byteArray], stageType, { type: 'image/png' });
          // setImageFile(file)
          saveInternalMap && saveInternalMap(file)
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }, [generateImage])

  return (
    <div className={styles.stage}>
      <div className={`${styles.stage_container} ${styles[stageType]}`} ref={ref}>
        {zones.map((item, index) => (
          <div
            className={`${styles.stage_item}`}
            style={{ width: `${25 + (baseWidth * (zones.length - index))}%`, height: `${25 + (baseWidth * (zones.length - index))}%`, backgroundColor: item }}
            key={item}
          >
          </div>
        ))}
      </div>
    </div>
  )
})

Stage.displayName = 'Stage'