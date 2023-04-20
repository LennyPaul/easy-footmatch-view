<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>FOOTBALL VIEWER</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true"  class="ion-padding">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">FOOTBALL VIEWER</ion-title>
        </ion-toolbar>
          <ion-list :inset="true">
              <ion-item href="/ligue/4334">
                  <ion-label>Ligue 1</ion-label>
              </ion-item>
              <ion-item href="/ligue/4401">
                  <ion-label>Ligue 2</ion-label>
              </ion-item>
              <ion-item href="/ligue/4637">
                  <ion-label>National 1</ion-label>
              </ion-item>
          </ion-list>
      </ion-header>

    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonLabel, IonList } from '@ionic/vue';
import { defineComponent } from 'vue';
export default defineComponent({
    components: { IonItem, IonLabel, IonList },
});

</script>
