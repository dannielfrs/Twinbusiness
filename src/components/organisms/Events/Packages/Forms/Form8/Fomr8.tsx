import React, { Dispatch, SetStateAction, useContext, useEffect, useState } from "react";
import { useForm, SubmitHandler, FieldValues } from "react-hook-form"

import Checkbox from "@/components/molecules/Checkbox/Checkbox";
import InputText from "@/components/molecules/InputText/InputText";
import { InputTextArea } from '@/components/molecules/InputTextArea/InputTextArea';

import { inputTex1, inputTex2, inputTex3 } from './constants';

import calendarLogo from '@/../../public/images/icons/calendar.svg';
import plusLogo from '@/../../public/images/icons/plus.svg';
import styles from './styles.module.scss';
import BackBlackCss from "@/components/molecules/BackBlackCss/BackBlackCss";
import FormHookProvider from "@/components/layouts/Form/FormHookProvider/FormHookProvider";
// import { useForm } from "react-hook-form";
import Button from "@/components/molecules/Button/Button/Button";
import { Step8Context } from '@/context/authenticated/events/register/createEvent/step8/Step8Context'


interface Form8Props {
  onClickBack: () => void
}

const Form8: React.FC<Form8Props> = ({ onClickBack }) => {
  const { loading, data, eventTypeOptions, setStep8 } = useContext(Step8Context)
  const [pay, setPay] = useState(false);
  const [free, setFree] = useState(false);
  const [vip, setVip] = useState(false);
  const [payId, setPayId] = useState('');
  const [freeId, setFreeId] = useState('');
  const [vipId, setVipId] = useState('');
  const methods = useForm();

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setStep8(data, pay, free, vip, payId, freeId, vipId);
  }

  useEffect(() => {
    if (Object.keys(data).length > 0) {
      for (const propertyName in data) {
        methods.setValue(propertyName, data[propertyName])
        if(propertyName === 'salePoints'){
          for (const sale in data[propertyName]) {
            switch (data[propertyName][sale].text) {
              case 'Puntos de venta':
                setPay(data[propertyName][sale].selected)
                setPayId(data[propertyName][sale].id)
                break;
              case 'RP´s':
                setFree(data[propertyName][sale].selected)
                setFreeId(data[propertyName][sale].id)
                break;
              case 'Venta por taquilla':
                setVip(data[propertyName][sale].selected)
                setVipId(data[propertyName][sale].id)
                break;
              default:
                break;
            }
          }
        }
      }
    }
  }, [data])

  return (
    <div className={styles.ContForm8}>
      <BackBlackCss>
      <FormHookProvider methods={methods} onSubmit={onSubmit}>
        <div className={styles.Form2}>
          <div className={styles.divtitle}>
            <h2>Condiciones de boletos</h2>
          </div>

          <div className={styles.row1}>
            <div className={styles.inputText}>
              <div>
                <InputText {...inputTex1} />
              </div>
            </div>
          </div>
          <div className={styles.row1}>
            <div className={styles.inputText}>
              <div>
                <InputText {...inputTex2} />
              </div>
            </div>
          </div>
          <div className={styles.row1}>
            <div className={styles.inputText}>
              <div>
                <InputText {...inputTex3} />
              </div>
            </div>
          </div>
          <div className={styles.customLabelSeleccione}>
            <label>Seleccione los puntos de venta que le gustaría activar</label>
          </div>
          <div className={`${styles.row3}`}>
            <div className={`${styles.col} ${styles.divCheckbox}`}>
              <Checkbox
                inputId="salepoint"
                name="salepoint"
                value={pay}
                onChange={() => setPay(pay === false ? true : false)}
                checked={pay === false ? false : true}
                variant="white"
                label="Puntos de venta"
              />
            </div>
            <div className={`${styles.col} ${styles.divCheckbox}`}>
              <Checkbox
                inputId="reps"
                name="reps"
                value={free}
                onChange={() => setFree(free === false ? true : false)}
                checked={free === false ? false : true}
                variant="white"
                label="RP´s"
              />
            </div>
            <div className={`${styles.col} ${styles.divCheckbox}`}>
              <Checkbox
                inputId="taq"
                name="ta"
                value={vip}
                onChange={() => setVip(vip === false ? true : false)}
                checked={vip === false ? false : true}
                variant="white"
                label="Venta por taquilla"
              />
            </div>
          </div>
          <div className={styles.divButtons}>
            <div className={styles.divButtonsAbsolute}>
              <div className={styles.btns}>
                <Button
                    variant="grayForm"
                    //onClick={() => alert('hola')}
                    onClick={onClickBack}
                    height={'10px'}
                    borderRadius={'10px'}
                >Regresar</Button>
              </div>
              <div className={styles.btns}>
                <p style={{fontSize: '16px', textAlign: 'end'}}>Ir a la siguiente sección</p>
                <Button
                    variant="blackForm"
                    borderRadius={'10px'}
                    onClick={methods.handleSubmit(onSubmit)}
                >Continuar</Button>
              </div>
            </div>
          </div>
        </div>
      </FormHookProvider>
      </BackBlackCss>
    </div>
  );
};

export default Form8;