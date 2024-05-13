'use client'

import { useState, useEffect, Dispatch, SetStateAction, useContext } from 'react'
import styles from './styles.module.scss'
import Banner from './Banner/Banner'
import save1 from '@/../public/images/icons/save1.svg'
import { alertError, alertLoading, alertSuccess } from '@/utilities/alerts'
import $ from 'jquery'
import desktop from '@/../public/icons/desktop.png'
import iconMobile from '@/../public/icons/iconMobile.png'
import iconTablet from '@/../public/icons/iconTablet.png'
import poligon from '@/../public/icons/poligon.png'
import link from '@/../public/icons/link.png'
import send from '@/../public/icons/send.png'
import arrowDown from '@/../public/icons/downArrow.png'
import close from '@/../public/icons/iconClose.png'
import { Dropdown } from '@/components/molecules/Dropdown/Dropdown'
import { useForm } from 'react-hook-form'
import FormHookProvider from '@/components/layouts/Form/FormHookProvider/FormHookProvider'
import ColorPickerComponent from '@/components/molecules/ReactColor/ReactColor'
import Image from 'next/image'
import Button from '@/components/molecules/Button/Button/Button'
import { Alert4 } from '@/components/molecules/Alert4/Alert4'
import { Step15Context } from '@/context/authenticated/events/register/createEvent/step15/Step15Context'
import { EventStepContext } from '@/context/authenticated/events/register/createEvent/eventStep/EventStepContext'
import Link from 'next/link'

// interface Font {
//   id: string,
//   title: string,
//   size: string,
//   format: string,
//   text: string,
// }

// interface AllData {
//   title: { text: string, font_color: string, background_color: string, font_size: Font, font_family: Font };
//   subtitle: { text: string, font_color: string, background_color: string, font_size: Font, font_family: Font };
//   description: { text: string, font_color: string, background_color: string, font_size: Font, font_family: Font };
//   button: { text: string, font_color: string, background_color: string, font_size: Font, font_family: Font };
//   banner: { url: string }
// }

interface ComponentProps {
  setStep: Dispatch<SetStateAction<number>>
  goBack?: () => void
}

const ShowCase: React.FC<ComponentProps> = ({ setStep, goBack }) => {

  const { loading, data, selectFont, selectSize, saveData, savedSuccess } = useContext(Step15Context)
  const { setActiveStep } = useContext(EventStepContext)
  const methods = useForm()
  const [focusedElement, setFocusedElement] = useState<string>()
  const [bannerData, setBannerData] = useState({ title: {}, subtitle: {}, description: {}, button: {} })
  const [imageUrl, setImageUrl] = useState<string>()
  const [imageFile, setImageFile] = useState<File>()
  const bannerInputs = ['title', 'subtitle', 'description', 'button']
  const [type, setType] = useState('companies')
  const [pixel, setPixel] = useState('100%')
  const [responsiveActive, setResponsiveActive] = useState(0)
  const [showProducts, setShowProducts] = useState(false)
  const [showSelect, setShowSelect] = useState(false)
  const [properties, setProperties] = useState('')
  const [showGallery, setShowGallery] = useState(false)
  const [showURL, setShowURL] = useState(false)
  const [idInput, setIdInput] = useState('')
  const [changeFile, setChangeFile] = useState<object>({ idPreview: '', setImage: '' })
  const [colorButton, setColorButton] = useState('#1A1A1A')
  const [showMenu, setShowMenu] = useState(false)
  const [images, setImages] = useState(false)
  const [clickMenu, setClickMenu] = useState(false)
  const [buttonStyle, setButtonStyle] = useState(false)
  const [buttonBackStyle, setButtonBackStyle] = useState(false)
  const [sizeSelected, setSizeSelected] = useState(-1)
  const [mediaQuery, setMediaQuery] = useState('web')

  useEffect(() => {
    if (Object.keys(data).length > 0) {
      const object: any = { ...data }
      bannerInputs.forEach(item => {
        if (!object[item].font_family) object[item].font_family = selectFont[1]
        if (!object[item].font_size) object[item].font_size = item === 'title' ? selectSize[2] : selectSize[0]
        if (!object[item].font_color) object[item].font_color = item === 'button' ? 'black' : 'white'
      })
      setBannerData(object)
      setImageUrl(data.banner?.url)
    }
  }, [data, selectFont, selectSize])

  const onSubmit = () => {
    if (data.banner?.url) setActiveStep(16)
    else alertError('Agregar imagen y guardar cambios', '')
  }

  useEffect(() => {
    $('body').on('click', '.savedPage .group input', function () {
      setProperties('text')
      setIdInput($(this).attr('id') || '')
      setButtonStyle(false)
    })
    $('body').on('change', '.savedPage .group input', function () {
      $(this).attr('value', $(this).val())
    })
    $('body').on('change', '.savedPage .groupButton input', function () {
      $(this).attr('value', $(this).val())
    })
    $('body').on('change', '.savedPage .group textarea', function () {
      $(this).html($(this).val())
    })
    $('body').on('click', '.savedPage .groupButton input', function () {
      setProperties('text')
      setIdInput($(this).attr('id') || '')
      setButtonStyle(true)
    })
    $('body').on('click', '.savedPage .group textarea', function () {
      setProperties('text')
      setIdInput($(this).attr('id') || '')
      setButtonStyle(false)
    })
    $('body').on('click', '.savedPage img', function () {
      setProperties('image')
      setChangeFile({ idPreview: $(this).attr('id') || '', setImage: setImages })
    })
    $('body').on('click', '.savedPage .groupVideo video', function () {
      $('input[name="uploadVideo"]').trigger('click');
      setChangeFile({ idPreview: $(this).attr('id') || '', setImage: setImages })
    })
    $('body').on('click', '.savedPage .imageEditData', function () {
      setProperties('image')
      setChangeFile({ idPreview: $(this).data('id') || '', setImage: setImages })
    })
  }, [clickMenu])

  function previewFile() {
    var fileInput = document.getElementById('imageHome') as HTMLInputElement;
    var allowedExtensions = /(.png|.jpg|.jpeg)$/i;
    var filePath = fileInput?.value;
    if (!allowedExtensions.exec(filePath)) {
      return false
    } else {
      if (fileInput && fileInput?.files && fileInput?.files[0]) {
        var reader = new FileReader()
        reader.onload = function (e) {
          // @ts-ignore
          const selectedFile = fileInput.files[0]
          const objectURL = URL.createObjectURL(selectedFile)
          setImageFile(selectedFile)
          setImageUrl(objectURL)
        }
        reader.readAsDataURL(fileInput?.files[0])
      }
    }
  }

  const responsiveFunction = function (type: string) {
    if (type === 'web') {
      setPixel('100%')
      setMediaQuery('web')
      setResponsiveActive(0)
    }
    if (type === 'tablet') {
      setPixel('1024')
      setMediaQuery('web')
      setResponsiveActive(1)
    }
    if (type === 'phone') {
      setPixel('375')
      setMediaQuery('phone')
      setResponsiveActive(2)
    }
  }

  const handleSave = () => {
    if (imageUrl || imageFile) {
      const bannerTexts: any = {
        title: bannerData.title,
        subtitle: bannerData.subtitle,
        description: bannerData.description,
        button: bannerData.button,
      }
      saveData(bannerTexts, imageFile)
    } else {
      alertError('Agregar imagen')
    }
  }

  const handleColorChange = (color: string) => {
    if (focusedElement) {
      setBannerData((prevState: any) => ({ ...prevState, [focusedElement]: { ...prevState[focusedElement], font_color: color } }))
    }
  }

  const changeFontFamily = (fontFamily: any) => {
    if (focusedElement) {
      let object: any = { ...bannerData }
      object[focusedElement].font_family = fontFamily
      setBannerData(object)
    }
  }

  const changeFontSize = (fontSize: any) => {
    if (focusedElement) {
      setBannerData((prevState: any) => ({ ...prevState, [focusedElement]: { ...prevState[focusedElement], font_size: fontSize } }))
    }
  }

  return (
    <div className={styles.MultiForm}>
      <input
        type="file"
        accept="image/png, image/jpeg"
        id='imageHome'
        className="inputFileTemplate"
        name='uploadImage'
        hidden
        onChange={(e) => previewFile()}
      />
      <FormHookProvider methods={methods} onSubmit={onSubmit}>
        <div className={styles.allContent}>
          <div className={styles.secondRow}>
            <div className={styles.backLanding}>
              <div className={styles.sectionContent}>
                <div className={styles.lateralMenu}>
                  <div className={styles.sectionTextLanding + ' ' + styles.height100px + ' ' + styles.p20px}>
                    <p className={styles.titleLanding}>Secciones</p>
                    <p className={styles.textLanding}>Elija la sección a editar</p>
                  </div>
                  <div className={styles.menu}>
                    <Link href='#' className={styles.menu_item}>
                      Banner principal
                    </Link>
                  </div>
                </div>
                <div style={{ width: '100%' }}>
                  <div className={styles['d-flex'] + ' ' + styles.height100px + ' ' + styles.alignCenter}>
                    <div className={`${styles.boxChange} ${styles.filteBack} ${responsiveActive === 0 ? styles.boxSelected : ''}`} onClick={() => responsiveFunction('web')}><Image alt='w' src={desktop} /></div>
                    <div className={`${styles.boxChange} ${styles.filteBack} ${styles.pad} ${responsiveActive === 1 ? styles.boxSelected : ''}`} onClick={() => responsiveFunction('tablet')}><Image alt='1' src={iconTablet?.src} width={20} height={27} /></div>
                    <div className={`${styles.boxChange} ${styles.filteBack} ${styles.phone} ${responsiveActive === 2 ? styles.boxSelected : ''}`} onClick={() => responsiveFunction('phone')}><Image alt='2' src={iconMobile?.src} width={15} height={27} /></div>
                    <a target='_blank' rel='no' className={styles.preview} href={`/${type}/landing-show`}>
                      <div className={styles.text}>Vista previa</div>
                    </a>
                    <div className={styles.play}><Image alt='3' src={poligon?.src} className={styles.filte} width={20} height={20} /></div>
                    <div className={styles.font30 + ' ' + styles.fontW700}>EDITOR/VITRINA/EVENTO</div>
                  </div>
                  <div className={styles.borderBlackWhite}>
                    <div className={styles.grayLanding + ' ' + styles.borderBlackWhite + ' ' + styles.border26px}>
                      <div className={`${styles.landingEditV2} ${showMenu ? styles.scrollHidden : ''}`} style={{ width: pixel }} >
                        <Banner
                          imageUrl={imageUrl}
                          data={bannerData}
                          setData={setBannerData}
                          setFocusedElement={setFocusedElement}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.lateralMenu}>
                  <div className={styles.titleIndexPage + ' ' + styles.height100px + ' ' + styles.p20px}>
                    <div className={styles.p20px}>
                      <div className={styles.p20px}>
                        Edición de texto
                      </div>
                    </div>
                  </div>
                  {properties === 'image' && (
                    <>
                      <p className={styles.titleMenu}>Propiedades</p>
                      <p className={styles.subtitleMenu}>Edición de imagen</p>
                      <div className={styles['mb-2']}>Seleccionar imagen</div>
                      <div className={styles.galleryLandingV2}>
                        <Image
                          src={close?.src}
                          alt='icon'
                          className={styles.imgRight}
                          onClick={() => setShowGallery(false)}
                        />
                        <p className={styles.titleBlueGallery}>MI GALERÍA</p>
                        <div className={styles.scrollGallery}>
                          <div style={{ width: '150px' }}>
                            <button className={styles.buttonImportToGallery}>Exportar archivo</button>
                          </div>
                        </div>
                      </div>
                      <div className={`${styles.boxLinks} ${styles['mb-2']}`} onClick={() => setShowGallery(true)}><Image alt='6' src={link?.src} /> Desde mi PC</div>
                      <div className={`${styles.boxLinks} ${styles['mb-2']}`} onClick={() => setShowURL(true)}><Image alt='7' src={send?.src} /> Desde URL</div>
                      <input placeholder={'Introduzca URL '} className={styles.inputURL} />
                      <div className={styles.productList} onClick={() => setShowProducts(true)}>Productos <Image alt='8' src={arrowDown} /></div>
                      <div className={styles.lineTwocolors}></div>
                    </>
                  )}
                  {showProducts && (
                    <>
                      <div className={styles.wrappedProduct}>
                        <p className={styles.titleProductT1}>Cargar imagen</p>
                        <div className={styles.productList1} onClick={() => { setShowProducts(false); setShowSelect(false) }}>Productos <Image alt='9' src={arrowDown?.src} /></div>
                        <div className={styles.lineTwocolors} />
                        <label>Lista de productos</label>
                        <div className={styles.borderInput}>
                          <input placeholder='Buscar producto' />
                        </div>
                        <div className={styles.scrollProducts}>
                        </div>
                      </div>
                    </>
                  )}
                  <div className={styles.textProperties}>
                    <div className={styles.lineTwocolors} />
                    <label>Fuente</label><br />
                    <span className={styles.spanLeft}>
                      <Dropdown
                        name='font_family'
                        label=''
                        onChange={(e) => changeFontFamily(e.value)}
                        options={selectFont}
                        optionLabel='text'
                        placeholder='fuente'
                        variant='secondary'
                        height='30px'
                      />
                    </span>
                    <div className={styles.lineTwocolors} />
                    <label>Tamaño (px)</label>
                    <div className={styles.fontSizeContainer}>
                      {selectSize.map((item, index) => {
                        let nameClass = "";
                        let number = "";
                        switch (index) {
                          case 0:
                            nameClass = styles.label80
                            number = "80"
                            break;
                          case 1:
                            nameClass = styles.label100
                            number = "100"
                            break;
                          case 2:
                            nameClass = styles.label120
                            number = "120"
                            break;
                          default:
                            break;
                        }
                        return (
                          <div
                            className={nameClass}
                            style={{ color: sizeSelected === 0 ? '#003B7A' : '#878D96' }}
                            onClick={() => changeFontSize(item)}
                            key={index}
                          >
                            <p>{item.symbol}</p>
                            {number}%
                          </div>
                        )
                      })}
                    </div>
                  </div>
                  <div className={styles.lineTwocolors} />
                  <div className={styles.colorText}>Cambiar paleta de colores</div>
                  {buttonBackStyle && properties === 'back' && (
                    <>
                      <div className={`${styles.colorText} ${styles['mt-3']}`}>Cambiar paleta de colores</div>
                      <div className={styles.squareColor3} style={{ backgroundColor: colorButton }}></div>
                    </>
                  )}
                  <ColorPickerComponent onColorChange={handleColorChange} />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.sectionFooterTemplate}>
            <div className={styles.infoCompanyTemplate}>
            </div>
            <div className={styles.actionTemplate}>
              <div className={styles.btns}>
                <Button
                  type='button'
                  variant="grayForm2"
                  onClick={handleSave}
                  height='40px'
                  borderRadius='10px'
                >
                  <Image src={save1} alt='icon' style={{ marginRight: '10px' }} />
                  Guardar
                </Button>
              </div>
              <div className={styles.btns}>
                <Button
                  type='button'
                  variant="grayForm2"
                  onClick={goBack}
                  height='40px'
                  borderRadius='10px'
                >
                  Anterior
                </Button>
              </div>
              <div className={styles.btns}>
                <Button
                  variant="blackForm2"
                  borderRadius='10px'
                  height='40px'
                >
                  Enviar a revisión
                </Button>
              </div>
            </div>
          </div>
        </div>
      </FormHookProvider>
      <Alert4
        visible={savedSuccess}
        icon='success'
        title='¡ Tu información se guardó con éxito !'
      />
    </div>
  )
}

export default ShowCase
