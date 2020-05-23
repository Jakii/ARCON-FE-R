import React, { useState } from 'react';
import {
    IonModal, IonButton, IonContent, IonLabel, IonGrid, IonCol,
    IonRow, IonProgressBar, IonImg, IonTitle, IonItem, IonList, IonCheckbox, IonIcon
} from '@ionic/react';
import { star } from 'ionicons/icons';
import './GoalsDetail.css';
import NewActivity from './../Activities/NewActivity';

type GoalsProps = {
    Goal: any,
    ShowModal: any,
    SetShowModal: Function,
    Activities: any[]
}

const GoalsDetail: React.FC<GoalsProps> = ({ Goal, ShowModal, SetShowModal, Activities }) => {
    const [showNewActivity, setShowNewActivity] = useState(false);
    const [activities, setActivities] = useState(Activities);
    const [id, setId] = useState(1);
    const [goal, SetGoal] = useState(Goal);
    const renderActivities = activities.map(x => {
        return (
            <IonItem>
                <IonLabel>{x.Name}</IonLabel>
                <IonCheckbox slot="end" color="secondary" onIonChange={(e) => changePercent(e.detail.checked, x)}></IonCheckbox>
            </IonItem>
        )
    });

    const addNewActivity = () => {
        setShowNewActivity(true);
    }

    const changePercent = (checked: boolean, item: any) => {
        item.Checked = true;
        var totalActivities = activities.length;
        var totalActivitiesTrue = activities.filter(x => {
            return x.Checked === true
        }).length;

        var newPercent = totalActivitiesTrue / totalActivities;
        Goal.Progress = newPercent;

        SetGoal(Goal);
    }

    const saveNewActivity = (name: string) => {
        var newActivity = {
            Name: name,
            ActivityId: id,
            Checked: false
        }
        setId(id + 1);
        Activities.push(newActivity);
        setActivities(Activities);
    }

    return (
        <IonModal isOpen={ShowModal}>
            <IonContent>
                <IonImg src="../../assets/viajeadisney.jpg" class="imagen" />
                <IonGrid>
                    <IonRow>
                        <IonLabel class="title" color="purple" >{Goal.Title}</IonLabel>
                    </IonRow>
                    <br />
                    <IonRow>
                        <IonCol size="5"></IonCol>
                        <IonCol size="4" className="ion-align-self-center">
                            <IonLabel class="progress" color="darkblue">{Goal.Progress}%</IonLabel>
                        </IonCol>
                        <IonCol size="4"></IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol size="1"></IonCol>
                        <IonCol size="10" className="ion-align-self-center">
                            <IonProgressBar color="green" value={Goal.Progress / 100} class="bar"></IonProgressBar>                          
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
                        {renderActivities}
                        </IonCol>
                    </IonRow>
                </IonGrid>
                <NewActivity ShowModal={showNewActivity} SetShowModal={setShowNewActivity} SaveNewActivity={saveNewActivity} />
            </IonContent>
            <IonButton
                ion-button
                icon-start
                color="lightpurple"
                onClick={() => addNewActivity()}
            >
                Nueva Actividad
                        </IonButton>
            <IonButton onClick={() => SetShowModal(false)} color="lightblue">Regresar</IonButton>
        </IonModal>
    );
};

export default GoalsDetail;