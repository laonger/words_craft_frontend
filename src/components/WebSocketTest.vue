<template>
    <div>
        <button id="connect"  v-on:click="connect()" type="submit">connect</button>
        <button id="disconnect" v-on:click="disconnect()" type="submit">disconnect</button>
        <button id="send" v-on:click="send()" type="submit">send</button>
    </div>
</template>

<script>
    import WS from "../api/WebSocket.js";
    let ws = "";
    
    export default{
        name: 'WebSocketTest',
        methods: {
            connect(){
                ws.connect();
            },
            disconnect(){
                ws.disconnect();
            },
            onDisconnect(){
            },
            send(){
                ws.send({'a': 'aaaa'});
            }
        },
        mounted(){
            ws = new WS(this);
        }

    }
</script>

<style scoped>

</style>
