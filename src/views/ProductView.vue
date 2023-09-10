<script setup>
import { useRoute } from 'vue-router';
const router = useRoute();
import useProductStore from "../stores/store";
import {computed ,ref } from 'vue';
const productStore=useProductStore();

const id = parseInt( router.params.id)
//computed & ref same problem
// let product=productStore.getProduct(id);
// console.log(product);

const product =computed(()=>{
   return productStore.products.find((product)=>product.id===id)
}

) 
console.log(
    product.value.id
)
const inCart =ref(productStore.isInCart(product.value.id));
console.log(inCart.value)

const toggleInCart=()=>{
    inCart.value=!inCart.value;
}
    
const addToCart= ()=>{
    productStore.addToCart(product.value);
    toggleInCart();

}
const removeFromCart =()=>{
    productStore.removeFromCart(product.value.id);
    toggleInCart();


}


</script>
<template>
    <section>
        <h1> {{product.title}}</h1>
        <p> {{product.description}}</p>
        <p> {{product.price}}</p>
        <img :src="product.img"/>
        <hr>
        <button v-if="inCart" @click="removeFromCart">removeFromCart</button>
        <button v-else @click="addToCart"> add to cart</button>
        

    </section>

</template>