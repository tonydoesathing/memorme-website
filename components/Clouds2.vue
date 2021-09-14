<template>
  <div class="holder"><div class="Clouds"></div></div>
  
</template>

<style>
.Clouds {
  animation: 1s appear;
  background-image: url("/Clouds.svg");
  background-size: auto 100%;
  background-position: top center;
  background-repeat: no-repeat;
  height: 100%;
  width: 100%;
}

@keyframes appear {
  0% {
    opacity: 0;
  }
}
</style>
<style scoped>
  .holder{
    
    height: 30vh;
    width: 100%;
    padding-bottom: 3rem;
  }
</style>
