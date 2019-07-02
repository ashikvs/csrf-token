<template>
<div class="home-container">
   <home-component></home-component>
</div>
</template>

<script>
import home from './Home'
export default {
name: "HomeContainer",
    components: {
        "home-component": home,
    },
    data() {
        return {
            
        }
    }
}
</script>

<style>

</style>
