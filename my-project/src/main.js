import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import echarts from 'echarts'
//import 'echarts-wordcloud/dist/echarts-wordcloud.js'
//import 'echarts-world/dist/echarts-wordcloud.min.'
Vue.prototype.$echarts = echarts
Vue.config.productionTip = false
Vue.use(Element)
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')