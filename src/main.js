import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store';

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css'

import '@/assets/css/v-card.scss'

const app = createApp(App)

const vuetify = createVuetify({
  components,
  directives,
})

app.use(router).use(store).use(vuetify)

app.mount('#app')
