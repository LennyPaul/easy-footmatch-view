<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>FOOTBALL VIEWER</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true"  class="ion-padding">
      <ion-header>
          <ion-list :inset="true">
              <ion-item href="/ligues/4334" >
                  <ion-label>Ligue 1</ion-label>
              </ion-item>
              <ion-item href="/ligues/4401" >
                  <ion-label>Ligue 2</ion-label>
              </ion-item>
              <ion-item href="/ligues/4637" >
                  <ion-label>National 1</ion-label>
              </ion-item>
          </ion-list>
      </ion-header>

    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonLabel, IonList } from '@ionic/vue';
import PageLigue from './ligue.vue';
export default {
    components: { IonItem, IonLabel, IonList },
};

</script>
