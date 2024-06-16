<template>
  <div id ="app">
    <router-view></router-view>
    <AlertMessage v-if="showAlert" :message="alertMessage" :visible="showAlert" @close="clearAlert"></AlertMessage>
  </div>
</template>

<script>
import { mapGetters, mapActions} from'vuex';
export default {
  name: 'App',
  computed:{
    ...mapGetters(['alertMessage','showAlert'])
  },
  methods:{
    ...mapActions(['clearAlert']),
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
<script setup>
</script>
<!-- <style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style> -->

