<template>
  <div id="app">
    <div id="nav">
       <v-btn class="info" ripple @click="$router.push('/')">Home</v-btn> |
      <v-btn class="info" @click="$router.push('/about')"  >About</v-btn> |
      <router-link to="/about">aboutt</router-link>
      <v-btn class="info" @click="$router.push('/csrf')" >Api calls</v-btn> 
      <v-app>
          <router-view/>
      </v-app>
    </div>
    
  </div>
</template>

<script>
import { SubSink } from 'subsink';
import {mapMutations} from 'vuex'
import getService from './apiService/getService'
import { Observable,Subscription } from "rxjs/Rx";
import { from, range, merge, concat, interval, of } from "rxjs";
import {
    map,
    tap,
    filter,
    flatMap,
    refCount,
    distinct,
    contains,
    catchError,
    pluck,
    publishReplay,
    retry,
    last,
    first,
    toArray,
    concatAll
} from "rxjs/operators";

export default {
  created() {
   // this.getToken()
  },
   methods: {
      ...mapMutations([
            'setCsrfToken'
        ]),
     getToken(){
       //get token from server and set it in store
       this.subs.sink= getService.getUser('http://www.sheik.coolapp.com:81/may2019/clms-totara-core/htdocs/local/hlmapp/model.php?v=user')
                .subscribe(
                    next => {
                        //this.users = next.token;
                        console.log(next)
                        this.$store.commit('setCsrfToken', next.response.user[0].token)
                    },
                    error => {
                        console.log(error)
                    },
                    () => console.log("recieved token")
                );
        

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
