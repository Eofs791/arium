import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import VueDraggableResizable from 'vue-draggable-resizable'
import { createPinia } from 'pinia'

createApp(App)
  .use(createPinia())
  .component("vue-draggable-resizable", VueDraggableResizable)
  .mount('#app')
