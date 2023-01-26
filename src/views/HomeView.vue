<template>
  <div class="HomeView">
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
  name: "HomeView",
  components: { Hero, Reasons, Testimonials, Footer, Cta },
};
</script>

<style>
</style>