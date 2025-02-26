import { createApp } from 'vue'
import App from './App.vue'
import router from "./configs/router.js";

createApp(App)
    .use(router)
    .mount('#app')
