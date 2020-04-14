import Vue from "vue";

import store from './store';
import App from './App.vue'

Vue.config.productionTip = true;

import WS from "./api/WebSocket.js";

import VueRouter from 'vue-router';
Vue.use(VueRouter);
import Index from './components/Index.vue';
import Login from './components/login.vue';
import WordsCraft from './components/WordsCraft.vue';
import WebSocketTest from "./components/WebSocketTest.vue";

const router = new VueRouter({
    routes:[
        { path: '/', component: Index},
        { path: '/login/', component: Login},
        { path: '/game/', component: WordsCraft},
        { path: '/test/', component: WebSocketTest}
    ]
})

let vm = new Vue({
    store: store,
    render: h => h(App),
    router,
    data: {
        ws: ''
    },
    mounted: function(){
        this.ws = new WS(this);
    }
}).$mount('#app')

console.log(vm);
