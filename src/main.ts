import { createApp } from 'vue'
import { createPinia } from 'pinia'

import './assets/main.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

import App from './App.vue'
import router from './router'
import { vRipple } from './directives/ripple'
import { vReveal } from './directives/reveal'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.directive('ripple', vRipple)
app.directive('reveal', vReveal)

app.mount('#app')
