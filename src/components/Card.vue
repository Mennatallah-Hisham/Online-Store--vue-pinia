<script setup>
defineProps(['products'])
import { RouterLink } from 'vue-router';

</script>

<template>
    
    <article v-for="product in products" :key="product.id">
   <div class="img-cont">
    <img :src="product.img"/>
   </div>
   <div class="card-content">
    <RouterLink :to="`/product/${product.id}`">

       
        <p class="title">{{product.title}}</p>
    </RouterLink>
        
        <p class="price">{{product.price}}</p>

   </div>
        
       
      
        
        
    </article>

</template>
<style scoped>
article{
    width:200px;
    display: flex;
    flex-direction:column;
    justify-content: center;
    align-items:center;



  

}
.img-cont{
    overflow: hidden;
}
img{

    max-width: 100%;

    max-height: 25rem;
}
.card-content{
width:80%;
    padding:0 0.1rem;

    display: flex;
    justify-content:space-between;
}
.price{
    font-weight: 700;
}
.title{
    text-transform: capitalize;
}

@media (min-width:980px){
    article{
        width:250px;

    }
    img{

        max-width: 100%;
    
        max-height: 28rem;
    }
}
</style>