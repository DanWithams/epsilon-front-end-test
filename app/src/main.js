import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from "./routing/router.js";
import store from "./stores/store.js";

createApp(App)
    .use(router)
    .use(store)
    .mount('#app')
