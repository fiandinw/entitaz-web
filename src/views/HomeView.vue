<script setup>
  import LogoEntitaz from "../assets/logo-entitaz.jpg";
  import manHello from "../assets/business-3d-close-up-of-businessman-in-dark-blue-suit-waving-hello.png";
</script>

<template>
  <!-- <div
    class="bg-primary text-white py-20 pb-0 px-6 flex flex-col items-center justify-center"
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
        <img
          class="rounded-xl w-72 border-2 p-8 pb-0 pr-0"
          :src="manHello"
          alt="Logo"
        />
      </div>
    </div>
  </div> -->

  <section class="mb-40">
    <div class="px-6 py-12 md:px-12 text-gray-800 text-center lg:text-left">
      <div class="container mx-auto xl:px-32">
        <div class="grid lg:grid-cols-2 flex items-center">
          <div class="md:mt-12 lg:mt-0 mb-12 lg:mb-0">
            <div
              class="block rounded-lg shadow-lg px-6 py-12 md:px-12 lg:-mr-14"
              style="
                background: hsla(0, 0%, 100%, 0.55);
                backdrop-filter: blur(30px);
              "
            >
              <h1
                class="text-4xl md:text-5xl xl:text-6xl font-bold tracking-tight mb-12"
              >
                Connecting Your Dream
                <span class="text-primary">To Reality.</span>
              </h1>
              <a
                class="inline-block px-7 py-3 mb-2 md:mb-0 md:mr-2 bg-primary text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-primary-dark hover:shadow-lg focus:bg-primary-dark focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
                href="#!"
                role="button"
                >Get started</a
              >
              <a
                class="inline-block px-7 py-3 bg-transparent text-primary font-medium text-sm leading-snug uppercase rounded hover:text-secobg-primary-dark hover:bg-gray-100 focus:bg-gray-100 focus:outline-none focus:ring-0 active:bg-gray-200 transition duration-150 ease-in-out"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
                href="#!"
                role="button"
                >Learn more</a
              >
            </div>
          </div>
          <div class="md:mb-12 lg:mb-0">
            <img
              src="https://images.unsplash.com/photo-1495539406979-bf61750d38ad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              class="object-cover rounded-lg shadow-lg w-[600px] h-[800px]"
              alt="landing hero"
            />
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- <div class="relative">
    <svg class="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <path
        fill="#07d566"
        fill-opacity="1"
        d="M0,64L60,90.7C120,117,240,171,360,170.7C480,171,600,117,720,128C840,139,960,213,1080,218.7C1200,224,1320,160,1380,128L1440,96L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
      ></path>
    </svg>
  </div> -->

  <div class="flex flex-col items-center justify-center bg-gray-100 py-16">
    <div class="container px-8">
      <!-- <div
        class="text-black font-bold capitalize text-3xl border-b-4 w-fit border-primary"
      >
        Event
      </div> -->
      <div class="mt-8 w-full px-4 shadow-xl bg-primary rounded-xl">
        <div
          id="carouselExampleCaptions"
          class="carousel slide relative"
          data-bs-ride="carousel"
        >
          <div
            class="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4"
          >
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="0"
              class="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="3"
              aria-label="Slide 4"
            ></button>
          </div>
          <div class="carousel-inner relative w-full overflow-hidden">
            <div class="carousel-item active relative float-left w-full">
              <img
                src="https://picsum.photos/2000/500"
                class="block w-full"
                alt="..."
              />
              <div
                class="carousel-caption hidden md:block absolute text-center"
              >
                <h5 class="text-xl">First slide label</h5>
                <p>
                  Some representative placeholder content for the first slide.
                </p>
              </div>
            </div>
            <div class="carousel-item relative float-left w-full">
              <img
                src="https://picsum.photos/2000/500"
                class="block w-full"
                alt="..."
              />
              <div
                class="carousel-caption hidden md:block absolute text-center"
              >
                <h5 class="text-xl">Second slide label</h5>
                <p>
                  Some representative placeholder content for the second slide.
                </p>
              </div>
            </div>
            <div class="carousel-item relative float-left w-full">
              <img
                src="https://picsum.photos/2000/500"
                class="block w-full"
                alt="..."
              />
              <div
                class="carousel-caption hidden md:block absolute text-center"
              >
                <h5 class="text-xl">Third slide label</h5>
                <p>
                  Some representative placeholder content for the third slide.
                </p>
              </div>
            </div>
            <div class="carousel-item relative float-left w-full">
              <img
                src="https://picsum.photos/2000/500"
                class="block w-full"
                alt="..."
              />
              <div
                class="carousel-caption hidden md:block absolute text-center"
              >
                <h5 class="text-xl">Third slide label</h5>
                <p>
                  Some representative placeholder content for the third slide.
                </p>
              </div>
            </div>
          </div>
          <button
            class="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span
              class="carousel-control-prev-icon inline-block bg-no-repeat"
              aria-hidden="true"
            ></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span
              class="carousel-control-next-icon inline-block bg-no-repeat"
              aria-hidden="true"
            ></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  </div>

  <!-- Container for demo purpose -->
  <div class="container my-24 px-6 mx-auto">
    <!-- Section: Design Block -->
    <section class="mb-32 text-gray-800 text-center lg:text-left">
      <div class="block rounded-lg shadow-lg bg-white">
        <div class="flex flex-wrap items-center">
          <div
            class="block w-full lg:flex grow-0 shrink-0 basis-auto lg:w-6/12 xl:w-4/12"
          >
            <img
              src="https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              alt="Trendy Pants and Shoes"
              class="rounded-t-lg lg:rounded-tr-none lg:rounded-bl-lg w-[450px] h-[450px] object-cover"
            />
          </div>
          <div class="grow-0 shrink-0 basis-auto w-full lg:w-6/12 xl:w-8/12">
            <div class="px-6 py-12 md:px-12">
              <h2 class="text-3xl font-bold mb-4 text-primary display-5">
                We assist youth to develop their potential and take them to the next level.
              </h2>
              <p class="text-gray-500 mb-12">
                Entitaz direncanakan menjadi wadah atau platform untuk mahasiswa pendidikan multimedia agar dapat meningkatkan value, kompetensi, dan potensi yang dimilikinya ke level yang lebih tinggi untuk menjawab tantangan bonus demografi di Indonesia dan perkembangan dunia yang semakin kompetitif.
              </p>

              <div class="grid lg:gap-x-12 md:grid-cols-3">
                <div class="mb-12 md:mb-0">
                  <h2 class="text-3xl font-bold text-primary mb-4">85%</h2>
                  <h5 class="text-lg font-medium text-gray-500 mb-0">
                    Pekerjaan yang akan ada pada 2030 belum ada pada tahun 2021
                  </h5>
                </div>

                <div class="mb-12 md:mb-0">
                  <h2 class="text-3xl font-bold text-primary mb-4">73%</h2>
                  <h5 class="text-lg font-medium text-gray-500 mb-0">Mahasiswa sarjana bekerja di bidang yang tidak berkaitan dengan jurusannya</h5>
                </div>

                <div class="">
                  <h2 class="text-3xl font-bold text-primary mb-4">49</h2>
                  <h5 class="text-lg font-medium text-gray-500 mb-0">
                    Projects
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Section: Design Block -->
  </div>
  <!-- Container for demo purpose -->

  <div class="container my-24 px-6 mx-auto">
    <!-- Section: Design Block -->
    <section class="mb-32 text-gray-800 text-center">
      <div
        class="text-black font-bold capitalize text-3xl border-b-4 w-fit border-primary"
      >
        Meet The <span class="text-primary">Team</span>
      </div>

      <div
        class="mt-8 grid md:grid-cols-2 gap-y-6 lg:grid-cols-4 gap-x-6 lg:gap-xl-12"
      >
        <div class="mb-12 lg:mb-0">
          <img
            class="rounded-lg shadow-lg mb-6 mx-auto"
            src="https://picsum.photos/200"
            alt="avatar"
            style="width: 150px"
          />
          <h5 class="text-lg font-bold mb-4">Udin Jaelani</h5>
          <p class="mb-6">Role</p>
          <ul class="list-inside flex mx-auto justify-center">
            <a href="#!" class="px-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 496 512"
                class="w-4 h-4 text-black"
              >
                <path
                  fill="currentColor"
                  d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
                />
              </svg>
            </a>
            <a href="#!" class="px-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                class="w-4 h-4 text-black"
              >
                <path
                  fill="currentColor"
                  d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
                />
              </svg>
            </a>
            <a href="#!" class="px-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                class="w-4 h-4 text-black"
              >
                <path
                  fill="currentColor"
                  d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
                />
              </svg>
            </a>
          </ul>
        </div>
      </div>
    </section>
    <!-- Section: Design Block -->
  </div>

  <div class="bg-gray-100 py-1">
    <div class="container my-24 px-6 mx-auto">
      <!-- Section: Design Block -->
      <section class="mb-32 text-gray-800">
        <!-- <h2 class="text-3xl font-bold mb-12 text-left border-b-4 w-fit border-primary">
          Frequently asked <span class="text-primary">questions</span>
        </h2> -->
        <div class="grid lg:grid-cols-3 gap-6">
          <div class="mb-12">
            <p class="font-bold mb-4">Anim pariatur cliche reprehenderit?</p>
            <p class="text-gray-500">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt
              autem numquam dolore molestias aperiam culpa alias veritatis
              architecto eos, molestiae vitae ex eligendi libero eveniet
              dolorem, doloremque rem aliquid perferendis.
            </p>
          </div>
          <div class="mb-12">
            <p class="font-bold mb-4">Non cupidatat skateboard dolor brunch?</p>
            <p class="text-gray-500">
              Distinctio corporis, iure facere ducimus quos consectetur ipsa ut
              magnam autem doloremque ex! Id, sequi. Voluptatum magnam sed fugit
              iusto minus et suscipit? Minima sunt at nulla tenetur, numquam
              unde quod modi magnam ab deserunt ipsam sint aliquid dolores
              libero repellendus cupiditate mollitia quidem dolorem odit
            </p>
          </div>
          <div class="mb-12">
            <p class="font-bold mb-4">
              Praesentium voluptatibus temporibus consequatur non aspernatur?
            </p>
            <p class="text-gray-500">
              Minima sunt at nulla tenetur, numquam unde quod modi magnam ab
              deserunt ipsam sint aliquid dolores libero repellendus cupiditate
              mollitia quidem dolorem.
            </p>
          </div>
          <div class="col-md-12 mb-12">
            <p class="font-bold mb-4">
              Voluptatum magnam sed fugit iusto minus et suscipit?
            </p>
            <p class="text-gray-500">
              Laudantium perferendis, est alias iure ut veniam suscipit dolorem
              fugit. Et ipsam corporis earum ea ut quae cum non iusto blanditiis
              ipsum dolor eius reiciendis, velit adipisci quas.
            </p>
          </div>
          <div class="mb-12">
            <p class="font-bold mb-4">Minima sunt at nulla tenetur,?</p>
            <p class="text-gray-500">
              Numquam unde quod modi magnam ab deserunt ipsam sint aliquid
              dolores libero repellendus cupiditate mollitia quidem dolorem odit
            </p>
          </div>
          <div class="mb-12">
            <p class="font-bold mb-4">
              Distinctio corporis, iure facere ducimus?
            </p>
            <p class="text-gray-500">
              Eaque eos corrupti debitis tenetur repellat, beatae quibusdam
              incidunt, fuga non iste dignissimos officiis nam officia obcaecati
              commodi ratione qui nesciunt.
            </p>
          </div>
        </div>
      </section>
      <!-- Section: Design Block -->
    </div>
  </div>
</template>
