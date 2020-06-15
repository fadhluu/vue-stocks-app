import Vue from 'vue';
import VueRouter from 'vue-router';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faTwitter,
  faFacebook,
  faGoogle,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import { routes } from './routes';
import App from './App.vue';

library.add(faTwitter, faFacebook, faGoogle, faInstagram);

Vue.config.productionTip = false;
Vue.use(VueRouter);
Vue.component('font-awesome-icon', FontAwesomeIcon);

const router = new VueRouter({
  mode: 'history',
  routes,
});

new Vue({
  render: h => h(App),
  router,
}).$mount('#app');
