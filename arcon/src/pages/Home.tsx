import React, { useState, useEffect, useContext } from 'react';
import { IonHeader, IonIcon, IonTitle, IonToolbar, IonButtons, IonButton, IonPage, IonContent } from '@ionic/react';
import './Home.css';
import Perfiles from './../components/Perfiles/Perfiles';
import { add } from 'ionicons/icons';
import NewProfile from './../components/Perfiles/NewProfile';
import API from './../axios/axiosAPI.js';
import { UserContext } from '../App';

type HomeProps = {
}

const Home: React.SFC<HomeProps> = ({ }) => {
  const [showNewProfile, setShowNewProfile] = useState(false);
  const [profiles, setProfiles] = useState([]);
  const user = useContext(UserContext);

  const getProfiles=async ()=>{
    API.get('UserProfile').then(res=>{
      if(res.data.data!=null){
        setProfiles(res.data.data);
        console.log(user);
        user.profiles=res.data.data;
      }
    });
 
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
      userAppId: 15,
      isActive:true
    };

    API.post('UserProfile', newProfile).then(res=>{
        if(res.status===200){
          getProfiles();
        }
    });
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
