import React from 'react'
import styles from './CardBuy.module.scss'
import Image from 'next/image'
import { StaticImport } from 'next/dist/shared/lib/get-img-props'
import Button from '@/components/molecules/Button/Button/Button';
import { useRouter } from 'next/navigation';

export default function CardBuy ({image, question, text, showButton, route, textButton}: {image?: string | StaticImport; question?: string, text?: string; showButton?: boolean, route?: string; textButton?: string}) {
    const router = useRouter()
    return(
    <>
      <div className={styles.CardBuy}>
        {image &&
            <Image src={image} alt=''/>
        }
        <div className={styles.contText}>
            <p className={styles.question}>{question}</p>
            <p className={styles.text}>{text}</p>
            {showButton &&
                <div className={styles.button}>
                    <Button variant='primary' height='28px' onClick={() => route && router.push(route)}>
                        {textButton || 'Comprar'}
                    </Button>
                </div>
            }
        </div>
      </div>  
    </>
  )
}
