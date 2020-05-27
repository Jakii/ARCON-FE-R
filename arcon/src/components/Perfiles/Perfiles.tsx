import React, { useState, useEffect } from 'react';
import { IonCard, IonCardHeader, IonCardSubtitle,
    IonCardTitle, IonImg, IonAvatar, IonItem, IonCardContent
} from '@ionic/react';
import './Perfiles.css';
import './../../theme/variables.css';

type ProfileProps = {
    ListaPerfiles: any[],
}

const Perfiles: React.FC<ProfileProps> = ({ ListaPerfiles }) => {

    // const [listaPerfiles, setListaPerfiles] = useState(ListaPerfiles);

    const renderProfiles = () => {
        return (
            ListaPerfiles.map(x => {
                return (
                    <IonCard
                        color={x.rolId == 1 ? "orange" : "lightblue"}
                        onClick={() => goToHome(x)}
                        href="/Goals"
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
        // setListaPerfiles(ListaPerfiles);
    }

    return (
        <>
            <IonImg src="../../assets/ahorro.jpg" class="imagen" />
            {renderProfiles()}
        </>
    )
}

export default Perfiles;