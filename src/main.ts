import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

Vue.config.ignoredElements = [
  'service-1',
];

declare module 'vue/types/vue' {
  interface Vue {
    $app: App;
  }
}

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
