<script setup>
  import LogoEntitaz from "../assets/logo-entitaz.png";
  import undraw from "../assets/undraw_my_universe_803e.svg";
  import workspacesvg from "../assets/workspace_SVG.svg";
  import bookssvg from "../assets/Books_SVG.svg";
  const grandOpenUnix = 1655510400000;
  const date = new Date();
  const d = date.getTime();
  const toGrandOpenUnix = grandOpenUnix - d;
  console.log(date);
</script>

<template>
  <div class="bg-gradient-to-tr from-[#5E8F68] to-primary w-screen h-screen flex flex-col lg:flex-row items-center justify-evenly">
    <div class="hidden lg:block w-[300px]">
      <img class="-scale-x-100" :src="workspacesvg" alt="undraw1" />
    </div>
    <div
      class="shrink-0 text-white flex flex-col items-center justify-center gap-4"
    >
      <div class="relative">
        <div class="absolute w-48 h-48">
          <img class="" :src="LogoEntitaz" alt="" />
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
        class="font-semibold"
        :time="toGrandOpenUnix"
        v-slot="{ days, hours, minutes, seconds }"
      >
        {{ days }} days {{ hours }} hours {{ minutes }} minutes
        {{ seconds }} seconds
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
    </div>

    <div class="hidden lg:block w-[300px]">
      <img :src="bookssvg" alt="undraw" />
    </div>
  </div>
</template>
