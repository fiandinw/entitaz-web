<script setup>
  import LogoEntitaz from "../assets/logo-entitaz.png";
  import bookssvg from "../assets/Books_SVG.svg";
  import guild from "../assets/guild.png";
  import { RouterLink } from "vue-router";
  import gsap from "gsap";
  import { onMounted, onUnmounted, ref } from "vue";

  const grandOpenUnix = 1655510400000;
  const date = new Date();
  const d = date.getTime();
  const toGrandOpenUnix = grandOpenUnix - d;
  console.log(date);

  const cover = ref(null);

  setTimeout(() => {
    gsap.to("#cover", {
      duration: 0.2,
      opacity: 0,
    });
  }, 2000);
  onMounted(() => {
    setTimeout(() => {
      cover.value.style.display = "none";
    }, 2300);
  });
</script>

<template>
  <div
    id="cover"
    ref="cover"
    class="absolute w-screen h-screen flex items-center justify-center bg-primary z-50"
  >
    <img class="animate-pulse" :src="LogoEntitaz" alt="logo" />
  </div>
  <div
    class="bg-gradient-to-tr from-secondary to-primary w-screen h-screen flex flex-col lg:flex-row items-center justify-evenly"
  >
    <!-- <div class="hidden lg:block w-[300px]">
      <img class="-scale-x-100" :src="workspacesvg" alt="undraw1" />
    </div> -->
    <div
      class="shrink-0 text-white flex flex-col items-center lg:items-start justify-center gap-4"
    >
      <div class="relative">
        <div class="absolute w-48 h-48">
          <img class="" :src="LogoEntitaz" alt="logo" />
        </div>
        <div
          class="spinner-border animate-spin inline-block w-48 h-48 border-4 rounded-full text-white"
          role="status"
        >
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
      <div class="text-2xl font-bold">Connecting your dream to reality</div>
      <!-- <vue-countdown
        class="font-semibold flex flex-row gap-8"
        :time="toGrandOpenUnix"
        v-slot="{ days, hours, minutes, seconds }"
      >
        <div class="text-center lg:text-left">
          <div>{{ days }}</div>
          <div>days</div>
        </div>
        <div class="text-center lg:text-left">
          <div>{{ hours }}</div>
          <div>hours</div>
        </div>
        <div class="text-center lg:text-left">
          <div>{{ minutes }}</div>
          <div>minutes</div>
        </div>
        <div class="text-center lg:text-left">
          <div>{{ seconds }}</div>
          <div>seconds</div>
        </div>
      </vue-countdown>
      <div class="font-base mt-4 text-sm">Ready to be Entitaz generation?</div>
      <div>
        <div
          class="flex space-x-2 justify-center mt-0 hover:scale-110 transition-all duration-150"
        >
          <a
            href="https://bit.ly/tumbuhbarengentitaz"
            target="_blank"
            class="inline-block px-6 py-2.5 border-white border-2 text-white font-bold text-sm leading-tight uppercase rounded shadow-md hover:bg-black hover:bg-opacity-10 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out"
          >
            JOIN US!
          </a>
        </div>
      </div> -->
      <div
        class="flex flex-row gap-4 fixed bottom-4 left-0 w-screen justify-center"
      >
        <RouterLink
          to="/home"
          class="border-b-2 p-2 transition-all rounded-t-lg cursor-pointer relative"
        >
          <div
            class="absolute -top-8 w-fit text-center text-xs left-0 animate-bounce"
          >
            Comming Soon!
          </div>
          <i class="fa fa-home fa-2x" aria-hidden="true"></i
        ></RouterLink>
        <a
          href="https://instagram.com/entitaz.id"
          target="_blank"
          class="border-b-2 hover:bg-white hover:text-[#5E8F68] p-2 transition-all rounded-t-lg cursor-pointer"
          ><i class="fa fa-instagram fa-2x" aria-hidden="true"></i
        ></a>
      </div>
    </div>

    <!-- <div class="hidden lg:block w-[300px]">
      <img :src="bookssvg" alt="undraw" />
    </div> -->
    <div
      class="hidden lg:block w-[400px] border-2 border-white rounded-3xl px-4 relative overflow-hidden hover:scale-110 transition-all duration-200"
    >
      <!-- <img
        class="absolute w-full h-full object-cover top-0 left-0 opacity-0 hover:opacity-100 bg-primary bg-opacity-25 transition-all duration-300"
        :src="LogoEntitaz"
        alt="logo"
      /> -->
      <!-- <div
        href="https://bit.ly/tumbuhbarengentitaz"
        target="_blank"
        class="absolute w-full h-full top-0 left-0 flex items-center justify-center text-4xl text-white font-extrabold bg-primary bg-opacity-60 opacity-0 hover:opacity-100 transition-all duration-300"
      >
        <a
          class="hover:scale-125 transition-all duration-150"
          href="https://bit.ly/tumbuhbarengentitaz"
          target="_blank"
          >WE WANT YOU!</a
        >
      </div> -->
      <img class="" :src="guild" alt="undraw" />
    </div>
  </div>
</template>
