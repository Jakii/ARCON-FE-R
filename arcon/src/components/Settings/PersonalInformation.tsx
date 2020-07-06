import React, { useState, useContext } from "react";
import {
  IonModal,
  IonButton,
  IonContent,
  IonLabel,
  IonGrid,
  IonRow,
  IonInput,
  IonCol,
  IonCard,
  IonImg,
} from "@ionic/react";
import "./../GoalsDetail/GoalsDetail.css";
import { UserContext } from "../../App";

type PersonalInformationProps = {
  ShowModal: any;
  SetShowModal: Function;
};

const PersonalInformation: React.FC<PersonalInformationProps> = ({
  ShowModal,
  SetShowModal,
}) => {
  const user = useContext(UserContext);
  return (
    <IonModal isOpen={ShowModal}>
      <IonContent>
        <br/>
      <IonImg
          src="../../assets/settingProfile.png"
          style={{ height: "250px", width: "100%" }}

        />
        <IonCard>
          <IonGrid>
            <br />
            <br />
            <IonLabel class="title" color="purple">
              Información Personal
            </IonLabel>
            <br />
            <br />
            <IonRow>
              <IonCol size="5">
                <IonLabel class="subtitleInformation">Usuario: </IonLabel>
              </IonCol>
              <IonCol size="6">
                <IonLabel class="subtitle">{user.userInfo.userName}</IonLabel>
              </IonCol>
            </IonRow>

            <IonRow>
              <IonCol size="5">
                <IonLabel class="subtitleInformation">Nombre: </IonLabel>
              </IonCol>
              <IonCol size="6">
                <IonLabel class="subtitle">{user.userInfo.name}</IonLabel>
              </IonCol>
            </IonRow>

            <IonRow>
              <IonCol size="5">
                <IonLabel class="subtitleInformation">Correo Electronico: </IonLabel>
              </IonCol>
              <IonCol size="7">
                <IonLabel class="subtitle">{user.userInfo.email}</IonLabel>
              </IonCol>
            </IonRow>

            <IonRow>
              <IonCol size="5">
                <IonLabel class="subtitleInformation">Fecha de nacimiento: </IonLabel>
              </IonCol>
              <IonCol size="6">
                <IonLabel class="subtitle">{user.userInfo.birthDate}</IonLabel>
              </IonCol>
            </IonRow>

            {/* <IonRow>
            <IonCol size="5">
              <IonLabel class="subtitleInformation">Phone Number: </IonLabel>
            </IonCol>
            <IonCol size="5">
              <IonLabel class="subtitle">{user.userInfo.phoneNumber}</IonLabel>
            </IonCol>
          </IonRow> */}
          </IonGrid>
        </IonCard>
      </IonContent>
      <IonButton onClick={() => SetShowModal(false)} color="lightblue">
        Regresar
      </IonButton>
    </IonModal>
  );
};

export default PersonalInformation;
