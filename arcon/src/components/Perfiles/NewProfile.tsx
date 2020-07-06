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
import "./Perfiles.css";
import { personCircleOutline } from "ionicons/icons";

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

  const save = () => {
    SaveNewProfile(name);
    SetShowModal(false);
  };
  return (
    <IonModal isOpen={ShowModal}>
      <IonContent>
        <IonGrid>
          <IonRow>
            <IonLabel color="purple" style={{ fontSize: "24px" }}>
              Nuevo Perfil
            </IonLabel>
          </IonRow>
          <br />
          <br />
          <IonRow>
            <IonItem>
              <IonIcon icon={personCircleOutline} slot="start" />
              <IonInput
                placeholder="Nombre del perfil"
                autofocus={true}
                color="primary"
                onIonChange={(e) => setName(e.detail.value!)}
              ></IonInput>
            </IonItem>
          </IonRow>
        </IonGrid>
      </IonContent>
      <IonButton onClick={save} color="green">
        Guardar
      </IonButton>
      <IonButton onClick={() => SetShowModal(false)} color="lightblue">
        Regresar
      </IonButton>
    </IonModal>
  );
};

export default NewProfile;
