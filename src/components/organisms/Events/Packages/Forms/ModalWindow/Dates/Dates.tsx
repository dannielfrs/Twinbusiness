import React, { useState } from "react";
import { TabView, TabPanel } from 'primereact/tabview';
import Button from "@/components/molecules/Button/Button/Button";
import ContentPanel from "./ContentPanel/ContentPanel";
import styles from './styles.module.scss';

interface DatesProps {
  terms?: string;
  setTerms?: any;
  privacity?: string;
  setPrivacity?: any;
}

const tabs = [
  {
    id: 0,
    label: 'Evento presencial'
  },
  {
    id: 1,
    label: 'Evento virtual'
  },
];

const Dates: React.FC<DatesProps> = (props) => {
  const {
    terms,
    setTerms,
    privacity,
    setPrivacity,
  } = props;

  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <div className={styles.Map}>
      <div className={styles.divconten}>
        <div className={styles.tabsBtns}>
          {tabs.map((e) => {
            return (
              <div key={e.id} className={styles.cont_tabs}>
                <Button type='button' onClick={() => setActiveIndex(parseInt(e.id.toString()))} className={`${activeIndex === parseInt(e.id.toString()) && styles.active}`} variant={activeIndex === parseInt(e.id.toString()) ? 'tabActive' : 'tabBtn'} height='35px'>
                  {e.label}
                </Button>
              </div>
            )
          })}
        </div>
        <TabView activeIndex={activeIndex} onTabChange={(e) => setActiveIndex(e.index)}>
          <TabPanel header='' className={styles.tabPanel}>
            <div className='card'>
              <div className={styles.headtitle}>
                <h1>Evento presencial</h1>
              </div>
              <div>
                <ContentPanel />
              </div>
            </div>
          </TabPanel>
          <TabPanel header='' className={styles.tabPanel}>
            <div className='card'>
              <div className={styles.headtitle}>
                <h1>Evento Virtual</h1>
              </div>
              <div>
                <ContentPanel />
              </div>
            </div>
          </TabPanel>
        </TabView>
      </div>

    </div>
  );
};

export default Dates;