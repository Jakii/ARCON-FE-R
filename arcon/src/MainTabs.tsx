import React, { useState } from "react";
import { Redirect, Route } from "react-router-dom";
import {
    IonApp,
    IonIcon,
    IonLabel,
    IonRouterOutlet,
    IonTabBar,
    IonTabButton,
    IonTabs,
    IonPage,
    IonToolbar
  } from "@ionic/react";
  import { star, home, settings, reorderThreeOutline } from "ionicons/icons";
import Home from "./pages/Home";
import Goals from "./pages/Goals";
import Kids from "./pages/Kids";
import Profile from "./pages/Profile";
import History from "./pages/History";
interface IAppProps {}

const MainTabs: React.FC<IAppProps>= () => {
  return (
    <IonTabs>
        <IonRouterOutlet>
          <Route path="/:tab(home)" component={Home} exact={true} />
          <Route path="/:tab(goals)" component={Goals} exact={true} />
          <Route path="/:tab(profile)" component={Profile} exact={true}/>
          <Route path="/:tab(history)" component={History} exact={true}/>
          <Route path="/" render={() => <Redirect to="/home" />} />          
        
        </IonRouterOutlet> 
        <IonTabBar slot="bottom">
        <IonTabButton tab="home" href="/home">
          <IonIcon icon={home} />
          <IonLabel>Perfiles</IonLabel>
        </IonTabButton>
        <IonTabButton tab="goals" href="/goals">
          <IonIcon icon={star} />
          <IonLabel>Metas</IonLabel>
        </IonTabButton>
        <IonTabButton tab="history" href="/history">
          <IonIcon icon={reorderThreeOutline} />
          <IonLabel>Historial</IonLabel>
        </IonTabButton>
        <IonTabButton tab="profile" href="/profile">
          <IonIcon icon={settings} />
          <IonLabel>Mi cuenta</IonLabel>
        </IonTabButton>
      </IonTabBar>
      </IonTabs>
  );
};

export default MainTabs;
