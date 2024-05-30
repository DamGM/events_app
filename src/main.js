import Vue from 'vue';
import App from './App.vue';
import router from './router';
import 'bulma/css/bulma.css';

// Import the Auth0 configuration
import authConfig from '../auth_config.json'; // Import the whole JSON file as an object

// Import the plugin here
import { Auth0Plugin } from './auth';

// Install the authentication plugin here
Vue.use(Auth0Plugin, {
  domain: authConfig.domain,  // Access properties from the imported object
  clientId: authConfig.clientId, // Access properties from the imported object
  onRedirectCallback: (appState) => {
    router.push(
      appState && appState.targetUrl
        ? appState.targetUrl
        : window.location.pathname
    );
  },
});

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
