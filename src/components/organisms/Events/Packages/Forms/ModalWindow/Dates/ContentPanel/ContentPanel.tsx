import React, { useState } from "react";
import { TabView, TabPanel } from 'primereact/tabview';
import Button from "@/components/molecules/Button/Button/Button";
import InputText from '@/components/molecules/InputText/InputText'
import search from '@/../public/images/icons/search.svg';
import styles from './styles.module.scss';

interface ContentPanelProps {
  terms?: string;
  setTerms?: any;
  privacity?: string;
  setPrivacity?: any;
}

interface Item {
  id: number;
  value: string;
}

const ContentPanel: React.FC<ContentPanelProps> = (props) => {
  const {
    terms,
    setTerms,
    privacity,
    setPrivacity,
  } = props;
  const array: any = [];
  const [listNews, setListNews] = useState(array);

  const handleAddItem = () => {
    const newArray = listNews;
    newArray.push({
      id: listNews.length + 1,
      value: ''
    });
    setListNews([...newArray]);
  }

  return (
    <div className={styles.Panel}>
      <div className={styles.row2}>
        <div>
          <h1>Nombre del evento</h1>
        </div>
        <div>
          <h1>Fechas de eventos recurrentes</h1>
        </div>
      </div>
      <div className={styles.row1}>
        <InputText {...{
          label: '',
          name: 'eventnamelocation',
          placeholder: 'Festival de taquilla',
          required: false,
          variant: 'white',
          height: '60px'
        }} />
      </div>
      <div className={styles.rowEnterEvent}>
        <div>
          <h1>Ingresar fecha de eventos recurrentes</h1>

          <div className={styles.rowDates}>
            <div className={styles.divLabel}>
              <label>Fecha inicia</label>
            </div>

            <div className={styles.inputCustom}>
              <div className={styles.rowInput}>
                <div></div>
                <label>00 / </label>
                <input />

              </div>
            </div>
          </div>

          <div className={styles.rowDates}>
            <div className={styles.divLabel}>
              <label>Fecha finaliza</label>
            </div>

            <div className={styles.inputCustom}>
              <div className={styles.rowInput}>
                <div></div>
                <label>00 / </label>
                <input />

              </div>
            </div>
          </div>
        </div>
        <div>
          <div className={styles.hoursdiv}>
            <label>Las fechas seleccionadas la podrás editar en vitrina</label>
          </div>
          <div className={styles.rowDates}>
            <div className={styles.divLabel}>
              <label>Hora de Inicio</label>
            </div>

            <div className={styles.inputCustom}>
              <div className={styles.rowInput}>
                <div></div>
                <label>00 / </label>
                <input />

              </div>
            </div>
          </div>
          <div className={styles.rowDates}>
            <div className={styles.divLabel}>
              <label>Hora de Finalización</label>
            </div>

            <div className={styles.inputCustom}>
              <div className={styles.rowInput}>
                <div></div>
                <label>00 / </label>
                <input />

              </div>
            </div>
          </div>
        </div>
      </div>

      {!!listNews?.length && listNews.map((item: any) => {
        return (
          <div key={item?.id} className={styles.rowEnterEvent}>
            <div>
              <h1>Ingresar fecha de eventos recurrentes</h1>

              <div className={styles.rowDates}>
                <div className={styles.divLabel}>
                  <label>Fecha inicia</label>
                </div>

                <div className={styles.inputCustom}>
                  <div className={styles.rowInput}>
                    <div></div>
                    <label>00 / </label>
                    <input />

                  </div>
                </div>
              </div>

              <div className={styles.rowDates}>
                <div className={styles.divLabel}>
                  <label>Fecha finaliza</label>
                </div>

                <div className={styles.inputCustom}>
                  <div className={styles.rowInput}>
                    <div></div>
                    <label>00 / </label>
                    <input />

                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className={styles.hoursdiv}>
                <label>Las fechas seleccionadas la podrás editar en vitrina</label>
              </div>
              <div className={styles.rowDates}>
                <div className={styles.divLabel}>
                  <label>Hora de Inicio</label>
                </div>

                <div className={styles.inputCustom}>
                  <div className={styles.rowInput}>
                    <div></div>
                    <label>00 / </label>
                    <input />

                  </div>
                </div>
              </div>
              <div className={styles.rowDates}>
                <div className={styles.divLabel}>
                  <label>Hora de Finalización</label>
                </div>

                <div className={styles.inputCustom}>
                  <div className={styles.rowInput}>
                    <div></div>
                    <label>00 / </label>
                    <input />

                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      })

      }

      <div className={styles.divfooteradd}>
        <div className={styles.row2}>
          <div
            className={styles.addNewElement}
            onClick={handleAddItem}
          >
            <div className={styles.addLabel}>
              <label>+</label>
            </div>
            <label> Agregar fechas recurrentes</label>
          </div>
          <div className={styles.datesdivright}>
            <h1>Fechas totales 3 dias</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentPanel;