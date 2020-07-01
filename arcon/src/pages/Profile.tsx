import React, { useState } from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonItem,
  IonIcon,
  IonLabel,
} from "@ionic/react";
import ExploreContainer from "../components/ExploreContainer";
import "./Profile.css";
import { chevronForwardOutline } from "ionicons/icons";
import PersonalInformation from './../components/Settings/PersonalInformation';
import ProfileSettings from './../components/Settings/PersonalInformation';

type ProfileProps = {
  User: {};
  SetUser: Function;
};

const Profile: React.SFC<ProfileProps> = ({ User, SetUser }) => {
  const [showModal, setShowModal]=useState(false);
  const [showProfileSettings, setShowProfileSettings]=useState(false);

  const goToPersonalInformation=()=>{
    setShowModal(true);
  }

  const goToProfilesSettings=()=>{
    setShowProfileSettings(true);
  }

  return (
    <IonPage>
      <PersonalInformation ShowModal={showModal} SetShowModal={setShowModal}/>
      <ProfileSettings ShowModal={showProfileSettings} SetShowModal={setShowProfileSettings}/>
      <IonHeader collapse="condense">
        <IonToolbar>
          <IonTitle size="large">Mi cuenta</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <br />
        <IonItem onClick={goToPersonalInformation}>
          <IonIcon slot="end" icon={chevronForwardOutline}></IonIcon>
          <IonLabel>Información Personal</IonLabel>
        </IonItem>
        <IonItem onClick={goToProfilesSettings}>
          <IonIcon slot="end" icon={chevronForwardOutline}></IonIcon>
          <IonLabel>Perfiles</IonLabel>
        </IonItem>  
        <IonItem>
          <IonIcon slot="end" icon={chevronForwardOutline}></IonIcon>
          <IonLabel>Cerrar Sesión</IonLabel>
        </IonItem>  
      </IonContent>
    </IonPage>
  );
};

export default Profile;
