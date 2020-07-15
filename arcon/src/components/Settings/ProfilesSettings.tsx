import React, { useState, useContext } from "react";
import {
  IonModal,
  IonButton,
  IonContent,
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonItem,
  IonText,
  IonLabel,
  IonItemSliding,
  IonItemOption,
  IonItemOptions,
  IonNote,
  IonIcon,
} from "@ionic/react";
import { UserContext } from "../../App";
import { Animated } from "react-animated-css";
import "../../theme/label.css";
import "../../theme/button.css";
import { trashOutline } from "ionicons/icons";

type ProfileSettingsProps = {
  ShowModalP: any;
  SetShowModalP: Function;
};

const ProfileSettings: React.FC<ProfileSettingsProps> = ({
  ShowModalP,
  SetShowModalP,
}) => {
  const user = useContext(UserContext);

  const renderProfiles = () => {
    return (
      user.profiles &&
      user.profiles.map((x: any, index: number) => {
        return (
          <Animated
            animationIn="bounceInLeft"
            animationOut="fadeOut"
            isVisible={true}
          >
            <IonItemSliding>
              <IonItem lines="none">
                <p>
                  <IonText color="purple">{index + 1}- </IonText>
                  <IonText className="subtitle">{x.name}</IonText>
                </p>
                <IonIcon icon={trashOutline} slot="end"></IonIcon>
              </IonItem>
              <IonItemOptions>
                <IonItemOption color="danger">Desactivar</IonItemOption>
              </IonItemOptions>
            </IonItemSliding>
          </Animated>
        );
      })
    );
  };
  return (
    <IonModal isOpen={ShowModalP}>
      <IonContent>
        <IonLabel color="purple" className="title">
          Perfiles
        </IonLabel>
        <br />
        <IonLabel className="notes" color="steelblue">
          Desliza para desactivar un perfil
        </IonLabel>
        <br />
        <br />
        <br />
        {renderProfiles()}
      </IonContent>
      <IonButton
        onClick={() => SetShowModalP(false)}
        color="lightblue"
        className="normalButton"
      >
        Regresar
      </IonButton>
    </IonModal>
  );
};

export default ProfileSettings;
