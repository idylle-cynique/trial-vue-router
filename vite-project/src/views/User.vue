<template>
  <div class="user">
    <h1>{{ this.$route.params.id }}</h1>
    <router-link tag="button" :to="{name: 'first'}">First</router-link>
    <router-link :to="{name: 'second'}" tag="button">Second</router-link>
    <router-view />
  </div>
</template>


<style scoped>
  .router-link-exact-active{
    font-size: 20px;
    color: deeppink;
  }
</style>

