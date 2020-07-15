import React, { useContext, useEffect } from "react";
import {
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonImg,
  IonAvatar,
  IonItem,
  IonCardContent,
  IonLabel,
  IonText,
} from "@ionic/react";
import "./Perfiles.css";
import "./../../theme/variables.css";
import "../../theme/label.css";
import { Redirect } from "react-router";
import { UserContext } from "../../App";
import { Animated } from "react-animated-css";

type ProfileProps = {
  ListaPerfiles: any[];
};

const Perfiles: React.FC<ProfileProps> = ({ ListaPerfiles }) => {
  const user = useContext(UserContext);

  const renderProfiles = () => {
    return (
      ListaPerfiles &&
      ListaPerfiles.map((x) => {
        return (
          <Animated
            animationIn="bounceInLeft"
            animationOut="fadeOut"
            isVisible={true}
          >
            <IonCard
              color={x.rolId == 1 ? "orange" : "lightblue"}
              routerLink="/goals"
              onClick={() => goToHome(x)}
              style={{ width: "90%", marginLeft: "5%" }}
            >
              <IonCardHeader>
                <IonCardSubtitle>
                  {x.rolId == 1 ? "Propietario" : ""}
                </IonCardSubtitle>
                <IonCardTitle>
                  <IonItem color="transparent" lines="none">
                    <IonAvatar
                      slot="start"
                      style={{ height: "50px", width: "50px" }}
                    >
                      <img
                        src={
                          "../../assets/avatars/" + getRandomAvatar() + ".png"
                        }
                      />
                    </IonAvatar>
                    <IonText>
                      <h2>{x.name}</h2>
                    </IonText>
                  </IonItem>
                  {/* <IonItem color="transparent" lines="none">
                    <IonAvatar slot="start">
                      <img src="../../assets/avatars/2.png" />
                    </IonAvatar>
                    <IonText>
                      <h2>60</h2>
                    </IonText>
                  </IonItem> */}
                </IonCardTitle>
              </IonCardHeader>
            </IonCard>
          </Animated>
        );
      })
    );
  };

  const getRandomAvatar = () => {
    const min = 1;
    const max = 31;

    return min + Math.floor(Math.random() * Math.floor(max));
  };

  const goToHome = (item: any) => {
    user.profileSelected = item;
  };

  return (
    <>
      <IonImg src="../../assets/ahorro.jpg" class="imagen" />
      {renderProfiles()}
    </>
  );
};

export default Perfiles;
