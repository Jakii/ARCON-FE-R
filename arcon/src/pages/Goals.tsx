import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonFooter, IonButton } from '@ionic/react';
import './Goals.css';
import GoalsList from './../components/GoalsList/GoalsList';


const Goals: React.FC = () => {

  const [showDetailComponent, setShowDetailComponent] = useState(false);

  const goalsList = [
    {
      GoalId: 1,
      Title: "Mac",
      Description: "",
      Amount: 0,
      Progress: 0,
      StatusId: 1,
      Activities: [
        {
          ActivityId: 1,
          Name: "Arreglar mi habitación"
        },
        {
          ActivityId: 2,
          Name: "Sacar la basura"
        }
      ]
    },
    {
      GoalId: 2,
      Title: "Viaje",
      Description: "",
      Amount: 0,
      Progress: 50,
      StatusId: 1,
      Activities: [
        {
          ActivityId: 1,
          Name: "Arreglar mi habitación"
        },
        {
          ActivityId: 2,
          Name: "Sacar la basura"
        }
      ]
    }
  ];

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Goals</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Goals</IonTitle>
          </IonToolbar>
        </IonHeader>
        <GoalsList
          List={goalsList} />
      </IonContent>
      <IonFooter>
        <IonButton color="primary" expand="full">Nueva meta</IonButton>
      </IonFooter>
    </IonPage>
  );
};

export default Goals;
