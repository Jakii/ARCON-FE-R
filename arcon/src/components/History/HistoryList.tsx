import React, { useState, useEffect, useContext } from "react";
import {
  IonItem,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonImg,
  useIonViewWillEnter,
  IonLabel,
  IonCardContent,
  IonRow,
  IonCol,
} from "@ionic/react";

import GoalsDetail from "./../GoalsDetail/GoalsDetail";
import { UserContext } from "../../App";
import { Animated } from "react-animated-css";

type HistoryListProps = {
  Goals: any[];
};

const HistoryList: React.FC<HistoryListProps> = ({ Goals }) => {
  const renderHistoryGoals = Goals.map((y: any) => {
    return (
     <Animated
     animationIn="bounceInLeft"
     animationOut="fadeOut"
     isVisible={true}>
      <IonCard color="green">
        <IonCardContent>
          <IonRow>
            <IonCol size="9">
              <IonLabel>{y.title}</IonLabel>
            </IonCol>
            <IonCol size="2">
              {" "}
              <IonLabel style={{ width: "100%", textAlign: "right" }}>
                {y.amount}
              </IonLabel>
            </IonCol>
          </IonRow>
        </IonCardContent>
      </IonCard>
      </Animated> 
    );
  });

  return <>{renderHistoryGoals}</>;
};

export default HistoryList;
