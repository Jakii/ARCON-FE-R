import React, { useState, useEffect } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Home.css';
import Perfiles from './../components/Perfiles/Perfiles';
import data from './Profiles.json';

type HomeProps={
  User:{},
  SetUser:Function
}

const Home: React.FC<HomeProps> = ({User, SetUser}) => {

  const profiles=[
    {
      "ProfileId": 1,
      "Name":"Gaby",
      "RolId":1,
      "UserAppId":"Gaby"
    },
    {
      "ProfileId": 1,
      "Name":"Issa",
      "RolId":2,
      "UserAppId":"Issa"
    }
];

  return (
    <Perfiles ListaPerfiles={profiles} User={User} SetUser={SetUser} />
  );
};

export default Home;
