<template>
<div>
<div>api calls with csrf token</div>
    <v-btn color="success" @click="getCall()">call Get method</v-btn>
    <v-btn color="success" @click="postCall()">call Post method</v-btn>
</div>
    
</template>

<script>
export default {

   methods: {
       getCall(){
           //gettoken
           console.log('get');
           
       },
       postCall(){
           //posttoken
           console.log('post');
           
       }
       }
}
</script>

<style>

</style>
