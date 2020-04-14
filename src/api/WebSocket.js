import Vue from "vue";
import VueNativeSock from 'vue-native-websocket';
Vue.use(VueNativeSock, "ws://127.0.0.1:9999", { 
    connectManually: true,
    format: 'json',
});

class WebScoket {
    constructor(vueInstance){
        this.vm = vueInstance;
    }
    connect(){
        this.vm.$connect();
        this.vm.$options.sockets.onmessage = this.onReceive;
        console.log('connected');
    }
    disconnect(){
        this.vm.$disconnect();
        delete this.vm.$options.sockets.onmessage;
        console.log('disconnected');
    }
    onDisconnect(){
    }
    send(data){
        this.vm.$socket.sendObj(data);
        console.log('sent done');
    }
    onReceive(response){
        let jsonObj = JSON.parse(response.data);
        console.log("receive: ", jsonObj);
    }
}
console.log('hi');


export default WebScoket;
