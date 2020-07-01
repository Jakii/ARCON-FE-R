import React, { useState } from "react";
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
} from "@ionic/react";
import "./GoalsDetail.css";
import NewActivity from "./../Activities/NewActivity";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import API from "./../../axios/axiosAPI.js";

type GoalsProps = {
  Goal: any;
  ShowModal: any;
  SetShowModal: Function;
};

const GoalsDetail: React.FC<GoalsProps> = ({
  Goal,
  ShowModal,
  SetShowModal
}) => {

  const [showNewActivity, setShowNewActivity] = useState(false);
  const [id, setId] = useState(1);
  const [goal, SetGoal] = useState(Goal);

  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
//   const [pendingActivies, setPendingActivities]=useState(Goal&&Goal.goalDetails&&Goal.goalDetails.filter((x:any)=>{return x.isComplete===false}))

  const renderPendingActivities = 
  Goal&&Goal.goalDetails&&Goal.goalDetails.filter((y:any)=> {return y.isComplete===false}).map((x:any) => {
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

  const renderDoneActivities = 
  Goal&&Goal.goalDetails&&Goal.goalDetails.filter((y:any)=> {return y.isComplete===true}).map((x:any) => {
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

  const addNewActivity = () => {
    setShowNewActivity(true);
  };

  const changePercent = (checked: boolean, item: any) => {
    item.isComplete = true;
    var totalActivities = Goal.goalDetails.length;
    var totalActivitiesTrue = Goal.goalDetails.filter((x:any) => {
      return x.Checked === true;
    }).length;
    var newPercent = totalActivitiesTrue / totalActivities;
    Goal.Progress = newPercent;
    const url='GoalDetail?id='+item.goalDetailId;
    debugger;
    API.put(url,item).then(res=>{
        debugger;
    });

    SetGoal(Goal);
  };

  const saveNewActivity = (name: string) => {
    var newActivity = {
      goalId: Goal.goalId,
      isCompleted: false,
      name: name,
      goalDetailId:3
    };

    API.post("GoalDetail", newActivity).then((res) => {
      if (res.data.succeeded) {
          setToastMessage('Se ha creado exitosamente.');
      } else {
        setToastMessage(res.data.message);
      }
      setShowToast(true);
    });
  };

  return (
    <IonModal isOpen={ShowModal}>
      <IonToast
        isOpen={showToast}
        onDidDismiss={() => setShowToast(false)}
        message={toastMessage}
        duration={1000}
        position="top"
      />
      <IonContent>
        <br />
        <br />
        <IonLabel class="title" color="purple">
          {Goal.title}
        </IonLabel>
        {/* <IonButton>Transferir</IonButton> */}
        {/* <IonImg src="../../assets/piggymoney.png" style={{height:"250px", width:"100%"}} /> */}
        <IonCard style={{ height: "370px" }}>
          <IonCardContent>
            <CircularProgressbar
              value={Goal.progress}
              text={`${Goal.progress}%`}
              styles={buildStyles({
                pathColor: "#2dd36f",
              })}
            />
          </IonCardContent>
        </IonCard>
        <IonGrid>
          <br />
          <br />
          <IonRow>
            <IonCol size="10">
              <IonLabel class="subtitleInformation">Actividades Pendientes</IonLabel>
            </IonCol>
          </IonRow>
          <IonRow color="medium">
            <IonCol size="12">{renderPendingActivities}</IonCol>
          </IonRow>
          <br />
          <IonRow>
            <IonCol size="10">
              <IonLabel class="subtitleInformation">Actividades Completadas</IonLabel>
            </IonCol>
          </IonRow>
          <IonRow color="medium">
            <IonCol size="12">{renderDoneActivities}</IonCol>
          </IonRow>
        </IonGrid>
        <NewActivity
          ShowModal={showNewActivity}
          SetShowModal={setShowNewActivity}
          SaveNewActivity={saveNewActivity}
        />
      </IonContent>
      <IonButton
        ion-button
        icon-start
        color="lightpurple"
        onClick={() => addNewActivity()}
      >
        Nueva Actividad
      </IonButton>
      <IonButton onClick={() => SetShowModal(false)} color="orange">
        Transferir
      </IonButton>
      <IonButton onClick={() => SetShowModal(false)} color="lightblue">
        Regresar
      </IonButton>
    </IonModal>
  );
};

export default GoalsDetail;
