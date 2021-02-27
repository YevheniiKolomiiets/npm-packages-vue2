import Vue from 'vue';
import store from '@/store';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';

import App from '@/App';

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

new Vue({
  store,
  render: (h) => h(App),
}).$mount('#app');
