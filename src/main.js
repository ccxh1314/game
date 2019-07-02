import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

//引入全局样式
import './assets/css/public.css'     //自我执行

//引入全局js
import './assets/js/font'

//引入路由的配置
import router from './plugins/router'
 
//引入axios
import axios from './plugins/axios';


new Vue({
  render: h => h(App),
  router
}).$mount('#app')
