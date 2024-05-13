import React, { useState } from "react";

import Button from "@/components/molecules/Button/Button/Button";
import successLogo from "@/../../public/images/icons/success.png";
//import errorLogo from "@/../../public/images/icons/";

import styles from './styles.module.scss';

interface ModalAlertProps {
    variant?: string;
    closeModal?: any;
    text?: string;
    buttonText?: string;
    style?: any;
}

const ModalAlert: React.FC<ModalAlertProps> = (props) => {
    const {
        variant,
        closeModal,
        text,
        buttonText,
        style
    } = props;


    return (
        <div className={styles.alert}>
            <div className={`${styles.divicon}`} style={style}>
                {variant === 'success' ?
                    <img className={styles.logos} src={successLogo.src} />
                    :
                    <div className={`${styles['icon' + variant]}`}></div>
                }

            </div>
            <div className={styles.divtitle} style={style}>
                <h1>{text}</h1>
            </div>
            <div className={styles.divbtn}>
                <Button
                    variant={"blackForm"}
                    onClick={closeModal}
                    borderRadius="10px"
                    height="20px"
                    fontSize="14px"
                >{buttonText}</Button>
            </div>
        </div>
    );
};

export default ModalAlert;