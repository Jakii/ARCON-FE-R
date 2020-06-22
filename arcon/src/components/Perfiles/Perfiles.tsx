import React, { useContext, useEffect } from 'react';
import { IonCard, IonCardHeader, IonCardSubtitle,
    IonCardTitle, IonImg, IonAvatar, IonItem, IonCardContent
} from '@ionic/react';
import './Perfiles.css';
import './../../theme/variables.css';
import { Redirect } from 'react-router';
import { UserContext } from '../../App';

type ProfileProps = {
    ListaPerfiles: any[],
}

const Perfiles: React.FC<ProfileProps> = ({ ListaPerfiles }) => {
    const user = useContext(UserContext);
    const renderProfiles = () => {
        return (
            ListaPerfiles.map(x => {
                return (
                    <IonCard
                        color={x.rolId == 1 ? "orange" : "lightblue"}
                        routerLink="/goals"
                        onClick={()=>goToHome(x)}
                        >
                        <IonCardHeader>
                            <IonCardSubtitle>{x.rolId == 1 ? "Propietario" : ""}</IonCardSubtitle>
                            <IonCardTitle>
                                <IonItem color="transparent" lines="none">
                                    <IonAvatar slot="start">
                                        <img src="../../assets/avatar.png" />
                                    </IonAvatar>
                                    {x.name}
                                </IonItem>
                            </IonCardTitle>
                        </IonCardHeader>
                    </IonCard>
                )
            }))
    }


    const goToHome = (item: any) => {
     user.profileSelected=item;
    }

    return (
        <>
            <IonImg src="../../assets/ahorro.jpg" class="imagen" />
            {renderProfiles()}
        </>
    )
}

export default Perfiles;