<script setup>
  import AOS from "aos";
  import "aos/dist/aos.css";
  import ScrollUpButton from "../components/ScrollUpButton.vue";
  import article1 from "../assets/dynamic/article1.png";

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
        Karir Starter Pack
      </h1>
      <h2 class="text-center">
        (Apa Saja Yang Perlu Disiapkan Dalam Menghadapi Dunia Kerja Khususnya
        Magang)
      </h2>
      <div class="w-full flex justify-center">
        <img class="mt-8" :src="article1" alt="" />
      </div>
      <p class="mt-8">
        Magang adalah salah satu agenda penting dalam kehidupan mahasiswa.
        Magang bisa menjadi awal karir dan salah satu langkah menuju sukses.
        Makanya, jangan asal daftar kesana-sini doang! Harus ada persiapannya
        dong~
      </p>
      <p>Apa aja sih Karir Stater Pack saat mau magang? Yuk, kita baca-baca!</p>
      <ol class="list-decimal">
        <li class="mt-8">Cari info perusahaan sesuai divisi incaranmu!</li>
        <p class="indent-8">
          Sebelum melamar magang, kamu harus tahu akan magang di bidang apa.
          Carilah perusahaan dan bidang yang sesuai dengan minat dan bakatmu.
          Kamu bisa mencari di berbagai situs atau aplikasi pencarian kerja.
        </p>
        <p class="indent-8">
          Pilihlah perusahaan yang terpercaya dan bidang yang sesuai dengan
          jurusan dan jenjang karir yang akan kamu arungi. Jika kamu jurusan
          Multimedia, kamu bisa melamar di bidang Desain, Video Editor, Film,
          Perancangan Aplikasi, dan lain-lain. Pokoknya, sesuaikan deh sama apa
          yang ingin kamu dalami lebih lanjut.
        </p>
        <li class="mt-8">Siapin surat lamaran yang kece</li>
        <p class="indent-8">
          Saat mau magang atau melamar pekerjaan, jangan lupa untuk mengirimkan
          surat lamaran sebagai etika yang baik. Inget, ya! Surat lamaran gak
          bisa diganti hanya dengan kalimat sapaan “Halo, saya mau magang
          disini, dong. Ditunggu jadwal interviewnya, ya!” Duh, gak banget
          bestie. Di dalam surat lamaran, kamu bisa menyampaikan passion dan
          alasan kenapa kamu mau magang di perusahaan itu. Jangan terlalu
          template, ya! Buatlah Surat lamaran yang “disesuaikan” dengan
          perusahaan yang akan kamu lamar biar keliatan kamu beneran berminat
          magang di sana.
        </p>
        <p class="indent-8">
          Di dalam surat lamaran, kamu bisa menyampaikan passion dan alasan
          kenapa kamu mau magang di perusahaan itu. Jangan terlalu template, ya!
          Buatlah Surat lamaran yang “disesuaikan” dengan perusahaan yang akan
          kamu lamar biar keliatan kamu beneran berminat magang di sana.
        </p>
        <li class="mt-8">Jangan lupa juga bikin CV!</li>
        <p class="indent-8">
          Selain surat lamaran, Curriculum Vitae (CV) adalah suatu hal yang
          wajib kamu siapin! CV bertujuan agar recruiter tahu “siapa sih
          kandidat yang hendak magang di perusahaan mereka dan seperti apa latar
          belakangnya?” Buatlah CV yang keren dan “menjual” biar bisa bikin
          perusahaan tertarik. Kamu bisa menambahkan latar belakang pendidikan,
          pengalaman organisasi dan workshop kamu ikuti, tugas kampus yang
          relate dengan posisi yang kamu pilih, hingga skill dan minat yang kamu
          punya.
        </p>
        <p class="indent-8">
          Buatlah CV yang keren dan “menjual” biar bisa bikin perusahaan
          tertarik. Kamu bisa menambahkan latar belakang pendidikan, pengalaman
          organisasi dan workshop kamu ikuti, tugas kampus yang relate dengan
          posisi yang kamu pilih, hingga skill dan minat yang kamu punya.
        </p>
        <li class="mt-8">Mulai Menyusun LinkedIn</li>
        <p class="indent-8">
          LinkedIn adalah sebuah platform internet yang digunakan untuk mencari
          berbagai pekerjaan seperti magang, part time, full time, dan lain
          sebagainya. Kamu bisa membuat akun LinkedIn dengan mudah. Eits, jangan
          lupa untuk gunakan foto yang layak, ya. Tambahkan Headline yang
          informatif, cantumkan pendidikan dan kampusmu, serta kembangkan
          rangkuman pengalamanmu. Mulai dari pengalaman organisasi, lomba,
          kegiatan positif yang kamu ikuti dan hasil karya yang relevan.
        </p>
        <p class="indent-8">
          Tambahkan Headline yang informatif, cantumkan pendidikan dan kampusmu,
          serta kembangkan rangkuman pengalamanmu. Mulai dari pengalaman
          organisasi, lomba, kegiatan positif yang kamu ikuti dan hasil karya
          yang relevan.
        </p>
        <li class="mt-8">
          Siapkan jawaban interview yang biasa ditanyakan Recruiter
        </li>
        <p class="indent-8">
          Proses interview merupakan salah satu tahap yang menentukan diterima
          atau tidaknya kamu. Saat interview, kamu akan bertemu dengan pihak HRD
          ataupun atasan langsung kamu saat diterima nanti. Pertanyaan yang
          biasanya diajukan adalah tentang diri kamu, alasan kamu melamar posisi
          tersebut, pengalaman sulit waktu kuliah, hal yang bisa meyakinkan
          perusahaan untuk merekrut kamu, kelebihan dan kekurangan serta cara
          kamu menghadapi hal tersebut. Kamu bisa menjawab pertanyaan interview
          ini dengan metode STAR (Situation, Task, Action, Result).
        </p>
        <p class="indent-8">
          Pertanyaan yang biasanya diajukan adalah tentang diri kamu, alasan
          kamu melamar posisi tersebut, pengalaman sulit waktu kuliah, hal yang
          bisa meyakinkan perusahaan untuk merekrut kamu, kelebihan dan
          kekurangan serta cara kamu menghadapi hal tersebut. Kamu bisa menjawab
          pertanyaan interview ini dengan metode STAR (Situation, Task, Action,
          Result).
        </p>
        <li class="mt-8">Tunjukkan kemampuanmu</li>
        <p class="indent-8">
          Selama berkuliah, kamu pasti memiliki ilmu yang dipelajari, kan?
          Ingat-ingat dan praktikkan ilmu yang kamu dapatkan selama kuliah. Maka
          kamu akan menjadi sosok yang berbeda dari kandidat magang yang lain.
          Beberapa kemampuan yang bisa kamu tunjukkan adalah bersosialisasi,
          sikap positif, keinginan bekerja keras, disiplin, dan bertanggung
          jawab.
        </p>
        <p class="indent-8">
          Beberapa kemampuan yang bisa kamu tunjukkan adalah bersosialisasi,
          sikap positif, keinginan bekerja keras, disiplin, dan bertanggung
          jawab.
        </p>
      </ol>
      <div class="mt-12">
        <p>sumber:</p>
        <ul>
          <li>
            <a
              href="https://rencanamu.id/post/persiapan-kerja/starter-pack-magang-segala-hal-dan-perlengkapan-magang-yang-perlu-kamu-siapkan"
              >https://rencanamu.id/post/persiapan-kerja/starter-pack-magang-segala-hal-dan-perlengkapan-magang-yang-perlu-kamu-siapkan</a
            >
          </li>
          <li>
            <a href="https://glints.com/id/lowongan/etika-magang/#.YuGDXnZBzIU"
              >https://glints.com/id/lowongan/etika-magang/#.YuGDXnZBzIU</a
            >
          </li>
          <li>
            <a
              href="https://glints.com/id/lowongan/persiapan-magang/#.YuGDLHZBzIU"
              >https://glints.com/id/lowongan/persiapan-magang/#.YuGDLHZBzIU</a
            >
          </li>
          <li>
            <a href="https://www.ruangguru.com/blog/persiapan-sebelum-magang"
              >https://www.ruangguru.com/blog/persiapan-sebelum-magang</a
            >
          </li>
          <li>
            <a
              href="https://rencanamu.id/post/dunia-kerja/persiapan-kerja/kesalahan-yang-sering-terjadi-pada-surat-lamaran-dan-cv"
              >https://rencanamu.id/post/dunia-kerja/persiapan-kerja/kesalahan-yang-sering-terjadi-pada-surat-lamaran-dan-cv</a
            >
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>
