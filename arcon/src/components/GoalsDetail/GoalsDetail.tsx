import React from 'react';
import { IonModal, IonButton, IonContent, IonLabel, IonGrid, IonCol, 
    IonRow, IonProgressBar, IonHeader, IonTitle, IonItem, IonList, IonCheckbox } from '@ionic/react';
import './GoalsDetail.css';

type GoalsProps = {
    Goal: any,
    ShowModal: any,
    SetShowModal: Function,
    Activities:any[]
}

const GoalsDetail: React.FC<GoalsProps> = ({ Goal, ShowModal, SetShowModal, Activities }) => {

    const renderActivities = Activities.map(x => {
        return (
            <IonItem>
                <IonLabel>{x.Name}</IonLabel>
                <IonCheckbox slot="end" color="secondary"></IonCheckbox>
            </IonItem>
        )
    });

    return (
        <IonModal isOpen={ShowModal}>
            <IonContent>
                <IonGrid>
                    <IonRow>
                        <IonCol size="5"></IonCol>
                        <IonCol size="4" className="ion-align-self-center">
                            <IonLabel class="title">{Goal.Title}</IonLabel>
                        </IonCol>
                        <IonCol size="4"></IonCol>
                    </IonRow>
                    <br />
                    <IonRow>
                        <IonCol size="5"></IonCol>
                        <IonCol size="4" className="ion-align-self-center">
                            <IonLabel class="progress">{Goal.Progress}%</IonLabel>
                        </IonCol>
                        <IonCol size="4"></IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol size="1"></IonCol>
                        <IonCol size="10" className="ion-align-self-center">
                            <IonProgressBar color="success" value={Goal.Progress/100} class="bar"></IonProgressBar>
                        </IonCol>
                    </IonRow>
                    <br />
                    <br />
                    <IonRow>
                        <IonCol size="10">
                            <IonLabel class="subtitle">Actividades</IonLabel>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol size="12" >
                            <IonList>
                                {renderActivities}
                            </IonList>
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonContent>

            <IonButton onClick={() => SetShowModal(false)}>Regresar</IonButton>
        </IonModal>
    );
};

export default GoalsDetail;