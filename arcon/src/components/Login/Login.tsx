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
  IonLabel,
  IonFooter,
  IonContent,
} from "@ionic/react";
import "./../../theme/variables.css";
import "./../../theme/input.css";
import "./../../theme/label.css";
import "./../../theme/button.css";
import "./../../theme/card.css";
import { UserContext } from "../../App";
import API from "./../../axios/axiosAPI.js";
import Register from "../Register/Register";

const Login: React.FC = () => {
  const [username, setUsername] = useState("gtabora");
  const [password, setPassword] = useState("Minato30.");
  const [email, setEmail]=useState("gabiisa03@gmail.com");
  const user = useContext(UserContext);
  const [isRegister, setIsRegister] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  const loginUser = () => {
    if (username === "" || password === ""||email==="") {
      setToastMessage("Debes llenar todos los campos.");
      setShowToast(true);
      return;
    }
    const url = "UserApp/Login?UserName=" + username + "&Password=" + password+"&email="+email;
    API.get(url).then((res) => {
      if (res.data.succeeded) {
        user.setUserInfo(res.data.data.userApp);
        user.userInfo = res.data.data.userApp;
        user.profiles = res.data.data.userProfiles.filter((x:any)=>{return x.isActive===true});
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

  const setEmailEvent = (e: any) => {
    setEmail(e.target.value);
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
        <IonGrid style={{ backgroundColor: "#00A6FB", width: "100%" }}>
          <IonCard className="cardCenter">
            <IonCardHeader>
              <IonImg
                src="../../assets/ArconFinal.png"
                style={{ height: "180px" }}
              />

              <br />
              <IonCardTitle style={{ textAlign: "center" }}>
                <IonLabel className="title">¡Hola!</IonLabel>
                <br />
                <IonLabel className="subtitle">
                  Inicia sesión con tu cuenta
                </IonLabel>
              </IonCardTitle>
            </IonCardHeader>

            <IonCardContent>
              <br />
              <br />
              <IonItem>
                <IonInput
                  required
                  type="text"
                  placeholder="Correo electrónico"
                  onIonChange={(e: any) => setEmailEvent(e)}
                  className="inputText"
                ></IonInput>
              </IonItem>
              <IonItem>
                <IonInput
                  required
                  type="text"
                  placeholder="Usuario"
                  onIonChange={(e: any) => setUsernameEvent(e)}
                  className="inputText"
                ></IonInput>
              </IonItem>

              <IonItem>
                <IonInput
                  required
                  type="password"
                  placeholder="Contraseña"
                  onIonChange={(e: any) => setPasswordEvent(e)}
                  className="inputText"
                ></IonInput>
              </IonItem>
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
                    className="normalButton"
                  >
                    Iniciar Sesión
                  </IonButton>
                </IonCol>
              </IonRow>
              <br />
              <IonRow>
                <IonLabel className="subtitle2">
                  ¿No tienes una cuenta?{" "}              
                </IonLabel>
              </IonRow>
              <IonRow>
              <IonButton
                    color="orange"
                    fill="clear"
                    onClick={goToRegister}
                    className="buttonLink"
                    expand="full"
                  >
                    Registrarme
                  </IonButton>
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
