<template>
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/>
   -->
  <!-- <ArticleForm></ArticleForm>
  <CardList/> -->
  <Header></Header>
  <RouterView/>
</template>
<script setup>
import {RouterView} from "vue-router";
</script>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import ArticleForm from './components/ArticleForm.vue'
// import CardList from './components/CardList.vue'

import 'swiper/swiper-bundle.css';
import Header from '@/components/AppHeader.vue'
export default {
  name: 'App',
  components: {
    // HelloWorld,
    // ArticleForm,
    // CardList,
   Header
    
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
