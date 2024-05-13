import { useState } from "react"
import { TabView, TabPanel } from 'primereact/tabview'
import Button from "@/components/molecules/Button/Button/Button"
import ContentPanel from "./ContentPanel/ContentPanel"
import styles from './styles.module.scss'
import { ModalLarge } from "@/components/molecules/ModalLarge/ModalLarge"

interface ComponentProps {
  onHide?: () => any
}

const tabs = [
  { id: 0, label: 'Evento presencial' },
  { id: 1, label: 'Evento virtual' }
]

export const ModalDates: React.FC<ComponentProps> = ({ onHide }) => {

  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <ModalLarge>
      <div className={styles.section}>
        <div className={styles.divconten}>
          <div className={styles.tabsBtns}>
            {tabs.map((e) => {
              return (
                <div key={e.id} className={styles.cont_tabs}>
                  <Button
                    type='button'
                    onClick={() => setActiveIndex(parseInt(e.id.toString()))}
                    className={`${activeIndex === parseInt(e.id.toString()) && styles.active}`}
                    variant={activeIndex === parseInt(e.id.toString()) ? 'tabActive' : 'tabBtn'}
                    height='35px'
                  >
                    {e.label}
                  </Button>
                </div>
              )
            })}
          </div>
          <TabView activeIndex={activeIndex} onTabChange={(e) => setActiveIndex(e.index)}>
            <TabPanel header='' className={styles.tabPanel}>
              <ContentPanel
                title='Evento presencial'
                onHide={onHide}
              />
            </TabPanel>
            <TabPanel header='' className={styles.tabPanel}>
              <ContentPanel
                title='Evento Virtual'
                onHide={onHide}
              />
            </TabPanel>
          </TabView>
        </div>
      </div>
    </ModalLarge>
  )
}
