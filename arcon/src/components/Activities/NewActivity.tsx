import React, { useState } from "react";
import {
  IonModal,
  IonButton,
  IonContent,
  IonLabel,
  IonInput,
  IonItem,
  IonIcon,
} from "@ionic/react";
import { documentTextOutline } from "ionicons/icons";

type NewActivityProps = {
  ShowModal: any;
  SetShowModal: Function;
  SaveNewActivity: Function;
};

const NewGoal: React.FC<NewActivityProps> = ({
  ShowModal,
  SetShowModal,
  SaveNewActivity,
}) => {
  const [name, setName] = useState<string>();

  const save = () => {
    SaveNewActivity(name);
    SetShowModal(false);
  };
  
  const setNameEvent=(e:any)=>{
    setName(e.target.value);
  }
  return (
    <IonModal isOpen={ShowModal}>
      <IonContent>
        <br/>
        <IonLabel color="purple" class="title">
          Nueva Tarea
        </IonLabel>
        <br />
        <br />
        <br />
        <IonItem>
          <IonIcon icon={documentTextOutline} slot="start" />
          <IonInput
              placeholder="Nombre de la tarea"
              autofocus={true}
              onIonChange={(e) => setNameEvent(e)}
            ></IonInput>
        </IonItem>
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

export default NewGoal;
