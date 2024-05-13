'use client'

import { useContext, useEffect, useState } from 'react'
import styles from './Form15.module.scss'
import Card from '@/components/molecules/Card/Card'
import ColorPickerComponent from '@/components/molecules/ReactColor/ReactColor'
import DataTable from '@/components/molecules/DataTable/DataTable'
import { DataTableActions } from '@/components/molecules/DataTableActions/DataTableActions'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import Button from "@/components/molecules/Button/Button/Button"
import 'swiper/css'
import 'swiper/css/navigation'
import FormHookProvider from '@/components/layouts/Form/FormHookProvider/FormHookProvider'
import { useForm } from 'react-hook-form'
import { FileUpload } from '@/components/molecules/Upload/FileUpload/FileUpload'
import Image from 'next/image'
import defaultImage from '@/../public/icons/default_image.png'
import { Stage } from '@/components/molecules/Stage/Stage'
import { Alert4 } from '@/components/molecules/Alert4/Alert4'
import { InternalMapContext } from '@/context/authenticated/events/register/createEvent/internalMap/InternalMapContext'

interface Branch {
  id?: string;
  image?: any;
  name?: string;
  color?: string;
  cupos?: string;
  number?: string;
  incluye?: string;
  door?: string;
  price?: string;
  date_inicio?: string;
  date_final?: string;
  price_ticket?: string;
  total_ticket?: string;
  add_ticket?: string;
  dataTableZone?: any;
}

interface ComponentProps {
  mode?: string
  onHide?: () => void
}

const Form15: React.FC<ComponentProps> = ({ mode, onHide = () => { } }) => {

  const { loading, data, dataTableZone, saveZoneColor, saveInternalMap, savedSuccess, closeForm } = useContext(InternalMapContext)
  const methods = useForm()
  const [selectedZoneId, setSelectedZoneId] = useState<number | null>(null)
  const [colorPickerVisible, setColorPickerVisible] = useState(false)
  const [selectedColors, setSelectedColors] = useState<{ [key: number]: string }>({})
  const [zonesColor, setZonesColor] = useState<string[]>([])
  const [total_zones, setTotal_zones] = useState('')
  const [type, setType] = useState('1')
  const [imageName, setImageName] = useState<string>('')
  const [imageUrl, setImageUrl] = useState<string>('')
  const [imageFile, setImageFile] = useState<File>()
  const [generateImage, setGenerateImage] = useState<boolean>(false)
  const [slideActiveIndex, setSlideActiveIndex] = useState<number>(-1)

  useEffect(() => {
    if (Object.keys(data).length > 0) {
      setImageUrl(data.image?.url)
      setImageName(data.image?.name)
      setTotal_zones(data.total_zones)
      setType(data.different_zones + '')
      switch (data.image?.name) {
        case 'stage_rectangle':
          setSlideActiveIndex(0)
          break;
        case 'stage_oval':
          setSlideActiveIndex(1)
          break;
        case 'stage_circle':
          setSlideActiveIndex(2)
          break;

        default:
          setSlideActiveIndex(0)
          break;
      }
    }
  }, [data])

  useEffect(() => {
    if (closeForm) onHide()
  }, [closeForm])

  const onSubmit = () => {
    if (mode === 'internalMapUpload') {
      if (imageFile) {
        saveInternalMap(imageFile)
      }
    }
    if (mode === 'internalMapSelect') {
      // saveInternalMap(imageFile)
      setGenerateImage(!generateImage)
    }
  }

  const handleAddColorClick = (zoneId: number) => {
    setSelectedZoneId(zoneId)
    setColorPickerVisible((prevVisible) => !prevVisible)
    setSelectedColors((prevColors) => ({
      ...prevColors,
      [zoneId]: prevColors[zoneId] || '#707070',
    }))
  }

  const handleColorChange = (color: string, zoneId: number) => {
    saveZoneColor(color, zoneId)
  }

  const imageBodyTemplate = (rowData: Branch) => {
    return (
      <div className={styles.table_column_image}>
        {rowData?.image?.url &&
          <Image
            alt='image'
            src={rowData?.image?.url}
            width={40}
            height={40}
          />
        }
      </div>
    )
  }

  const numberBodyTemplate = (rowData: Branch) => {
    return (
      <div className={styles.table_column_name}>
        {rowData.number && rowData.number + 1}
      </div>
    )
  }

  const dataTableColumns = [
    { field: 'image', header: 'Imagen', body: imageBodyTemplate, w: '120px', h: '50px' },
    { field: 'name', header: 'Nombre de zona', w: '200px', h: '50px' },
    { field: 'color', header: 'Color de zona', w: '170px', h: '50px' },
    { field: 'quota', header: 'Cupos/ asientos por zona', w: '280px', h: '50px' },
    { field: 'number', header: 'Numero de zona', body: numberBodyTemplate, w: '180px', h: '50px' },
    { field: 'include', header: 'Que incluye', w: '180px', h: '50px' },
    { field: 'port_int', header: 'Puerta de entrada', w: '180px', h: '51px' },
    { field: 'event_type', header: 'Tipo de evento', w: '180px', h: '51px' },
    { field: 'price', header: 'Precio de zona', w: '180px', h: '51px' },
    { field: 'quota', header: 'Total de boletos', w: '220px', h: '51px' },
    // { field: 'actions', header: 'Acciones', body: actionsBodyTemplate, w: '100px', h: '51px' },
  ]

  useEffect(() => {
    const result = dataTableZone.map(item => item.color)
    setZonesColor(result)
  }, [dataTableZone])

  return (
    <div className={`${styles.Form15} ${styles.ScrollNo}`}>
      <FormHookProvider methods={methods} onSubmit={onSubmit}>
        <div className={styles.cardEditMap}>
          <div className={styles.title_search}>
            <p className={styles.title}>EDITOR DE MAPA INTERNO</p>
            {/* <div className={styles.search}>
              <InputText
                label=''
                name='search'
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder='Buscar'
                icon={search}
                iconPosRight={true}
                variant='basic'
                height='50px'
                filter={false}
              />
            </div> */}
          </div>
          <div className={styles.both2}>
            <div className={styles.both}>
              <div className={styles.ChargeMap}>
                <div className={styles.card}>
                  {mode === 'internalMapUpload' &&
                    <FileUpload
                      name='fileupload_id'
                      label='Subir mapa interno'
                      rightLabel='Formato de mapa'
                      placeholder=''
                      accept='image/png, image/jpg, image/jpeg, application/pdf'
                      defaultFile={imageName}
                      //  @ts-ignore
                      setFile={setImageFile}
                      height='35px'
                      rules={{ required: !imageName }}
                      iconDisable={true}
                      rightComponent={<p style={{ color: '#707070', fontSize: '18px', width: '180px' }}>PDF, PNG, JPG</p>}
                    />
                  }
                </div>
              </div>
              {/* <div className={styles.question}>
                <p>¿Será un evento dividido por diferentes zonas?</p>
                <Card className={styles.CardRadio}>
                  <div className={styles.bothRadio}>
                    <RadioButton
                      inputId={''}
                      name={'type'}
                      onChange={setType}
                      selected={type}
                      disabled={false}
                      variant="white"
                      items={listType}
                      label={""}
                      required={false}
                    />
                  </div>
                </Card>
              </div> */}
            </div>
            <div>
              <Card className={`${styles.contInt} ${styles.ScrollNo}`}>
                <div className={styles.cont1}>
                  <div className={styles.assignColor}>
                    <p>ZONA</p>
                    <p>NUMERO</p>
                    <p>COLOR</p>
                    <p>ASIGNAR COLOR</p>
                  </div>
                  <div className={`${styles.ContSelectZone} ${styles.ScrollNo}`}>
                    {dataTableZone.map((zone) => {
                      return (
                        <Card className={styles.CardZone} key={zone.id}>
                          <p className={styles.textZone}>{zone.name}</p>
                          <p className={styles.textNumber}>{zone.number + 1}</p>
                          <div className={styles.contColor}>
                            <div className={styles.circleWhite}>
                              <div className={styles.circleColor} style={{ background: zone.color }}></div>
                            </div>
                          </div>
                          <div className={styles.widthButton}>
                            <div className={styles.addColor} onClick={() => handleAddColorClick(zone.id)}>+</div>
                          </div>
                          <div className={styles.contSelect}>
                            {colorPickerVisible && selectedZoneId === zone.id && (<ColorPickerComponent onColorChange={(color) => handleColorChange(color, zone.id)} />)}
                          </div>
                        </Card>
                      )
                    })}
                  </div>
                </div>
                <div className={styles.cont3}>
                  <p className={styles.textTotal}>TOTAL DE ZONAS ASIGNADAS</p>
                  <p className={styles.textNumber}>{total_zones}</p>
                </div>
                <div className={styles.cont4}>
                  {mode === 'internalMapUpload' &&
                    <Image
                      src={imageFile && URL.createObjectURL(imageFile) || imageUrl || defaultImage}
                      loader={({ src }) => src}
                      alt='image'
                      width={535}
                      height={285}
                      style={{ height: '100%', width: '100%', objectFit: 'contain' }}
                    />
                  }
                  {mode === 'internalMapSelect' && slideActiveIndex >= 0 &&
                    <Swiper
                      slidesPerView={1}
                      spaceBetween={0}
                      navigation={true}
                      modules={[Navigation]}
                      className={styles.swiper}
                      initialSlide={slideActiveIndex}
                      onSlideChange={(e) => setSlideActiveIndex(e.activeIndex)}
                    >
                      <SwiperSlide className={styles.swiper_slide}>
                        <Stage
                          type='rectangle'
                          zones={zonesColor}
                          generateImage={slideActiveIndex === 0 && generateImage}
                          saveInternalMap={saveInternalMap}
                          slideActiveIndex={slideActiveIndex}
                        />
                      </SwiperSlide>
                      <SwiperSlide className={styles.swiper_slide}>
                        <Stage
                          type='oval'
                          zones={zonesColor}
                          generateImage={slideActiveIndex === 1 && generateImage}
                          saveInternalMap={saveInternalMap}
                          slideActiveIndex={slideActiveIndex}
                        />
                      </SwiperSlide>
                      <SwiperSlide className={styles.swiper_slide}>
                        <Stage
                          type='circle'
                          zones={zonesColor}
                          generateImage={slideActiveIndex === 2 && generateImage}
                          saveInternalMap={saveInternalMap}
                          slideActiveIndex={slideActiveIndex}
                        />
                      </SwiperSlide>
                    </Swiper>
                  }
                </div>
              </Card>
              <div className={styles.ContTable}>
                <p>Boletos totales: {data.tickets}</p>
                <DataTable
                  columns={dataTableColumns}
                  data={dataTableZone}
                  loading={false}
                  selectionMode='single'
                  variant='primary'
                />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.divButtons}>
          <div className={styles.divButtonsAbsolute}>
            <div className={styles.btns}>
              <Button
                type='button'
                onClick={onHide}
                variant="grayForm"
                height='10px'
                borderRadius='10px'
              >
                Regresar
              </Button>
            </div>
            <div className={styles.btns}>
              <Button
                variant="blackForm"
                borderRadius='10px'
              >
                Continuar
              </Button>
            </div>
          </div>
        </div>
      </FormHookProvider>
      <Alert4
        visible={savedSuccess}
        icon='success'
        title='Registrado con éxito'
      />
    </div>
  )
}

export default Form15
