import { render, createVNode } from 'vue'
import type { VNode, App } from 'vue'
import loading from '@/components/loading/loading.vue'



export default {
    install(app: App) {
        const vnode = createVNode(loading)
        render(vnode, document.body)

        app.config.globalProperties.xLoading = {
            show: vnode.component?.exposed?.show,
            hide: vnode.component?.exposed?.hide
        }

        //app.config.globalProperties.xLoading.hide()
    }
}