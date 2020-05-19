import Vue from "vue";
import VueNativeSock from 'vue-native-websocket';
Vue.use(VueNativeSock, "ws://127.0.0.1:9999", { 
    connectManually: true,
    //format: 'json',
});

import {func_map} from './response.js'

class WebScoket {
    constructor(vueInstance){
        this.vm = vueInstance;
    }
    connect(){
        this.vm.$store.commit("logout")
        this.vm.$connect();
        this.vm.$options.sockets.onmessage = this.onReceive;
        console.log('connected');
    }
    disconnect(){
        this.vm.$disconnect();
        this.vm.$store.commit("logout")
        delete this.vm.$options.sockets.onmessage;
        console.log('disconnected');
    }
    onDisconnect(){
        this.vm.$store.commit("logout")
    }
    send(api_num, data){
        let s = JSON.stringify(data);
        let request_data = String(api_num)+"_%%_"+s;
        this.vm.$socket.send(request_data);
        console.log('sent done: ', request_data);
    }
    onReceive(response){
        console.log("receive_raw: ", response.data);
        let l = response.data.split("_%%_");
        let api_num = l[0];
        let data = l[1];
        let jsonObj = JSON.parse(data);
        console.log('receive: ', jsonObj);
        let func = func_map[Number(api_num)];
        func(this, jsonObj);
    }
}
console.log('hi');


export default WebScoket;
