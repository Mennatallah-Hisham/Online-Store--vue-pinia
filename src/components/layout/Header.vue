<template>
  <section class="hero">
    <div class="hero-content container">
      <div>
        <h1>Add a touch to your home</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus, iure ad odit officiis
          consequatur nihil provident earum ab hic, quis, molestias exercitationem dignissimos
          nesciunt velit amet? Inventore ut perferendis voluptates!
        </p>
      </div>
      <div class="img-cont">
        <img src="../../../public/hero2.png" />
      </div>
    </div>
  </section>
</template>
<style scoped>
.hero {
  background-color: #f3f4f6;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin:0;
}

.hero-content {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  overflow: hidden;
}
img{
    height: 80rem;
}
.img-cont,

p{
    max-width:50rem;
}
</style>
