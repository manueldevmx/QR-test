import React from 'react';
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButton

} from '@ionic/react';

//import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { Plugins } from '@capacitor/core';




const Home: React.FC = () => {
 
  const startScan = async () => {
    const { BarcodeScanner } = Plugins;

    BarcodeScanner.hideBackground(); //Funcion para hacer transparente el background webview

    const result = await BarcodeScanner.startScan(); //Empieza a scanear y espera el resultado

    //si el resultado tiene contenido
    if (result.hasContent) {
      console.log(result.content); // muestra el  conetnido scaneado
    }

  }
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 1</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonButton onClick={startScan}>Scan barcode</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Home;