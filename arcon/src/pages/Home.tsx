import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton,IonIcon } from '@ionic/react';
import './Home.css';
import Perfiles from './../components/Perfiles/Perfiles';


const Home: React.FC = () => {

  const ListaPerfiles = [
    {
      Id: 1,
      Nombre: "Gaby"
    },
    {
      Id: 2,
      Nombre: "Wendy"
    },
    {
      Id: 3,
      Nombre: "Pedro"
    },
    {
      Id: 4,
      Nombre: "Jacky"
    }
  ];

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Home</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Home</IonTitle>
          </IonToolbar>
        </IonHeader>
        <Perfiles ListaPerfiles={ListaPerfiles} />
      </IonContent>
    </IonPage>
  );
};

export default Home;
