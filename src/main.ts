import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import { register } from './web-components'

const app = createApp(App)
const pinia = createPinia()

register()

app
  .use(pinia)
  .mount('#app')

