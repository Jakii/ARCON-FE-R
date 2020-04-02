import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar} from '@ionic/react';
import './Home.css';
import Perfiles from './../components/Perfiles/Perfiles';


const Home: React.FC = () => {

  const ListaPerfiles = [
    {
      ProfileId: 1,
      Name: "Gaby",
      RolId:1
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
