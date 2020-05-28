import React, { useState, useEffect } from 'react';
import { IonHeader, IonIcon, IonTitle, IonToolbar, IonButtons, IonButton, IonPage, IonContent } from '@ionic/react';
import './Home.css';
import Perfiles from './../components/Perfiles/Perfiles';
import { add } from 'ionicons/icons';
import NewProfile from './../components/Perfiles/NewProfile';
import API from './../axios/axiosAPI.js';

type HomeProps = {
}

const Home: React.FC<HomeProps> = ({ }) => {
  const [showNewProfile, setShowNewProfile] = useState(false);
  const [profiles, setProfiles] = useState([]);

  const getProfiles=async ()=>{
    const req= API.get('UserProfile');
    const res= (await req).data.data;
    setProfiles(res);
  }

  useEffect(() => {
    getProfiles();
  }, []);

  const addNewProfile = () => {
    setShowNewProfile(true);
  }


  const saveNewProfile = (name: any) => {
    var newProfile = {
      name: name,
      rolId: 2,
      profileId: 1,
      userAppId: name
    };

    const req= API.post('UserProfile', newProfile);
    console.log(req);
  }

  return (
    <IonPage>
      <IonHeader collapse="condense">
        <IonToolbar>
          <IonButtons slot="primary">
            <IonButton onClick={() => addNewProfile()}>
              <IonIcon slot="icon-only" icon={add} />
            </IonButton>
          </IonButtons>
          <IonTitle size="large">Home</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <Perfiles ListaPerfiles={profiles} />
        <NewProfile ShowModal={showNewProfile} SetShowModal={() => { setShowNewProfile(false) }} SaveNewProfile={saveNewProfile} />
      </IonContent>
    </IonPage>
  );
};

export default Home;
