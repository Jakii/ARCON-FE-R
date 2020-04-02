import React, {useState} from 'react';
import {
    IonModal, IonButton, IonContent, IonLabel, IonGrid, IonCol,
    IonRow, IonInput
} from '@ionic/react';
import './Perfiles.css';

type NewProfileProps = {
    ShowModal: any,
    SetShowModal: Function,
    SaveNewProfile:Function
}

const NewProfile: React.FC<NewProfileProps> = ({ ShowModal, SetShowModal, SaveNewProfile }) => {
    const [name, setName]=useState<string>();

    const save=()=>{
        SaveNewProfile(name);
        SetShowModal(false);
    }
    return (
        <IonModal isOpen={ShowModal}>
            <IonContent>
                <IonGrid>
                    <IonRow>
                        <IonLabel class="title">Nuevo Perfil</IonLabel>
                    </IonRow>
                    <br />
                    <br />
                    <IonRow>
                        <IonInput placeholder="Nombre del perfil" 
                        autofocus={true} 
                        color="secondary"
                        onIonChange={e=>setName(e.detail.value!)}></IonInput>
                    </IonRow>

                </IonGrid>
            </IonContent>
            <IonButton onClick={save} color="success">Guardar</IonButton>
            <IonButton onClick={() => SetShowModal(false)}>Regresar</IonButton>
        </IonModal>
    );
};

export default NewProfile;