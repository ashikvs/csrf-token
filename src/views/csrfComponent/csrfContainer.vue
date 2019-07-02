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
        this.getToken()
    },
    
  destroyed() {

  },
   methods: {
       getToken(){
           //gettoken
       }
   }
}
</script>

<style>

</style>
