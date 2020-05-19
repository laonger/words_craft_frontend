import Vue from "vue";

import store from './store';
import App from './App.vue'

Vue.config.productionTip = true;

import WS from "./api/WebSocket.js";

import VueRouter from 'vue-router';
Vue.use(VueRouter);
import WebSocketTest from "./components/WebSocketTest.vue";
import Index from './components/Index.vue';
import Login from './components/Login.vue';
import WordsCraft from './components/WordsCraft.vue';
import EnterGame from "./components/EnterGame.vue";

const router = new VueRouter({
    routes:[
        { path: '/', component: Index},
        { path: '/login/', component: Login},
        { path: '/game/', component: WordsCraft},
        { path: '/enter_game/', component: EnterGame},
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
        this.ws.connect();
    }
}).$mount('#app')

console.log('main.js', vm);
