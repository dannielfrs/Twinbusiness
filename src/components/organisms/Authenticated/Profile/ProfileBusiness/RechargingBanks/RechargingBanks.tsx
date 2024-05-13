'use client'

import { useState } from 'react'
import styles from './RechargingBanks.module.scss'
import Card from '@/components/molecules/Card/Card'
import Image from 'next/image'
import fightclub from '@/../public/images/icons/fightclub.jpg'
import InputText from '@/components/molecules/InputText/InputText'
import imageSearch from '@/../public/images/icons/search.svg'
import { useForm } from 'react-hook-form'
import FormHookProvider from '@/components/layouts/Form/FormHookProvider/FormHookProvider'
import { CardStatistics } from '../CardStatistics/CardStatistics'
import QrCash from './QrCash/QrCash'
import RechargeBalance from './RechargeBalance/RechargeBalance'
import { useRouter } from 'next/navigation'

export default function RechargingBanks () {
  const router = useRouter()
  const methods = useForm()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isModalOpen2, setIsModalOpen2] = useState(false)

  const onSubmit = () => { }

  const openModal = () => {
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  const openModal2 = () => {
    setIsModalOpen2(true)
  }

  const closeModal2 = () => {
    setIsModalOpen2(false)
  }

  return (
    <FormHookProvider methods={methods} onSubmit={onSubmit}>
      <div className={styles.RechargingBanks}>
        <Card className={styles.banks}>
          <p className={styles.title}>Banco recargas de saldo</p>
          <div className={styles.containers}>
            <div className={styles.both}>
              <Card className={styles.cardBank}>
                <div className={styles.Image}>
                  <Image src={fightclub} alt='' />
                </div>
                <div className={styles.right}>
                  <p className={styles.title}>IBF Boca de iguanas</p>
                  <div className={styles.start}>
                    <div className={styles.day}>
                      <p>Inicia</p>
                      <p>07/08/2022</p>
                    </div>
                    <div className={styles.hour}>
                      <p>Hora</p>
                      <p>12:00 PM</p>
                    </div>
                  </div>
                  <div className={styles.start}>
                    <div className={styles.day}>
                      <p>Finaliza</p>
                      <p>07/08/2022</p>
                    </div>
                    <div className={styles.hour}>
                      <p>Hora</p>
                      <p>16:00 PM</p>
                    </div>
                  </div>
                </div>
              </Card>
              <p className={styles.title2}>Banco de recargas</p>
              <div className={styles.search}>
                <InputText
                  label=''
                  name='search'
                  // value={search}
                  // onChange={(e) => setSearch(e.target.value)}
                  placeholder='Buscar recarga de saldo'
                  icon={imageSearch}
                  iconPosRight
                  variant='SearchGray'
                  height='34px'
                  filter={false}
                />
              </div>
            </div>
            <div className={styles.BalanceRecharge} onClick={openModal2}>
              <p>Realizar recarga de saldo</p>
            </div>
            <div className={styles.createQr} onClick={openModal}>
              <p>Crear QR para efectivo</p>
            </div>
          </div>
          <div className={styles.containers2}>
            <div className={styles.left}>
              <div className={styles.buttonBlack}>
                <p>Lista de QRs recargados</p>
              </div>
              <div className={styles.buttonGray} onClick={() => { router.push('/system/profile/businessman/dashboard/recharging-banks/cutting-sales') }}>
                <p>Arqueo, corte y ventas</p>
              </div>
            </div>
            <div className={styles.right}>
              <p>Realizar recarga de saldo</p>
            </div>
          </div>
          <div className={styles.graphics}>
            <div className={styles.grafica1}>
              <CardStatistics
                doughnutLabels={['Arqueo de bancos 25%', 'Arqueo punto de venta 25%', 'Arqueo de RPs 50%', 'Arqueo de taquillas 50%']}
                doughnutValues={[25, 25, 50, 50]}
                title='Estadísticas de bancos de recarga'
                text='Boletos vendidos 1849 pza'
              />
            </div>
            <div className={styles.grafica2}>
              <CardStatistics
                doughnutLabels={['Corte de caja bancos 12%', 'Corte de caja p/venta 10%', 'Corte de caja RPs 3%', 'Corte de caja taquillas 50%']}
                doughnutValues={[12, 10, 3, 50]}
                title='Estadísticas de QRs generados'
                text='Boletaje cortesía 1250 pza'
              />
            </div>
          </div>
        </Card>
        {isModalOpen && (
          <QrCash closeModal={closeModal} />
        )}
        {isModalOpen2 && (
          <RechargeBalance closeModal2={closeModal2} />
        )}
      </div>
    </FormHookProvider>
  )
}
