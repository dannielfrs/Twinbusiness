'use client'

import React from 'react'
import styles from './styles.module.scss'
import Card from '@/components/molecules/Card/Card'
import Button from '@/components/molecules/Button/Button/Button'
import { useRouter } from 'next/navigation'

export const EventTermsAndConditions = () => {
  //
  const router = useRouter()

  return (
    <div className={styles.TermsAndConditions}>
      <Card className={styles.cardTerms}>
        <div className={styles.ButtonClose}>
          <Button variant='terms' className={styles.close} onClick={() => router.back()}>x</Button>
        </div>
        <div className={styles.contTerms}>TÉRMINOS Y CONDICIONES GENERALES Y USO DE PLATAFORMA</div>
        <div className={styles.contText}>
          <p className={styles.text}>Le damos la bienvenida a GRUPO TWINBUSINESS. Si usted visita <b>https://www.twinbusiness.com.mx</b>, usted acepta las presentes condiciones. Favor de leerlas cuidadosamente. Además, cuando usted utilice cualquier servicio actual o futuro de <b>APLICACIONES INTERNACIONALES TWIN, S. DE R.L. DE C.V., o de cualquier de sus empresas filiales,</b> también estará sujeto a los lineamientos y condiciones aplicables anuestros servicios.</p>
          <br />
          <p className={styles.text}>Favor de revisar nuestro Aviso de Privacidad, que también rige su visita a <b>https://www.twinbusiness.com.mx,</b> a fin de comprender nuestras prácticas. El usuario debe leer, entender y aceptar todas las condiciones establecidas en los Términos y Condiciones Generales y en el Aviso de Privacidad, así como en los demás documentos incorporados a los mismos por referencia, previo a su inscripción como Usuario de los servicios ofrecidos y/o prestados por <b>aplicaciones internacionales twin, s. de r.l. de c.v.,</b> en adelante y para efectos del presente contrato <b>TWIN.</b></p>
          <br />
          <p className={styles.text}>El acceso a nuestra <b>plataforma web y/o móvil,</b> así como la utilización directa y/o indirecta bajo cualesquiera situaciones
            de los Servicios ofrecidos, implica la aceptación total, inmediata y expresa por parte del Usuario, de todas las políticas establecidas
            en las condiciones Generales y sus Anexos, y demás políticas y principios incorporados a las mismas por referencia.
          </p>
          <br />
          <p className={styles.text}>Este contrato describe los términos y condiciones generales (en adelante, los Términos y Condiciones Generales) aplicables al uso y aprovechamiento
            de los servicios ofrecidos por <b>APLICACIONES INTERNACIONALES TWIN, S. DE R.L. DE C.V.</b> y el Sitio serán referidos en el Sitio y en estos Términos y Condiciones Generales, indistintamente, como <b>TWIN.</b>
            Cualquier persona que desee acceder y/o usar el sitio o los servicios podrá hacerlo sujetándose a los Términos y Condiciones Generales, junto con todas las demás
            políticas y principios que rigen TWIN y que son incorporados al presente por referencia.
          </p>
          <br />
          <p className={styles.text}><b>CUALQUIER PERSONA FÍSICA O MORAL, QUE DECIDA NO ACEPTAR LA TOTALIDAD DE LOS TÉRMINOS Y CONDICIONES GENERALES, MISMOS QUE TIENEN UN
            CARÁCTER OBLIGATORIO Y VINCULANTE, DEBERÁN ABSTENERSE DE UTILIZAR, APROVECHAR O EXPLOTAR EL SITIO Y/O LOS SERVICIOS, SIN EXISTIR RESPONSABILIDAD LEGAL ALGUNA PARA TWIN.</b>
          </p>
          <br />
          <p className={styles.text}>Los Servicios sólo están disponibles para personas mayores de 18 años y que además tengan plena y total capacidad legal para contratar
            y obligarse. No podrán utilizar los servicios las personas que no tengan esa capacidad, los menores de edad o Usuarios de <b>TWIN</b> que hayan sido suspendidos temporalmente o inhabilitados
            definitivamente. En caso de inscribir un Usuario como Empresa, debe contarse con la capacidad y/o representación legal necesarias tanto para contratar a nombre de tal entidad como para obligarla
            en los términos de este Acuerdo. A efecto de darse de alta como usuario, es obligatorio completar el formulario de inscripción en todos sus campos con datos
            válidos para poder utilizar los servicios que brinda <b>TWIN</b>. El futuro Usuario deberá completarlo con su información personal de manera exacta, precisa y verdadera (en adelante, los Datos Personales) y asume
            el compromiso de actualizar y/o rectificar los Dato Personales conforme resulte necesario.
          </p>
          <br />
          <p className={styles.text}> En caso de que dichos datos no sean veraces o se encuentren desactualizados y ello implique afectación para terceros, <b>TWIN</b> queda totalmente relevado de cualquier responsabilidad comercial o legal al respecto, ya que la información que cada usuario proporcione es responsabilidad exclusiva
            de éste. El usuario autoriza a <b>TWIN</b> a que utilice diversos medios para identificar sus datos personales, asumiendo el Usuario la obligación de revisarlos, rectificarlos y mantenerlos actualizados. <b>TWIN</b> NO se responsabiliza por la certeza y veracidad de los Datos Personales de sus Usuarios.
            Los Usuarios garantizan y responden, en cualquier caso, de la veracidad, exactitud, vigencia y autenticidad de sus Datos Personales.
          </p>
          <br />
          <p className={styles.text}>TWIN se reserva el derecho de solicitar algún comprobante, evidencia y/o dato adicional a efectos de corroborar los Datos Personales, así como de suspender
            temporal o dar de baja definitivamente a aquellos Usuarios cuyos datos no hayan podido ser confirmados, o bien, resulten ser falsos o inexactos. En estos casos
            de inhabilitación, se dará de baja todos los artículos o servicios publicados, así como las ofertas realizadas, sin que ello genere algún derecho a resarcimiento, ni implique responsabilidad ALGUNpara <b>TWIN</b>
          </p>
          <br />
          <p className={styles.text}>
            Complementariamente a lo anterior, en caso de generarse a terceros o a TWIN algún conflicto legal, o derivarse alguna responsabilidad de índole comercial, legal, civil, administrativa,
            mercantil o incluso penal, como resultado de haber proporcionado el Usuario información o datos falsos o inexactos, el propio Usuario será el responsable único y directo de los daños y perjuicios generados
            a terceros o a TWIN, como consecuencia de la falta de veracidad o exactitud en la infromación proporcionada, así como en la calidad y condiciones de entrega de los poductos y servicios ofrecidos. Lo anterior en virtud de que TWIN,
            se limita a brindar una plataforma para que terceros ofrezcan sus productos o servicios, pero la calidad, condiciones y características de éstos últimos; son responsabilidad única y exclusiva
            de quién los ofrece.
          </p>
          <br />
          <p className={styles.text}>El Usuario accederá a su cuenta personal (Cuenta) mediante el ingreso de su nombre de usuario o Seudónimo junto a la clave de seguridad personal elegida (Clave de Seguridad).</p>
          <br />
          <p className={styles.text}>El Usuario se obliga a mantener la confidencialidad de su Clave de Seguridad, pues es el único responsable del mal uso que pudiera darse a ésta última. Ante ello, el solo registro como usuario de <b>TWIN</b> implicará también la aceptación y el conocimiento plenos de los
            Términos y Condiciones Generales de Uso del sitio.
          </p>
          <br />
          <p className={styles.text}>La cuenta es personal, única e instransferible, y está prohibido que un mismo Usuario inscriba o posea más de una Cuenta. En caso de
            que <b>TWIN</b> detecte distintas Cuentas que contengan datos coincidentes o relacionados, podrá cancelar, suspender o inhabilitarlas sin
            responsabilidad legal alguna para <b>TWIN</b>. El Usuario será responsable por todas las operaciones afectuadas en su Cuenta, así como de
            la información, datos, productos y servicios que se ofertan a través de ella, pues el acceso a la misma está restringido al ingreso y uso de
            su Clave de Seguridad, de conocimiento y responsabilidad exclusivos del Usuario.
          </p>
          <br />
          <p className={styles.text}>El Usuario se compromete a notificar a <b>TWIN</b> en forma inmediata y por medio idóneo y fehaciente, a cualquier uso no autorizado de su
            Cuenta, así como el ingreso por terceros no autorizados a la misma. Se aclara que está prohibida la venta, cesión o trasnferencia de la
            Cuenta bajo ningún titulo, conducta que constituye una causal directa de suspensión y en su caso inhabilitación de la cuenta sin
            responsabilidad para <b>TWIN. TWIN</b> se reserva el derecho de rechazar cualquier solicitud de inscripción o de cancelar una inscripción previamente aceptada, sin que esté obligado a comunicar o exponer las razones de su decisión y sinq ue ello genere algún derecho a
            indemnización o resarcimiento, condición que el Usuario acepta con el solo ingreso a la plataforma.
          </p>
        </div>
      </Card>
    </div>
  )
}
