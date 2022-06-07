import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './index.css'
import 'tw-elements';
import VueCountdown from '@chenfengyuan/vue-countdown';

import App from './App.vue'
import router from './router'

const app = createApp(App)
app.component(VueCountdown.name, VueCountdown);

app.use(createPinia())
app.use(router)

app.mount('#app')
