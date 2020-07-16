import React, { useState, useContext } from "react";
import {
  IonModal,
  IonButton,
  IonContent,
  IonLabel,
  IonInput,
  IonIcon,
  IonItem,
  IonAvatar,
  IonImg,
} from "@ionic/react";
import "../../theme/label.css";
import "../../theme/input.css";
import "../../theme/button.css";
import { golfOutline, documentTextOutline, starOutline } from "ionicons/icons";
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
  const user = useContext(UserContext);

  const save = () => {
    SaveNewGoal(name, description, amount, user.profileSelected.userProfileId);
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
            className="inputText"
            onIonChange={(e) => setName(e.detail.value!)}
          ></IonInput>
        </IonItem>
        <IonItem>
          <IonIcon icon={documentTextOutline} slot="start" />
          <IonInput
            placeholder="Descripcion"
            autofocus={true}
            className="inputText"
            onIonChange={(e) => setDescription(e.detail.value!)}
          ></IonInput>
        </IonItem>
        <IonItem>
          <IonImg src="../../assets/coin.png" style={{height:"20px", width:"20px"}} slot="start"></IonImg>
          <IonInput
            placeholder="Arcomonedas"
            autofocus={true}
            className="inputText"
            onIonChange={(e) => setAmount(parseFloat(e.detail.value!))}
          ></IonInput>
        </IonItem>
        {/* <IonItem>
          <IonIcon icon={peopleOutline} slot="start" />
          <IonLabel color="purple" className="subtitle2">Perfil a asignar: </IonLabel>
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
        </IonItem> */}
      </IonContent>
      {/* <IonButton onClick={() => save()} color="orange">
          Seleccionar Foto
        </IonButton> */}
      <IonButton onClick={() => save()} color="green" className="normalButton">
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

export default NewGoal;
