import React, { useState } from "react";
import {
  IonModal,
  IonButton,
  IonContent,
  IonLabel,
  IonGrid,
  IonRow,
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
  return (
    <IonModal isOpen={ShowModal}>
      <IonContent>
        <IonLabel color="purple" class="title">
          Nueva Actividad
        </IonLabel>
        <br />
        <br />
        <br />
        <IonItem>
          <IonIcon icon={documentTextOutline} slot="start" />
          <IonInput
              placeholder="Nombre de la actividad"
              autofocus={true}
              onIonChange={(e) => setName(e.detail.value!)}
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
