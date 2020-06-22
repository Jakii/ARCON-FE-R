import React, { useState, useContext } from "react";
import {
  IonImg,
  IonInput,
  IonButton,
  IonGrid,
  IonRow,
  IonCol,
  IonItem,
} from "@ionic/react";
import "./../../theme/variables.css";
import "./Login.css";
import { UserContext } from "../../App";
import API from "./../../axios/axiosAPI.js";

const Login: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const user = useContext(UserContext);

  const loginUser = async () => {
    const userInfo = {
      userName: username,
      password: password,
    };

    // await API.post('UserApp/Login', {userInfo}).then(res=>{
    //     if(res.data.success){
    //         user.setIsLoggedIn(true);
    //     }
    // });
    const userInfor={
      userProfileId: 1,
      rolId: 1,
      userAppId: 15,
      name: "Evelyn Paz",
      isActive: true
    };

    user.setIsLoggedIn(true);
    user.setUserInfo(userInfor);
    user.userInfo=userInfor;
  };

  return (
    <IonGrid className="bg">
      <IonImg src="../../assets/login.jpg" class="imagen" />
      <br />
      <IonItem>
        <IonInput
          required
          type="text"
          placeholder="Usuario"
          onIonChange={(e: any) => setUsername(e.target.value)}
        ></IonInput>
      </IonItem>

      <IonItem>
        <IonInput
          required
          type="text"
          placeholder="Contraseña"
          onIonChange={(e: any) => setPassword(e.target.value)}
        ></IonInput>
      </IonItem>

      <br />
      <br />
      <br />

      <IonRow>
        <IonCol size="1"></IonCol>
        <IonCol size="10">
          <IonButton
            color="green"
            expand="block"
            fill="solid"
            onClick={loginUser}
          >
            Iniciar Sesión
          </IonButton>

          <IonButton
            color="darkblue"
            expand="block"
            fill="solid"
            routerLink="/"
          >
            Registrarme
          </IonButton>
        </IonCol>
      </IonRow>
    </IonGrid>
  );
};

export default Login;
