<template>
  <section class="packaging-section">
    <div class="packaging-container">
      <h2>📦 Teknik Pengemasan Kayu Ekspor yang Tepat</h2>
      <p class="intro-text">
        Teknik pengemasan kayu menjadi aspek penting agar produk tiba dalam
        kondisi terbaik dan sesuai standar internasional.
      </p>

      <ul class="packaging-list">
        <li class="packaging-item">
          <div class="icon-box">
            <span class="step-emoji">📋</span>
          </div>
          <div class="content-box">
            <strong>Gunakan pallet atau box kayu standar ISPM-15</strong>
            <p>
              Memastikan kepatuhan terhadap regulasi global dan mencegah masalah
              karantina, wajib untuk ekspor kayu internasional.
            </p>
          </div>
        </li>

        <li class="packaging-item">
          <div class="icon-box">
            <span class="step-emoji">🧱</span>
          </div>
          <div class="content-box">
            <strong>Pastikan kayu kering dan bebas hama</strong>
            <p>
              Lakukan fumigasi atau pengeringan yang tepat, karena banyak negara
              menerapkan aturan karantina yang sangat ketat.
            </p>
          </div>
        </li>

        <li class="packaging-item">
          <div class="icon-box">
            <span class="step-emoji">🔐</span>
          </div>
          <div class="content-box">
            <strong>Tambahkan lapisan pelindung pada sudut kayu</strong>
            <p>
              Gunakan pelindung sudut plastik atau kardus tebal untuk
              menghindari kerusakan fisik saat proses bongkar muat dan transit.
            </p>
          </div>
        </li>

        <li class="packaging-item">
          <div class="icon-box">
            <span class="step-emoji">🚚</span>
          </div>
          <div class="content-box">
            <strong>Label dan dokumen pengiriman harus lengkap</strong>
            <p>
              Mencantumkan spesifikasi produk, berat bersih/kotor, dan tujuan
              dengan jelas untuk meminimalkan penundaan kepabeanan.
            </p>
          </div>
        </li>
      </ul>

      <p class="outro-text">
        Kemasan yang baik menjaga kualitas dan mencerminkan profesionalisme
        eksportir. Berikutnya, kita akan membahas cara menekan biaya logistik.
      </p>
    </div>
  </section>
</template>

<script setup>
// Tidak perlu script tambahan
</script>

<style scoped>
/* --- SECTION UTAMA --- */
.packaging-section {
  padding: 100px 20px;
  display: flex;
  justify-content: center;
  background: #121212;
  color: #f0f0f0;
  font-family: "Inter", sans-serif;
}

/* Kontainer Utama */
.packaging-container {
  max-width: 1000px;
  width: 100%;
  background: #1f1f1f;
  padding: 50px 40px;
  border-radius: 20px;
  border: 1px solid rgba(255, 153, 0, 0.15);
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.4);
  text-align: center;
}

.packaging-container h2 {
  margin-bottom: 20px;
  font-weight: 800;
  font-size: clamp(2rem, 4vw, 2.8rem);
  color: #ff9900;
}

.intro-text,
.outro-text {
  max-width: 700px;
  margin: 0 auto 40px;
  font-size: 1.1rem;
  color: #a0a0a0;
  line-height: 1.7;
}

.outro-text {
  margin-top: 40px;
  margin-bottom: 0;
}

/* --- DAFTAR PACKAGING --- */
.packaging-list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 30px;
  text-align: left;
}

.packaging-item {
  display: flex;
  align-items: flex-start;
  gap: 20px;
  padding: 25px;
  border-radius: 12px;
  background: #2c2c2c;
  border: 1px solid rgba(255, 153, 0, 0.1);
  transition: all 0.3s ease;
}

.packaging-item:hover {
  background: #3a3a3a;
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(255, 153, 0, 0.2);
}

/* Kotak Ikon */
.icon-box {
  flex-shrink: 0;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: #ff9900;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 15px rgba(255, 153, 0, 0.4);
}

.step-emoji {
  font-size: 1.5rem;
  color: #121212;
}

/* Konten Teks */
.content-box strong {
  display: block;
  font-size: 1.1rem;
  font-weight: 700;
  color: #ff9900;
  margin-bottom: 5px;
}

.content-box p {
  font-size: 0.95rem;
  color: #a0a0a0;
  line-height: 1.6;
}

/* --- RESPONSIVE --- */
@media (max-width: 768px) {
  .packaging-section {
    padding: 60px 15px;
  }

  .packaging-container {
    padding: 30px 20px;
  }

  .packaging-list {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .intro-text,
  .outro-text {
    font-size: 1rem;
    margin-bottom: 30px;
  }
}
</style>
