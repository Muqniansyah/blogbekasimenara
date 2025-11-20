<template>
  <section class="swiper-section">
    <h2 class="title">✨ Temukan Lebih Banyak</h2>

    <Swiper
      :modules="[Navigation, Pagination, Autoplay]"
      :slides-per-view="1"
      :space-between="30"
      :loop="true"
      :autoplay="{ delay: 3500, disableOnInteraction: false }"
      pagination
      navigation
      class="export-swiper"
    >
      <SwiperSlide
        v-for="(item, index) in slides"
        :key="index"
        class="slide-card"
        @click="openLink(item.link)"
      >
        <div class="image-wrapper">
          <div class="step-number">{{ index + 1 }}</div>
          <img :src="item.img" :alt="item.title" loading="lazy" />
        </div>

        <div class="caption">
          <h3 class="caption-title">{{ item.title }}</h3>
          <p class="caption-desc">{{ item.desc }}</p>
        </div>
      </SwiperSlide>
    </Swiper>
  </section>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Data proses ekspor Anda
const slides = [
  {
    img: "/slider/kemas.png",
    title: "Website Resmi PT.Kemas Kayu Indonesia",
    desc: "“Kami selalu memastikan kualitas kayu sesuai standar internasional.”",
    link: "https://menarabekasilestari.site/",
  },
  {
    img: "/slider/menarabekasi.png",
    title: "Pastikan Pallet Anda Siap Kirim Tanpa Risiko!",
    desc: "“Kerjasama hanya dengan vendor terpercaya & berpengalaman.”",
    link: "https://kemaskayuindonesia.my.id/menarabekasi/",
  },
  {
    img: "/slider/web-11.jpg",
    title: "Mengenal Kayu Ramah Lingkungan dan Sertifikasi Hijau ",
    desc: "“Ketahui cara mendukung ekspor hijau melalui penggunaan kayu ramah lingkungan.”",
    link: "https://web-menarabks.vercel.app/",
  },
  {
    img: "/slider/web-9.jpg",
    title: "Pembuatan Pallet Kayu Ekspor: Proses dan Standar ISPM 15",
    desc: "“Lihat bagaimana proses pengolahan kayu menjadi pallet ekspor yang memenuhi regulasi.”",
    link: "https://blogwebmenara.vercel.app/",
  },
  {
    img: "/slider/web-2.jpg",
    title: "Pemilihan Jenis Kayu Tepat untuk Kelancaran Ekspor Internasional",
    desc: "“Pelajari cara memilih jenis kayu terbaik agar ekspor Anda lancar dan sesuai standar ISPM 15.”",
    link: "https://muqniansyah.github.io/menara-blog/",
  },
  {
    img: "/slider/web-6.jpg",
    title: "Pentingnya Vendor Berlisensi ISPM 15 dalam Ekspor Kayu",
    desc: "“Pastikan Anda bekerja dengan vendor berizin resmi agar pengiriman kayu diterima global.”",
    link: "https://muqniansyah.codeberg.page/bekasimenara/",
  },
];

function openLink(url) {
  if (url) window.open(url, "_blank", "noopener noreferrer");
}
</script>

<style scoped>
/* Gaya Swiper yang Elegan dan Responsif */
.swiper-section {
  text-align: center;
  padding: 80px 20px;
  /* Latar belakang gelap untuk kesan premium */
  background-color: #111827;
  color: #fff;
  font-family: "Inter", sans-serif; /* Ganti font untuk kesan modern */
}

/* Judul */
.title {
  font-size: clamp(1.8rem, 4vw, 2.5rem); /* Ukuran font adaptif */
  margin-bottom: 50px;
  color: #ffd700; /* Warna aksen Emas */
  font-weight: 800;
  letter-spacing: 1px;
}

/* Kontainer Swiper */
.export-swiper {
  width: 95%;
  max-width: 1000px;
  margin: 0 auto;
}

/* Slide Card (Kartu) */
.slide-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  /* Card style */
  background-color: #1f2937; /* Warna latar belakang kartu yang lebih terang dari section */
  border-radius: 15px;
  padding: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
  overflow: hidden;
}

/* Pembungkus Gambar */
.image-wrapper {
  position: relative;
  width: 100%;
  border-radius: 10px;
  overflow: hidden;
  margin-bottom: 20px;
  aspect-ratio: 16 / 9; /* Rasio standar untuk tampilan profesional */
}

.slide-card img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94); /* Transisi lebih mulus */
}

.image-wrapper:hover img {
  transform: scale(1.08) rotate(1deg);
  opacity: 0.85;
}

/* Nomor Tahap */
.step-number {
  position: absolute;
  top: 15px;
  left: 15px;
  background-color: #ffd700;
  color: #111827;
  font-weight: 900;
  font-size: 1.5rem;
  width: 40px;
  height: 40px;
  line-height: 40px;
  border-radius: 50%;
  z-index: 10;
  box-shadow: 0 0 10px rgba(255, 215, 0, 0.5);
}

/* Keterangan (Caption) */
.caption {
  text-align: left;
  width: 100%;
  padding: 0 10px;
  overflow: visible;
  word-wrap: break-word;
  white-space: normal;
}

.caption-title {
  font-weight: 800;
  font-size: clamp(1.2rem, 3vw, 1.7rem);
  margin-bottom: 10px;
  color: #ffd700;
}

.caption-desc {
  font-size: clamp(0.9rem, 2vw, 1.1rem);
  line-height: 1.6;
  color: #d1d5db; /* Abu-abu terang untuk kontras yang nyaman */
}

/* Styling Paginasi Swiper (Titik-titik di bawah) */
:deep(.swiper-pagination-bullet) {
  background-color: #555 !important;
  opacity: 1;
  transition: all 0.3s;
}

:deep(.swiper-pagination-bullet-active) {
  background-color: #ffd700 !important;
  width: 12px;
  height: 12px;
}

/* Styling Navigasi Swiper (Panah Kiri/Kanan) */
:deep(.swiper-button-next),
:deep(.swiper-button-prev) {
  color: #ffd700 !important;
  transition: transform 0.3s;
}

:deep(.swiper-button-next:hover),
:deep(.swiper-button-prev:hover) {
  transform: scale(1.2);
}

/* Media Query untuk Responsivitas */
@media (min-width: 768px) {
  /* Pada desktop, buat slide menjadi tata letak sampingan untuk kesan kartu yang lebih besar */
  .slide-card {
    cursor: pointer;
    flex-direction: row;
    text-align: left;
    align-items: stretch;
    min-height: 450px; /* Tinggi minimum kartu */
  }

  .image-wrapper {
    flex: 1; /* Ambil setengah ruang */
    margin-bottom: 0;
    margin-right: 25px;
  }

  .caption {
    flex: 1; /* Ambil setengah ruang */
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0;
  }
}

@media (max-width: 768px) {
  .slide-card {
    padding: 15px;
  }
}
</style>
