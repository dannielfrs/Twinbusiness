'use client'

import { useEffect, useState } from 'react'
import styles from './TicketInventories.module.scss'
import Card from '@/components/molecules/Card/Card'
import InputText from '@/components/molecules/InputText/InputText'
import imageSearch from '@/../public/images/icons/search.svg'
import FormHookProvider from '@/components/layouts/Form/FormHookProvider/FormHookProvider'
import { useForm } from 'react-hook-form'
import DataTable from '@/components/molecules/DataTable/DataTable'
import dataTable from '@/services/fake/TicketType/dataTable'
import Avatar from '@/components/atoms/Avatar/Avatar'
import ActionsBody from '@/components/molecules/ActionsBody/ActionsBody'
import Button from '@/components/molecules/Button/Button/Button'
import { useRouter } from 'next/navigation'

interface Branch {
  image?: string;
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
  avatar?: string;
}

export default function TicketInventories () {

  const methods = useForm()
  const router = useRouter()
  const [branchs, setBranchs] = useState<Branch[]>([])
  const [search, setSearch] = useState('')

  const onSubmit = () => { }

  const nameBodyTemplate = (rowData: Branch, tableData: any) => {
    return (
      <div className={styles.table_column_name}>
        <Avatar
          image={rowData.image}
          imageAlt='image'
          imageFallback='@/../public/images/icons/estadio.jpg'
          shape='square'
        />
      </div>
    )
  }

  const AcctionsBodyTempleate = (rowData: Branch) => {
    return (
      <ActionsBody
        actionShow={false}
        actionEdit={true}
        actionActBtn
        actionDelete={true}
        setBranchs={setBranchs}
        urlShow='/system/configuration-and-management/settings/external-users/id'
        urlEdit='/system/configuration-and-management/settings/external-users/id/edit'
      // onDelete={OnDelete}
      // handleActive={handleActive}
      />
    )
  }

  const dashboardColumns = [
    {
      field: 'image',
      header: 'Imagen',
      sortable: true,
      body: nameBodyTemplate,
      w: '100px',
      h: '50px'
    },
    {
      field: 'name',
      header: 'Nombre de zona',
      sortable: true,
      w: '210px',
      h: '50px'
    },
    {
      field: 'color',
      header: 'Color de zona',
      sortable: true,
      w: '180px',
      h: '50px'
    },
    {
      field: 'cupos',
      header: 'Cupos/ asientos por zona',
      sortable: true,
      w: '300px',
      h: '50px'
    },
    {
      field: 'number',
      header: 'Numero de zona',
      sortable: true,
      w: '210px',
      h: '50px'
    },
    {
      field: 'incluye',
      header: 'Que incluye',
      sortable: true,
      w: '200px',
      h: '50px'
    },
    {
      field: 'door',
      header: 'Puerta de entrada',
      sortable: true,
      w: '195px',
      h: '51px'
    },
    {
      field: 'type',
      header: 'Tipo de evento',
      sortable: true,
      w: '195px',
      h: '51px'
    },
    {
      field: 'price',
      header: 'Precio de zona',
      sortable: true,
      w: '200px',
      h: '51px'
    },
    {
      field: 'date_inicio',
      header: 'Fecha de inicio',
      sortable: true,
      w: '250px',
      h: '51px'
    },
    {
      field: 'date_final',
      header: 'Fecha final',
      sortable: true,
      w: '250px',
      h: '51px'
    },
    {
      field: 'price_ticket',
      header: 'Precio de boleto',
      sortable: true,
      w: '272px',
      h: '51px'
    },
    {
      field: 'total_ticket',
      header: 'Total de boletos',
      sortable: true,
      w: '272px',
      h: '51px'
    },
    {
      field: 'add_ticket',
      header: 'Agregar boletos',
      sortable: true,
      w: '272px',
      h: '51px'
    },
    {
      field: 'actions',
      header: '',
      sortable: true,
      body: AcctionsBodyTempleate,
      w: '100px',
      h: '51px'
    },
  ]

  useEffect(() => {
    const fetchData = async () => {
      const data = await dataTable(10)
      setBranchs(data)
    }
    fetchData()
  }, [])

  return (
    <FormHookProvider methods={methods} onSubmit={onSubmit}>
      <div className={styles.TicketInventories}>
        <Card className={styles.ContInventories}>
          <div className={styles.titles}>
            <p>Inventarios de boletos</p>
            <p>Total de boletos 1,500</p>
          </div>
          <div className={styles.both}>
            <div className={styles.TextButton}>
              <div className={styles.buttonAdd}>
                <p>+</p>
              </div>
              <p className={styles.text}>Agregar nuevos boletos</p>
            </div>
            <div className={styles.search} style={{ width: '388px' }}>
              <InputText
                label=''
                name='search'
                // value={search}
                // onChange={(e) => setSearch(e.target.value)}
                placeholder='Buscar'
                icon={imageSearch}
                iconPosRight={true}
                variant='basic'
                height='50px'
              />
            </div>
          </div>
          <DataTable
            columns={dashboardColumns}
            data={branchs}
            loading={false}
            selectionMode='single'
            variant='primary'
            search={search}
          />
        </Card>
        <div className={styles.Buttons}>
          <div className={styles.btnBack}>
            <Button
              variant="grayForm"
              onClick={() => router.push('/system/home')}
            >
              Regresar
            </Button>
          </div>
          <div className={styles.btnContinue}>
            <Button
              variant="blackForm"
              onClick={() => router.push('/system/home/ticket-type')}
            >
              Continuar
            </Button>
          </div>
        </div>
      </div>
    </FormHookProvider>
  )
}
