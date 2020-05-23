import React, { useState } from 'react';
import {
    IonModal, IonButton, IonContent, IonLabel, IonGrid, IonCol,
    IonRow, IonInput,IonSelect, IonSelectOption
} from '@ionic/react';
import './NewGoal.css';

type NewGoalProps = {
    ShowModal: any,
    SetShowModal: Function,
    SaveNewGoal: Function
}

const NewGoal: React.FC<NewGoalProps> = ({ ShowModal, SetShowModal, SaveNewGoal }) => {
    const [name, setName] = useState<string>();
    const [description, setDescription] = useState<string>();
    const [amount, setAmount] = useState<number>(0);
    const [profile, setProfile]=useState<string>();

    const save = () => {
        SaveNewGoal(name, description, amount, profile);
        SetShowModal(false);
    }
    return (
        <IonModal isOpen={ShowModal}>
            <IonContent>
                <IonGrid>
                    <IonRow>
                        <IonLabel color="purple" class="title">Nueva Meta</IonLabel>
                    </IonRow>
                    <br />
                    <br />
                    <IonRow>
                        <IonInput placeholder="Nombre de la meta"
                            autofocus={true}
                            color="lightblue"
                            onIonChange={e => setName(e.detail.value!)}></IonInput>
                    </IonRow>
                    <IonRow>
                        <IonInput placeholder="Descripcion"
                            autofocus={true}
                            color="lightblue"
                            onIonChange={e => setDescription(e.detail.value!)}></IonInput>
                    </IonRow>
                    <IonRow>
                        <IonInput placeholder="Monto"
                            autofocus={true}
                            color="lightblue"
                            onIonChange={e => setAmount(parseFloat(e.detail.value!))}></IonInput>
                    </IonRow>
                    <br/>
                    <br/>
                    <IonRow>
                        <IonLabel color="purple">Perfil a asignar: </IonLabel>
                    
                    </IonRow>
                    <IonRow>
                        <IonSelect value={profile} placeholder="Seleccionar perfil a asignar" onIonChange={e => setProfile(e.detail.value)}>
                            <IonSelectOption value="Gaby">Gaby</IonSelectOption>
                            <IonSelectOption value="Issa">Issa</IonSelectOption>
                        </IonSelect>
                    </IonRow>

                </IonGrid>
            </IonContent>
            <IonButton onClick={() => save()} color="green">Guardar</IonButton>
            <IonButton onClick={() => SetShowModal(false)} color="lightblue">Regresar</IonButton>
        </IonModal>
    );
};

export default NewGoal;