'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { useForm } from 'react-hook-form'
import { TabView, TabPanel } from 'primereact/tabview'
import FormHookProvider from '@/components/layouts/Form/FormHookProvider/FormHookProvider'
import InputText from '@/components/molecules/InputText/InputText'
import Card from '@/components/molecules/Card/Card'
import Button from "@/components/molecules/Button/Button/Button"
import styles from './Tickets.module.scss'
import ryan_gosling from '@/../public/images/icons/ryan_gosling.jpg'
import search from '@/../../public/images/icons/search.svg'
import bg1 from '@/../../public/images/Home/AdminStaff/bg1.jpeg'
import bg2 from '@/../../public/images/Home/AdminStaff/bg2.webp'
import ticketimg from '@/../../public/images/Home/AdminStaff/ticketsimg.png'

const objinfo = {
  image: ryan_gosling,
  descriptiontitle: 'IBF Boca de iguanas',
  date: {
    dateStart: 'Inicia 07/08/2022',
    dateEnd: 'Finaliza 07/08/2022',
    hourStart: 'Hora 12:00 P.M.',
    hourEnd: 'Hora 16:00 P.M.'
  },
  infoUser: {
    name: 'Evelyn Miselotti',
    email: 'email@mail.com',
    rol: 'Roll : Empresario secundario'
  }
}

const adsItems = [
  {
    background: bg1,
    title: '¿No sabes como editar tus fotos?',
    description: 'Compra un paquete que te sube tus fotos con fondo blanco o transparente',
    buttonText: 'Comprar',
    buttonLink: ''
  },
  {
    background: bg2,
    title: '¿Tienes más de 50 productos?',
    description: 'Amplia tu espacio de productos, servicios, subastas o bolsas de compra con alguno de nuestros paquetes',
    buttonText: 'Comprar',
    buttonLink: ''
  }
]

const ticketinfo = {
  image: ticketimg,
  price: 1800,
  limit: 10
}

const USDollar = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
})

const tabs = [
  {
    id: 0,
    label: 'Personal'
  },
  {
    id: 1,
    label: 'Empresarial'
  }
]

export default function Tickets() {

  const [totalItems, setTotalItems] = useState(1)
  const [activeIndex, setActiveIndex] = useState(1)
  const router = useRouter()
  const methods = useForm()

  const onSubmit = () => { }

  const changeItems = (type: any) => {
    let total = totalItems;
    if (type === 'add' && totalItems <= ticketinfo.limit) {
      total = total + 1;
    } else if (type === 'subst' && totalItems > 1) {
      total = total - 1;
    }
    setTotalItems(total);
  }

  return (
    <FormHookProvider methods={methods} onSubmit={onSubmit}>
      <div className={`${styles.AdminStaff} ${styles.noScroll}`}>
        <Card className={styles.CardProfile}>
          <div className={styles.header}>
            <div className={styles.leffdiv}>
              <div className={styles.infodate}>
                <div className={styles.picture}>
                  <Image src={objinfo.image} alt="" />
                </div>
                <div className={styles.description}>
                  <p className={styles.titlep}>{objinfo.descriptiontitle}</p>
                  <div className={styles.dates}>
                    <div>
                      <p>{objinfo.date.dateStart}</p>
                      <p>{objinfo.date.dateEnd}</p>
                    </div>
                    <div>
                      <p>{objinfo.date.hourStart}</p>
                      <p>{objinfo.date.hourEnd}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.divsearch}>
                <p className={styles.title}>Venta de boletos</p>
                <div>
                  <InputText
                    name='search_tickets'
                    label=''
                    // value={search}
                    // onChange={(e) => setSearch(e.target.value)}
                    placeholder='Buscar boletos'
                    icon={search}
                    iconPosRight={true}
                    variant='search'
                    height='50px'
                  />
                </div>
              </div>
            </div>
            <div className={styles.rightdiv}>
              {adsItems.map((item, key) => {
                return (
                  <div
                    key={key}
                    className={styles.divadd}
                    style={{
                      background: `linear-gradient(45deg,rgba(0, 0, 0, 0.30),rgba(0, 0, 0, 0.30) ), url(${item?.background?.src}) no-repeat`
                    }}
                  >
                    <div>
                      <h2>{item.title}</h2>
                    </div>
                    <div>
                      <p>{item.description}</p>
                    </div>
                    <div className={styles.btndiv}>
                      <Button
                        variant="blackForm"
                        //onClick={saveDatas}
                        borderRadius='10px'
                      >
                        {item.buttonText}
                      </Button>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
          <div className={styles.tablediv}>
            <div className={styles.headertable}>
              <div>
                <h2><span>Precio:</span> {USDollar.format(ticketinfo.price)}</h2>
              </div>
              <div>
                <h2>Total a cobrar: {USDollar.format(totalItems * ticketinfo.price)}<label> MXN</label></h2>
              </div>
            </div>
            <div className={styles.content}>
              <div className={styles.divticketimg}>
                <Image src={ticketinfo?.image} alt='' />
              </div>
              <div className={styles.divtotalitems}>
                <div className={styles.cartsum}>
                  <div
                    className={styles.subsitems}
                    onClick={() => changeItems('subst')}
                  >
                    -
                  </div>
                  <div className={styles.totalitems}>
                    {totalItems}
                  </div>
                  <div
                    className={styles.additems}
                    onClick={() => changeItems('add')}
                  >
                    +
                  </div>
                </div>
                <div className={styles.contenttabs}>
                  {tabs &&
                    <div className={styles.tabsBtns}>
                      {tabs.map((e) => {
                        return (
                          <div key={e.id} className={styles.tabs_ticket}>
                            <Button type='button' onClick={() => setActiveIndex(parseInt(e.id.toString()))} className={`${activeIndex === parseInt(e.id.toString()) && styles.active}`} variant={activeIndex === parseInt(e.id.toString()) ? 'tabActive' : 'tabBtn'} height='35px'>
                              {e.label}
                            </Button>
                          </div>
                        )
                      })}
                    </div>}
                  <div>
                    <TabView activeIndex={activeIndex} onTabChange={(e) => setActiveIndex(e.index)}>
                      <TabPanel header="Header I">
                        <p className="card">
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                      </TabPanel>
                      <TabPanel header="Header II">
                        <p className="card">
                          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
                          eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo
                          enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui
                          ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.
                        </p>
                      </TabPanel>
                      <TabPanel header="Header III">
                        <p className="card">
                          At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti
                          quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in
                          culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.
                          Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.
                        </p>
                      </TabPanel>
                    </TabView>
                  </div>
                </div>
              </div>
              <div className={styles.divoptionsticket}>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </FormHookProvider>
  )
}
