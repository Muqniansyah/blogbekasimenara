<script setup>
import videoSrc from "../assets/video/pengiriman.mp4";
</script>

<template>
  <section class="strategy-layout">
    <div class="text-side">
      <div class="text-inner">
        <h2>⚙️ Strategi Efisiensi Pengiriman Kayu Ekspor</h2>
        <p class="intro-text">
          Agar proses pengiriman berjalan lancar, perusahaan perlu menerapkan
          strategi kunci dari hulu ke hilir untuk meminimalkan *delay* dan
          biaya.
        </p>

        <ul class="strategy-points">
          <li>
            <strong>Pemilihan rute optimal</strong> Analisis data logistik
            terbaru untuk menentukan jalur tercepat dan termurah.
          </li>
          <li>
            <strong>Konsolidasi muatan</strong> Gabungkan kiriman dalam jumlah
            besar untuk memaksimalkan kapasitas kontainer dan menghemat biaya
            per unit.
          </li>
          <li>
            <strong>Pelacakan real-time</strong> Gunakan teknologi monitoring
            untuk mengetahui status pengiriman setiap saat dan mengantisipasi
            masalah.
          </li>
          <li>
            <strong>Forwarder terpercaya</strong> Berpartner dengan penyedia
            jasa ekspor yang berpengalaman untuk mengurangi hambatan
            administrasi dan kepabeanan.
          </li>
        </ul>

        <p class="outro-text">
          Langkah-langkah strategis ini akan secara signifikan meningkatkan
          stabilitas suplai, kecepatan, dan kepercayaan *buyer* internasional.
        </p>
      </div>
    </div>

    <div class="video-side">
      <div class="video-wrapper">
        <video :src="videoSrc" controls muted autoplay loop></video>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* --- TATA LETAK UTAMA (SPLIT SCREEN) --- */
.strategy-layout {
  display: grid;
  grid-template-columns: 1fr 1fr;
  min-height: 90vh;
  overflow: hidden;
  font-family: "Inter", sans-serif;
}

/* --- SISI KIRI: TEKS --- */
.text-side {
  background: #1f1f1f;
  padding: 80px 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-right: 1px solid rgba(255, 255, 255, 0.05);
}

.text-inner {
  max-width: 550px;
  color: #f0f0f0;
  text-align: left;
}

.text-side h2 {
  font-size: clamp(2rem, 4vw, 2.8rem);
  font-weight: 800;
  margin-bottom: 20px;
  color: #ff9900;
}

.intro-text {
  font-size: 1.1rem;
  color: #a0a0a0;
  margin-bottom: 30px;
  line-height: 1.7;
}

/* Poin Strategi */
.strategy-points {
  margin: 30px 0;
  padding-left: 0;
  list-style: none;
}

.strategy-points li {
  margin-bottom: 15px;
  font-size: 1rem;
  line-height: 1.6;
  color: #f0f0f0;
  position: relative;
  padding-left: 25px;
}

.strategy-points li::before {
  content: "●";
  position: absolute;
  left: 0;
  font-size: 1.2rem;
  color: #ff9900;
  line-height: 1.5;
}

.strategy-points li strong {
  color: #ff9900;
  font-weight: 700;
  display: block;
}

.outro-text {
  margin-top: 30px;
  font-size: 0.95rem;
  color: #a0a0a0;
}

/* --- SISI KANAN: VIDEO --- */
.video-side {
  background: #121212;
  padding: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.video-wrapper {
  width: 100%;
  height: 100%;
  max-width: 600px;
  max-height: 600px;
  position: relative;
}

.video-side video {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 15px;
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.5);
  transition: transform 0.3s ease;
}

.video-side video:hover {
  transform: scale(1.02);
}

/* --- RESPONSIVE --- */
@media (max-width: 1024px) {
  .strategy-layout {
    min-height: auto;
  }
}

@media (max-width: 850px) {
  .strategy-layout {
    grid-template-columns: 1fr;
  }

  .text-side {
    padding: 60px 25px;
    border-right: none;
    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  }

  .video-side {
    padding: 40px 25px 60px;
  }

  .video-wrapper {
    height: auto;
  }

  .text-inner {
    max-width: none;
  }

  .text-side h2 {
    text-align: center;
  }

  .intro-text,
  .outro-text {
    text-align: center;
  }

  .strategy-points {
    align-items: center;
    padding-left: 0;
  }

  .strategy-points li {
    padding-left: 0;
    text-align: center;
    max-width: 400px;
    margin-left: auto;
    margin-right: auto;
  }

  .strategy-points li::before {
    content: none;
  }

  .strategy-points li strong {
    display: inline;
  }
}

@media (max-width: 500px) {
  .text-side h2 {
    font-size: 2rem;
  }
}
</style>
