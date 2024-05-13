'use client'

import { useContext, useEffect, useState } from 'react'
import styles from './Form10.module.scss'
import Card from '@/components/molecules/Card/Card'
import DataTable from '@/components/molecules/DataTable/DataTable'
import Button from '@/components/molecules/Button/Button/Button'
import logo_small from '@/../../public/images/Events/logo_small.png'
import InputText from '@/components/molecules/InputText/InputText'
import FormHookProvider from '@/components/layouts/Form/FormHookProvider/FormHookProvider'
import { useForm } from 'react-hook-form'
import imageSearch from '@/../public/images/icons/search.svg'
import { DataTableActions } from '@/components/molecules/DataTableActions/DataTableActions'
import { Step10Context } from '@/context/authenticated/events/register/createEvent/step10/Step10Context'
import { EventStepContext } from '@/context/authenticated/events/register/createEvent/eventStep/EventStepContext'
import Image from 'next/image'

interface Branch {
  image?: { url: string }
  name?: string
  color?: string
  cupos?: string
  number?: string
  incluye?: string
  door?: string
  price?: string
  date_inicio?: string
  date_final?: string
  price_ticket?: string
  total_ticket?: string
  add_ticket?: string
  avatar?: string
}

interface ComponentProps {
  onClickBack: () => void
}

const Form10: React.FC<ComponentProps> = ({ onClickBack }) => {

  const { loading, data, setStep10, setEditId } = useContext(Step10Context)
  const { setActiveStep } = useContext(EventStepContext)
  const [search, setSearch] = useState('')
  const methods = useForm()

  const onSubmit = () => {
    setStep10()
  }

  const handleEdit = (rowData: any) => {
    setEditId(rowData.id)
    setActiveStep(11)
  }

  const imageBodyTemplate = (rowData: Branch, tableData: any) => {
    return (
      <div className={styles.table_column_image}>
        <Image
          src={rowData?.image?.url ? rowData?.image?.url : logo_small}
          alt='image'
          loader={({ src }) => src}
          className={styles.maxW}
          width={50}
          height={50}
        />
      </div>
    )
  }

  const actionsBodyTemplate = (rowData: Branch) => {
    return (
      <DataTableActions
        editButton
        onClickEdit={() => handleEdit(rowData)}
      />
    )
  }

  const datatableColumns = [
    { id: 1, field: 'image', header: 'Imagen', body: imageBodyTemplate, w: '100px', h: '50px' },
    { id: 2, field: 'actions', header: 'Acciones', body: actionsBodyTemplate, w: '100px', h: '51px' },
    { id: 3, field: 'zone_name', header: 'Nombre de zona', w: '210px', h: '50px' },
    { id: 4, field: 'ticket_name', header: 'Nombre del boleto', w: '210px', h: '50px' },
    { id: 5, field: 'color', header: 'Color de zona', w: '180px', h: '50px' },
    { id: 6, field: 'quota', header: 'Cupos/ asientos por zona', w: '300px', h: '50px' },
    { id: 7, field: 'number', header: 'Numero de zona', w: '210px', h: '50px' },
    { id: 8, field: 'include', header: 'Que incluye', w: '200px', h: '50px' },
    { id: 9, field: 'port_int', header: 'Puerta de entrada', w: '195px', h: '51px' },
    { id: 10, field: 'event_type', header: 'Tipo de evento', w: '195px', h: '51px' },
  ]

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const data = await dataTable(10)
  //     setBranchs(data)
  //   }
  //   fetchData()
  // }, [])

  return (
    <>
      <FormHookProvider methods={methods} onSubmit={onSubmit}>
        <div className={styles.TicketType}>
          <Card className={styles.tableList}>
            <div className={styles.titles}>
              <p>Lista de tipo de boletos</p>
              <p>Total de boletos: {data.total}</p>
            </div>
            <div className={styles.section_search}>
              <div className={styles.search} style={{ width: '388px' }}>
                <InputText
                  label=''
                  name='search'
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder='Buscar'
                  icon={imageSearch}
                  iconPosRight={true}
                  variant='basic'
                  height='50px'
                />
              </div>
            </div>
            <DataTable
              columns={datatableColumns}
              data={data.tickets}
              loading={false}
              selectionMode='single'
              variant='primary'
              search={search}
            />
          </Card>
          <div className={styles.divButtons}>
            <div className={styles.divButtonsAbsolute}>
              <div className={styles.btns}>
                <Button
                  type='button'
                  onClick={onClickBack}
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
        </div>
      </FormHookProvider>
    </>
  )
}

export default Form10
