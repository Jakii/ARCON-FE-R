import React, { useState, useEffect } from 'react';
import {
    IonIcon, IonContent, IonList, IonCard, IonCardHeader, IonCardSubtitle,
    IonCardTitle, IonFab, IonFabButton,
    IonThumbnail, IonImg, IonAvatar, IonItem, IonHeader, IonPage, IonTitle, IonToolbar, IonButtons, IonButton
} from '@ionic/react';
import { add } from 'ionicons/icons';
import './Perfiles.css';
import NewProfile from './NewProfile';
import './../../theme/variables.css';

type ProfileProps = {
    ListaPerfiles: any[],
    User: {},
    SetUser: Function
}

const ProfilesList: React.FC<ProfileProps> = ({ ListaPerfiles, User, SetUser }) => {

    const [listaPerfiles, setListaPerfiles] = useState(ListaPerfiles);
    const [showNewProfile, setShowNewProfile] = useState(false);

    const renderProfiles = () => {
        return (
            listaPerfiles.map(x => {
                return (
                    <IonCard
                        color={x.RolId == 1 ? "orange" : "lightblue"}
                        onClick={() => goToHome(x)}
                        href="/Goals">
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

    const addNewProfile = () => {
        setShowNewProfile(true);
    }

    const goToHome = (item: any) => {
        SetUser(item);
        setListaPerfiles(ListaPerfiles);
    }


    const saveNewProfile = (name: any) => {
        const lenghtProfilesList = listaPerfiles.length;
        const lastIndex = listaPerfiles[lenghtProfilesList - 1];
        var newProfile = {
            Name: name,
            RolId: 2,
            ProfileId: lastIndex + 1
        };
        listaPerfiles.push(newProfile);
        setListaPerfiles(listaPerfiles);
    }

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Home</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonHeader collapse="condense">
                    <IonToolbar>
                        <IonButtons slot="primary">
                            <IonButton onClick={() => addNewProfile()}> 
                                <IonIcon slot="icon-only" icon={add}/>
                            </IonButton>
                        </IonButtons>
                        <IonTitle size="large">Home</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonImg src="../../assets/ahorro.jpg" class="imagen" />
                <IonList>
                    {renderProfiles()}
                </IonList>
                <NewProfile ShowModal={showNewProfile} SetShowModal={() => { setShowNewProfile(false) }} SaveNewProfile={saveNewProfile} />
            </IonContent>
        </IonPage>
    )
}

export default ProfilesList;