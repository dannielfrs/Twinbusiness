import React from "react";
import Button from "@/components/molecules/Button/Button/Button";
import styles from './styles.module.scss';

interface ModalProps {
    content?: any;
    title?: any;
    buttons?: any;
    show?: boolean;
    size?: string;
    variant?: string
}

const Modal: React.FC<ModalProps> = (props) => {
    const {
        content,
        title,
        buttons,
        show = false,
        size = 'small',
        variant = 'white'
    } = props
    return (
        <div className={`${styles.Modal}`}>
            {show &&
                <>
                    <div className={`${styles.content_modal} ${styles[size]}`}>
                        <div className={`${styles.subcontent_modal}`}>
                            <div className={styles.divtitle}>
                                <h1>{title}</h1>
                            </div>
                            <div className={styles.backgroundColorGray}>
                                {content}
                            </div>
                            <div className={styles.divBtns}>
                                {!!buttons.length && buttons.map((item: any, key: any) => {
                                    return (
                                        <div className={styles.btns} key={key}>
                                            <Button
                                                borderRadius="10px"
                                                variant={item?.type === 'cancel' ? "grayForm" : "blackForm"}
                                                onClick={item?.onclick}
                                            >{item?.label}</Button>
                                        </div>
                                    );

                                })}
                            </div>
                        </div>
                    </div>
                    <div className={styles.capa}></div>
                </>
            }
        </div>
    );
};

export default Modal;