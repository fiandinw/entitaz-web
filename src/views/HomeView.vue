<script setup>
  import LogoEntitaz from "../assets/logo-entitaz.jpg";
  import AOS from "aos";
  import "aos/dist/aos.css";
  import { onMounted } from "vue";
  import { RouterLink } from "vue-router";
  import TeamCard from "../components/TeamCard.vue";
  import ScrollUpButton from "../components/ScrollUpButton.vue";

  AOS.init({
    offset: 200,
    duration: 500,
  });
</script>

<template>
  <ScrollUpButton />
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
              data-aos="flip-up"
              data-aos-once="true"
              data-aos-duration="2000"
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
              <RouterLink
                to="/"
                class="inline-block px-7 py-3 mb-2 md:mb-0 md:mr-2 bg-primary text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-primary-dark hover:shadow-lg focus:bg-primary-dark focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
                href="#!"
                role="button"
                >Get started</RouterLink
              >
              <a
                class="inline-block px-7 py-3 bg-transparent text-primary font-medium text-sm leading-snug uppercase rounded hover:text-secobg-primary-dark hover:bg-gray-100 focus:bg-gray-100 focus:outline-none focus:ring-0 active:bg-gray-200 transition duration-150 ease-in-out"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
                href="#desc"
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
    <div class="container px-8 h-[368px]">
      <!-- <div
        class="text-black font-bold capitalize text-3xl border-b-4 w-fit border-primary"
      >
        Event
      </div> -->
      <div class="mt-0 w-full shadow-2xl rounded-xl">
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
                src="https://picsum.photos/500/125"
                class="block w-full"
                alt="..."
              />
              <!-- <div
                class="carousel-caption hidden md:block absolute text-center"
              >
                <h5 class="text-xl">First slide label</h5>
                <p>
                  Some representative placeholder content for the first slide.
                </p>
              </div> -->
            </div>
            <div class="carousel-item relative float-left w-full">
              <img
                src="https://picsum.photos/500/125"
                class="block w-full"
                alt="..."
              />
              <!-- <div
                class="carousel-caption hidden md:block absolute text-center"
              >
                <h5 class="text-xl">Second slide label</h5>
                <p>
                  Some representative placeholder content for the second slide.
                </p>
              </div> -->
            </div>
            <div class="carousel-item relative float-left w-full">
              <img
                src="https://picsum.photos/500/125"
                class="block w-full"
                alt="..."
              />
              <!-- <div
                class="carousel-caption hidden md:block absolute text-center"
              >
                <h5 class="text-xl">Third slide label</h5>
                <p>
                  Some representative placeholder content for the third slide.
                </p>
              </div> -->
            </div>
            <div class="carousel-item relative float-left w-full">
              <img
                src="https://picsum.photos/500/125"
                class="block w-full"
                alt="..."
              />
              <!-- <div
                class="carousel-caption hidden md:block absolute text-center"
              >
                <h5 class="text-xl">Third slide label</h5>
                <p>
                  Some representative placeholder content for the third slide.
                </p>
              </div> -->
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
  <div id="desc" class="container my-24 px-6 mx-auto" data-aos="fade-up">
    <!-- Section: Design Block -->
    <section class="mb-32 text-gray-800 text-center lg:text-left">
      <div class="block rounded-lg bg-white">
        <div class="flex flex-wrap items-center">
          <div
            class="block h-full w-full lg:flex grow-1 shrink-0 basis-auto lg:w-6/12 xl:w-4/12"
          >
            <img
              src="https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              alt="Trendy Pants and Shoes"
              class="rounded-t-lg lg:rounded-tr-none lg:rounded-bl-lg h-full object-cover"
            />
          </div>
          <div class="grow-0 shrink-0 basis-auto w-full lg:w-6/12 xl:w-8/12">
            <div class="px-6 py-12 md:px-12">
              <h2 class="text-3xl font-bold mb-4 text-primary display-5">
                We assist youth to develop their potential and take them to the
                next level.
              </h2>
              <p class="text-gray-500 mb-12">
                Entitaz direncanakan menjadi wadah atau platform untuk mahasiswa
                pendidikan multimedia agar dapat meningkatkan value, kompetensi,
                dan potensi yang dimilikinya ke level yang lebih tinggi untuk
                menjawab tantangan bonus demografi di Indonesia dan perkembangan
                dunia yang semakin kompetitif.
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
                  <h5 class="text-lg font-medium text-gray-500 mb-0">
                    Mahasiswa sarjana bekerja di bidang yang tidak berkaitan
                    dengan jurusannya
                  </h5>
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

  <div id="team" class="container my-24 px-6 mx-auto">
    <!-- Section: Design Block -->
    <section class="mb-32 text-gray-800 text-center">
      <div
        class="text-black font-bold capitalize text-3xl border-b-4 w-fit border-primary"
      >
        Meet The <span class="text-primary">Team</span>
      </div>

      <div
        class="mt-8 grid md:grid-cols-2 gap-y-16 lg:grid-cols-4 gap-x-6 lg:gap-xl-12"
      >
        <TeamCard data-aos="fade-up" />
        <TeamCard data-aos="fade-up" />
        <TeamCard data-aos="fade-up" />
        <TeamCard data-aos="fade-up" />
        <TeamCard data-aos="fade-up" />
        <TeamCard data-aos="fade-up" />
        <TeamCard data-aos="fade-up" />
        <TeamCard data-aos="fade-up" />
        <TeamCard data-aos="fade-up" />
        <TeamCard data-aos="fade-up" />
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

  <div class="container my-24 px-6 mx-auto">
    <!-- Section: Design Block -->
    <section class="mb-32 text-gray-800 text-center">
      <div
        class="text-black font-bold capitalize mb-12 text-3xl border-b-4 w-fit border-primary"
      >
        Latest <span class="text-primary">Articles & Events</span>
      </div>

      <div id="articles" class="grid lg:grid-cols-3 gap-6 xl:gap-x-12">
        <div class="mb-6 lg:mb-0" data-aos="flip-up">
          <div class="relative block bg-white rounded-lg shadow-lg">
            <div class="flex">
              <div
                class="relative overflow-hidden bg-no-repeat bg-cover relative overflow-hidden bg-no-repeat bg-cover shadow-lg rounded-lg mx-4 -mt-4"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
              >
                <img
                  src="https://mdbcdn.b-cdn.net/img/new/standard/city/024.webp"
                  class="w-full"
                />
                <a href="#!">
                  <div
                    class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition duration-300 ease-in-out"
                    style="background-color: rgba(251, 251, 251, 0.15)"
                  ></div>
                </a>
              </div>
            </div>
            <div class="p-6">
              <h5 class="font-bold text-lg mb-3">My paradise</h5>
              <p class="text-gray-500 mb-4">
                <small
                  >Published <u>13.01.2022</u> by
                  <a href="" class="text-gray-900">Anna Maria Doe</a></small
                >
              </p>
              <p class="mb-4 pb-2">
                Ut pretium ultricies dignissim. Sed sit amet mi eget urna
                placerat vulputate. Ut vulputate est non quam dignissim
                elementum. Donec a ullamcorper diam.
              </p>
              <a
                href="#!"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
                class="inline-block px-6 py-2.5 bg-primary text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-primary-dark hover:shadow-lg focus:bg-secondary focus:shadow-lg focus:outline-none focus:ring-0 active:bg-secondary active:shadow-lg transition duration-150 ease-in-out"
                >Read more</a
              >
            </div>
          </div>
        </div>

        <div class="mb-6 lg:mb-0" data-aos="flip-up" data-aos-delay="150">
          <div class="relative block bg-white rounded-lg shadow-lg">
            <div class="flex">
              <div
                class="relative overflow-hidden bg-no-repeat bg-cover relative overflow-hidden bg-no-repeat bg-cover shadow-lg rounded-lg mx-4 -mt-4"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
              >
                <img
                  src="https://mdbcdn.b-cdn.net/img/new/standard/city/031.webp"
                  class="w-full"
                />
                <a href="#!">
                  <div
                    class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition duration-300 ease-in-out"
                    style="background-color: rgba(251, 251, 251, 0.15)"
                  ></div>
                </a>
              </div>
            </div>
            <div class="p-6">
              <h5 class="font-bold text-lg mb-3">Travel to Italy</h5>
              <p class="text-gray-500 mb-4">
                <small
                  >Published <u>12.01.2022</u> by
                  <a href="" class="text-gray-900">Halley Frank</a></small
                >
              </p>
              <p class="mb-4 pb-2">
                Suspendisse in volutpat massa. Nulla facilisi. Sed aliquet diam
                orci, nec ornare metus semper sed. Integer volutpat ornare erat
                sit amet rutrum.
              </p>
              <a
                href="#!"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
                class="inline-block px-6 py-2.5 bg-primary text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-primary-dark hover:shadow-lg focus:bg-secondary focus:shadow-lg focus:outline-none focus:ring-0 active:bg-secondary active:shadow-lg transition duration-150 ease-in-out"
                >Read more</a
              >
            </div>
          </div>
        </div>

        <div class="mb-0" data-aos="flip-up" data-aos-delay="300">
          <div class="relative block bg-white rounded-lg shadow-lg">
            <div class="flex">
              <div
                class="relative overflow-hidden bg-no-repeat bg-cover relative overflow-hidden bg-no-repeat bg-cover shadow-lg rounded-lg mx-4 -mt-4"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
              >
                <img
                  src="https://mdbcdn.b-cdn.net/img/new/standard/city/081.webp"
                  class="w-full"
                />
                <a href="#!">
                  <div
                    class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition duration-300 ease-in-out"
                    style="background-color: rgba(251, 251, 251, 0.15)"
                  ></div>
                </a>
              </div>
            </div>
            <div class="p-6">
              <h5 class="font-bold text-lg mb-3">Chasing the sun</h5>
              <p class="text-gray-500 mb-4">
                <small
                  >Published <u>10.01.2022</u> by
                  <a href="" class="text-gray-900">Joe Svan</a></small
                >
              </p>
              <p class="mb-4 pb-2">
                Curabitur tristique, mi a mollis sagittis, metus felis mattis
                arcu, non vehicula nisl dui quis diam. Mauris ut risus eget
                massa volutpat feugiat. Donec.
              </p>
              <a
                href="#!"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
                class="inline-block px-6 py-2.5 bg-primary text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-primary-dark hover:shadow-lg focus:bg-secondary focus:shadow-lg focus:outline-none focus:ring-0 active:bg-secondary active:shadow-lg transition duration-150 ease-in-out"
                >Read more</a
              >
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Section: Design Block -->
  </div>
</template>
