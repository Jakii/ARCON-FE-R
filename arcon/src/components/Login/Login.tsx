import React, { useState, useContext, EventHandler } from "react";
import {
  IonImg,
  IonInput,
  IonButton,
  IonGrid,
  IonRow,
  IonCol,
  IonItem,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonToast,
} from "@ionic/react";
import "./../../theme/variables.css";
import "./Login.css";
import { UserContext } from "../../App";
import API from "./../../axios/axiosAPI.js";
import Register from "../Register/Register";

const Login: React.FC = () => {
  const [username, setUsername] = useState("gtabora");
  const [password, setPassword] = useState("Minato30.");
  const user = useContext(UserContext);
  const [isRegister, setIsRegister] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  const loginUser = () => {
  
    if(username===''||password===''){
      setToastMessage('Ingrese su correo o contraseña');
      setShowToast(true);
      return;
    }
    const url = "UserApp/Login?UserName=" + username + "&Password=" + password;
    API.get(url).then((res) => {
      if (res.data.succeeded) {
        user.setUserInfo(res.data.data.userApp);
        user.userInfo = res.data.data.userApp;
        user.profiles = res.data.data.userProfiles;
        user.setIsLoggedIn(true);
      } else {
        setToastMessage(res.data.message);
        setShowToast(true);
      }
    });
  };

  const goToRegister = () => {
    setIsRegister(true);
  };

  const setUsernameEvent = (e: any) => {
    setUsername(e.target.value);
  };

  const setPasswordEvent = (e: any) => {
    setPassword(e.target.value);
  };

  return (
    <>
      <IonToast
        isOpen={showToast}
        onDidDismiss={() => setShowToast(false)}
        message={toastMessage}
        duration={2000}
        position="top"
      />
      {!isRegister ? (
        <IonGrid style={{ backgroundColor: "#011627", width: "100%" }}>
          <br/>
          <br/>
          <IonCard>
            <IonCardHeader>
              <IonImg
                src="../../assets/Arcon.png"
                style={{ height: "180px" }}
              />
             
              <br />
              <IonCardTitle style={{ textAlign: "center" }}>
                Iniciar Sesión
              </IonCardTitle>
            </IonCardHeader>

            <IonCardContent>
              <br/>
              <br/>
              <IonItem>
                <IonInput
                  required
                  type="text"
                  placeholder="Usuario"
                  onIonChange={(e: any) => setUsernameEvent(e)}
                ></IonInput>
              </IonItem>


              <IonItem>
                <IonInput
                  required
                  type="password"
                  placeholder="Contraseña"
                  onIonChange={(e: any) => setPasswordEvent(e)}
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
                    color="orange"
                    expand="block"
                    fill="solid"
                    onClick={goToRegister}
                  >
                    Registrarme
                  </IonButton>
                </IonCol>
              </IonRow>
            </IonCardContent>
          </IonCard>
        </IonGrid>
      ) : (
        <Register ShowModal={isRegister} SetShowModal={setIsRegister} />
      )}
    </>
  );
};

export default Login;
