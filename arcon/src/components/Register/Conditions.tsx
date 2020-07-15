import React, { useState } from "react";
import {
  IonModal,
  IonButton,
  IonContent,
  IonLabel,
  IonRow,
} from "@ionic/react";
import "./../../theme/label.css"; 

type ConditionsProps = {
  ShowModal: any;
  SetShowModal: Function;
};

const Conditions: React.FC<ConditionsProps> = ({ ShowModal, SetShowModal }) => {
  return (
    <IonModal isOpen={ShowModal}>
      <IonContent>
        <IonRow>
          <IonLabel color="purple" class="title">
            Términos y Condiciones de uso
          </IonLabel>
        </IonRow>
        <br/>
        <IonRow>
          <IonLabel style={{marginLeft:"10px", marginRight:"10px"}}>
            <strong>INFORMACIÓN RELEVANTE</strong>
          </IonLabel>
        </IonRow>
        <br />
        <IonRow>
          <IonLabel style={{marginLeft:"10px", marginRight:"10px"}}>
            Es requisito necesario para la adquisición de la suscripción que se
            ofrecen en esta aplicación, que lea y acepte los siguientes Términos
            y Condiciones que a continuación se redactan. El uso de nuestros
            servicios, así como la compra de nuestros productos implicará que
            usted ha leído y aceptado los Términos y Condiciones de Uso en el
            presente documento. Todos los productos y/o servicios que son
            ofrecidos por nuestro sitio web pudieran ser creadas, cobradas,
            enviadas o presentadas por una página web tercera y en tal caso
            estarían sujetas a sus propios Términos y Condiciones. En algunos
            casos, para adquirir un producto, será necesario el registro por
            parte del usuario, con ingreso de datos personales fidedignos y
            definición de una contraseña. El usuario puede elegir y cambiar la
            clave para su acceso de administración de la cuenta en cualquier
            momento, en caso de que se haya registrado y que sea necesario para
            la compra de alguno de nuestros productos y/o servicios. ARCON no
            asume la responsabilidad en caso de que entregue dicha clave a
            terceros. Todas las compras y transacciones que se lleven a cabo por
            medio de esta aplicación están sujetas a un proceso de confirmación
            y verificación, el cual podría incluir la verificación de estado de
            los servicios así como validación de la forma de pago, validación de
            la factura (en caso de existir) y el cumplimiento de las condiciones
            requeridas por el medio de pago seleccionado. En algunos casos puede
            que se requiera una verificación por medio de correo electrónico.
          </IonLabel>
        </IonRow>
        <br />
        <IonRow>
          <IonLabel style={{marginLeft:"10px", marginRight:"10px"}}>
            <strong>LICENCIA</strong>
          </IonLabel>
        </IonRow>
        <IonRow>
          <IonLabel style={{marginLeft:"10px", marginRight:"10px"}}>
            ARCON a través de su aplicación concede una licencia para que los
            usuarios utilicen los productos que son vendidos en esta aplicación
            de acuerdo con los Términos y Condiciones que se describen en este
            documento.
          </IonLabel>
        </IonRow>
        <br />
        <IonRow>
          <IonLabel style={{marginLeft:"10px", marginRight:"10px"}}>
            <strong>USO NO AUTORIZADO </strong>
          </IonLabel>
        </IonRow>
        <IonRow>
          <IonLabel style={{marginLeft:"10px", marginRight:"10px"}}>
            En caso de que aplique (para venta de software, templetes, u otro
            producto de diseño y programación) usted no puede colocar uno de
            nuestros productos, modificado o sin modificar, en un CD, sitio web
            o ningún otro medio y ofrecerlos para la redistribución o la reventa
            de ningún tipo.
          </IonLabel>
        </IonRow>
        <br />
        <IonRow>
          <IonLabel style={{marginLeft:"10px", marginRight:"10px"}}>
            <strong>PROPIEDAD</strong>
          </IonLabel>
        </IonRow>
        <IonRow>
          <IonLabel style={{marginLeft:"10px", marginRight:"10px"}}>
            Usted no puede declarar propiedad intelectual o exclusiva a ninguno
            de nuestros productos y/o servicios, modificado o sin modificar.
            Todos los servicios son propiedad de los proveedores del contenido.
            En caso de que no se especifique lo contrario, nuestros productos se
            proporcionan sin ningún tipo de garantía, expresa o implícita. En
            ningún esta compañía será responsables de ningún daño incluyendo,
            pero no limitado a, daños directos, indirectos, especiales,
            fortuitos o consecuentes u otras pérdidas resultantes del uso o de
            la imposibilidad de utilizar nuestros productos.
          </IonLabel>
        </IonRow>
        <br />
        <IonRow>
          <IonLabel style={{marginLeft:"10px", marginRight:"10px"}}>
            <strong>COMPROBACIÓN ANTIFRAUDE </strong>
          </IonLabel>
        </IonRow>
        <IonRow>
          <IonLabel style={{marginLeft:"10px", marginRight:"10px"}}>
            La compra del cliente puede ser aplazada para la comprobación
            antifraude. También puede ser suspendida por más tiempo para una
            investigación más rigurosa, para evitar transacciones fraudulentas.
          </IonLabel>
        </IonRow>
        <br />
        <IonRow>
          <IonLabel style={{marginLeft:"10px", marginRight:"10px"}}>
            <strong>PRIVACIDAD </strong>
          </IonLabel>
        </IonRow>
        <IonRow>
          <IonLabel style={{marginLeft:"10px", marginRight:"10px"}}>
            ARCON garantiza que la información personal que usted envía cuenta
            con la seguridad necesaria. Los datos ingresados por usuario o en el
            caso de requerir una validación de los pedidos no serán entregados a
            terceros, salvo que deba ser revelada en cumplimiento a una orden
            judicial o requerimientos legales. La suscripción a boletines de
            correos electrónicos publicitarios es voluntaria y podría ser
            seleccionada al momento de crear su cuenta. ARCON reserva los
            derechos de cambiar o de modificar estos términos sin previo aviso.
          </IonLabel>
        </IonRow>
        <br />
      </IonContent>
      <IonButton onClick={() => SetShowModal(false)} color="lightblue">
        Regresar
      </IonButton>
    </IonModal>
  );
};

export default Conditions;
