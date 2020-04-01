import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Kids.css';

const Kids: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Kids</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Kids</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Kids" />
      </IonContent>
    </IonPage>
  );
};

export default Kids;
