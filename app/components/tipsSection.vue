<template>
  <section id="logistik-kayu" class="logistik-section">
    <div class="container">
      <h2>⏱️ Tips Menghemat Biaya dan Waktu dalam Logistik Kayu Ekspor</h2>
      <p class="intro">
        Menghemat biaya dan waktu adalah kunci utama dalam menjaga
        profitabilitas ekspor kayu. Berikut beberapa tips praktis:
      </p>

      <div class="tips-grid">
        <div class="tip-card">
          <span class="tip-number">1</span>
          <span class="emoji">💡</span>
          <p>
            <strong>Optimalkan Pemuatan Kontainer</strong> Gunakan kontainer
            sesuai kapasitas agar tidak ada ruang kosong berlebihan yang
            membuang biaya.
          </p>
        </div>
        <div class="tip-card">
          <span class="tip-number">2</span>
          <span class="emoji">🧾</span>
          <p>
            <strong>Digitalisasi Dokumen</strong> Manfaatkan sistem digital
            untuk dokumen (BL, PEB, dll.) agar proses administrasi berjalan
            cepat dan akurat.
          </p>
        </div>
        <div class="tip-card">
          <span class="tip-number">3</span>
          <span class="emoji">🔄</span>
          <p>
            <strong>Jadwal Pengiriman Tepat</strong> Optimalkan jadwal
            pengiriman ke pelabuhan untuk menghindari *dwelling time* yang lama
            dan penumpukan.
          </p>
        </div>
        <div class="tip-card">
          <span class="tip-number">4</span>
          <span class="emoji">🤝</span>
          <p>
            <strong>Mitra Logistik Profesional</strong> Bekerja sama dengan
            perusahaan ekspor berpengalaman untuk manajemen kepabeanan yang
            mulus.
          </p>
        </div>
      </div>

      <div class="promo-box">
        <h3>
          🌐 Solusi Ekspor Kayu Efisien Bersama
          <span>PT Menara Bekasi</span>
        </h3>
        <p>
          💼 PT Menara Bekasi hadir dengan pengalaman dan sistem logistik yang
          efisien untuk memastikan produkmu sampai cepat, aman, dan sesuai
          standar internasional, meminimalkan biaya tak terduga.
        </p>
        <a
          href="https://wa.me/6285817298071"
          class="cta-btn"
          target="_blank"
          rel="noopener noreferrer"
        >
          👉 Hubungi Sekarang
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* --- SECTION UTAMA --- */
.logistik-section {
  position: relative;
  background-color: #121212;
  padding: 100px 20px;
  text-align: center;
  color: #f0f0f0;
  font-family: "Inter", sans-serif;
  overflow: hidden;
}

.container {
  position: relative;
  z-index: 2;
  max-width: 1200px;
  margin: 0 auto;
}

/* Judul dan Intro */
.logistik-section h2 {
  font-size: clamp(2rem, 4vw, 2.8rem);
  font-weight: 800;
  margin-bottom: 10px;
  color: #f0f0f0;
  text-shadow: 0 0 10px rgba(255, 153, 0, 0.1);
}

.intro {
  max-width: 800px;
  margin: 0 auto 60px;
  font-size: 1.1rem;
  color: #a0a0a0;
  line-height: 1.6;
}

/* --- GRID TIPS (CARD) --- */
.tips-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 30px;
  margin-bottom: 80px;
}

.tip-card {
  background: #1f1f1f;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  padding: 30px 25px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.3);
  transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  color: #f0f0f0;
  text-align: left;
  position: relative;
}

.tip-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 15px 35px rgba(255, 153, 0, 0.2);
  background-color: #2a2a2a;
}

/* Nomor Tips */
.tip-number {
  position: absolute;
  top: 15px;
  right: 15px;
  font-size: 2.5rem;
  font-weight: 900;
  color: #ff9900;
  opacity: 0.15;
  line-height: 1;
}

.tip-card .emoji {
  display: block;
  font-size: 2.5rem;
  color: #ff9900;
  margin-bottom: 15px;
}

.tip-card p {
  font-size: 1rem;
  color: #f0f0f0;
  line-height: 1.6;
}

.tip-card p strong {
  font-weight: 700;
  color: #ff9900;
}

/* --- PROMO BOX --- */
.promo-box {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(5px);
  border-radius: 20px;
  padding: 40px 35px;
  box-shadow: 0 8px 40px rgba(0, 0, 0, 0.4);
  max-width: 900px;
  margin: 0 auto;
  border: 1px solid rgba(255, 153, 0, 0.3);
}

.promo-box h3 {
  font-size: clamp(1.4rem, 3vw, 2rem);
  margin-bottom: 15px;
  color: #f0f0f0;
  font-weight: 700;
}

.promo-box span {
  color: #ff9900;
  font-weight: 900;
}

.promo-box p {
  font-size: 1rem;
  color: #a0a0a0;
  margin-bottom: 30px;
  line-height: 1.7;
}

.cta-btn {
  background: #ff9900;
  color: #121212;
  padding: 15px 35px;
  border-radius: 50px;
  font-weight: 800;
  text-decoration: none;
  transition: all 0.3s ease;
  display: inline-block;
  box-shadow: 0 4px 15px rgba(255, 153, 0, 0.4);
}

.cta-btn:hover {
  background: #ffaa33;
  transform: scale(1.05);
  box-shadow: 0 6px 20px rgba(255, 153, 0, 0.6);
}

/* --- RESPONSIVITAS --- */
@media (max-width: 768px) {
  .logistik-section {
    padding: 60px 15px;
  }
  .intro {
    font-size: 1rem;
    margin-bottom: 40px;
  }
  .tips-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }
  .tip-card {
    text-align: left;
  }
}
</style>
