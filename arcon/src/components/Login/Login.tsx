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
import Register from "../Register/Register";

const Login: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const user = useContext(UserContext);
  const [isRegister, setIsRegister] = useState(false);

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
    const userInfor = {
      userProfileId: 1,
      rolId: 1,
      userAppId: 15,
      name: "Evelyn Paz",
      isActive: true,
    };

    user.setIsLoggedIn(true);
    user.setUserInfo(userInfor);
    user.userInfo = userInfor;
  };

  const goToRegister=()=>{
    setIsRegister(true);
  }

  const save=()=>{

  }

  return (
    <>
      {!isRegister ? (
        <IonGrid>
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
                onClick={goToRegister}
              >
                Registrarme
              </IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      ) : (
        <Register ShowModal={isRegister} SetShowModal={setIsRegister} Save={save} />
           
      )}
    </>
  );
};

export default Login;
