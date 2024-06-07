import './assets/main.css';
import App from './App.vue';
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { router } from './router';
import { TOKEN_KEY, authService } from './api/authService';

const app = createApp(App);

const token = localStorage.getItem(TOKEN_KEY);
if (token) {
  authService.setToken(token);
}

app.use(createPinia());
app.use(router);
app.mount('#app');
