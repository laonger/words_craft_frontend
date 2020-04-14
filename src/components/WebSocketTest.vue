<template>
    <div id="WebSocketTest">
        aaaaaaaa
        <button id="connect"  v-on:click="connect()" type="submit">connect</button>
        <button id="disconnect" v-on:click="disconnect()" type="submit">disconnect</button>
        <button id="send" v-on:click="send()" type="submit">send</button>
    </div>
</template>

<script>
    export default{
        name: 'WebSocketTest',
        methods: {
            connect(){
                this.$root.ws.connect();
            },
            disconnect(){
                this.$root.ws.disconnect();
            },
            onDisconnect(){
            },
            send(){
                this.$root.ws.send({'a': 'aaaa'});
            }
        }

    }
</script>

<style scoped>

</style>
