<template>
<div class="hero">
  <div class="container fullheight">
    <div class="row">
      <Logo />
    </div>
    <div class="row padding-top">
      <h1 class="title">Never lose a memory.</h1>
      <a class="button submit-button" @click="scrollToBottom">Request Access</a>
    </div>
    <div class="bottom-arrow">
      <svg xmlns="http://www.w3.org/2000/svg" width="5rem" fill="#009fff" class="bi bi-chevron-down" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
      </svg>
    </div>
    <div class="bottom-arrow">
      <svg xmlns="http://www.w3.org/2000/svg" width="5rem" fill="#009fff" class="bi bi-chevron-down" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
      </svg>
    </div>
  </div>
  </div>
</template>
<script>
export default {
  methods:{
    scrollToBottom:function(){
      document.getElementById("callToAction").scrollIntoView({
        behavior: "smooth"
      });
    }
  }
}
</script>
<style>
.bottom-arrow{
  display: inline-block;
  position: absolute;
  bottom: 1rem;
  right: 50%;
  transform: translateX(50%);
}
.title{
  padding-bottom:3rem;
}
.hero{
  background-image: linear-gradient(rgb(177, 225, 255), rgb(255, 255, 255));;
}
</style>
