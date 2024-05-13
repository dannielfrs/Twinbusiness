import React from 'react'
import Image from 'next/image'
import styles from './styles.module.scss'
import camera from '@/../public/images/showCase/camera.png'
import $ from 'jquery'
import defaultBanner from '@/../public/images/showCase/back.png'

interface ComponentProps {
  imageUrl?: string
  data: any
  setData: Function
  setFocusedElement: Function
}

const Banner: React.FC<ComponentProps> = ({
  imageUrl,
  data,
  setData,
  setFocusedElement,
}) => {

  const activateInput = () => {
    $("input[name='uploadImage']").trigger('click')
  }

  const handleOnFocus = (e: any) => {
    setFocusedElement(e.target.name)
  }

  const handleOnChange = (e: any) => {
    setData((prevState: any) => ({ ...prevState, [e.target.name]: { ...prevState[e.target.name], text: e.target.value } }))
  }

  return (
    <div className={styles.banner}>
      <Image
        src={imageUrl || defaultBanner.src}
        alt='banner'
        loader={({ src }) => src}
        className={styles.banner_image}
        width={20}
        height={20}
      />
      <div className={styles.banner_content}>
        <input
          name='title'
          value={data.title?.text}
          onChange={handleOnChange}
          onFocus={handleOnFocus}
          className={styles.input_title}
          style={{
            color: data.title?.font_color,
            fontFamily: data.title?.font_family?.text,
            fontSize: data.title?.font_size?.size + data?.title?.font_size?.format,
          }}
        />
        <input
          name='subtitle'
          value={data.subtitle?.text}
          onChange={handleOnChange}
          onFocus={handleOnFocus}
          className={styles.input_subtitle}
          style={{
            color: data.subtitle?.font_color,
            fontFamily: data.subtitle?.font_family?.text,
            fontSize: data.subtitle?.font_size?.size + data?.subtitle?.font_size?.format,
          }}
        />
        <textarea
          name='description'
          value={data.description?.text}
          onChange={handleOnChange}
          onFocus={handleOnFocus}
          cols={5}
          className={styles.input_description}
          style={{
            color: data.description?.font_color,
            fontFamily: data.description?.font_family?.text,
            fontSize: data.description?.font_size?.size + data?.description?.font_size?.format,
          }}
        ></textarea>
      </div>
      <input
        name='button'
        value={data.button?.text}
        onChange={handleOnChange}
        onFocus={handleOnFocus}
        className={styles.input_button}
        style={{
          color: data.button?.font_color,
          fontFamily: data.button?.font_family?.text,
          fontSize: data.button?.font_size?.size + data?.button?.font_size?.format,
          backgroundColor: data.button?.background_color
        }}
      />
      <div className={styles.button_add} onClick={activateInput}>Agregar imagen de fondo <Image src={camera?.src} alt='icon' width={20} height={20} /></div>
    </div>
  )
}

export default Banner
