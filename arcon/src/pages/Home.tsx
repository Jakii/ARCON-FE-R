import React, { useState, useEffect, useContext } from 'react';
import { IonIcon, IonTitle, IonToolbar, IonButtons, IonButton, IonPage, IonContent, IonToast } from '@ionic/react';
import Perfiles from './../components/Perfiles/Perfiles';
import { add } from 'ionicons/icons';
import NewProfile from './../components/Perfiles/NewProfile';
import API from './../axios/axiosAPI.js';
import { UserContext } from '../App';
import '../theme/label.css';
import '../theme/button.css';

type HomeProps = {
}

const Home: React.SFC<HomeProps> = ({ }) => {
  const [showNewProfile, setShowNewProfile] = useState(false);
  const [profiles, setProfiles] = useState([]);
  const [showToast, setShowToast]=useState(false);
  const [messageToast, setMessageToast]=useState('');

  const user = useContext(UserContext);

  const getProfiles=()=>{
    setProfiles(user.profiles);
  }

  function updateProfiles(){
    API.get('UserProfile').then(res=>{
      if(res.status===200){
        var filterProfiles=res.data.data.filter((x:any)=>{
          return x.userAppId===user.userInfo.userId&&x.isActive===true
        });
        debugger;
        setProfiles(filterProfiles);
        user.profiles=filterProfiles;
      }
    })
  }

  useEffect(() => {
    getProfiles();
  }, []);

  const addNewProfile = () => {
    setShowNewProfile(true);
  }


  const saveNewProfile = (name: any, date:Date, code:number, username:any) => {
    var newProfile = {
      name: name,
      rolId: 2,
      userAppId: user.userInfo.userId,
      isActive:true,
      birthDate:date,
      userName:username,
      accessCode:code
    };
    debugger;
    API.post('UserProfile?tipoDePerfil="child"', newProfile).then(res=>{
        if(res.status===200){
          updateProfiles();
          setMessageToast('Perfil creado correctamente');
          setShowToast(true);
          setShowNewProfile(false);
        }
        else{
          setMessageToast('Lo sentimos, no hemos podido crear tu nuevo perfil.');
          setShowToast(false);
        }
    });
  }

  return (
    <IonPage>
        <IonToast
        isOpen={showToast}
        onDidDismiss={() => setShowToast(false)}
        message={messageToast}
        duration={1000}
        position="top"
      />
       <IonToolbar>
          <IonButtons slot="primary">
           {user.userInfo.rolId===1? <IonButton onClick={() => addNewProfile()}>
              <IonIcon slot="icon-only" icon={add}  color="purple"/>
            </IonButton>:<></>}
          </IonButtons>
          <IonTitle size="large" color="purple" className="toolbarTitle">Perfiles</IonTitle>

        </IonToolbar>
      <IonContent>
        <Perfiles ListaPerfiles={profiles} />
        
        <NewProfile ShowModal={showNewProfile} SetShowModal={() => { setShowNewProfile(false) }} SaveNewProfile={saveNewProfile} />
      </IonContent>
    </IonPage>
  );
};

export default Home;
