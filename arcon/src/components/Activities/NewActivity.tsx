import React, { useState } from 'react';
import {
    IonModal, IonButton, IonContent, IonLabel, IonGrid, IonCol,
    IonRow, IonInput,IonSelect, IonSelectOption
} from '@ionic/react';

type NewActivityProps = {
    ShowModal: any,
    SetShowModal: Function,
    SaveNewActivity: Function
}

const NewGoal: React.FC<NewActivityProps> = ({ ShowModal, SetShowModal, SaveNewActivity }) => {
    const [name, setName] = useState<string>();

    const save = () => {
        SaveNewActivity(name);
        SetShowModal(false);
    }
    return (
        <IonModal isOpen={ShowModal}>
            <IonContent>
                <IonGrid>
                    <IonRow>
                        <IonLabel class="title">Nueva Actividad</IonLabel>
                    </IonRow>
                    <br />
                    <br />
                    <IonRow>
                        <IonInput placeholder="Nombre de la actividad"
                            autofocus={true}
                            color="secondary"
                            onIonChange={e => setName(e.detail.value!)}></IonInput>
                    </IonRow>
                </IonGrid>
            </IonContent>
            <IonButton onClick={() => save()} color="green">Guardar</IonButton>
            <IonButton onClick={() => SetShowModal(false)} color="lightblue">Regresar</IonButton>
        </IonModal>
    );
};

export default NewGoal;