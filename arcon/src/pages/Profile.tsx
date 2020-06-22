import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Profile.css';

type ProfileProps={
  User:{},
  SetUser:Function
}

const Profile: React.SFC<ProfileProps> = ({User, SetUser}) => {
  return (
    <IonPage>
      <IonHeader collapse="condense">
        <IonToolbar>
         
          <IonTitle size="large">Mi cuenta</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        
      </IonContent>
    </IonPage>
  );
};

export default Profile;
