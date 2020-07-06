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
  useIonViewWillEnter,
  IonCardHeader,
  IonCardTitle,
  IonIcon,
} from "@ionic/react";
import "./GoalsDetail.css";
import NewActivity from "./../Activities/NewActivity";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
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
  GetGoals: Function;
};

const GoalsDetail: React.FC<GoalsProps> = ({
  Goal,
  ShowModal,
  SetShowModal,
  TotalCompletedActivities,
  TotalPendingActivities,
  SetTotalCompletedActivities,
  SetTotalPendingActivities,
  GetGoals,
}) => {
  const [showNewActivity, setShowNewActivity] = useState(false);
  const [goal, SetGoal] = useState(Goal);

  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  const renderPendingActivities =
    Goal &&
    Goal.goalDetails &&
    Goal.goalDetails
      .filter((y: any) => {
        return y.isComplete === false;
      })
      .map((x: any) => {
        return (
          <IonItem>
            <IonLabel>{x.name}</IonLabel>
            <IonCheckbox
              slot="end"
              color="secondary"
              onIonChange={(e) => changePercent(e.detail.checked, x)}
            ></IonCheckbox>
          </IonItem>
        );
      });

  const renderActivities =
    Goal &&
    Goal.goalDetails &&
    Goal.goalDetails.map((x: any) => {
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

  const renderDoneActivities =
    Goal &&
    Goal.goalDetails &&
    Goal.goalDetails
      .filter((y: any) => {
        return y.isComplete === true;
      })
      .map((x: any) => {
        return (
          <IonItem>
            <IonLabel>{x.name}</IonLabel>
          </IonItem>
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
    var totalActivities = Goal && Goal.goalDetails && Goal.goalDetails.length;
    var totInProcess =
      Goal &&
      Goal.goalDetails &&
      Goal.goalDetails.filter((x: any) => {
        return x.isComplete === false;
      }).length;

    var totalActivitiesTrue =
      Goal &&
      Goal.goalDetails &&
      Goal.goalDetails.filter((x: any) => {
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
        Goal.goalDetails.push(newActivity);
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
        <br />

        <IonCard>
          <br />

          <IonLabel class="title" color="purple">
            {Goal.title}
          </IonLabel>

          <IonCardContent>
            <IonRow>
              <IonCol size="5" className="ion-text-center">
                <IonLabel className="tasks" color="orange">
                  {TotalPendingActivities}
                </IonLabel>
                <br />
                <IonLabel className="subtitleInformation">En proceso</IonLabel>
                <br />
                <IonLabel className="tasks" color="darkPurple">
                  {TotalCompletedActivities}
                </IonLabel>
                <br />
                <IonLabel className="subtitleInformation">Completadas</IonLabel>
              </IonCol>

              <IonCol size="7">
                <CircularProgressbar
                  value={Goal.progress}
                  text={`${Goal.progress}%`}
                  styles={buildStyles({
                    pathColor: "#2dd36f",
                  })}
                  className="circleProgressBar"
                />
              </IonCol>
            </IonRow>
          </IonCardContent>
        </IonCard>
        <br />
        <IonCard>
          <IonGrid>
            <br />
            <IonItem lines="none">
              <IonLabel style={{ fontSize: "24px" }}>Tareas</IonLabel>
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
      {/* <IonButton
        ion-button
        icon-start
        color="lightpurple"
        onClick={() => addNewActivity()}
      >
        Nueva Tarea
      </IonButton> */}
      <IonButton onClick={() => completeGoal()} color="orange">
        Acreditar puntos
      </IonButton>
      <IonButton onClick={() => SetShowModal(false)} color="lightblue">
        Regresar
      </IonButton>
    </IonModal>
  );
};

export default GoalsDetail;
