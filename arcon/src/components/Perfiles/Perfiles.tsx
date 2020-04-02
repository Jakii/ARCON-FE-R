import React, { useState } from 'react';
import { IonButton, IonIcon, IonGrid, IonRow, IonCol } from '@ionic/react';
import { star, add } from 'ionicons/icons';
import './Perfiles.css';

type ProfileProps = {
    ListaPerfiles: any[]
}

const ProfilesList: React.FC<ProfileProps> = ({ ListaPerfiles }) => {
    const [listaPerfiles, setListaPerfiles]=useState(ListaPerfiles);

    const renderProfiles = listaPerfiles.map(x => {
        return (
            <IonCol size-md="5" size-lg="5" size-s="5">
                <IonButton
                    ion-button
                    icon-start
                    color="secondary"
                    expand="full"
                >
                    <IonIcon slot="start" icon={star} />
                    {x.Name}
                </IonButton>
            </IonCol>
        )
    });

    const addNewProfile = () => {
        var newProfile = {
            ProfileId: 2,
            Name: "Jacky",
            RolId: 2
        };
        listaPerfiles.push(newProfile);
        debugger;
        setListaPerfiles(listaPerfiles);
    }

    return (
        <IonGrid>
            <IonRow>
                <IonCol size-md="12" size-lg="12" size-s="12">
                    <div>
                        {renderProfiles}
                    </div>
                </IonCol>
            </IonRow>
            <IonRow>
                <IonCol size-md="12" size-lg="12" size-s="12">
                    <div>
                        <IonButton
                            ion-button
                            icon-start
                            color="secondary"
                            expand="full"
                            onClick={() => addNewProfile()}
                        >
                            <IonIcon slot="start" icon={add} />
                            Nuevo Perfil
                        </IonButton>
                    </div>
                </IonCol>
            </IonRow>
        </IonGrid>
    )
}

export default ProfilesList;