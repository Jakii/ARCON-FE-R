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
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const user = useContext(UserContext);
  const [isRegister, setIsRegister] = useState(false);
  const [showToast, setShowToast]=useState(false);
  const [toastMessage, setToastMessage]=useState('');

  const loginUser = async () => {
    const url = "UserApp/Login?UserName=" + username + "&Password=" + password;
    await API.get(url).then((res) => {
      if (res.data.succeeded) {
        user.setIsLoggedIn(true);
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
      }
      else{
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
        duration={1000}
        position="top"
      />
      {!isRegister ? (
        <IonGrid style={{ backgroundColor: "#011627", width:'100%' }}>
          {/* <IonImg src="../../assets/login.jpg" class="imagen" />
          <br /> */}
          <br/>  
          <br/>  
          <br/>  
          <br/>
          <br/>  
          <br/>  
          <br/>
          <IonCard>
            <IonCardHeader>
              <IonCardTitle style={{textAlign:'center'}}>Iniciar Sesión</IonCardTitle>
            </IonCardHeader>

            <IonCardContent>
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
                  type="text"
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
