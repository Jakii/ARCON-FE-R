import React, { useState } from "react";
import {
  IonModal,
  IonButton,
  IonContent,
  IonLabel,
  IonInput,
  IonItem,
  IonIcon,
  IonToast,
  IonRadio,
  IonCheckbox,
  IonImg,
  IonRow,
  IonCol,
} from "@ionic/react";
import {
  personCircleOutline,
  mailOutline,
  calendarOutline,
  callOutline,
  lockClosedOutline,
} from "ionicons/icons";
import "./../../theme/input.css";
import "./../../theme/label.css"; 
import "./../../theme/button.css"; 
import API from "./../../axios/axiosAPI.js";
import Conditions from "./Conditions";

type RegisterProps = {
  ShowModal: any;
  SetShowModal: Function;
};

const Register: React.FC<RegisterProps> = ({ ShowModal, SetShowModal }) => {
  const [username, setUsername] = useState("");
  const [firstname, setfirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState(new Date());
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [showConditions, setShowConditions] = useState(false);
  const [acceptTerms, setAcceptTerms] = useState(false);

  const [
    showValidationPasswordConfirmation,
    setShowValidationPasswordConfirmation,
  ] = useState(false);

  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  const setUserNameEvent = (e: any) => {
    setUsername(e.target.value);
  };
  const setFirstnameEvent = (e: any) => {
    setfirstname(e.target.value);
  };
  const setLastnameEvent = (e: any) => {
    setLastname(e.target.value);
  };
  const setEmailEvent = (e: any) => {
    setEmail(e.target.value);
  };
  const setDateOfBirthEvent = (e: any) => {
    setDateOfBirth(e.target.value);
  };
  const setPhoneNumberEvent = (e: any) => {
    setPhoneNumber(e.target.value);
  };
  const setPasswordEvent = (e: any) => {
    setPassword(e.target.value);
  };
  const setPasswordConfirmationEvent = (e: any) => {
    if (e.target.value !== password) {
      setShowValidationPasswordConfirmation(true);
    } else {
      setShowValidationPasswordConfirmation(false);
    }
    setPasswordConfirmation(e.target.value);
  };

  function save() {
    if (
      firstname === "" ||
      lastname === "" ||
      email === "" ||
      password === ""
    ) {
      setToastMessage("Debe llenar todos los campos");
      setShowToast(true);
      return;
    }

    if (!acceptTerms) {
      setToastMessage("Debe aceptar los términos y condiciones.");
      setShowToast(true);
      return;
    }
    const newUserInfo = {
      userName: username,
      name: firstname,
      lastName: lastname,
      email: email,
      birthDate: dateOfBirth,
      isActive: true,
      phoneNumber: phoneNumber,
      password: password,
    };
    debugger;
    API.post("UserApp/Register", newUserInfo).then((res) => {
      debugger;
      if (res.data.succeeded) {
        setToastMessage("Usuario registrado exitosamente");
        setShowToast(true);
        SetShowModal(false);
      } else {
        debugger;
        setToastMessage(res.data.message);
        setShowToast(true);
      }
    });
  }

  const goToConditions = (e: any) => {
    setAcceptTerms(true);
    setShowConditions(true);
  };

  return (
    <IonModal isOpen={ShowModal}>
      <Conditions ShowModal={showConditions} SetShowModal={setShowConditions} />
      <IonToast
        isOpen={showToast}
        onDidDismiss={() => setShowToast(false)}
        message={toastMessage}
        duration={1000}
        position="top"
      />
      <br />

      <IonImg
        src="../../assets/Arcon.png"
        class="imagen"
        style={{ height: "180px", marginLeft: "14px" }}
      />
      <br />
      <IonLabel className="title">
        Registrarme
      </IonLabel>
      <br />
      <br />
      <IonContent>
        <IonRow>
          <IonCol size="12">
            <IonItem style={{ marginRight: "7%" }} lines="none" className="background-input">
              <IonIcon icon={personCircleOutline} slot="start" />
              <IonInput
                placeholder="Usuario"
                autofocus={true}
                required
                onIonChange={(e) => setUserNameEvent(e)}
                className="inputText"
              ></IonInput>
            </IonItem>
          </IonCol>
        </IonRow>

        <IonRow>
          <IonCol size="6">
            <IonItem>
              <IonIcon icon={personCircleOutline} slot="start" />
              <IonInput
                placeholder="Nombres"
                required
                onIonChange={(e) => setFirstnameEvent(e)}
                className="inputText"
              ></IonInput>
            </IonItem>
          </IonCol>
          <IonCol size="6">
            <IonItem style={{ marginRight: "12%" }}>
              {/* <IonIcon icon={personCircleOutline} slot="start" /> */}
              <IonInput
                placeholder="Apellidos"
                required
                onIonChange={(e) => setLastnameEvent(e)}
                className="inputText"
              ></IonInput>
            </IonItem>
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol size="12">
            <IonItem style={{ marginRight: "7%" }}>
              <IonIcon icon={mailOutline} slot="start" />
              <IonInput
                placeholder="Email"
                type="email"
                required
                onIonChange={(e) => setEmailEvent(e)}
                className="inputText"
              ></IonInput>
            </IonItem>
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol size="12">
            <IonItem style={{ marginRight: "7%" }}>
              <IonIcon icon={calendarOutline} slot="start" />
              <IonInput
                placeholder="Fecha de Nacimiento"
                type="date"
                required
                onIonChange={(e) => setDateOfBirthEvent(e)}
                className="inputText"
              ></IonInput>
            </IonItem>
          </IonCol>
        </IonRow>

        <IonRow>
          <IonCol size="12">
            <IonItem style={{ marginRight: "7%" }}>
              <IonIcon icon={callOutline} slot="start" />
              <IonInput
                placeholder="Número de teléfono"
                type="number"
                required
                onIonChange={(e) => setPhoneNumberEvent(e)}
                className="inputText"
              ></IonInput>
            </IonItem>
          </IonCol>
        </IonRow>

        <IonRow>
          <IonCol size="12">
            <IonItem style={{ marginRight: "7%" }}>
              <IonIcon icon={lockClosedOutline} slot="start" />
              <IonInput
                placeholder="Contraseña"
                type="password"
                required
                onIonChange={(e) => setPasswordEvent(e)}
                className="inputText"
              ></IonInput>
            </IonItem>
          </IonCol>
        </IonRow>

        <IonRow>
          <IonCol size="12">
            <IonItem style={{ marginRight: "7%" }}>
              <IonIcon icon={lockClosedOutline} slot="start" />
              <IonInput
                placeholder="Confirmar Contraseña"
                type="password"
                required
                onIonChange={(e) => setPasswordConfirmationEvent(e)}
                className="inputText"
              ></IonInput>
            </IonItem>
          </IonCol>
        </IonRow>
        <br />
        <br />
        {showValidationPasswordConfirmation ? (
          <IonLabel color="danger" style={{ marginLeft: "16%" }}>
            Contraseñas no coinciden
          </IonLabel>
        ) : (
          <></>
        )}
      </IonContent>
      <IonItem lines="none">
        <IonLabel class="terminosYCondiciones">
          Acepta los términos y condiciones
        </IonLabel>
        <IonCheckbox
          slot="start"
          value="terminos"
          onClick={(e: any) => goToConditions(e)}
        />
      </IonItem>
      <IonButton onClick={() => save()} color="green" className="normalButton"> 
        Guardar
      </IonButton>
      <IonButton onClick={() => SetShowModal(false)} color="lightblue" className="normalButton">
        Regresar
      </IonButton>
    </IonModal>
  );
};

export default Register;
