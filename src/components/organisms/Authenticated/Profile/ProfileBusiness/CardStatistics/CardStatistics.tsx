import React, { ReactNode, memo } from 'react'
import styles from './CardStatistics.module.scss'
import Doughnut from '@/components/molecules/GraphicPie/GraphicPie'
import InputText from '@/components/molecules/InputText/InputText'

interface ComponentProps {
  className?: string
  children?: ReactNode
  title?: string
  doughnutValues?: number[]
  doughnutLabels?: string[]
  text?: string
}

export const CardStatistics: React.FC<ComponentProps> = memo(({
  className,
  children,
  title,
  doughnutValues,
  doughnutLabels,
  text
}) => {

  return (
    <div className={`${styles.card} ${className}`}>
      <div className={styles.title}>{title}</div>
      <div className={styles.container}>
        <div className={styles.subcontainer}>
          <div className={styles.calendario}>
            <InputText
              name=''
              type='date'
              placeholder='Día/Mes/Año'
              variant='secondary'
            />
          </div>
          <div className={styles.textinput}>
            <p>{text}</p>
          </div>
        </div>
        <div className={styles.graphic}>
          <Doughnut
            options={
              {
                plugins: {
                  legend: {
                    labels: {
                      usePointStyle: true
                    },
                    position: 'right'
                  },
                }
              }
            }
            values={doughnutValues || [20, 50, 40]}
            labels={doughnutLabels || ['hola', 'carro', 'llll']}
            className={styles.chartCustom}
          />
        </div>
      </div>
    </div>
  )
})

CardStatistics.displayName = 'CardStatistics'