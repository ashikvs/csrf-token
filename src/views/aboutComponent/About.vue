<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h3>list of users</h3>
    <ul id="example-1">
  <li v-for="user in users" v-bind:key="user.id">
    {{ user.name }}
  </li>
</ul>
  </div>
</template>
<script lang="js">

export default {

  props: ['users'],

  created() {
    
  },
  destroyed() {
    
  }
}
</script>