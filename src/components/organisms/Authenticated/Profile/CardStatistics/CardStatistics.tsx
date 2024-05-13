import React, { ReactNode } from 'react'
import styles from './CardStatistics.module.scss'
import Doughnut from '@/components/molecules/GraphicPie/GraphicPie';
import InputText from '@/components/molecules/InputText/InputText';

interface CardProps {
    className?: string;
    children?: ReactNode;
    title?: string;
    doughnutValues?: number[]; 
    doughnutLabels?: string[];
}

export default function CardStatistics ({className, children, title, doughnutValues, doughnutLabels }: CardProps) {
    return(
        <>
         <div className={`${styles.card} ${className}`}>
            <div className={styles.title}>{title}</div>
            <div className={styles.container}>
                <div className={styles.calendario}>
                    <InputText
                        name='calendario'
                        type='date'
                        placeholder='Día/Mes/Año' 
                        variant='secondary'
                    />
                </div>
                <div className={styles.graphic}>
                    <Doughnut
                        values={doughnutValues || [20, 50, 40]}
                        labels={doughnutLabels || ['hola', 'carro', 'llll']}
                    />
                </div>
            </div>
         </div>
        </>
    )
}