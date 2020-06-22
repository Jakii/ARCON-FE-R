import React, { useState, useContext } from "react";
import { Redirect, Route, Router } from "react-router-dom";
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from "@ionic/react";
import MainTabs from "./MainTabs";
import { IonReactRouter } from "@ionic/react-router";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";
import Login from "./components/Login/Login";
import { userInfo } from "os";

interface IUserManager {
  setIsLoggedIn: Function;
  setUserInfo: Function;
  userInfo:any;
  profiles:any;
  profileSelected:any;
}

const user: IUserManager = {
  setIsLoggedIn: () => {},
  setUserInfo: () => {},
  userInfo:{},
  profiles:[],
  profileSelected:{}
};

export const UserContext = React.createContext<IUserManager>(user);
const IonicApp: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userInfo, setUserInfo]=useState({});
  const user = useContext(UserContext);

  user.setIsLoggedIn = setIsLoggedIn;
  user.setUserInfo=setUserInfo;
  user.userInfo=userInfo;
  user.profileSelected=userInfo;
  
  return (
    <IonApp>
      <IonReactRouter>
        <Route path="/Login" component={Login} exact />
        <Route path="/" component={isLoggedIn ? MainTabs : Login} />
      </IonReactRouter>
    </IonApp>
  );
};

const App: React.FC = () => {
 
  return (
    <UserContext.Provider value={user}>
      <IonicApp />
    </UserContext.Provider>
  );
};
export default App;
