import React, { ReactNode } from 'react'
import styles from './Card.module.scss'

interface CardProps {
    className?: string;
    children: ReactNode;
}

export default function Card({ className, children }: CardProps) {
    return(
        <>
          <div className={`${styles.card} ${className}`}>
            {children}
          </div>
        </>
    )
}