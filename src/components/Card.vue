<script setup>
defineProps(['products'])
import { RouterLink } from 'vue-router';

</script>

<template>
    
    <article v-for="product in products" :key="product.id">
   <div class="img-cont">
    <img :src="product.img"/>
   </div>
        
        <RouterLink :to="`/product/${product.id}`">

       
        <h2>{{product.title}}</h2>
    </RouterLink>
        
        <h2>{{product.price}}</h2>
      
        
        
    </article>

</template>
<style scoped>
article{
    width:250px;
    background: #000;
  

}
.img-cont{

    background: #6208bb;

}
img{

    max-width: 100%;

    max-height: 20rem;
}
</style>