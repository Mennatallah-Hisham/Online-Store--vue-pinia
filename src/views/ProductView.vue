<script setup>
import { useRoute } from 'vue-router';
const router = useRoute();
import useProductStore from "../stores/store";
import {computed ,ref } from 'vue';
const productStore=useProductStore();
const inCart=ref(false)
const id = parseInt( router.params.id)
//computed & ref same problem
// let product=productStore.getProduct(id);
// console.log(product);

const product =computed(()=>{
   return productStore.products.find((product)=>product.id===id)
}

) 
const toggleInCart=()=>{
    inCart.value=!inCart.value;
}
    
const addToCart= ()=>{
    productStore.addToCart(product);
    toggleInCart();

}
const removeFromCart =()=>{
    productStore.removeFromCart(id);
    toggleInCart();


}


</script>
<template>
    <section>
        <h1> {{product.title}}</h1>
        <p> {{product.description}}</p>
        <p> {{product.price}}</p>
        <img :src="product.thumbnail"/>
        <hr>
        <button v-if="inCart" @click="removeFromCart">removeFromCart</button>
        <button v-else @click="addToCart"> add to cart</button>
        

    </section>

</template>