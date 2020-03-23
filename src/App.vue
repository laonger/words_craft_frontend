<template>
  <div id="app">
      <WordsCraft ></WordsCraft>
      <WebSocketTest></WebSocketTest>
  </div>
</template>

<script>
    import Vue from "vue";
    import VueNativeSock from 'vue-native-websocket';
    Vue.use(VueNativeSock, "ws://127.0.0.1:9999", { connectManually: true });
    import WordsCraft from './components/WordsCraft.vue';
    import WebSocketTest from "./components/WebSocketTest.vue";

    export default {
      name: 'app',
      components: {
          WordsCraft,
          WebSocketTest
      }
    }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
