<template>
  <div id="app">
      <p><router-link to='/'>/</router-link></p>
      <p><router-link to='/enter_game/'>EnterGame</router-link></p>
      <p><router-link to='/game/'>WordsCraft</router-link></p>
      <p><router-link to='/test/'>WebSocketTest</router-link></p>
      <p><router-link to='/login/'>Login</router-link></p>
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
