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

type HistoryListProps = {
  Goals: any[];
};

const HistoryList: React.FC<HistoryListProps> = ({ Goals }) => {
  const renderHistoryGoals = Goals.map((y: any) => {
    return (
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
    );
  });

  return <>{renderHistoryGoals}</>;
};

export default HistoryList;
