<template>
    <div id="WebSocketTest">
        aaaaaaaa
        <RoundResult ref="RoundResult"></RoundResult>
        <button id="pop"  v-on:click="pop()" type="submit">pop</button>
        <button id="connect"  v-on:click="connect()" type="submit">connect</button>
        <button id="disconnect" v-on:click="disconnect()" type="submit">disconnect</button>
        <button id="send" v-on:click="send()" type="submit">send</button>
        <button id="api_test" v-on:click="api_test()" type="submit">api_test</button>
    </div>
</template>

<script>

    import api from '../api/api.js';
    import RoundResult from './RoundResult.vue';
    export default{
        name: 'WebSocketTest',
        components: {
            RoundResult
        },
        data() {
            return {
                isPoped: false
            }
        },
        methods: {
            pop(){
                if (this.isPoped) {
                    this.$refs.RoundResult.hide();
                } else {
                    this.$refs.RoundResult.open();
                }
            },
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
            },
            api_test(){
                api.api_test(this.$root, {'aaa': 'aaa'});
            }
        }

    }
</script>

<style scoped>

</style>
