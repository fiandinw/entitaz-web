<script setup>
  import LogoEntitaz from "../assets/logo-entitaz.jpg";
  import BlogCard from "../components/BlogCard.vue";
  import { Splide, SplideSlide } from "@splidejs/vue-splide";
</script>

<template>
  <div
    class="bg-primary text-white py-20 px-6 flex flex-col items-center justify-center gap-16"
  >
    <div
      class="container flex flex-row gap-12 items-center justify-between lg:p-24"
    >
      <div>
        <h1 class="text-5xl font-bold mt-0 mb-6">Entitaz</h1>
        <h3 class="text-3xl font-bold mb-8">
          Connecting your dream to reality.
        </h3>
        <a
          class="inline-block px-6 py-2.5 bg-white text-primary font-semibold text-xs leading-tight uppercase rounded shadow-md hover:bg-gray-200 hover:shadow-lg focus:bg-gray-200 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-300 active:shadow-lg transition duration-150 ease-in-out"
          data-mdb-ripple="true"
          data-mdb-ripple-color="light"
          href="#!"
          role="button"
          >Daftar Sekarang</a
        >
      </div>
      <div class="hidden lg:block">
        <img class="rounded-full w-52 border-2" :src="LogoEntitaz" alt="Logo" />
      </div>
    </div>
  </div>

  <div class="mt-16 flex flex-col items-center justify-center">
    <div class="container px-8">
      <div
        class="text-primary font-bold uppercase text-4xl border-b-4 w-fit border-primary"
      >
        Event
      </div>
      <div class="mt-4 w-full p-12 bg-primary rounded-xl">
        <Splide :options="{ rewind: true }" aria-labelledby="My Favorite Images">
          <SplideSlide>
            <img class="w-full h-[200px] object-cover" src="https://picsum.photos/1000" alt="Sample 1" />
          </SplideSlide>
          <SplideSlide>
            <img class="w-full h-[200px] object-cover" src="https://picsum.photos/1000" alt="Sample 2" />
          </SplideSlide>
        </Splide>
      </div>
    </div>
  </div>
</template>
