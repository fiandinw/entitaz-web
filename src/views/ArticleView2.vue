<script setup>
  import AOS from "aos";
  import "aos/dist/aos.css";
  import ScrollUpButton from "../components/ScrollUpButton.vue";
  import article1 from "../assets/dynamic/article2.png";

  AOS.init({
    offset: 200,
    duration: 500,
  });
</script>

<template>
  <ScrollUpButton />
  <div
    class="w-full flex items-center justify-center px-8 lg:px-36 text-justify"
  >
    <section class="container mt-12">
      <h1 class="text-2xl font-semibold text-primary text-center">
        Di ghosting sama perusahaan?
      </h1>
      <h2 class="text-center">Mungkin ini alasannya !</h2>
      <div class="w-full h-80 flex justify-center">
        <img class="mt-8" :src="article1" alt="" />
      </div>
      <ol class="list-decimal">
        <li class="mt-8">Posisi yang kamu lamar banyak peminatnya!</li>
        <p class="indent-8">
          Bayangin, HRD jadi artis dadakan yang emailnya bunyi terus. Setiap
          hari ada ratusan pelamar yang melamar berbagai posisi dan dia harus
          cek semua emailnya. Kalau udah kaya gini, sih, kamu harus sabar
          menanti keputusan terbaiknya ya!
        </p>
        <li class="mt-8">Posisinya sudah tidak dibutuhkan</li>
        <p class="indent-8">
          Dalam hal ini, perusahaan bisa menghilangkan posisi yang sudah dibuka
          dengan berbagai pertimbangan, atau posisi ini udah diisi oleh kandidat
          lainnya.
        </p>
        <li class="mt-8">Keinginan User</li>
        <p class="indent-8">
          Saat kita kerja nanti, user adalah orang yang nantinya jadi atasanmu
          nanti. Nah, user biasanya menentukan apakah seorang kandidat memenuhi
          kualifikasi yang mereka butuhkan atau tidak.
        </p>
        <li class="mt-8">Sedang ada masalah internal perusahaan</li>
        <p class="indent-8">
          Penyebab selanjutnya adalah perusahaan mengalami masalah internal yang
          mengakibatkan tersitanya waktu HRD sehingga HRD tidak sempat
          memberikan kabar kepada pelamar yang mereka tolak.
        </p>
      </ol>
      <div class="mt-12">
        <p>
          Sebenernya masih banyak alasan lain kenapa perushaan melakukan
          ghosting kepada calon pelamar. Tetapi satu yang perlu diingat, Jika
          kita tidak diterima oleh suatu perusahaan, Bukan berarti kita tidak
          layak mendapatkan pekerjaan. Jadi, semangat terus ya jobseeker!
        </p>
      </div>
    </section>
  </div>
</template>
