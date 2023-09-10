<script setup>
import { useRoute } from 'vue-router';
const router = useRoute();
import useProductStore from "../stores/store";
import {computed } from 'vue';
const productStore=useProductStore();

const id = parseInt( router.params.id)
//computed & ref same problem
// let product=productStore.getProduct(id);
// console.log(product);

const product =computed(()=>{
   return productStore.products.find((product)=>product.id===id)
}

) 
    



</script>
<template>
    <section>
        <h1> {{product.title}}</h1>
        <p> {{product.description}}</p>
        <p> {{product.price}}</p>
        <img :src="product.thumbnail"/>
        <button> add to cart</button>
        

    </section>
    <h1>

  
    </h1>

</template>