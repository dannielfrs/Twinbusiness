import React, { useState, useEffect, useRef } from "react";

import Button from "@/components/molecules/Button/Button/Button";

import editimg from '@/../public/images/Events/editar@2.png';
import deleteimg from '@/../public/images/Events/eliminar@2.png';


import styles from './styles.module.scss';
import InputText from "@/components/molecules/InputText/InputText";
import plusLogo from '@/../../public/images/icons/plus.svg';
import Image from "next/image";
import FormHookProvider from "@/components/layouts/Form/FormHookProvider/FormHookProvider";
import { useForm } from "react-hook-form";

interface ModalContentType2Props {
  title?: string;
  buttonAdd?: string;
  subTitle?: string;
  list?: any;
}

const ModalContentType3: React.FC<ModalContentType2Props> = (props) => {
  const methods = useForm();
  const onSubmit = () => {
    
  }
  const [newElement, setNewElement] = useState(false);
  const [valueElement, setValueElement] = useState('');
  const [rows, setRows] = useState([{ name: "", quantity: "" }]);
  const {
    title,
    buttonAdd,
    list,
    subTitle
  } = props;
  
  const addRow = () => {
    setRows([...rows, { name: "", quantity: "" }]);
  };

  const handleInputChange = (index: number, key: string, value: string) => {
    const updatedRows = [...rows];
    
    // Use type assertion to tell TypeScript that key will be either "name" or "quantity"
    (updatedRows[index] as any)[key] = value;
  
    setRows(updatedRows);
  };
  const removeRow = (index: number) => {
    const updatedRows = [...rows];
    updatedRows.splice(index, 1);
    setRows(updatedRows);
  };

  return (
    <div className={styles.ModalContent}>
      <FormHookProvider methods={methods} onSubmit={onSubmit}>
        <div className={styles.pTB15}>{subTitle}</div>
        <div className={styles.divtitle}>
          <h2>{title}</h2>
        </div>
        <div className={styles.divList}>
          <div className={styles.both}>
              <p className={styles.text1}>Cantidad de asientos presenciales en zona 500</p>
              <p className={styles.text2}>Cantidad de asientos presenciales total 1,500</p>
          </div>
          <div className={styles.inputs}>
          {rows.map((row, index) => (
              <div key={index} style={{ display: 'flex', flexDirection: 'row', gap: '20px', alignItems: 'center' }}>
                  <div style={{width: '287px'}}>
                      <InputText
                          required={false}
                          optional={false}
                          variant='bold'
                          name={`name_${index}`}
                          label='Nombre de la fila'
                          placeholder='Ej. H'
                          value={row.name}
                          onChange={(e) =>
                          handleInputChange(index, "name", e.target.value)
                          }
                      />
                  </div>
                  <div style={{width: '287px'}}>
                      <InputText
                          required={false}
                          optional={false}
                          variant='bold'
                          name={`quantity_${index}`}
                          label='Cantidad'
                          placeholder='Max. 250'
                          value={row.quantity}
                          onChange={(e) =>
                          handleInputChange(index, "quantity", e.target.value)
                          }
                      />
                  </div>
                {rows.length > 1 && (
                  <div className={styles.delete} onClick={() => removeRow(index)}>
                      <Image alt="" src={deleteimg}/>
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className={styles.NewRow} onClick={addRow}>
              <div className={styles.image}>
              <Image alt="" src={plusLogo} />
              </div>
              <label>Agregar filas</label>
          </div>
        </div>
        {newElement &&
          <>
            <div className={styles.savediv}>
              <div style={{
                marginTop: '10px', width: '30%', position: 'relative',
                left: '70%'
              }}>
                <Button
                  variant='third'
                  height='35px'
                  // onClick={saveItem}
                  borderRadius="10px"
                >Guardar</Button>
              </div>
            </div>
          </>
        }
      </FormHookProvider>
    </div>
  );
};

export default ModalContentType3;