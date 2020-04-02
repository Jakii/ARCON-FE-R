import React, { useState } from 'react';
import { IonButton, IonIcon, IonGrid, IonRow, IonCol, IonList, IonItem, IonLabel, IonContent, IonBadge } from '@ionic/react';
import { arrowForward, add } from 'ionicons/icons';

import GoalsDetail from './../GoalsDetail/GoalsDetail';

type GoalsProps = {
    List: any[]
}

const GoalsList: React.FC<GoalsProps> = ({List}) => {
    
    const [selectedGoal, setSelectedGoal]=useState({});
    const [selectedActivities, setSelectedActivities]=useState([]);
    const [showModal,setShowModal]=useState(false);

    const goToDetail=(item:any)=>{
        setSelectedGoal(item);
        setShowModal(true);
        setSelectedActivities(item.Activities);
    }

    const renderGoals = List.map(x => {
        return (
            <IonItem>
                <IonLabel>{x.Title}</IonLabel>
                <IonButton onClick={()=>goToDetail(x)}> <IonIcon icon={arrowForward} /></IonButton>
            </IonItem>
        )
    });

    return (
        <IonContent>
            <IonList>
                {renderGoals}
            </IonList>
            <GoalsDetail 
            Goal={selectedGoal}
            ShowModal={showModal}
            SetShowModal={setShowModal}
            Activities={selectedActivities}/>
        </IonContent>
    )
}

export default GoalsList;