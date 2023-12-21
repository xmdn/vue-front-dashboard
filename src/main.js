import { createApp } from 'vue';
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import "./assets/vendor/font-awesome/css/font-awesome.css";
import "./assets/app.scss"
import 'bootstrap/dist/css/bootstrap.css';


import {
  library
} from '@fortawesome/fontawesome-svg-core';

import {
  FontAwesomeIcon
} from '@fortawesome/vue-fontawesome';

import {
  faUserSecret,
  faBars,
  faHouseUser,
  faScrewdriverWrench,
  faFire,
  faInfo

} from '@fortawesome/free-solid-svg-icons';

library.add(faUserSecret, faBars, faHouseUser, faScrewdriverWrench, faFire, faInfo);

import clickOutside from "./directives/click-ouside"

const app = createApp(App);

// Register global directives
app.directive("click-outside", clickOutside);

// Use plugins
app.use(router);
app.use(store);

// Mount the app
app.component('font-awesome-icon', FontAwesomeIcon).mount('#app');
