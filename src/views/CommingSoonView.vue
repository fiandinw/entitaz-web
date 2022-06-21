<template>
  <div
    class="absolute bg-primary mix-blend-multiply bg-opacity-50 w-screen h-screen z-40"
  ></div>
  <div class="h-screen grid grid-flow-col grid-rows-2 gap-4 p-4">
    <div class="flex items-center justify-center">
      <div
        id="carouselExampleSlidesOnly"
        class="carousel carousel-fade slide relative"
        data-mdb-touch="false"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner relative overflow-hidden">
          <div
            class="carousel-item active relative float-left"
            data-mdb-interval="50"
          >
            <img
              src="https://mdbcdn.b-cdn.net/img/new/slides/041.webp"
              class="h-full aspect-[9/16] object-cover grayscale"
              alt="Wild Landscape"
            />
          </div>
          <div
            class="carousel-item relative float-left w-full"
            data-mdb-interval="50"
          >
            <img
              src="https://mdbcdn.b-cdn.net/img/new/slides/042.webp"
              class="h-full aspect-[9/16] object-cover grayscale"
              alt="Camera"
            />
          </div>
          <div
            class="carousel-item relative float-left w-full"
            data-mdb-interval="50"
          >
            <img
              src="https://mdbcdn.b-cdn.net/img/new/slides/043.webp"
              class="h-full aspect-[9/16] object-cover grayscale"
              alt="Exotic Fruits"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="flex items-center justify-center">
      <img
        class="h-full aspect-[9/16] object-cover grayscale"
        src="https://picsum.photos/60/100"
        alt="foto"
      />
    </div>
    <div class="flex items-center justify-center">
      <img
        class="h-full aspect-[9/16] object-cover grayscale"
        src="https://picsum.photos/60/100"
        alt="foto"
      />
    </div>
    <div class="flex items-center justify-center">
      <img
        class="h-full aspect-[9/16] object-cover grayscale"
        src="https://picsum.photos/60/100"
        alt="foto"
      />
    </div>
  </div>
</template>
