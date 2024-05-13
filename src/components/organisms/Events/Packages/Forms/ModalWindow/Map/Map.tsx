import React, { useState } from "react";
import InputText from '@/components/molecules/InputText/InputText'
import search from '@/../public/images/icons/search.svg';
import styles from './styles.module.scss';

interface MapProps {
  terms?: string;
  setTerms?: any;
  privacity?: string;
  setPrivacity?: any;
}

const Map: React.FC<MapProps> = (props) => {
  const {
    terms,
    setTerms,
    privacity,
    setPrivacity,
  } = props;

  return (
    <div className={styles.Map}>
      <div className={styles.divheader}>
        <div>
          <h2>SUBIR UBICACIÓN</h2>
          <div>
            <InputText {...{
              label: '',
              name: 'looklocation',
              placeholder: 'Dirección completa o coordenadas',
              required: false,
              variant: 'gray'
            }} />
          </div>
        </div>
        <div></div>
        <div>
          <InputText {...{
            label: '',
            name: 'looklocation',
            placeholder: 'Buscar',
            required: false,
            variant: 'gray'
            }} 
            variant='searchLeft'
            icon={search}
            iconPosRight={true}
            height='40px'
          />
          {/* <InputText
            label=''
            name='search'
            // value={search}
            // onChange={(e) => setSearch(e.target.value)}
            placeholder='Buscar'
            icon={search}
            iconPosRight={true}
            //filter
            variant='search'
            height='50px'
          /> */}
        </div>
      </div>
      <div className={styles.mapdiv}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119499.07582733841!2d-100.42299575000001!3d20.61474415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d35b8fdc5b9255%3A0x97b094aa561b832f!2sSantiago%20de%20Quer%C3%A9taro%2C%20Qro.!5e0!3m2!1ses!2smx!4v1700808673261!5m2!1ses!2smx"
          style={{
            width: '100%',
            height: 'calc(100vh - 450px)'
          }}
          loading="lazy"
        ></iframe>
      </div>

    </div>
  );
};

export default Map;