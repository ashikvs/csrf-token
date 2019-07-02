<template>
  <div id="app">
    <div id="nav">
       <v-btn class="info" ripple @click="$router.push('/')">Home</v-btn> |
      <v-btn class="info" @click="$router.push('/about')"  >About</v-btn> |
      <v-btn class="info" @click="$router.push('/csrf')" >Api calls</v-btn> 
      <v-app>
          <router-view/>
      </v-app>
    </div>
    
  </div>
</template>

<script>
import {mapMutations} from 'vuex'

export default {
  created() {
    this.getToken()
  },
   methods: {
      ...mapMutations([
            'setCsrfToken'
        ]),
     getToken(){
       //get token from server and set it in store
        this.$store.commit('setCsrfToken', 'change-token')

     }
   }
}
</script>


<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
