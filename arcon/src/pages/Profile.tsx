import React from "react";
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

type ProfileProps = {
  User: {};
  SetUser: Function;
};

const Profile: React.SFC<ProfileProps> = ({ User, SetUser }) => {
  return (
    <IonPage>
      <IonHeader collapse="condense">
        <IonToolbar>
          <IonTitle size="large">Mi cuenta</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <br />
        <IonItem>
          <IonIcon slot="end" icon={chevronForwardOutline}></IonIcon>
          <IonLabel>Información Personal</IonLabel>
        </IonItem>
        <IonItem>
          <IonIcon slot="end" icon={chevronForwardOutline}></IonIcon>
          <IonLabel>Perfiles</IonLabel>
        </IonItem>  
      </IonContent>
    </IonPage>
  );
};

export default Profile;
