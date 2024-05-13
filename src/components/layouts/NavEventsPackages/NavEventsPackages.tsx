import React from "react";
import Link from 'next/link'
import styles from './styles.module.scss';

import logo from '@/../public/images/Events/logo_small.png';

interface NavProps {
    icons?: Array<{
        src: any;
        link: string;
        alt: string;
    }>
}

const NavEventsPackages: React.FC<NavProps> = ({ icons }) => {
    return (
        <div className={styles.NavEventsPackages}>
            <Link href={'/'}>
                <img
                    src={logo.src}
                    alt={'logo'}
                    className={styles.logo}
                />
            </Link>
            {icons?.length && icons.map((item, key) => {
                return (
                    <Link href={item.link} key={key}>
                        <img
                            src={item.src}
                            alt={item.alt}
                            className={styles.icon}
                        />
                    </Link>
                )
            })}
            <div className={styles.line} />
        </div>
    );
};

export default NavEventsPackages;