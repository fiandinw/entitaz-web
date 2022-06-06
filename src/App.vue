<script setup>
  import { RouterView } from "vue-router";
  import Navbar from "./components/Navbar.vue";
  import Footer from "./components/Footer.vue";
</script>

<template>
  <div v-if="!['/countdown', '/'].includes($route.path)">
    <Navbar />
    <div class="mt-10 mb-14">
      <RouterView />
    </div>
    <Footer />
  </div>

  <div v-else>
    <RouterView />
  </div>
</template>
