import React, { useState, useEffect } from "react";
import {
  IonModal,
  IonButton,
  IonContent,
  IonLabel,
  IonGrid,
  IonCol,
  IonRow,
  IonItem,
  IonCheckbox,
  IonCard,
  IonCardContent,
  IonToast,
  IonCardHeader,
  IonIcon,
  IonProgressBar
} from "@ionic/react";
import "../../theme/label.css";
import "../../theme/button.css";
import NewActivity from "./../Activities/NewActivity";
import API from "./../../axios/axiosAPI.js";
import { add } from "ionicons/icons";

type GoalsProps = {
  Goal: any;
  ShowModal: any;
  SetShowModal: Function;
  TotalPendingActivities: number;
  TotalCompletedActivities: number;
  SetTotalPendingActivities: Function;
  SetTotalCompletedActivities: Function;
  Activities:any;
  SetActivities:Function;
};

const GoalsDetail: React.FC<GoalsProps> = ({
  Goal,
  ShowModal,
  SetShowModal,
  TotalCompletedActivities,
  TotalPendingActivities,
  SetTotalCompletedActivities,
  SetTotalPendingActivities,
  Activities,
  SetActivities
}) => {
  const [showNewActivity, setShowNewActivity] = useState(false);
  const [goal, SetGoal] = useState(Goal);

  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  function reloadActivities(){
    API.get("GoalDetail/GetByGoalId?goalId="+Goal.goalId).then(res=>{
      if(res.status===200){
        SetActivities(res.data.data);
      }
    })
  }

  const renderActivities =
   Activities&&Activities.map((x: any) => {
      return (
        <IonCard
          color={x.isComplete ? "green" : undefined}
          onClick={(e: any) => changePercent(e, x)}
        >
          <IonCardHeader>
            <IonLabel className="taskTitle">{x.name}</IonLabel>
          </IonCardHeader>
        </IonCard>
      );
    });

  const addNewActivity = () => {
    setShowNewActivity(true);
  };

  const changePercent = (checked: boolean, item: any) => {
    item.isComplete = true;
    const url = "GoalDetail/Update?id=" + item.goalDetailId;

    API.post(url, item).then((res) => {
      if (res.status !== 200 || res.data.data.isCompleted === false) {
        item.isComplete = false;
        setToastMessage("error");
        setShowToast(true);
        SetGoal(Goal);
      } else {
        CalculatePercent();
        UpdateGoal();
        setToastMessage("Tarea completada");
        setShowToast(true);
        SetGoal(Goal);
      }
    });
  };

  function UpdateGoal() {
    const url = "Goals/Update?id=" + Goal.goalId;
    API.post(url, Goal).then((x) => {});
  }

  function CalculatePercent() {
    var totalActivities = Activities && Activities.length;
    var totInProcess =
      Activities &&
      Activities.filter((x: any) => {
        return x.isComplete === false;
      }).length;

    var totalActivitiesTrue =
    Activities &&
    Activities.filter((x: any) => {
        return x.isComplete === true;
      }).length;
    SetTotalPendingActivities(totInProcess);
    SetTotalCompletedActivities(totalActivitiesTrue);
    var newPercent = (totalActivitiesTrue / totalActivities) * 100;
    Goal.progress = Math.round(newPercent);
  }

  const saveNewActivity = (name: string) => {
    var newActivity = {
      goalId: Goal.goalId,
      isCompleted: false,
      name: name,
    };
    API.post("GoalDetail", newActivity).then((res) => {
      if (res.data.succeeded) {
        setToastMessage("Se ha creado exitosamente.");
        reloadActivities();
      } else {
        setToastMessage(res.data.message);
      }
      setShowToast(true);
    });
  };

  const completeGoal = () => {
    Goal.statusId = 3;
    UpdateGoal();
    SetShowModal(false);
  };

  return (
    <IonModal isOpen={ShowModal}>
      <IonToast
        isOpen={showToast}
        onDidDismiss={() => setShowToast(false)}
        message={toastMessage}
        duration={2000}
        position="top"
      />
      <IonContent>
        <br/>
        <IonLabel class="titleGoalDetail" color="purple">
          {Goal.title}
        </IonLabel>
        <br />
        <br />
        <br />
        <IonRow>
          <IonCol size="1"></IonCol>
          <IonCol size="7">
            <IonLabel className="score" color="purple">{Goal.progress}%</IonLabel>
            <IonProgressBar
              color="gold"
              value={Goal.progress/100}
              style={{ marginTop: "8%", height: "15px", borderRadius: "14px" }}
            ></IonProgressBar>
          </IonCol>
          <IonCol size="3">
            <img
              src="../../assets/avatars/001-chest.png"
              style={{ marginLeft: "10px" }}
            />
          </IonCol>
        </IonRow>

        <IonCard>
          <IonGrid>
            <br />
            <IonItem lines="none">
              <IonLabel style={{fontSize:"30px"}} color="purple">Tareas</IonLabel>
              <IonButton onClick={() => addNewActivity()} fill="clear">
                <IonIcon slot="icon-only" icon={add} size="large" />
              </IonButton>
            </IonItem>
            <br />
            {renderActivities}
          </IonGrid>
        </IonCard>
        <NewActivity
          ShowModal={showNewActivity}
          SetShowModal={setShowNewActivity}
          SaveNewActivity={saveNewActivity}
        />
      </IonContent>

      <IonButton
        onClick={() => completeGoal()}
        color="orange"
        className="normalButton"
      >
        Acreditar puntos
      </IonButton>
      <IonButton
        onClick={() => SetShowModal(false)}
        color="lightblue"
        className="normalButton"
      >
        Regresar
      </IonButton>
    </IonModal>
  );
};

export default GoalsDetail;
