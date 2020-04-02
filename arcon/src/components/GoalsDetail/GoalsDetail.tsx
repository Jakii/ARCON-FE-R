import React from 'react';
import { IonModal, IonButton, IonContent, IonLabel, IonGrid, IonCol, IonRow, IonProgressBar, IonHeader, IonTitle, IonItem } from '@ionic/react';
import './GoalsDetail.css';

type GoalsProps = {
    Goal: any,
    ShowModal: any,
    SetShowModal: Function
}

const GoalsDetail: React.FC<GoalsProps> = ({ Goal, ShowModal, SetShowModal }) => {

    return (
        <IonModal isOpen={ShowModal}>
            <IonHeader>
                <IonItem text-center align-center>
                    <IonLabel class="title">{Goal.Title}</IonLabel>
                </IonItem>

            </IonHeader>
            <IonContent>
                <IonLabel class="progress">{Goal.Progress}%</IonLabel>
                <IonProgressBar color="success" value={0.5} class="bar"></IonProgressBar>
            </IonContent>

            <IonButton onClick={() => SetShowModal(false)}>Regresar</IonButton>
        </IonModal>
    );
};

export default GoalsDetail;