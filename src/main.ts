import { createApp } from 'vue'
import './style.css'
import '/node_modules/primeflex/primeflex.css';
import App from './App.vue'

import PrimeVue from 'primevue/config';
import 'primevue/resources/themes/aura-light-green/theme.css';

import Card from 'primevue/card';
import Dialog from 'primevue/dialog';
import Fieldset from 'primevue/fieldset';
import ProgressSpinner from 'primevue/progressspinner';

const app = createApp(App);
app.use(PrimeVue);
app.component('Card', Card).component('Dialog', Dialog).component('Fieldset', Fieldset).component('ProgressSpinner',ProgressSpinner);
app.mount('#app');



