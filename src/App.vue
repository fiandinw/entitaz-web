<script setup>
import { RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';
</script>

<template>
  <Navbar />
  <div class="mt-14 mb-14">
    <RouterView />
  </div>
  <Footer />
</template>