<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js" />
  </div>
</template>

<script lang="js">
import HelloWorld from '../../components/HelloWorld'
export default {

name: "Home",
    components: {
        "HelloWorld": HelloWorld,
    },
    data() {
        return {
            
        }
    },
    created() {
       
    },
    
  destroyed() {

  },
    methods: {
    
    }
}
</script>
