import React, { useState } from 'react';
import { IonButton, IonIcon, IonGrid, IonRow, IonCol, IonContent, IonFooter, IonList } from '@ionic/react';
import { star, add } from 'ionicons/icons';
import './Perfiles.css';
import NewProfile from './NewProfile';

type ProfileProps = {
    ListaPerfiles: any[]
}

const ProfilesList: React.FC<ProfileProps> = ({ ListaPerfiles }) => {
    const [listaPerfiles, setListaPerfiles] = useState(ListaPerfiles);
    const [showNewProfile, setShowNewProfile] = useState(false);


    const renderProfiles = () => {
        return (
            listaPerfiles.map(x => {
                return (
                    <IonCol size-md="5" size-lg="5" size-s="5">
                        <IonButton
                            ion-button
                            icon-start
                            color={x.RolId == 1 ? "warning" : "secondary"}
                            expand="full"
                        >
                            <IonIcon slot="start" icon={star} />
                            {x.Name}
                        </IonButton>
                    </IonCol>
                )
            }))
    }

    const addNewProfile = () => {
        setShowNewProfile(true);
    }

    const saveNewProfile = (name: any) => {
        var newProfile = {
            Name: name,
            RolId: 2,
            ProfileId: 2
        };

        ListaPerfiles.push(newProfile);
        setListaPerfiles(ListaPerfiles);
    }

    return (
        <IonContent>
            <IonList>
                {renderProfiles()}
            </IonList>
            <NewProfile ShowModal={showNewProfile} SetShowModal={() => { setShowNewProfile(false) }} SaveNewProfile={saveNewProfile} />

            <IonFooter>
                <IonButton
                    ion-button
                    icon-start
                    color="primary"
                    expand="full"
                    onClick={() => addNewProfile()}
                >
                    <IonIcon slot="start" icon={add} />
                    Nuevo Perfil
                        </IonButton>
            </IonFooter>
        </IonContent>
    )
}

export default ProfilesList;