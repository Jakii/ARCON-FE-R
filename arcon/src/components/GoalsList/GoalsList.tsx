import React, { useState } from "react";
import {
  IonItem,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonImg
} from "@ionic/react";

import GoalsDetail from "./../GoalsDetail/GoalsDetail";

type GoalsProps = {
  List: any[];
};

const GoalsList: React.FC<GoalsProps> = ({ List }) => {
  const [selectedGoal, setSelectedGoal] = useState({});
  const [selectedActivities, setSelectedActivities] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const goToDetail = (item: any) => {
    setSelectedGoal(item);
    setShowModal(true);
    setSelectedActivities(item.Activities);
  };

  const renderGoals = List.map((x) => {
    return (
      <IonCard color="purple" onClick={() => goToDetail(x)}>
        <IonImg src="../../assets/piggymoney.png" style={{height:"250px", width:"100%"}} />
        <IonCardHeader>
          <IonCardTitle>
            <IonItem color="transparent">{x.title}</IonItem>
          </IonCardTitle>
        </IonCardHeader>
      </IonCard>
    );
  });

  return (
    <>
      {renderGoals}
      <GoalsDetail
        Goal={selectedGoal}
        ShowModal={showModal}
        SetShowModal={setShowModal}
      />
    </>
  );
};

export default GoalsList;
