<template>
  <div>
    <Hero />
    <Description />
    <Divider />
    <HowItWorks />
    <UseCases />
    <Divider />
    <CallToAction />
  </div>
</template>

<script>
import Carousel from '~/components/Carousel.vue'
import Hero from '~/components/Hero.vue'
export default {
  components: { Hero, Carousel },}
</script>

<style>
</style>
