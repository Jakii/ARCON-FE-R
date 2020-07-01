import React, { useState } from "react";
import {
  IonModal,
  IonButton,
  IonContent,
} from "@ionic/react";
import "./../GoalsDetail/GoalsDetail.css";

type ProfileSettingsProps = {
  ShowModal: any;
  SetShowModal: Function;
};

const ProfileSettings: React.FC<ProfileSettingsProps> = ({
  ShowModal,
  SetShowModal,
}) => {
  return (
    <IonModal isOpen={ShowModal}>
      <IonContent>

     </IonContent>
      <IonButton onClick={() => SetShowModal(false)} color="lightblue">
        Regresar
      </IonButton>
    </IonModal>
  );
};

export default ProfileSettings;
