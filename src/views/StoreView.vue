<script setup>
import Header from "../components/layout/Header.vue";
import useProductStore from "../stores/store";
import Card from "../components/Card.vue"


const productStore =useProductStore();


</script>

<template>
 <Header/>
    <section >
        <h2> new arrival</h2>

    <div class="flex">
        <Card :products="productStore.getNewArrival"/>
    </div>
      
    </section>
    <section >
        <h2> our products</h2>

    <div class="flex">
        <Card :products="productStore.products"/>
    </div>
      
    </section>


</template>
<style scoped>
section{
    margin-block:9rem;
}
.flex{
  
    display: flex;
    justify-content: center;
    gap:2rem;
    flex-wrap: wrap;
    max-width: 1200px;
    margin-inline: auto;
    padding:5rem 0;

    background-color: rgba(241, 239, 238, 0.373);

}


</style>