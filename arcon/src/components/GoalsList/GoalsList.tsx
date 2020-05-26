import React, { useState } from 'react';
import { IonList, IonItem, IonCard, IonContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonImg } from '@ionic/react';
import { arrowForward, add } from 'ionicons/icons';

import GoalsDetail from './../GoalsDetail/GoalsDetail';

type GoalsProps = {
    List: any[]
}

const GoalsList: React.FC<GoalsProps> = ({ List }) => {

    const [selectedGoal, setSelectedGoal] = useState({});
    const [selectedActivities, setSelectedActivities] = useState([]);
    const [showModal, setShowModal] = useState(false);

    const goToDetail = (item: any) => {
        setSelectedGoal(item);
        setShowModal(true);
        setSelectedActivities(item.Activities);
    }

    const renderGoals = List.map(x => {
        return (
            <IonCard
                color="purple"
                onClick={() => goToDetail(x)}>
                <IonImg src="../../assets/viajeadisney.jpg" class="imagen" />
                <IonCardHeader>
                    {/* <IonCardSubtitle>{x.Profile}</IonCardSubtitle> */}
                    <IonCardTitle>
                        <IonItem color="transparent">
                            {x.Title}
                        </IonItem>
                    </IonCardTitle>
                </IonCardHeader>
            </IonCard>
        )
    });

    return (
        <>
            {renderGoals}
            <GoalsDetail
                Goal={selectedGoal}
                ShowModal={showModal}
                SetShowModal={setShowModal}
                Activities={selectedActivities} />
        </>
    )
}

export default GoalsList;