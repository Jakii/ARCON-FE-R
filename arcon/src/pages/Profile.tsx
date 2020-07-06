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
import {
  chevronForwardOutline,
  person,
  personOutline,
  peopleOutline,
  logOutOutline,
} from "ionicons/icons";
import PersonalInformation from "./../components/Settings/PersonalInformation";
import ProfileSettings from "./../components/Settings/ProfilesSettings";

type ProfileProps = {
  User: {};
  SetUser: Function;
};

const Profile: React.SFC<ProfileProps> = ({ User, SetUser }) => {
  const [showModal, setShowModal] = useState(false);
  const [showProfileSettings, setShowProfileSettings] = useState(false);

  const goToPersonalInformation = () => {
    setShowModal(true);
  };

  const goToProfilesSettings = () => {
    setShowProfileSettings(true);
  };

  return (
    <IonPage>
      <PersonalInformation ShowModal={showModal} SetShowModal={setShowModal} />
      <ProfileSettings
        ShowModalP={showProfileSettings}
        SetShowModalP={setShowProfileSettings}
      />
      <IonToolbar>
          <IonTitle size="large">Mi cuenta</IonTitle>
        </IonToolbar>
      <IonContent>
        <br />
        <IonItem onClick={goToPersonalInformation}>
          <IonIcon icon={personOutline} slot="start" />
          <IonIcon slot="end" icon={chevronForwardOutline}></IonIcon>
          <IonLabel>Información Personal</IonLabel>
        </IonItem>
        
        <IonItem onClick={goToProfilesSettings}>
          <IonIcon icon={peopleOutline} slot="start" />
          <IonIcon slot="end" icon={chevronForwardOutline}></IonIcon>
          <IonLabel>Perfiles</IonLabel>
        </IonItem>
        <IonItem>
          <IonIcon icon={logOutOutline} slot="start" />
          <IonIcon slot="end" icon={chevronForwardOutline}></IonIcon>
          <IonLabel>Cerrar Sesión</IonLabel>
        </IonItem>
      </IonContent>
    </IonPage>
  );
};

export default Profile;
