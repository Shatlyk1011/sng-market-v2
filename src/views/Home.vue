<template>
  <div class="home">
    <Hero />
    <Reasons />
    <Testimonials />
    <Cta />
    <Footer />
  </div>
</template>

<script>
import Hero from "@/components/Home/Hero.vue";
import Reasons from "@/components/Home/Reasons.vue";
import Testimonials from "@/components/Home/Testimonials.vue";
import Footer from "@/components/Home/Footer.vue";
import Cta from "@/components/Home/Cta.vue";
export default {
  name: "Home",
  components: { Hero, Reasons, Testimonials, Footer, Cta },
};
</script>

<style>
</style>