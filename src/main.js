import "bootstrap/dist/css/bootstrap.min.css";
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

import "bootstrap/dist/js/bootstrap.min.js";
import axios from "axios";
import VueAxios from "vue-axios";

createApp(App).use(VueAxios, axios).use(router).mount("#app");
