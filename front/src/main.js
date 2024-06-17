import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import AlertMessage from './components/AlertMessage.vue'
import PageTop from './components/PageTop.vue'
const app = createApp(App);
app.component('AlertMessage',AlertMessage)
app.component('PageTop',PageTop)
app.use(store)
app.use(router);
app.mount('#app');