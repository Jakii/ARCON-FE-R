import React, { useState, useEffect } from 'react';
import {
    IonIcon, IonContent, IonList, IonCard, IonCardHeader, IonCardSubtitle,
    IonCardTitle, IonFab, IonFabButton, IonImg, IonAvatar, IonItem, IonHeader, IonPage,
    IonTitle, IonToolbar
} from '@ionic/react';
import './Perfiles.css';
import './../../theme/variables.css';

type ProfileProps = {
    ListaPerfiles: any[],
}

const Perfiles: React.FC<ProfileProps> = ({ ListaPerfiles }) => {
    
    const [listaPerfiles, setListaPerfiles] = useState(ListaPerfiles);

    const renderProfiles = () => {
        return (
            listaPerfiles.map(x => {
                return (
                    <IonCard
                        color={x.RolId == 1 ? "orange" : "lightblue"}
                        //onClick={() => goToHome(x)}
                        //href="/Goals"
                        >
                        <IonCardHeader>
                            <IonCardSubtitle>{x.RolId == 1 ? "Propietario" : ""}</IonCardSubtitle>
                            <IonCardTitle>
                                <IonItem color="transparent">
                                    <IonAvatar slot="start">
                                        <img src="../../assets/avatar.png" />
                                    </IonAvatar>
                                    {x.Name}
                                </IonItem>
                            </IonCardTitle>
                        </IonCardHeader>
                    </IonCard>
                )
            }))
    }


    const goToHome = (item: any) => {
        setListaPerfiles(ListaPerfiles);
    }

    return (
        <>
            <IonImg src="../../assets/ahorro.jpg" class="imagen" />
            {renderProfiles()}
        </>
    )
}

export default Perfiles;