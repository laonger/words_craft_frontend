<template>
  <div id="app">
      <router-link to='/game/'>WordsCraft</router-link><br/>
      <router-link to='/test/'>WebSocketTest</router-link>
      <router-link to='/login/'>Login</router-link>
      <router-view></router-view>
      <!--
      <WordsCraft ></WordsCraft>
      <component :is="componentId"></component>
      -->
  </div>
</template>

<script>
    

    export default {
        name: 'app',
        data() {return {
            //componentId: 'WebSocketTest',
        }},
        components: {
            //WordsCraft,
            //WebSocketTest
        },
        mounted(){
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
