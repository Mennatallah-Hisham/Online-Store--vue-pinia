<script setup>
import { RouterView ,RouterLink } from 'vue-router';
import { onMounted } from 'vue';
import useProductStore from "./stores/store";
import Nav from './components/layout/Nav.vue';
const productStore =useProductStore();
onMounted( ()=>{

   productStore.fetchProducts();
})


</script>

<template>
  <Nav/>

  <RouterView/>
 

</template>

