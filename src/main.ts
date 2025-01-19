import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './app/App.vue'
import './style.css'


createApp(App).use(createPinia()).mount('#app')
