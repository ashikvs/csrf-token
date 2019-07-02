<template>
<div>
<div>api calls with csrf token</div>
    <v-btn color="success" @click="getCall()">call Get method</v-btn>
    <v-btn color="success" @click="postCall()">call Post method</v-btn>
</div>
    
</template>

<script>
import {mapMutations} from 'vuex'
export default {

    methods: {
       
        getCall() {
            //gettoken
            console.log('get call');
            console.log(this.$store.getters.getCsrfToken)
        
        },
        postCall() {
            //posttoken
            console.log('post');

        }
    }
}
</script>

<style>

</style>
