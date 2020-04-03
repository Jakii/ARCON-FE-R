import React, { useState, useEffect } from 'react';
import { IonButton, IonIcon, IonGrid, IonRow, IonCol, IonContent, IonFooter, IonList } from '@ionic/react';
import { star, add } from 'ionicons/icons';
import './Perfiles.css';
import NewProfile from './NewProfile';


type ProfileProps = {
    ListaPerfiles: any[],
    User:{},
    SetUser:Function
}

const ProfilesList: React.FC<ProfileProps> = ({ ListaPerfiles, User, SetUser}) => {

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
                            onClick={() => goToHome(x)}
                            href="/Goals"
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

    const goToHome=(item:any)=>{
        SetUser(item);
        setListaPerfiles(ListaPerfiles);
    }


    const saveNewProfile = (name: any) => {
        const lenghtProfilesList=listaPerfiles.length;
        const lastIndex=listaPerfiles[lenghtProfilesList-1];
        var newProfile = {
            Name: name,
            RolId: 2,
            ProfileId: lastIndex+1
        };
        listaPerfiles.push(newProfile);
        setListaPerfiles(listaPerfiles);
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