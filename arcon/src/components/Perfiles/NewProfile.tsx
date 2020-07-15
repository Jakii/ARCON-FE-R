import React, { useState } from "react";
import {
  IonModal,
  IonButton,
  IonContent,
  IonLabel,
  IonInput,
  IonItem,
  IonIcon,
  IonDatetime,
} from "@ionic/react";
import "../../theme/label.css";
import "../../theme/input.css";
import "../../theme/button.css";
import { personCircleOutline, calendarOutline, lockClosedOutline } from "ionicons/icons";

type NewProfileProps = {
  ShowModal: any;
  SetShowModal: Function;
  SaveNewProfile: Function;
};

const NewProfile: React.FC<NewProfileProps> = ({
  ShowModal,
  SetShowModal,
  SaveNewProfile,
}) => {
  const [name, setName] = useState<string>();
  const [selectedDate, setSelectedDate] = useState<string>('2012-12-15T13:47:20.789');
  const [code, setCode]=useState<number>();
  const [username, setUsername]=useState<string>();

  const save = () => {
    SaveNewProfile(name, new Date(selectedDate), code, username);
    SetShowModal(false);
  };
  return (
    <IonModal isOpen={ShowModal}>
      <IonContent>
        <IonLabel color="purple" className="title">
          Nuevo Perfil
        </IonLabel>
        <br />
        <br />
        <br />
        <IonItem>
          <IonIcon icon={personCircleOutline} slot="start" />
          <IonInput
            placeholder="Nombre del perfil"
            autofocus={true}
            color="primary"
            onIonChange={(e) => setName(e.detail.value!)}
            className="inputText"
          ></IonInput>
        </IonItem>
        <IonItem>
          <IonIcon icon={personCircleOutline} slot="start" />
          <IonInput
            placeholder="Usuario"
            autofocus={true}
            color="primary"
            onIonChange={(e) => setUsername(e.detail.value!)}
            className="inputText"
          ></IonInput>
        </IonItem>    
        {/* <IonItem>
          <IonIcon icon={calendarOutline} slot="start" />
          <IonInput
            placeholder="Edad"
            type="date"
            required
            // onIonChange={(e) => setDateOfBirthEvent(e)}
            className="inputText"
          ></IonInput>
        </IonItem> */}
        <IonItem>
        <IonIcon icon={calendarOutline} slot="start" />
          <IonLabel className="date" style={{fontSize:"17px", fontWeight: "bolder"}}>Fecha de Nacimiento:</IonLabel>
          <IonDatetime style={{fontSize:"17px", fontWeight: "bolder"}} displayFormat="MM/DD/YYYY" min="2000-01-01" max={"2025-01-01"} value={selectedDate} onIonChange={e => setSelectedDate(e.detail.value!)}></IonDatetime>
        </IonItem>
        <IonItem>
          <IonIcon icon={lockClosedOutline} slot="start" />
          <IonInput
            placeholder="Código de ingreso"
            type="number"
            required
             onIonChange={(e) => setCode(parseInt(e.detail.value!))}
            className="inputText"
          ></IonInput>
        </IonItem>
      </IonContent>
      <IonButton onClick={save} color="green" className="normalButton">
        Guardar
      </IonButton>
      <IonButton
        onClick={() => SetShowModal(false)}
        color="lightblue"
        className="normalButton"
      >
        Regresar
      </IonButton>
    </IonModal>
  );
};

export default NewProfile;
