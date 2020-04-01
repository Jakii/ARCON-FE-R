import React, { Component } from 'react';
import { IonButton, IonIcon, IonGrid, IonRow, IonCol } from '@ionic/react';
import { star, add } from 'ionicons/icons';
import './Perfiles.css';

interface ProfileProps {
    ListaPerfiles: any[]
}

class ProfilesList extends Component<ProfileProps> {

    renderProfiles = this.props.ListaPerfiles.map(x => {
        return (
            <IonCol size-md="5" size-lg="5" size-s="5">
                <IonButton
                    ion-button
                    icon-start
                    //  class="ProfileStyle"
                    color="secondary"
                    expand="full"
                >
                    <IonIcon slot="start" icon={star} />
                    {x.Nombre}
                </IonButton>
            </IonCol>
        )
    });

    render() {
        return (
            <IonGrid>
                <IonRow>
                    <IonCol size-md="12" size-lg="12" size-s="12">
                        <div>
                            {this.renderProfiles}
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
}

export default ProfilesList;



// const Perfiles: React.FC<Props> = (ListaPerfiles) => {

//   const renderProfiles=ListaPerfiles.map(x=>{
//       return  <IonButton ion-button></IonButton>
//   });

//   return (
//     <IonButton ion-button></IonButton>
//   );
// };

// export default Perfiles;
