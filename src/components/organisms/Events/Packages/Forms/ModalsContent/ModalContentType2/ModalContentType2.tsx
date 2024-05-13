import React, { useState, useEffect, useRef } from "react";

import Button from "@/components/molecules/Button/Button/Button";

import editimg from '@/../public/images/Events/editar@2.png';
import deleteimg from '@/../public/images/Events/eliminar@2.png';


import styles from './styles.module.scss';

interface ModalContentType2Props {
  title?: string;
  buttonAdd?: string;
  subTitle?: string;
  list?: any;
}

const ModalContentType2: React.FC<ModalContentType2Props> = (props) => {
  const {
    title,
    buttonAdd,
    list,
    subTitle
  } = props;

  const [listNews, setListNews] = useState(list);
  const [newElement, setNewElement] = useState(false);
  const [valueElement, setValueElement] = useState('');
  const itemsRef: any = useRef([]);

  const saveItem = () => {
    if (valueElement) {
      const newArray = listNews;
      newArray.push({
        id: listNews.length + 1,
        value: valueElement
      });
      setListNews([...newArray]);
      setNewElement(false);
    }
  }

  const handleDeleteItem = (itemDelete: any) => {
    const newArray = listNews.filter((item: any) => item.id !== itemDelete.id);
    setListNews([...newArray]);
  }

  const handleEditItem = (item: any) => {
    itemsRef.current[item?.id].disabled = false;
    itemsRef.current[item?.id].style.background = '#ebebeb';
  }

  const handleOnchangeItem = (item: any, e: any) => {
    itemsRef.current[item?.id].value = e.target.value;
  }

  const handleSaveitem = (item: any) => {
    //itemsRef.current[item?.id].disabled = true;
    //itemsRef.current[item?.id].style.background = '#f8f8fc';
  }

  useEffect(() => {
    itemsRef.current = itemsRef.current.slice(0, listNews.length);
  }, [listNews]);


  return (
    <div className={styles.ModalContent}>
      <div className={styles.pTB15}>{subTitle}</div>
      <div className={styles.divtitle}>
        <h2>{title}</h2>
      </div>
      <div className={styles.divList}>
        {!!listNews.length && listNews.map((i: any, k: any) => {
          return (
            <div className={styles.item} key={k}>

              <input
                className={styles.inputCustom}
                defaultValue={i?.value}
                // ref={el => itemsRef.current[i?.id] = el}
                disabled={i?.value === '' ? false : true}
                onChange={(value) => handleOnchangeItem(i, value)}
                onBlur={() => handleSaveitem(i)}
              />
              <div className={styles.icons} onClick={() => handleEditItem(i)}>
                <img src={editimg?.src} />
              </div>
              <div className={styles.icons} onClick={() => handleDeleteItem(i)}>
                <img src={deleteimg?.src} />
              </div>
            </div>
          )
        })}

      </div>
      <div className={styles.add} onClick={() => setNewElement(true)}>
        <div>
          <div className={styles.numcompaniesdiv}>
            <div
              className={styles.addLabel}
            >
              <label>+</label>
            </div>
            <label className={styles.labelctm}>{buttonAdd}</label>
          </div>

        </div>
      </div>
      {newElement &&
        <>
          <div className={styles.newElement}>
            <input
              className={styles.inputCustom}
              defaultValue={valueElement}
              //ref={el => itemsRef.current[i?.id] = el}
              ref={itemsRef}
              //disabled={i?.value === '' ? false : true}
              onChange={(e) => setValueElement(e?.target?.value)}
            //onBlur={() => handleSaveitem(i)}
            />
          </div>
          <div className={styles.savediv}>
            <div style={{
              marginTop: '10px', width: '22%', position: 'relative',
              left: '70%'
            }}>
              <Button
                variant='third'
                height='20px'
                onClick={saveItem}
                borderRadius="3px"
                fontSize="13px"
                style={{fontSize:"16px", height:'30px', width: '150px', fontWeight:500, borderRadius: 10}}
              >Guardar</Button>
            </div>
          </div>
        </>
      }
    </div>
  );
};

export default ModalContentType2;