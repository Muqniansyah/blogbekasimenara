<template>
  <section id="efisiensi" class="efisiensi-section">
    <div class="content-container">
      <!-- Kolom Card (Kiri di Desktop) -->
      <div class="card-column">
        <div class="benefit-grid">
          <div class="benefit-card">
            <span class="icon">📦</span>
            <p>Mengurangi risiko kerusakan selama pengiriman</p>
          </div>

          <div class="benefit-card">
            <span class="icon">⚡</span>
            <p>Mempercepat waktu sampai ke tangan pembeli</p>
          </div>

          <div class="benefit-card">
            <span class="icon">💰</span>
            <p>Menekan biaya logistik yang tidak perlu</p>
          </div>
        </div>
      </div>

      <!-- Kolom Teks (Kanan di Desktop) -->
      <div class="text-column">
        <h2 class="section-title">
          🚛 Pentingnya Efisiensi dalam Pengiriman Kayu Ekspor
        </h2>

        <p class="intro">
          Dalam dunia ekspor kayu, efisiensi bukan hanya soal kecepatan, tapi
          juga tentang bagaimana setiap tahap. mulai dari penebangan,
          pengemasan, hingga pengiriman dapat berjalan hemat biaya dan waktu
          tanpa menurunkan kualitas.
        </p>

        <p class="closing">
          Dengan pasar global yang semakin kompetitif, perusahaan kayu yang
          mampu mengatur prosesnya secara efisien akan memiliki keunggulan besar
          dibanding pesaingnya.
        </p>
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style scoped>
.efisiensi-section {
  background: #a38164; /* coklat kayu */
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 80px 20px;
  font-family: "Inter", sans-serif;
  color: #ffffff;
}

.content-container {
  display: flex;
  flex-direction: row;
  gap: 60px;
  max-width: 1100px;
  width: 100%;
  align-items: center;
}

/* Kolom Teks */
.text-column {
  flex: 1;
  text-align: right;
}

.section-title {
  font-size: clamp(2rem, 4vw, 2.8rem);
  color: #fff; /* oranye emas */
  margin-bottom: 20px;
  font-weight: 800;
  line-height: 1.2;
}

.intro {
  font-size: 1.1rem;
  color: #ffffff;
  margin-bottom: 30px;
  line-height: 1.7;
}

.closing {
  font-size: 1rem;
  color: #fbf9f4;
  line-height: 1.7;
  margin-bottom: 40px;
}

/* Kolom Kartu */
.card-column {
  flex: 1.2;
}

.benefit-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}

.benefit-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background: #ffffff;
  border-radius: 12px;
  padding: 30px 20px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  min-height: 180px;
  justify-content: center;
}

.benefit-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 30px rgba(255, 153, 0, 0.1);
}

.icon {
  font-size: 2.5rem;
  color: #ff9900;
  margin-bottom: 15px;
  transition: transform 0.3s;
}

.benefit-card:hover .icon {
  transform: scale(1.1);
}

.benefit-card p {
  margin: 0;
  font-weight: 600;
  font-size: 0.95rem;
  line-height: 1.4;
  color: #3e2723;
}

/* Responsif */
@media (max-width: 1200px) {
  .content-container {
    gap: 40px;
    padding: 0 20px;
  }
}

@media (max-width: 991px) {
  .content-container {
    flex-direction: column;
    text-align: center;
    gap: 50px;
  }

  .text-column {
    order: 1;
    text-align: center;
  }

  .card-column {
    order: 2;
  }

  .benefit-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 600px) {
  .efisiensi-section {
    padding: 60px 15px;
  }

  .section-title {
    font-size: 1.8rem;
  }

  .benefit-card {
    flex-direction: row;
    align-items: center;
    text-align: left;
    padding: 20px;
  }

  .icon {
    font-size: 2rem;
    margin-right: 15px;
    margin-bottom: 0;
  }

  .benefit-card p {
    font-size: 0.9rem;
  }
}
</style>
