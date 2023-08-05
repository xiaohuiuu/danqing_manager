
import { createApp } from 'vue'
//css相关的东西
import '@/assets/normalize.css'
import 'animate.css'
import 'element-plus/dist/index.css'

import App from './App.vue'
//Pinia 数据持久
import { createPinia } from 'pinia'
//vue-router路由
import router from './router'
import loading from '@/components/loading/loading'






const app = createApp(App)
app.use(createPinia())
app.use(router)


//loading插件
//解决报错
declare module '@vue/runtime-core'{
    export default interface ComponentCustomProperties {
        xLoading:{
            show:Function,
            hide:Function
        }
    }
}
app.use(loading)

app.mount('#app')
