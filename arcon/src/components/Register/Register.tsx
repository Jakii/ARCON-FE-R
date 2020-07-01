import React, { useState } from "react";
import {
  IonModal,
  IonButton,
  IonContent,
  IonLabel,
  IonInput,
  IonItem,
  IonIcon,
  IonToast
} from "@ionic/react";
import {
  personCircleOutline,
  mailOutline,
  calendarOutline,
  callOutline,
  lockClosedOutline,
} from "ionicons/icons";
import "./Register.css";
import API from "./../../axios/axiosAPI.js";

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

  const [
    showValidationPasswordConfirmation,
    setShowValidationPasswordConfirmation,
  ] = useState(false);

  const [showToast, setShowToast]=useState(false);
  const [toastMessage, setToastMessage]=useState('');

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
    }
    else{
      setShowValidationPasswordConfirmation(false);
    }
    setPasswordConfirmation(e.target.value);
  };

  async function save() {
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

    await API.post('UserApp/Register',newUserInfo).then(res=>{
        if(res.data.succeeded){
           setToastMessage('Usuario registrado exitosamente');
           setShowToast(true);
           SetShowModal(false);
        }
        else{
          setToastMessage(res.data.data[0].description)
          setShowToast(true);
        }
    });
  }

  return (
    <IonModal isOpen={ShowModal}>
      <IonToast
        isOpen={showToast}
        onDidDismiss={() => setShowToast(false)}
        message={toastMessage}
        duration={1000}
        position="top"
      />
      <IonLabel color="purple" class="title">
        Registro
      </IonLabel>
      <IonContent>
        <br />
        <br />
        <br />
        <IonItem>
          <IonIcon icon={personCircleOutline} slot="start" />
          <IonInput
            placeholder="Usuario"
            autofocus={true}
            required
            onIonChange={(e) => setUserNameEvent(e)}
          ></IonInput>
        </IonItem>
        <IonItem>
          <IonIcon icon={personCircleOutline} slot="start" />
          <IonInput
            placeholder="Nombres"
            required
            onIonChange={(e) => setFirstnameEvent(e)}
          ></IonInput>
        </IonItem>
        <IonItem>
          <IonIcon icon={personCircleOutline} slot="start" />
          <IonInput
            placeholder="Apellidos"
            required
            onIonChange={(e) => setLastnameEvent(e)}
          ></IonInput>
        </IonItem>
        <IonItem>
          <IonIcon icon={mailOutline} slot="start" />
          <IonInput
            placeholder="Email"
            type="email"
            required
            onIonChange={(e) => setEmailEvent(e)}
          ></IonInput>
        </IonItem>
        <IonItem>
          <IonIcon icon={calendarOutline} slot="start" />
          <IonInput
            placeholder="Fecha de Nacimiento"
            type="date"
            required
            onIonChange={(e) => setDateOfBirthEvent(e)}
          ></IonInput>
        </IonItem>
        <IonItem>
          <IonIcon icon={callOutline} slot="start" />
          <IonInput
            placeholder="Número de teléfono"
            type="number"
            required
            onIonChange={(e) => setPhoneNumberEvent(e)}
          ></IonInput>
        </IonItem>
        <IonItem>
          <IonIcon icon={lockClosedOutline} slot="start" />
          <IonInput
            placeholder="Contraseña"
            type="password"
            required
            onIonChange={(e) => setPasswordEvent(e)}
          ></IonInput>
        </IonItem>
        <IonItem>
          <IonIcon icon={lockClosedOutline} slot="start" />
          <IonInput
            placeholder="Confirmar Contraseña"
            type="password"
            required
            onIonChange={(e) => setPasswordConfirmationEvent(e)}
          ></IonInput>
        </IonItem>
        {showValidationPasswordConfirmation ? (
          <IonLabel color="danger" style={{ marginLeft: "16%" }}>
            Contraseñas no coinciden
          </IonLabel>
        ) : (
          <></>
        )}
      </IonContent>
      <IonButton onClick={() => save()} color="green">
        Guardar
      </IonButton>
      <IonButton onClick={() => SetShowModal(false)} color="lightblue">
        Regresar
      </IonButton>
    </IonModal>
  );
};

export default Register;
