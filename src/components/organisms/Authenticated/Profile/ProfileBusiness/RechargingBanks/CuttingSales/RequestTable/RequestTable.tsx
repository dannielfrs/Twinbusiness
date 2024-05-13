'use client'
import React, { useEffect, useState } from 'react'
import styles from './RequestTable.module.scss'
import Image from 'next/image'
import ryan_gosling from '@/../public/images/icons/ryan_gosling.jpg'
import DataTable from '@/components/molecules/DataTable/DataTable'
import dataTable from '@/services/fake/dataTable'
import { useRouter } from 'next/navigation'
interface Branch {
    name?: string;
    number?: string;
}

export default function RequestTable ({backgroundGray, numberA, backgroundRed, status}: {backgroundGray?: boolean, numberA?: string, backgroundRed?: boolean, status?: string}) {
    const [search, setSearch] = useState('')
    const [branchs, setBranchs] = useState<Branch[]>([]);
    const router = useRouter()
    const dashboardColumns = [
        {
          field: 'name',
          header: '',
          sortable: false,
          w: '80%',
          h: '50px',
          t: 'left'
        },
        {
          field: 'number',
          header: '',
          sortable: true,
          w: '20%',
          h: '50px',
          t: 'right'
        },
      ]
      useEffect(() => {
        const fetchData = async () => {
          const data = await dataTable(5)
          setBranchs(data)
        }
        fetchData()
      }, [])
  return(
    <>
      <div className={styles.RequestTable}>
        <div className={styles.header}>
            <div className={styles.contLeft}>
                <div className={styles.ImageProfile}>
                    <Image src={ryan_gosling} alt=''/>
                </div>
                <div className={styles.contInfo}>
                    <p className={styles.name}>Ryan Gosling</p>
                    <p className={styles.email}>ryan@twin.com</p>
                </div>
            </div>
            <div className={styles.contRight}>
                <p className={styles.title}>Cargo: Banco de recargas 01</p>
                <div className={styles.date}>
                    <p>Hora inicio: 09:00a.m.</p>
                    <p>Hora cierre: 6:00p.m.</p>
                </div>
            </div>
        </div>
        <div className={`${styles.red} ${backgroundRed ? styles.red : styles.greenStatus}`}>
            <p className={styles.text}>Estatus</p>
            <p className={styles.text2}>{status}</p>
        </div>
        <div className={styles.request}>
            <p>SOLICITUD DE ARQUEO DE CAJA</p>
        </div>
        <DataTable
            columns={dashboardColumns}
            data={branchs}
            loading={false}
            selectionMode='single'
            variant='secondary'
            search={search}
        />
        <div className={`${styles.gray} ${backgroundGray ? styles.gray : styles.green}`}>
            <p className={styles.text}>Arqueos registrados</p>
            <p className={styles.number}>{numberA}</p>
        </div>
      </div>  
    </>
  )
}