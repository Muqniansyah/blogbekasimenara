<script setup>
import videoSrc from "../assets/video/pengiriman.mp4";
</script>

<template>
  <section class="strategy-section">
    <div class="glass-card">
      <h2>⚙️ Strategi Efisiensi Pengiriman Kayu Ekspor</h2>
      <p>
        Agar proses pengiriman berjalan lancar, perusahaan perlu menerapkan
        strategi yang matang dari hulu ke hilir. Beberapa langkah penting yang
        bisa dilakukan antara lain:
      </p>

      <div class="strategy-list">
        <div class="strategy-item">
          🔹 <strong>Pemilihan rute pengiriman optimal</strong> — gunakan data
          logistik untuk menentukan jalur tercepat dengan biaya terendah.
        </div>

        <div class="strategy-item">
          🔹 <strong>Konsolidasi muatan</strong> — kirim dalam jumlah besar
          untuk menekan ongkos pengiriman per unit.
        </div>

        <div class="strategy-item">
          🔹 <strong>Pemanfaatan teknologi pelacakan</strong> — pastikan setiap
          pengiriman bisa dipantau secara real-time.
        </div>

        <div class="strategy-item">
          🔹 <strong>Kerja sama dengan forwarder terpercaya</strong> — mitra
          logistik berpengalaman dapat mengurangi hambatan administratif di
          pelabuhan.
        </div>
      </div>

      <p>
        Dengan strategi ini, perusahaan bisa menjaga kestabilan suplai sekaligus
        meningkatkan kepercayaan buyer. Nah, strategi efisiensi tidak akan
        maksimal tanpa didukung oleh teknik pengemasan yang tepat. Mari kita
        bahas hal itu selanjutnya.
      </p>
    </div>

    <div class="video-card">
      <video :src="videoSrc" poster="/background.JPG" controls></video>

      <div class="video-stats">
        <div>
          <h3>3.1M</h3>
          <p>Downloads</p>
        </div>
        <div>
          <h3>24K</h3>
          <p>Positive Reviews</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.strategy-section {
  position: relative;
  min-height: 100vh;
  background: linear-gradient(135deg, #ffb84d 0%, #ffffff 100%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 6rem 2rem 10rem;
  text-align: center;
  color: #fff;
  overflow: hidden;
}

.strategy-section::before {
  content: "";
  position: absolute;
  inset: 0;
  background: rgba(20, 20, 20, 0.3);
  backdrop-filter: blur(10px);
  z-index: 0;
}

.glass-card {
  position: relative;
  z-index: 1;
  max-width: 900px;
  background: rgba(255, 255, 255, 0.15);
  border: 1px solid rgba(255, 255, 255, 0.25);
  border-radius: 20px;
  padding: 3rem;
  backdrop-filter: blur(20px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
}

.glass-card h2 {
  font-size: 2rem;
  margin-bottom: 1rem;
  color: #fff;
}

.glass-card p {
  line-height: 1.7;
  font-size: 1rem;
  color: #f0f0f0;
}

/* === Glassmorphism List Cards === */
.strategy-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
  margin: 2rem 0;
}

.strategy-item {
  background: rgba(255, 255, 255, 0.25);
  border: 1px solid rgba(255, 255, 255, 0.35);
  border-radius: 15px;
  padding: 1.2rem;
  color: #fff;
  backdrop-filter: blur(15px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.25);
  text-align: left;
  transition: all 0.3s ease;
}

.strategy-item:hover {
  transform: translateY(-5px);
  background: rgba(255, 255, 255, 0.35);
}

/* === Video Section === */
.video-card {
  position: absolute;
  bottom: -70px;
  background: rgba(255, 255, 255, 0.15);
  border-radius: 20px;
  padding: 1rem;
  backdrop-filter: blur(15px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  width: 80%;
  max-width: 800px;
  z-index: 2;
}

.video-card video {
  width: 60%;
  border-radius: 15px;
}

.video-stats {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1.5rem;
  color: #fff;
}

.video-stats h3 {
  font-size: 2rem;
  margin: 0;
}

.video-stats p {
  font-size: 0.9rem;
  opacity: 0.8;
}

/* 📱 Responsiveness */
@media (max-width: 900px) {
  .glass-card {
    padding: 2rem;
  }

  .strategy-list {
    grid-template-columns: 1fr;
  }

  .video-card {
    flex-direction: column;
    bottom: -100px;
  }

  .video-card video {
    width: 100%;
  }

  .video-stats {
    flex-direction: row;
    justify-content: space-around;
    width: 100%;
  }
}
</style>
