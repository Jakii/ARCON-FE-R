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
  IonToast,
} from "@ionic/react";
import { UserContext } from "../../App";
import { Animated } from "react-animated-css";
import "../../theme/label.css";
import "../../theme/button.css";
import { trashOutline, appsOutline } from "ionicons/icons";
import API from "./../../axios/axiosAPI.js";

type ProfileSettingsProps = {
  ShowModalP: any;
  SetShowModalP: Function;
};

const ProfileSettings: React.FC<ProfileSettingsProps> = ({
  ShowModalP,
  SetShowModalP,
}) => {
  const user = useContext(UserContext);
  const [showToast, setShowToast]=useState(false);
  const [message, setMessage]=useState("");
  const [profiles,setProfiles]=useState(user.profiles);

  const disableProfile = (e: any, profile: any) => {
    API.post(
      "UserProfile/DisableProfile?profileId=" + profile.userProfileId
    ).then((res) => {
      if (res.status === 200) {
        setMessage(res.data.message);
        setShowToast(true);
        updateProfiles();
      } else {
        setMessage(res.data.message);
        setShowToast(true);
      }
    });
  };

  const updateProfiles=()=>{
    API.get('UserProfile').then(res=>{
      if(res.status===200){
        var filterProfiles=res.data.data.filter((x:any)=>{
          return x.userAppId===user.userInfo.userId&&x.isActive===true
        });
        user.profiles=filterProfiles;
        setProfiles(user.profiles);
      }
    })
  }

  const renderProfiles = () => {
    return (
      profiles &&
      profiles.map((x: any, index: number) => {
        return (
          <Animated
            animationIn="bounceInLeft"
            animationOut="fadeOut"
            isVisible={true}
          >
            <IonItemSliding>
              <IonItem lines="none" onClick={(e: any) => disableProfile(e, x)}>
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
       <IonToast
        isOpen={showToast}
        onDidDismiss={() => setShowToast(false)}
        message={message}
        duration={2000}
        position="top"
      />
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
