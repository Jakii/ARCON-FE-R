import React, { useState, useEffect } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonButtons, IonIcon } from '@ionic/react';
import './Goals.css';
import GoalsList from './../components/GoalsList/GoalsList';
import NewGoal from './../components/GoalsList/NewGoal';
import { add } from 'ionicons/icons';

type GoalsProps = {
  User: {},
  SetUser: Function
}

const Goals: React.FC<GoalsProps> = ({ User, SetUser }) => {
  const [showDetailComponent, setShowDetailComponent] = useState(false);
  const [showNewGoal, setShowNewGoal] = useState(false);
  const [goals, setGoals] = useState(Array());

  // useEffect(()=>{
  //   saveNewGoal("Viaje","Roatan",10000,"Gaby");
  // })

  const goalsList = [
    // {
    //   GoalId: 1,
    //   ProfileId: 1,
    //   Title: "Mac",
    //   Description: "",
    //   Amount: 0,
    //   Progress: 0,
    //   StatusId: 1,
    //   Activities: [
    //     {
    //       ActivityId: 1,
    //       Name: "Arreglar mi habitación"
    //     },
    //     {
    //       ActivityId: 2,
    //       Name: "Sacar la basura"
    //     }
    //   ]
    // },
    {
      GoalId: 2,
      ProfileId: 1,
      Profile:"Gaby",
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
    },
    // {
    //   GoalId: 3,
    //   ProfileId: 2,
    //   Title: "Nintendo switch",
    //   Description: "",
    //   Amount: 0,
    //   Progress: 50,
    //   StatusId: 1,
    //   Activities: [
    //     {
    //       ActivityId: 1,
    //       Name: "Arreglar mi habitación"
    //     },
    //     {
    //       ActivityId: 2,
    //       Name: "Sacar la basura"
    //     }
    //   ]
    // }
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
      <IonHeader>
        <IonToolbar>
          <IonTitle>Goals</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent scrollEvents={true}>
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
        <GoalsList
          List={goalsList}
          User={User} />
        <NewGoal
          ShowModal={showNewGoal}
          SetShowModal={setShowNewGoal}
          SaveNewGoal={saveNewGoal} />
      </IonContent>
    </IonPage>
  );
};

export default Goals;
