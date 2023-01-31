<template>
  <div class="HomeView">
    <Hero />
    <Reasons />
    <Images />
    <Cta />
    <Footer />
  </div>
</template>

<script>
import Hero from "@/components/Home/Hero.vue";
import Reasons from "@/components/Home/Reasons.vue";
import Images from "@/components/Home/Images.vue";
import Footer from "@/components/Home/Footer.vue";
import Cta from "@/components/Home/Cta.vue";
export default {
  name: "HomeView",
  components: { Hero, Reasons, Footer, Cta, Images },
};
</script>

<style>
</style>