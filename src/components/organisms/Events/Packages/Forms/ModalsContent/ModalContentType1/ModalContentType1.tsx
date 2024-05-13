import React, { useState, useEffect, useRef } from "react";
import { useForm } from 'react-hook-form'

import InputText from '@/components/molecules/InputText/InputText';
import { Dropdown } from "@/components/molecules/Dropdown/Dropdown";
import FormHookProvider from '@/components/layouts/Form/FormHookProvider/FormHookProvider';
import Modal from "@/components/layouts/Modal/Modal";

import editimg from '@/../public/images/Events/editar@2.png';
import deleteimg from '@/../public/images/Events/eliminar@2.png';


import styles from './styles.module.scss';

interface ModalContentType1Props {
  title?: string;
  buttonAdd?: string;
  list?: any;
}

const ModalContentType1: React.FC<ModalContentType1Props> = (props) => {
  const {
    title,
    buttonAdd,
    list
  } = props;

  const [listNews, setListNews] = useState(list);
  const itemsRef: any = useRef([]);


  const handleAddItem = () => {
    const newArray = listNews;
    newArray.push({
      id: listNews.length + 1,
      value: ''
    });
    setListNews([...newArray]);
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
                ref={itemsRef}
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
      <div className={styles.add} onClick={handleAddItem}>
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
    </div>
  );
};

export default ModalContentType1;