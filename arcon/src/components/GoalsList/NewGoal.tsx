import React, { useState, useContext } from "react";
import {
  IonModal,
  IonButton,
  IonContent,
  IonLabel,
  IonGrid,
  IonCol,
  IonRow,
  IonInput,
  IonSelect,
  IonSelectOption,
  IonIcon,
  IonItem,
} from "@ionic/react";
import "./NewGoal.css";
import {
  golfOutline,
  documentTextOutline,
  cashOutline,
  peopleOutline,
} from "ionicons/icons";
import { UserContext } from "../../App";

type NewGoalProps = {
  ShowModal: any;
  SetShowModal: Function;
  SaveNewGoal: Function;
};

const NewGoal: React.FC<NewGoalProps> = ({
  ShowModal,
  SetShowModal,
  SaveNewGoal,
}) => {
  const [name, setName] = useState<string>();
  const [description, setDescription] = useState<string>();
  const [amount, setAmount] = useState<number>(0);
  const [profile, setProfile] = useState<string>();
  const user = useContext(UserContext);

  const save = () => {
    SaveNewGoal(name, description, amount, profile);
    SetShowModal(false);
  };
  return (
    <IonModal isOpen={ShowModal}>
      <IonContent>
        <IonLabel color="purple" class="title">
          Nueva Meta
        </IonLabel>
        <br />
        <br />
        <br />
        <IonItem>
          <IonIcon icon={golfOutline} slot="start" />
          <IonInput
            placeholder="Nombre de la meta"
            autofocus={true}
            // color="lightblue"
            onIonChange={(e) => setName(e.detail.value!)}
          ></IonInput>
        </IonItem>
        <IonItem>
          <IonIcon icon={documentTextOutline} slot="start" />
          <IonInput
            placeholder="Descripcion"
            autofocus={true}
            // color="lightblue"
            onIonChange={(e) => setDescription(e.detail.value!)}
          ></IonInput>
        </IonItem>
        <IonItem>
          <IonIcon icon={cashOutline} slot="start" />
          <IonInput
            placeholder="Monto"
            autofocus={true}
            // color="lightblue"
            onIonChange={(e) => setAmount(parseFloat(e.detail.value!))}
          ></IonInput>
        </IonItem>
        <IonItem>
          <IonIcon icon={peopleOutline} slot="start" />
          <IonLabel color="purple">Perfil a asignar: </IonLabel>
          <IonSelect
            value={profile}
            placeholder="Seleccionar perfil a asignar"
            onIonChange={(e) => setProfile(e.detail.value)}
          >
            {user.profiles.map((x: any) => {
              return (
                <IonSelectOption value={x.userProfileId}>
                  {x.name}
                </IonSelectOption>
              );
            })}
          </IonSelect>
        </IonItem>
      </IonContent>
      {/* <IonButton onClick={() => save()} color="orange">
          Seleccionar Foto
        </IonButton> */}
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
