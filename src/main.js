import {createApp} from 'vue'
import App from './App.vue'
import 'element-plus/theme-chalk/index.css'
import 'scene-ui/style'
import ElementPlus from 'element-plus'
// import 'default-passive-events'

createApp(App).use(ElementPlus)
createApp(App).mount('#app')
