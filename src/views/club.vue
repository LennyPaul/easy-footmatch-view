<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-title>{{ teamName }}</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content class="ion-padding ion-margin-bottom" >
            <ion-card v-for="event in events">
                <ion-card-header>
                    <ion-card-title>{{event.strEvent}}</ion-card-title>
                    <ion-card-subtitle>{{event.dateEventLocal}} {{event.strTimeLocal}}</ion-card-subtitle>
                </ion-card-header>

                <ion-card-content>
                    {{event.strStatus}}
                </ion-card-content>
                <ion-card-content>
                📍{{event.strVenue}} {{event.strCountry}}
                </ion-card-content>
            </ion-card>

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
    IonLabel,
    IonIcon,
} from '@ionic/vue';
import ExploreContainer from '@/components/ExploreContainer.vue';
import { IonNav } from '@ionic/vue';
import PageOne from './Acceuil.vue';
import axios from "axios";


export default {
    name: "club",
    components: { IonIcon, IonLabel, },
    data() {
        return {
            teamName :'',
            component: PageOne,
            events :[],
            id : this.$route.params.id
        };
    },
    async created() {
        const response = await axios.get(`https://www.thesportsdb.com/api/v1/json/3/eventslast.php?id=${this.id}`)
        console.log(response.data.results)
        this.events = response.data.results
        this.teamName = response.data.results[0].strHomeTeam


    }
};
</script>
