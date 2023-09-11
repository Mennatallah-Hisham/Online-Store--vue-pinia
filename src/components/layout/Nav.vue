<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
    <header>
        <div class="container " >
            <p class="logo">
                uniChair

            </p>
            <nav>
                <RouterLink class="nav-link" :active-class="active-link" to="/">store</RouterLink>
                <RouterLink class="nav-link" :active-class="active-link" to="/cart">cart</RouterLink>
              </nav>
    
        </div>
    </header>
   
    
    
</template>
<style scoped>
header{
    background-color: #f3f4f6;
    position: sticky;
    top:0;
}
header .container{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding:1rem 2rem;
    
}
.logo{
    font-size: 2rem;
}
nav{
    display: flex;
    gap:2rem;
}
.nav-link:link,
.nav-link:visited

{
    font-size: 1.8rem;
    text-transform: capitalize;
    color:black;
text-decoration: none;

}

.nav-link:hover
,.active-link{
    border-bottom: 2px solid black;
}
</style>