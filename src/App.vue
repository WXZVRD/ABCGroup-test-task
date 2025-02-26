<script setup>
import Header from "./components/Header.vue";
</script>

<template>
  <div class="wrapper">
    <Header />
    <router-view />
  </div>
</template>

<style>
body{
  background: #000;
}

.wrapper{
  overflow: hidden;
}
.container{
  margin: 0 auto;
  max-width: 1300px;
  width: 100%;
}
</style>
