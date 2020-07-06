import React, { useState } from "react";
import {
  IonModal,
  IonButton,
  IonContent,
} from "@ionic/react";
import "./../GoalsDetail/GoalsDetail.css";

type ProfileSettingsProps = {
  ShowModalP: any;
  SetShowModalP: Function;
};

const ProfileSettings: React.FC<ProfileSettingsProps> = ({
  ShowModalP,
  SetShowModalP,
}) => {
  return (
    <IonModal isOpen={ShowModalP}>
      <IonContent>

     </IonContent>
      <IonButton onClick={() => SetShowModalP(false)} color="lightblue">
        Regresar
      </IonButton>
    </IonModal>
  );
};

export default ProfileSettings;
