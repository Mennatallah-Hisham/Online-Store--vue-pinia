<script setup>
defineProps(['products'])
import { RouterLink } from 'vue-router';

</script>

<template>
    
    <article v-for="product in products" :key="product.id">
        <img :src="product.thumbnail"/>
        <RouterLink :to="`/product/${product.id}`">

       
        <h2>{{product.title}}</h2>
    </RouterLink>
        
        <h2>{{product.category}}</h2>
        
    </article>

</template>
<style scoped>
article{
    width:320px;
}
img{
    max-width: 100%;
}
</style>