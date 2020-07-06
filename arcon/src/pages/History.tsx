import React, { useState, useEffect, useContext } from "react";
import {
  IonHeader,
  IonIcon,
  IonTitle,
  IonToolbar,
  IonButtons,
  IonButton,
  IonPage,
  IonContent,
  IonToast,
  IonCard,
  IonLabel,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonItem,
  useIonViewWillEnter,
  IonSearchbar,
  IonList,
} from "@ionic/react";
import { UserContext } from "../App";
import HistoryList from "../components/History/HistoryList";
import API from "./../axios/axiosAPI.js";
import { starOutline } from "ionicons/icons";

type HistoryProps = {};

const Home: React.SFC<HistoryProps> = ({}) => {
  const user = useContext(UserContext);
  const [goals, setGoals] = useState([]);
  const [filteredGoals, setFilteredGoals] = useState([]);
  const [total, setTotal] = useState(0);

  useIonViewWillEnter(() => {
    getGoals();
  });

  const getGoals = () => {
    const id = user.profileSelected.userProfileId;
    API.get("Goals/GetByUserProfileId?userProfileId=" + id).then((res) => {
      if (res.data.data != null) {
        var g = res.data.data.filter((x: any) => {
          return x.statusId === 3;
        });
        setGoals(g);
        setFilteredGoals(g);
        var t = g.reduce(
          (accumulator: number, currentValue: any) =>
            accumulator + currentValue.amount,
          0
        );
        setTotal(t);
      } else {
        setGoals([]);
      }
    });
  };

  const searchGoal = (e: string) => {
    setFilteredGoals(
      goals.filter((x: any) => {
        return x.title.includes(e);
      })
    );
  };

  return (
    <IonPage>
      <IonToolbar>
        <IonTitle size="large">Historial</IonTitle>
      </IonToolbar>
      <IonContent>
        <IonCard color="darkblue">
          <IonCardHeader>
            <IonCardTitle>Puntos:</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            
           <IonItem lines="none" color="purple">
           <IonLabel
              style={{
                fontSize: "56px",
                fontWeight: "bolder",
                // marginLeft: "25%",
                width:"100%",
                textAlign:"center"
              }}
            >
              <IonIcon slot="start" icon={starOutline} size="large" />
              {total}
              <IonIcon slot="start" icon={starOutline} size="large" />
            </IonLabel>
           </IonItem>
          </IonCardContent>
        </IonCard>
        <br />
        <IonLabel
          color="purple"
          style={{ marginLeft: "15px", fontSize: "24px", fontWeight: "bolder" }}
        >
          Metas completadas
        </IonLabel>
        <br />
        <IonSearchbar
          onIonChange={(e: any) => searchGoal(e.detail.value)}
          showCancelButton="never"
          placeholder="Buscar metas"
        ></IonSearchbar>
        <IonList>
          <HistoryList Goals={filteredGoals} />
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Home;
