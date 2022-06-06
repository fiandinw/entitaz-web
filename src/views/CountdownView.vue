<script setup>
  import LogoEntitaz from "../assets/logo-entitaz.png";
  import bookssvg from "../assets/Books_SVG.svg";
  import { RouterLink } from "vue-router";
  const grandOpenUnix = 1655510400000;
  const date = new Date();
  const d = date.getTime();
  const toGrandOpenUnix = grandOpenUnix - d;
  console.log(date);
</script>

<template>
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
      <vue-countdown
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
      <div>
        <div class="flex space-x-2 justify-center mt-8">
          <button
            type="button"
            class="inline-block px-6 py-2.5 border-white border-2 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-black hover:bg-opacity-10 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out"
          >
            JOIN US
          </button>
        </div>
      </div>
      <div class="mt-12 flex flex-row gap-4 lg:fixed lg:bottom-4 lg:left-0 lg:w-screen lg:justify-center">
        <RouterLink to="/home" class="border-b-2 hover:bg-white hover:text-[#5E8F68] p-2 transition-all rounded-t-lg cursor-pointer"><i class="fa fa-home fa-2x" aria-hidden="true"></i></RouterLink>
        <div class="border-b-2 hover:bg-white hover:text-[#5E8F68] p-2 transition-all rounded-t-lg cursor-pointer"><i class="fa fa-instagram fa-2x" aria-hidden="true"></i></div>
      </div>
    </div>

    <div class="hidden lg:block w-[300px]">
      <img :src="bookssvg" alt="undraw" />
    </div>
  </div>
</template>
