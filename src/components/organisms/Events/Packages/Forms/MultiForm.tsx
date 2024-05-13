'use client'

import { useState, useContext } from 'react'
import ModalWindow from './ModalWindow/ModalWindow'
import styles from './styles.module.scss'
import Form1 from './Form1/Form1'
import Form2 from './Form2/Form2'
import Form3 from './Form3/Form3'
import Form4 from './Form4/Form4'
import Form5 from './Form5/Form5'
import Form6 from './Form6/Form6'
import Form7 from './Form7/Form7'
import Form8 from './Form8/Fomr8'
import Form9 from './Form9/Form9'
import Form11 from './Form11/Form11'
import Form12 from './Form12/Form12'
import Form14 from './Form14/Form14'
import Form10 from './Form10/Form10'
import Form13 from './Form13/Form13'
import Sidebar from '@/components/organisms/Home/Sidebar/Sidebar'
import ShowCase from './ShowCase/ShowCase'
import Form16 from './Form16/Form16'
import { WebEventProvider } from '@/context/authenticated/events/webEvent'
import { CompanyStepContext } from '@/context/authenticated/events/register/companyStep/CompanyStepContext'
import { EventStepContext } from '@/context/authenticated/events/register/createEvent/eventStep/EventStepContext'
import { Step1Provider } from '@/context/authenticated/events/register/createEvent/step1/Step1Provider'
import { Step8Provider } from '@/context/authenticated/events/register/createEvent/step8/Step8Provider'
import { Step9Provider } from '@/context/authenticated/events/register/createEvent/step9/Step9Provider'
import { Step10Provider } from '@/context/authenticated/events/register/createEvent/step10/Step10Provider'
import { Step11Provider } from '@/context/authenticated/events/register/createEvent/step11/Step11Provider'
import { Step15Provider } from '@/context/authenticated/events/register/createEvent/step15/Step15Provider'
import { Step16Provider } from '@/context/authenticated/events/register/createEvent/step16/Step16Provider'
import { ModalWindowProvider } from '@/context/authenticated/events/register/createEvent/modalWindow/ModalWindowProvider'
import { TicketStep1Provider } from '@/context/authenticated/events/register/createEvent/zone/ticket/TicketStep1Provider'
import { ZoneProvider } from '@/context/authenticated/events/register/createEvent/zone/zone/ZoneProvider'
import { TicketPreviewProvider } from '@/context/authenticated/events/register/createEvent/zone/ticketPreview/TicketPreviewProvider'
import { TicketListProvider } from '@/context/authenticated/events/register/createEvent/zone/ticketList/TicketListProvider'
import { MapSponsorsProvider } from '@/context/authenticated/events/register/createEvent/mapSponsors/MapSponsorsProvider'
import { PromoterContactsProvider } from '@/context/authenticated/events/register/promoterContacts/PromoterContactsProvider'
import Form15 from './Form15/Form15'
import { SponsorsProvider } from '@/context/authenticated/events/register/createEvent/sponsors/SponsorsProvider'
import { FormSponsors } from '@/components/organisms/Authenticated/FormSponsors/FormSponsors'
import { InternalMapProvider } from '@/context/authenticated/events/register/createEvent/internalMap/InternalMapProvider'

export const MultiForm = () => {
  //
  const { activeStepCompany, backStepCompany, backToCompany } = useContext(CompanyStepContext)
  const { activeStep, backStepEvent, backStep, backStep3, setFrom15 } = useContext(EventStepContext)
  const [step, setStep] = useState(1)
  const [modalWindow, setModalWindow] = useState('')
  const [showInternalMapUpload, setShowInternalMapUpload] = useState(false)
  const [showInternalMapSelect, setShowInternalMapSelect] = useState(false)
  const [showSponsors, setShowSponsors] = useState(false)

  const back2 = () => {
    setFrom15(true)
    backStepEvent()
    backStepCompany()
  }

  const backMultiform = () => {
    if (showInternalMapUpload) setShowInternalMapUpload(false)
    else if (showInternalMapSelect) setShowInternalMapSelect(false)
    else if (showSponsors) setShowSponsors(false)
    else if (activeStepCompany === 1 || activeStepCompany === 2 || activeStepCompany === 3 || activeStepCompany === 4) backStepCompany()
    else if (activeStep === 5) backToCompany()
    else if (activeStep === 6) backStepEvent()
    else if (activeStep === 7 || activeStep === 8 || activeStep === 9 || activeStep === 11 || activeStep === 12 || activeStep === 14) backStep()
    else if (activeStep === 10 || activeStep === 13) backStep3()
    else if (activeStep === 15) back2()
    else if (activeStep === 16) {
      backStep()
      backStepCompany()
    }
  }

  return (
    <WebEventProvider>
      <div className={styles.MultiForm}>
        <Sidebar onClick={backMultiform} />
        <div className={`${styles.base} ${modalWindow === '' ? styles.basewidth50 : styles.basewidthfull}`}>
          {modalWindow === '' &&
            <div className={`${styles.right} ${step !== 1 ? styles.marginSmall : styles.marginBig}`}>
              <div>
                <div className={styles.formCreateAccount}>
                  {activeStepCompany === 1 &&
                    <Form1 onClickBack={backStepCompany} />}
                  {activeStepCompany === 2 &&
                    <Form2 onClickBack={backStepCompany} />}
                  {activeStepCompany === 3 &&
                    <PromoterContactsProvider>
                      <Form3 onClickBack={backStepCompany} />
                    </PromoterContactsProvider>}
                  {activeStepCompany === 4 &&
                    <Form4 onClickBack={backStepCompany} />}
                  {activeStep === 5 &&
                    <Step1Provider>
                      <Form5 onClickBack={backToCompany} />
                    </Step1Provider>}
                  {activeStep === 6 &&
                    <Step9Provider>
                      <Form9 onClickBack={backStepEvent} />
                    </Step9Provider>}
                  {activeStep === 7 &&
                    <ZoneProvider>
                      <Form7 onClickBack={backStep} />
                    </ZoneProvider>}
                  {(activeStep === 8 || activeStep === 9) &&
                    <TicketStep1Provider>
                      {activeStep === 8 &&
                        <Form6 onClickBack={backStep} />}
                      {activeStep === 9 &&
                        <Step8Provider>
                          <Form8 onClickBack={backStep} />
                        </Step8Provider>}
                    </TicketStep1Provider>}
                  {(activeStep === 10 || activeStep === 11 || activeStep === 12) &&
                    <Step10Provider>
                      {activeStep === 10 &&
                        <Form10 onClickBack={backStep3} />}
                      {activeStep === 11 &&
                        <Step11Provider>
                          <Form11 onClickBack={backStep} />
                        </Step11Provider>}
                      {activeStep === 12 &&
                        <TicketPreviewProvider>
                          <Form12 onClickBack={backStep} />
                        </TicketPreviewProvider>}
                    </Step10Provider>}
                  {activeStep === 13 &&
                    <TicketListProvider>
                      <Form13 onClickBack={backStep3} />
                    </TicketListProvider>}
                  {activeStep === 14 &&
                    <MapSponsorsProvider>
                      <Form14
                        setShowInternalMapUpload={setShowInternalMapUpload}
                        setShowInternalMapSelect={setShowInternalMapSelect}
                        setShowSponsors={setShowSponsors}
                        onClickBack={backStep}
                      />
                    </MapSponsorsProvider>}
                  {activeStep === 15 &&
                    <Step15Provider>
                      <ShowCase
                        setStep={setStep}
                        goBack={back2}
                      />
                    </Step15Provider>}
                  {activeStep === 16 &&
                    <Step16Provider>
                      <Form16
                        goBack={() => backStep()}
                        goBackStep={() => backStepCompany()}
                      />
                    </Step16Provider>}
                </div>
              </div>
            </div>}
          {modalWindow !== '' &&
            <ModalWindowProvider>
              <ModalWindow
                type={modalWindow}
                closeModal={setModalWindow}
              />
            </ModalWindowProvider>}
          {showInternalMapUpload &&
            <InternalMapProvider>
              <Form15
                mode='internalMapUpload'
                onHide={() => setShowInternalMapUpload(false)}
              />
            </InternalMapProvider>}
          {showInternalMapSelect &&
            <InternalMapProvider>
              <Form15
                mode='internalMapSelect'
                onHide={() => setShowInternalMapSelect(false)}
              />
            </InternalMapProvider>}
          {showSponsors &&
            <SponsorsProvider>
              <FormSponsors
                onHide={() => setShowSponsors(false)}
              />
            </SponsorsProvider>}
        </div>
      </div>
    </WebEventProvider>
  )
}
