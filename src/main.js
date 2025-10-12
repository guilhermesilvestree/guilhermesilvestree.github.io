// src/main.js

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './assets/normalize.css' // O projeto base já inclui, é uma boa prática
import './assets/global.css' // NOSSA LINHA!

const app = createApp(App)

app.use(router)

app.mount('#app')