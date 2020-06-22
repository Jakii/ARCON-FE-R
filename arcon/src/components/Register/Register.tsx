import React, { useState } from "react";
import {
  IonModal,
  IonButton,
  IonContent,
  IonLabel,
  IonGrid,
  IonRow,
  IonInput,
  IonItem,
  IonIcon,
  IonTitle,
} from "@ionic/react";
import {personCircleOutline, mailOutline, calendarOutline, callOutline, lockClosedOutline } from "ionicons/icons";
import './Register.css';

type RegisterProps = {
  ShowModal: any;
  SetShowModal: Function;
  Save: Function;
};

const Register: React.FC<RegisterProps> = ({
  ShowModal,
  SetShowModal,
  Save,
}) => {
  
  const save = () => {
   
    SetShowModal(false);
  };
  return (
    <IonModal isOpen={ShowModal}>
        <IonLabel color="purple" class="title">
          Registro
        </IonLabel>
      <IonContent>
        <br />
        <br />
        <br />
        <IonItem>
          <IonIcon icon={personCircleOutline} slot="start" />
          <IonInput
              placeholder="Usuario"
              autofocus={true}
              required
            //   onIonChange={(e) => setName(e.detail.value!)}
            ></IonInput>
        </IonItem>
        <IonItem>
          <IonIcon icon={personCircleOutline} slot="start" />
          <IonInput
              placeholder="Nombres"
              required
            //   onIonChange={(e) => setName(e.detail.value!)}
            ></IonInput>
        </IonItem>
        <IonItem>
          <IonIcon icon={personCircleOutline} slot="start" />
          <IonInput
              placeholder="Apellidos"
              required
            //   onIonChange={(e) => setName(e.detail.value!)}
            ></IonInput>
        </IonItem>
        <IonItem>
          <IonIcon icon={mailOutline} slot="start" />
          <IonInput
              placeholder="Email"
              type="email"
              required
            //   onIonChange={(e) => setName(e.detail.value!)}
            ></IonInput>
        </IonItem>
        <IonItem>
          <IonIcon icon={calendarOutline} slot="start" />
          <IonInput
              placeholder="Fecha de Nacimiento"
              type="date"
              required
            //   onIonChange={(e) => setName(e.detail.value!)}
            ></IonInput>
        </IonItem>
        <IonItem>
          <IonIcon icon={callOutline} slot="start" />
          <IonInput
              placeholder="Número de teléfono"
              type="number"
              required
            //   onIonChange={(e) => setName(e.detail.value!)}
            ></IonInput>
        </IonItem>
        <IonItem>
          <IonIcon icon={lockClosedOutline} slot="start" />
          <IonInput
              placeholder="Contraseña"
              type="password"
              required
            //   onIonChange={(e) => setName(e.detail.value!)}
            ></IonInput>
        </IonItem>
        <IonItem>
          <IonIcon icon={lockClosedOutline} slot="start" />
          <IonInput
              placeholder="Confirmar Contraseña"
              type="password"
              required
            //   onIonChange={(e) => setName(e.detail.value!)}
            ></IonInput>
        </IonItem>
      </IonContent>
      <IonButton onClick={() => save()} color="green">
        Guardar
      </IonButton>
      <IonButton onClick={() => SetShowModal(false)} color="lightblue">
        Regresar
      </IonButton>
    </IonModal>
  );
};

export default Register;
