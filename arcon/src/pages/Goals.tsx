import React, { useState, useEffect, useContext } from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButton,
  IonButtons,
  IonIcon,
  useIonViewWillEnter,
} from "@ionic/react";
import "./Goals.css";
import GoalsList from "./../components/GoalsList/GoalsList";
import NewGoal from "./../components/GoalsList/NewGoal";
import { add } from "ionicons/icons";
import API from "./../axios/axiosAPI.js";
import { UserContext } from "../App";

const Goals: React.SFC = () => {
  const [showDetailComponent, setShowDetailComponent] = useState(false);
  const [showNewGoal, setShowNewGoal] = useState(false);
  const [goals, setGoals] = useState(Array());
  const user = useContext(UserContext);

  const getGoals = () => {
    const id = user.profileSelected.userProfileId;
    API.get("Goals/GetByUserProfileId?userProfileId=" + id).then((res) => {
      if (res.data.data != null) {
        var g = res.data.data.filter((x: any) => {
          return x.statusId === 1 || x.statusId === 2;
        });
        setGoals(g);
        user.goals = g;
      } else {
        setGoals([]);
      }
    });
  };

  useIonViewWillEnter(() => {
    getGoals();
  });

  useEffect(() => {
    getGoals();
  }, []);

  // const goalsList = [
  //   {
  //     GoalId: 2,
  //     ProfileId: 1,
  //     Profile: "Gaby",
  //     title: "Viaje a Disney",
  //     description: "",
  //     amount: 50000,
  //     progress: 50,
  //     StatusId: 1,
  //     Activities: [
  //       {
  //         ActivityId: 1,
  //         Name: "Arreglar mi habitación"
  //       },
  //       {
  //         ActivityId: 2,
  //         Name: "Sacar la basura"
  //       }
  //     ]
  //   }
  // ];

  const addNewGoal = () => {
    setShowNewGoal(true);
  };

  const saveNewGoal = (
    name: string,
    description: string,
    amount: number,
    profile: string
  ) => {
    var newGoal = {
      title: name,
      description: description,
      profileId: profile,
      amount: amount,
      progress: 0,
      statusId: 1,
      // Activities: []
    };

    API.post("Goal", newGoal).then((res) => {
      if (res.status === 200) {
        getGoals();
      }
    });
  };

  return (
    <IonPage>
      <IonToolbar>
        <IonButtons slot="primary">
          <IonButton onClick={() => addNewGoal()}>
            <IonIcon slot="icon-only" icon={add} />
          </IonButton>
        </IonButtons>
        <IonTitle size="large" color="purple">Metas</IonTitle>
      </IonToolbar>
      <IonContent>
        <GoalsList List={goals} GetGoals={getGoals} />
        <NewGoal
          ShowModal={showNewGoal}
          SetShowModal={setShowNewGoal}
          SaveNewGoal={saveNewGoal}
        />
      </IonContent>
    </IonPage>
  );
};

export default Goals;
