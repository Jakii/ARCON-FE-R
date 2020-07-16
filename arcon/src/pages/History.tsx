import React, { useState, useEffect, useContext } from "react";
import {
  IonTitle,
  IonToolbar,
  IonPage,
  IonContent,
  IonLabel,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonItem,
  useIonViewWillEnter,
  IonSearchbar,
  IonList,
  IonImg,
  IonCard
} from "@ionic/react";
import { UserContext } from "../App";
import HistoryList from "../components/History/HistoryList";
import API from "./../axios/axiosAPI.js";
import '../theme/label.css';

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
        <IonTitle size="large" className="toolbarTitle" color="purple">Historial</IonTitle>
      </IonToolbar>
      <IonContent>
        <IonCard color="primary">
          <IonCardHeader>
            <IonCardTitle>Arcomonedas:</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
       
           <IonItem lines="none" color="primary">
             <IonImg src="../../assets/arcomoneda.png" slot="start" style={{width:"60px", height:"60px"}}></IonImg>
           <IonLabel
              style={{
                fontSize: "56px",
                fontWeight: "bolder",
                width:"100%",
                textAlign:"left"
              }}
            >
              {total}
            </IonLabel>
           </IonItem>
          </IonCardContent>
        </IonCard>
        <br />
        <IonLabel
          color="primary"
          className="title"
          style={{marginLeft:"15px"}}
        >
          Hola {user.profileSelected.name},
        </IonLabel>
        <br />
        <IonLabel
          color="lapiz"
          className="date"
          style={{marginLeft:"15px"}}
        >
          estas son tus metas alcanzadas
        </IonLabel>
        <br/>
        <br/>
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
