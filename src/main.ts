

import { createApp } from 'vue'
import App from './App.vue'
//Pinia 数据持久
import { createPinia } from 'pinia'
//vue-router路由
import router from './router'
//css相关的东西
import '@/assets/normalize.css'
import 'animate.css'
//import 'element-plus/dist/index.css'





const app = createApp(App)
app.use(createPinia())
app.use(router)

app.mount('#app')
