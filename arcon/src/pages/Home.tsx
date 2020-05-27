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
  // const profiles = [
  //   {
  //     "ProfileId": 1,
  //     "Name": "Gaby",
  //     "RolId": 1,
  //     "UserAppId": "Gaby"
  //   },
  //   {
  //     "ProfileId": 1,
  //     "Name": "Issa",
  //     "RolId": 2,
  //     "UserAppId": "Issa"
  //   }
  // ];

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
    const lenghtProfilesList = profiles.length;
    const lastIndex = profiles[lenghtProfilesList - 1];
    var newProfile = {
      Name: name,
      RolId: 2,
      ProfileId: 1,
      UserAppId: "gtabora"
    };
    // profiles.push(newProfile);
    // setProfiles(listaPerfiles);
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
