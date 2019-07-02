import Vue from 'vue';
import axios from 'axios';


//Vue.use(axios)   不支持use
Vue.prototype.$axios = axios;       //组件里面可以拿到 this.$axios
window.axios = axios;

export default axios;  


 
    