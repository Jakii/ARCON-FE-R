import React, { useState } from "react";
import {
  IonItem,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonImg,
} from "@ionic/react";

import GoalsDetail from "./../GoalsDetail/GoalsDetail";

type GoalsProps = {
  List: any[];
  GetGoals:Function;
};

const GoalsList: React.FC<GoalsProps> = ({ List, GetGoals }) => {
  const [selectedGoal, setSelectedGoal] = useState({});
  const [selectedActivities, setSelectedActivities] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [totalPendingActivities, setTotalPendingActivities]=useState(0);
  const [totalCompletedActivities, setTotalCompletedActivities]=useState(0);

  const goToDetail = (item: any) => {
    var totalActivities = item&&item.goalDetails&&item.goalDetails.length;
    var totInProcess =  item&&item.goalDetails&&item.goalDetails.filter((x: any) => {
      return x.isComplete === false;
    }).length;

    var totalActivitiesTrue =  item&&item.goalDetails&&item.goalDetails.filter((x: any) => {
      return x.isComplete === true;
    }).length;
    var newPercent = (totalActivitiesTrue / totalActivities) * 100;
    var rounded=isNaN(newPercent)?0:Math.round(newPercent);
    item.progress = rounded;
    setTotalCompletedActivities(totalActivitiesTrue===null?0:totalActivitiesTrue);
    setTotalPendingActivities(totInProcess===null?0:totInProcess);
    setSelectedGoal(item);
    setShowModal(true);
    setSelectedActivities(item.Activities);
  };

  const renderGoals = List.map((x) => {
    return (
      <IonCard color="purple" onClick={() => goToDetail(x)}>
        <IonImg
          src="../../assets/piggymoney.png"
          style={{ height: "250px", width: "100%" }}
        />
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
        TotalCompletedActivities={totalCompletedActivities}
        TotalPendingActivities={totalPendingActivities}
        SetTotalCompletedActivities={setTotalCompletedActivities}
        SetTotalPendingActivities={setTotalPendingActivities}
        GetGoals={GetGoals}
      />
    </>
  );
};

export default GoalsList;
