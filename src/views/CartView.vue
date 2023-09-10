<script setup>
import useProductStore from "../stores/store";

const productStore=useProductStore();

</script>
<template>
    <h1>
      cart view
    </h1>
    <p>
      {{ productStore.cart }}
    </p>
</template>