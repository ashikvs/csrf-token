<template>
    <csrf-component></csrf-component>
</template>

<script>
import csrfComponent from './csrfComponent'
export default {
 components: {
        "csrf-component": csrfComponent,
    },
    data() {
        return {

        }
    },
     created() {
        console.log(this.getToken())
    },
    
  destroyed() {

  },
   methods: {
       getToken(){
           //gettoken
           return this.$store.getters.getCsrfToken
       }
   }
}
</script>

<style>

</style>
