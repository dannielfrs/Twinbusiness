'use client'

import { useContext, useEffect, useState } from 'react'
import { useForm, SubmitHandler, FieldValues } from "react-hook-form"
import styles from './Form13.module.scss'
import Card from '@/components/molecules/Card/Card'
import imageSearch from '@/../public/images/icons/search.svg'
import InputText from '@/components/molecules/InputText/InputText'
import Button from '@/components/molecules/Button/Button/Button'
import Ticket from '../Ticket/Ticket'
import FormHookProvider from '@/components/layouts/Form/FormHookProvider/FormHookProvider'
import { TicketListContext } from '@/context/authenticated/events/register/createEvent/zone/ticketList/TicketListContext'
import { EventStepContext } from '@/context/authenticated/events/register/createEvent/eventStep/EventStepContext'

interface ComponentProps {
  onClickBack: () => void
}

const Form13: React.FC<ComponentProps> = ({ onClickBack }) => {

  const { loading, data } = useContext(TicketListContext)
  const { setActiveStep } = useContext(EventStepContext)
  const methods = useForm()
  const [ticketsData, setticketsData] = useState([])

  useEffect(() => {
    if (Object.keys(data).length > 0) {
      setticketsData(data.tickets)
    }
  }, [data])

  const onSubmit: SubmitHandler<FieldValues> = () => {
    setActiveStep(14)
  }

  const handleSearch = (value: string) => {
    if (value === '') {
      setticketsData(data.tickets)
    } else {
      const result = data.tickets.filter((item: any) => {
        if (item.ticket_name.toLowerCase().includes(value.toLowerCase())) {
          return item.ticket_name.toLowerCase().includes(value.toLowerCase())
        }
        else if (item.zone_name.toLowerCase().includes(value.toLowerCase())) {
          return item.zone_name.toLowerCase().includes(value.toLowerCase())
        }
      })
      setticketsData(result)
    }
  }

  return (
    <FormHookProvider methods={methods} onSubmit={onSubmit}>
      <div className={styles.TicketTypeList}>
        <Card className={styles.contTypeList}>
          <div className={styles.titles}>
            <p>Lista de tipo de boletos</p>
            <p>Total de boletos: {data.total}</p>
          </div>
          <div className={styles.both}>
            <div className={styles.TextButton}>
            </div>
            <div className={styles.search} style={{ width: '388px' }}>
              <InputText
                name='search'
                label=''
                onChange={(e) => handleSearch(e.target.value)}
                placeholder='Buscar'
                icon={imageSearch}
                iconPosRight
                height='50px'
                variant='basic'
              />
            </div>
          </div>
          <div className={styles.tickets}>
            {ticketsData.map((item: any) => {
              return (
                <div className={styles.ContTicket} key={item.id}>
                  <p className={styles.textGeneral}>{item.general}</p>
                  <Ticket
                    title={item.ticket_name}
                    date={item.date}
                    door={item.port_int}
                    zone={item.zone_name}
                    hourStart={item.start_time}
                    endHour={item.end_time}
                    image={item.image.url}
                    dateStart={item.date}
                    dateEnd={item.dateEnd}
                  />
                </div>
              )
            })}
          </div>
        </Card>
        <div className={styles.divButtons}>
          <div className={styles.divButtonsAbsolute}>
            <div className={styles.btns}>
              <Button
                type='button'
                variant="grayForm"
                onClick={onClickBack}
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
  )
}

export default Form13
