import React, { useState } from "react";
import {
  IonModal,
  IonButton,
  IonContent,
  IonLabel,
  IonGrid,
  IonRow,
  IonInput,
  IonCol,
} from "@ionic/react";
import "./../GoalsDetail/GoalsDetail.css";

type PersonalInformationProps = {
  ShowModal: any;
  SetShowModal: Function;
};

const PersonalInformation: React.FC<PersonalInformationProps> = ({
  ShowModal,
  SetShowModal,
}) => {
  return (
    <IonModal isOpen={ShowModal}>
      <IonContent>
        <IonGrid>
          <br />
          <br />
          <IonLabel class="title" color="purple">Información Personal</IonLabel>
          <br />
          <br />
          <IonRow>
            <IonCol size="5">
              <IonLabel class="subtitleInformation">Username: </IonLabel>
            </IonCol>
            <IonCol size="4">
              <IonLabel class="subtitle"></IonLabel>
            </IonCol>
          </IonRow>

          <IonRow>
            <IonCol size="5">
              <IonLabel class="subtitleInformation">Name: </IonLabel>
            </IonCol>
            <IonCol size="4">
              <IonLabel class="subtitle"></IonLabel>
            </IonCol>
          </IonRow>

          <IonRow>
            <IonCol size="5">
              <IonLabel class="subtitleInformation">Email: </IonLabel>
            </IonCol>
            <IonCol size="5">
              <IonLabel class="subtitle"></IonLabel>
            </IonCol>
          </IonRow>

          <IonRow>
            <IonCol size="5">
              <IonLabel class="subtitleInformation">Date of Birth: </IonLabel>
            </IonCol>
            <IonCol size="5">
              <IonLabel class="subtitle"></IonLabel>
            </IonCol>
          </IonRow>

          <IonRow>
            <IonCol size="5">
              <IonLabel class="subtitleInformation">Phone Number: </IonLabel>
            </IonCol>
            <IonCol size="5">
              <IonLabel class="subtitle"></IonLabel>
            </IonCol>
          </IonRow>
        
        </IonGrid>
      </IonContent>
      <IonButton onClick={() => SetShowModal(false)} color="lightblue">
        Regresar
      </IonButton>
    </IonModal>
  );
};

export default PersonalInformation;
