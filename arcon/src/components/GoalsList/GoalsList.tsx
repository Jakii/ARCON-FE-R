import React, { useState } from "react";
import {
  IonItem,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonImg,
  IonLabel,
  IonCardSubtitle,
  IonItemOptions,
} from "@ionic/react";
import { Animated } from "react-animated-css";
import GoalsDetail from "./../GoalsDetail/GoalsDetail";
import "../../theme/label.css";
import API from "../../axios/axiosAPI.js";

type GoalsProps = {
  List: any[];
  GetGoals: Function;
};

const GoalsList: React.FC<GoalsProps> = ({ List, GetGoals }) => {
  const [selectedGoal, setSelectedGoal] = useState({});
  const [activities, setActivities] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [totalPendingActivities, setTotalPendingActivities] = useState(0);
  const [totalCompletedActivities, setTotalCompletedActivities] = useState(0);

  const goToDetail = (item: any) => {
    API.get("GoalDetail/GetByGoalId?goalId=" + item.goalId).then((res) => {
      if (res.status === 200) {
        var act = res.data.data;
        var totalActivities = act && act.length;
        var totInProcess =
          act &&
          act.filter((x: any) => {
            return x.isComplete === false;
          }).length;

        var totalActivitiesTrue =
          act &&
          act.filter((x: any) => {
            return x.isComplete === true;
          }).length;
        var newPercent = (totalActivitiesTrue / totalActivities) * 100;
        var rounded = isNaN(newPercent) ? 0 : Math.round(newPercent);
        item.progress = rounded;
        setTotalCompletedActivities(
          totalActivitiesTrue === null ? 0 : totalActivitiesTrue
        );
        setTotalPendingActivities(totInProcess === null ? 0 : totInProcess);
        setSelectedGoal(item);
        setShowModal(true);
        setActivities(act);
      }
    });
  };
  const getRandomAvatar = () => {
    const min = 1;
    const max = 31;

    return min + Math.floor(Math.random() * Math.floor(max));
  };
  const renderGoals = List.map((x) => {
    return (
      <Animated
        animationIn="bounceInLeft"
        animationOut="fadeOut"
        isVisible={true}
      >
        <IonCard color="purple" onClick={() => goToDetail(x)}>
          <IonImg
            src={"../../assets/avatars/" + getRandomAvatar() + ".png"}
            style={{ height: "200px", width: "100%", marginTop: "20px" }}
          />
          <IonCardHeader>
            <IonLabel className="titleGoal">{x.title}</IonLabel>
          </IonCardHeader>
          <IonItem color="transparent" lines="none">
            <IonImg
              src={"../../assets/avatars/2.png"}
              style={{ width: "30px", height: "30px", marginLeft: "10px" }}
            ></IonImg>
            <IonLabel className="titleGoal">{x.amount}</IonLabel>
          </IonItem>
        </IonCard>
      </Animated>
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
        SetActivities={setActivities}
        Activities={activities}
      />
    </>
  );
};

export default GoalsList;
