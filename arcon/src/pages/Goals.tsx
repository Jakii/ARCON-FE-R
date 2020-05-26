import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonButtons, IonIcon } from '@ionic/react';
import './Goals.css';
import GoalsList from './../components/GoalsList/GoalsList';
import NewGoal from './../components/GoalsList/NewGoal';
import { add } from 'ionicons/icons';


const Goals: React.FC = () => {
  const [showDetailComponent, setShowDetailComponent] = useState(false);
  const [showNewGoal, setShowNewGoal] = useState(false);
  const [goals, setGoals] = useState(Array());

  const goalsList = [
    {
      GoalId: 2,
      ProfileId: 1,
      Profile: "Gaby",
      Title: "Viaje a Disney",
      Description: "",
      Amount: 50000,
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

  const addNewGoal = () => {
    setShowNewGoal(true);
  }

  const saveNewGoal = (name: string, description: string, amount: number, profile: string) => {
    var newGoal = {
      Title: name,
      Description: description,
      ProfileId: profile,
      GoalId: 3,
      Amount: amount,
      Progress: 0,
      StatusId: 1,
      Activities: []
    };

    goals.push(newGoal);
    setGoals(goals);
  }

  return (
    <IonPage>
      <IonHeader collapse="condense">
        <IonToolbar>
          <IonButtons slot="primary">
            <IonButton onClick={() => addNewGoal()}>
              <IonIcon slot="icon-only" icon={add} />
            </IonButton>
          </IonButtons>
          <IonTitle size="large">Goals</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <GoalsList
          List={goalsList} />
        <NewGoal
          ShowModal={showNewGoal}
          SetShowModal={setShowNewGoal}
          SaveNewGoal={saveNewGoal} />
      </IonContent>
    </IonPage>
  );
};

export default Goals;
