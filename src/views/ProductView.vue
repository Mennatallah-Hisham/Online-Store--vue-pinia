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
    <section class="product-view">
        <img class="product__img" :src="product.img" :alt="product.title"/>
        <div class="product-content">
            <div class="flex">
                <h1> {{product.title}}</h1>
          
            <p class="product__price"> {{product.price }}$</p>

            </div>
            <p  class="tag" v-if="product.new"> new arrival</p>
            
         
            <p class="product__desc
            "> {{product.description}}</p>
     
            <button class="product__btn" v-if="inCart" @click="removeFromCart">remove From Cart</button>
            <button  class="product__btn"
            v-else @click="addToCart"> add to cart</button>

           
            

        </div>
       

    </section>

</template>
<style scoped>
.product-view{
 
    margin-top:2rem;
    display: flex;
    justify-content: center;
    align-items: start;
    flex-wrap: wrap;
    gap:1rem;

    max-height: 90vh;
}
.product-content{
    display: flex;
    flex-direction: column;
    align-items:start;
    gap:1rem;

    height: 100%;
}
.product__img{
    max-height: 50rem;
}
.product__desc{
    font-size: 1.8rem;
    max-width: 35rem;
   
}
.flex{
    display: flex;
    justify-content: center;
    align-items: center;
    gap:3rem;
  
}

.product__btn{
 border-radius: 0.3rem;
border:none;
display: block;
cursor: pointer;
background-color: #155e75;
color:white;
padding:1rem 3rem;
text-transform: capitalize;
font-weight: 600;




}
.product__btn:hover{
    background-color: #2c6e83;
}

.product__price{
    font-size: 3rem;
    font-weight: 700;
    color:#155e75;
}
.tag{
    border-radius: 2rem;
    padding:0.5rem 2rem;
    background-color: #155e75;
    color:white;
    text-transform: capitalize;
    font-size: 1.4rem;
}


@media (min-width:768px){
    .product-view{
        gap:5rem

    }
    .product-content{
        margin-top:5rem;
    }
    .product__img{
        max-height: 60rem;
    }

}
</style>