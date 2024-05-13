// ===================================================================================================================
// ===================================================================================================================
// ----------------------------     ESTANDAR DE PROGRAMACION FRONTEND WITEN CONSULTING      --------------------------
// ===================================================================================================================
//
// A continuación se describe la forma de implementar en la maquetación los diferentes elementos de formularios, las 
// props que debe recibir cada componente y la descripción de las mismas. Los ejemplos incluyen las props minimas 
// básicas que debe llevar cada componente, consulta en el componente todas las props que tiene disponibles y su 
// función.
//
//
// 1. Librerias utilizadas:
// - react-hook-form
// - PrimeReact
//
//
// 2. Elementos de formularios:
// - InputText
// - InputTextArea
// - Dropdown
// - Radiobutton
// - Checkbox
// - ImageUpload
// - FileUpload
//
//
// 3. Ubicación de los átomos:
// - InputText            || @/components/atoms/Input/InputText
// - InputTextArea        || @/components/atoms/Input/InputTextArea
// - Dropdown             || @/components/atoms/Selects/Dropdown
// - Radiobutton          || @/components/atoms/RadioButton/RadioButton
// - Checkbox             || @/components/atoms/Checkbox/Checkbox
// - ImageUpload          || Este componente no implementa átomo
// - FileUpload           || Este componente no implementa átomo
//   
//
// 4. Ubicación de las moléculas:
// - InputText            || 
// - InputTextArea        || 
// - Dropdown             || 
// - Radiobutton          || 
// - Checkbox             ||
// - ImageUpload          ||
// - FileUpload           ||
//
//
//


import { useEffect, useState } from 'react'
import { useForm, SubmitHandler, FieldValues } from 'react-hook-form'
import styles from './styles.module.scss'
import FormHookProvider from '@/components/layouts/Form/FormHookProvider/FormHookProvider'
import { Dropdown } from '@/components/molecules/Dropdown/Dropdown'
import { RadioButton } from '@/components/molecules/RadioButtonAltern/RadioButton'
import { Checkbox } from '@/components/molecules/CheckboxAltern/Checkbox'
import { ImageUpload } from '@/components/molecules/Upload/ImageUpload/ImageUpload'
import useWindowSize from '@/customHooks/useWindowSize'

interface ComponentProps {
}

// ===================================================================================================================
// Dropdown
// ===================================================================================================================
//
// Implementación de dropdown en formularios
//

export const Form3: React.FC<ComponentProps> = () => {

  const methods = useForm()
  const [selectedCountry, setSelectedCountry] = useState<string>() // variable opcional, agrégala solo si la necesitas

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data.country)  // = 1 | Valor seleccionado al enviar el formulario
  }

  useEffect(() => {
    methods.setValue('country', '2')  // Muestra en el formulario el valor seleccionado proveniente de una API cuando lleguen los datos,
  }, [])                              // en este caso el id correspondiente de las opciones

  const countryOptions = [
    { text: 'México', id: 1 },
    { text: 'Canadá', id: 2 },
    { text: 'Brasil', id: 3 }
  ]

  return (
    <FormHookProvider methods={methods} onSubmit={onSubmit}>
      <div className={styles.form}>
        <div className={styles.form_input}>
          <Dropdown
            name='country' // Define el nombre con el que se accede desde react-hook-form, el nombre debe ser único en el formulario.
            onChange={(e) => setSelectedCountry(e.value)} // Guarda el valor seleccionado en una variable en caso que necesites acceder al valor
            label='Pais' // Define el nombre de la etiqueta que se muestra al usuario en el formulario.
            options={countryOptions} // Define las opciones disponibles en el dropdown
            optionLabel='text' // Define que propiedad de las opciones se utiliza como etiqueta
            optionValue='id' // Define que propiedad de las opciones se utiliza como valor para react-hook-form
            placeholder='Seleccione...' // Texto que se mostrará cuando no se seleccione ninguna opción.
            variant='primary' // Define el estilo que tendra el dropdown, 'primary', 'secondary', etc.
            height='30px' // Define la altura del dropdown
            rules={{ required: false }} // Define si es obligatorio seleccionar una opción al enviar el formulario, agrega un texto si necesitas mostrar un mensaje.
          />
        </div>
      </div>
    </FormHookProvider>
  )
}

// ===================================================================================================================
// Radiobutton
// ===================================================================================================================
//
// Implementación de radiobuttons en formularios
//

export const Form4: React.FC<ComponentProps> = () => {

  const methods = useForm()
  const [selectedOption, setSelectedOption] = useState<string>()

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    // data.ingredient = 'Cheese'    // Valor seleccionado al enviar el formulario
  }

  useEffect(() => {
    methods.setValue('ingredient', 'Mushroom')  // Muestra en el formulario el valor seleccionado proveniente de una API cuando lleguen los datos
  }, [])

  return (
    <FormHookProvider methods={methods} onSubmit={onSubmit}>
      <div className={styles.form}>
        <div className={styles.form_group}>
          <RadioButton
            name='ingredient' // Define el nombre con el que se accede desde react-hook-form, el nombre debe ser el mismo para todas las opciones de un grupo de radiobuttons.
            inputId='Cheese' // Define un id único para cada opción para que sea seleccionable haciendo click en su label, puede ser el valor de la opción.
            value='Cheese' // Define el valor de la opción, este valor aparecera en react-hook-form si es seleccionada.
            defaultValue='Cheese' // Define el valor que aparecera seleccionado por defecto al renderizar el formulario. Debe ser el mismo para todas las opciones de un grupo de radiobuttons.
            setValue={setSelectedOption} // Guarda el valor seleccionado en una variable en caso que necesites acceder al valor
            label='Cheese' // Define el nombre de la opción que se muestra al usuario en el formulario.
            rules={{ required: true }} // Define si es obligatorio seleccionar una opción al enviar el formulario, agrega un texto si necesitas mostrar un mensaje.
            variant='primary' // Define el estilo que tendra el radiobutton, 'primary', 'secondary', etc.
          />
          <RadioButton
            name='ingredient'
            inputId='Mushroom'
            value='Mushroom'
            defaultValue='Cheese'
            setValue={setSelectedOption}
            label='Mushroom'
            rules={{ required: true }}
            variant='primary'
          />
          <RadioButton
            name='ingredient'
            inputId='Pepper'
            value='Pepper'
            defaultValue='Cheese'
            setValue={setSelectedOption}
            label='Pepper'
            rules={{ required: true }}
            variant='primary'
          />
          <RadioButton
            name='ingredient'
            inputId='Onion'
            value='Onion'
            defaultValue='Cheese'
            setValue={setSelectedOption}
            label='Onion'
            rules={{ required: true }}
            variant='primary'
          />
        </div>
      </div>
    </FormHookProvider>
  )
}

// ===================================================================================================================
// Checkbox
// ===================================================================================================================
//
// Implementación de checkboxes en formularios
//

export const Form5: React.FC<ComponentProps> = () => {

  const methods = useForm()
  const [selectedOptions, setSelectedOptions] = useState<string[]>([])

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data.terms) // = true | false    // Valor seleccionado al enviar el formulario
    console.log(selectedOptions) // = ['1', '2']    // Valores seleccionados al enviar el formulario
  }

  const checkboxOptions = [
    { label: 'Cheese', value: '1' },
    { label: 'Mushroom', value: '2' },
    { label: 'Pepper', value: '3' },
    { label: 'Onion', value: '4' }
  ]

  const onOptionsChange = (e: any) => {
    let _selectedOptions = [...selectedOptions]
    if (e.checked)
      _selectedOptions.push(e.value)
    else
      _selectedOptions = _selectedOptions.filter(item => item !== e.value)
    setSelectedOptions(_selectedOptions)
  }

  return (
    <FormHookProvider methods={methods} onSubmit={onSubmit}>
      <div className={styles.form}>
        {/* 
          Implementación de un solo checkbox, react-hook-form retorna true si la casilla esta marcada o false si no lo esta
        */}
        <div className={styles.form_input}>
          <Checkbox
            inputId='terms'
            name='terms'
            variant='primary'
            rules={{ required: true }}
          />
        </div>
        {/* 
          Implementación de un grupo de checkboxes utilizando la función map()
        */}
        <div className={styles.form_group}>
          {checkboxOptions.map((item, index) => {
            return (
              <div key={item.value}>
                <Checkbox
                  inputId={item.value}
                  name={item.label}
                  label={item.label}
                  value={item.value}
                  onChange={(e) => onOptionsChange(e)}
                  variant='primary'
                  rules={{ required: selectedOptions.length === 0 }}
                />
              </div>
            )
          })}
        </div>
      </div>
    </FormHookProvider>
  )
}

// ===================================================================================================================
// ImageUpload
// ===================================================================================================================
//
// Implementación del componente ImageUpload en formularios. El componente incluye las props basicas necesarias para 
// su implementación.
//

export const Form6: React.FC<ComponentProps> = () => {

  const methods = useForm()
  const [imageFile, setImageFile] = useState<File | null>(null) // Archivo seleccionado que sera enviado a la API
  const [imageUrl, setImageUrl] = useState<string>() // Url de la imagen proveniente de una API

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(imageFile) // Archivo seleccionado al enviar el formulario
  }

  useEffect(() => {
    setImageUrl('image.url')  // Muestra en el formulario la imagen guardada proveniente de una API cuando lleguen los datos
  }, [])

  return (
    <FormHookProvider methods={methods} onSubmit={onSubmit}>
      <div className={styles.form}>
        <div className={styles.form_input}>
          <ImageUpload
            name='fileupload_passport' // El nombre debe ser unico en el formulario
            title='Buscar pasaporte' // Texto que se mostrara como placeholder en caso que no haya ninguna imagen cargada
            accept='image/png, image/jpg, image/jpeg' // Define las extensiones de archivos aceptados
            defaultImage={imageUrl} // Define la url de la imagen a mostrar proveniente de una API cuando lleguen los datos
            setImageFile={setImageFile} // Guarda en una variable el archivo cargado 
            width='270px' // Define el ancho del componente
            height='305px' // Define el alto del componente
            rules={{ required: false }} // Define si es obligatorio seleccionar una imagen al enviar el formulario
          />
        </div>
      </div>
    </FormHookProvider>
  )
}

// ===================================================================================================================
// Clases
// ===================================================================================================================
//
// Implementación de clases para dar estilos a formularios. A continuación se describe la estructura y nombre de las
// clases css sugeridas para formar la estructura de los formularios y dar estilos. Para nombrar las clases css se 
// utiliza la metodologia BEM utilizando un solo guin bajo "_" para separar bloques, elementos y modificadores.
//

export const Form8: React.FC<ComponentProps> = () => {

  const methods = useForm()

  const onSubmit: SubmitHandler<FieldValues> = (data) => { }

  return (
    <FormHookProvider methods={methods} onSubmit={onSubmit}>
      {/* Bloque principal */}
      <div className={styles.form}>
        {/* Elemento contenedor */}
        <div className={styles.form_container}>
          <div className={styles.form_header}>
            <div className={styles.form_logo}>
            </div>
            <div className={styles.form_title}>
            </div>
          </div>
          <div className={styles.form_body}>
            <div className={styles.form_content}>
              <div className={styles.form_row}>
                <div className={styles.form_col1}>
                  {/* <InputText /> */}
                </div>
                <div className={styles.form_col2}>
                  {/* <InputText /> */}
                </div>
              </div>
              <div className={styles.form_group}>
                <div className={styles.form_input}>
                  {/* <InputText /> */}
                </div>
              </div>
            </div>
          </div>
          <div className={styles.form_footer}>
            <div className={styles.form_button}>
              <div className={styles.form_button_icon}>
              </div>
              <div className={styles.form_button_label}>
              </div>
            </div>
          </div>
        </div>
      </div>
    </FormHookProvider>
  )
}

// ===================================================================================================================
// Diseño responsivo
// ===================================================================================================================
//
//  Para implementar diseño responsivo en componentes de formularios se utiliza el hook useWindowSize
// 

export const Form9: React.FC<ComponentProps> = () => {

  const methods = useForm()
  const windowsSize: any = useWindowSize()

  const onSubmit: SubmitHandler<FieldValues> = (data) => { }

  return (
    <FormHookProvider methods={methods} onSubmit={onSubmit}>
      <div className={styles.form}>
        <ImageUpload
          name='fileupload_passport'
          width={windowsSize.width > 1025 ? '270px' : '200px'}
          height={windowsSize.width > 1025 ? '400px' : '300px'}
        />
      </div>
    </FormHookProvider>
  )
}

// ===================================================================================================================
// Modo crear, ver y editar
// ===================================================================================================================
//
//  Un formulario puede tener tres modos: modo crear, modo ver y modo editar
// 

export const Form10: React.FC<ComponentProps> = ({ }) => {

  const methods = useForm()

  const onSubmit: SubmitHandler<FieldValues> = (data) => { }

  return (
    <FormHookProvider methods={methods} onSubmit={onSubmit}>
      <div className={styles.form}>

      </div>
    </FormHookProvider>
  )
}