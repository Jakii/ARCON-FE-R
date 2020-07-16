import React, { useState, useContext } from "react";
import {
  IonContent,
  IonPage,
  IonTitle,
  IonToolbar,
  IonItem,
  IonIcon,
  IonLabel,
} from "@ionic/react";
import "./Profile.css";
import "../theme/label.css";
import {
  chevronForwardOutline,
  personOutline,
  peopleOutline,
  logOutOutline,
} from "ionicons/icons";
import PersonalInformation from "./../components/Settings/PersonalInformation";
import ProfileSettings from "./../components/Settings/ProfilesSettings";
import { UserContext } from "../App";

type ProfileProps = {
  User: {};
  SetUser: Function;
};

const Profile: React.SFC<ProfileProps> = ({ User, SetUser }) => {
  const [showModal, setShowModal] = useState(false);
  const [showProfileSettings, setShowProfileSettings] = useState(false);
  const user = useContext(UserContext);

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
        <IonTitle size="large" color="purple" className="toolbarTitle">
          Mi cuenta
        </IonTitle>
      </IonToolbar>
      <IonContent>
        <br />
        <IonItem onClick={goToPersonalInformation}>
          <IonIcon icon={personOutline} slot="start" />
          <IonIcon slot="end" icon={chevronForwardOutline}></IonIcon>
          <IonLabel>Información Personal</IonLabel>
        </IonItem>

        {user.userInfo.rolId ? (
          <IonItem onClick={goToProfilesSettings}>
            <IonIcon icon={peopleOutline} slot="start" />
            <IonIcon slot="end" icon={chevronForwardOutline}></IonIcon>
            <IonLabel>Perfiles</IonLabel>
          </IonItem>
        ) : (
          <></>
        )}
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
