<script setup>
import { onMounted } from 'vue';
import useProductStore from "../stores/store";


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

        {{ productStore.products }}
    </section>

</template>
<style scoped>



</style>