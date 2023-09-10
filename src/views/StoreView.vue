<script setup>
import { onMounted } from 'vue';
import useProductStore from "../stores/store";
import Card from "../components/Card.vue"


const productStore =useProductStore();
onMounted( ()=>{
    console.log("on mounted helloe")
   productStore.fetchProducts();
})

</script>

<template>
    <h1>
        store view
    </h1>
    <section class="flex">

    
        <Card :products="productStore.products"/>
    </section>

</template>
<style scoped>
.flex{
    display: flex;
    justify-content: center;
    gap:2rem;
    flex-wrap: wrap;

}


</style>