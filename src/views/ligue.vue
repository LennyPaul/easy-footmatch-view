<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
          <ion-title>{{nameLigue}}</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding ion-padding-bottom">
        <ion-list :inset="true" v-for="club in classement">
            <ion-item :href="'clubs/'+club.idTeam">
                <ion-img class="ion-margin" style="width: 10%" :src=club.strTeamBadge ></ion-img>
                <ion-label>{{club.intRank}}. {{club.strTeam}}</ion-label>
            </ion-item>
        </ion-list>
    </ion-content>


  </ion-page>
</template>

<script lang="ts">
import {
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonList,
    IonItem,
    IonLabel,
    IonIcon,
    IonTabButton, IonTabs, IonRouterOutlet, IonTabBar
} from '@ionic/vue';
import ExploreContainer from '@/components/ExploreContainer.vue';
import { IonNav } from '@ionic/vue';
import PageOne from './Acceuil.vue';
import axios from "axios";


export default {
    name: "ligue",
    components: {IonTabBar, IonRouterOutlet, IonTabs, IonTabButton, IonIcon, IonLabel, IonItem, IonList, IonNav },
    data() {
        return {
            nameLigue : "",
            component: PageOne,
            classement :[],
           id : this.$route.params.id
        };
    },
    async created() {
        const response = await axios.get(`https://www.thesportsdb.com/api/v1/json/3/lookuptable.php?l=${this.id}&s=2022-2023`)

        this.classement = response.data.table
        this.nameLigue =this.classement[0].strLeague
    }
};
</script>
