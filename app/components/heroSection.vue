<template>
  <header class="hero-container">
    <div class="glass-card">
      <div class="hero-content">
        <div class="hero-text">
          <h1 class="hero-title">
            Efisiensi Pengiriman dan Pengemasan Kayu Ekspor:
            <span>Tips Menghemat Biaya & Waktu</span>
          </h1>
          <p class="hero-tagline">#EFISIENSIEKSPORKAYU</p>
          <p class="hero-desc">
            Solusi cepat dan hemat biaya untuk pengiriman kayu ekspor Anda.
            Tingkatkan daya saing dan kelola logistik dengan lebih efisien.
          </p>

          <div class="hero-buttons">
            <button class="btn-primary">Pelajari Lebih Lanjut</button>
          </div>
        </div>

        <div class="hero-image">
          <img src="/3D.png" alt="pallet-kayu3D" />
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped>
.hero-container {
  position: relative;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url("/background.JPG") center/cover no-repeat;
  background-attachment: fixed;
  overflow: hidden;
  padding: 2rem;
}

/* Efek Glassmorphism utama */
.glass-card {
  position: relative;
  width: 100%;
  max-width: 1100px;
  backdrop-filter: blur(20px);
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.25);
  border-radius: 20px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
  z-index: 2;
  padding: 3rem;
  color: #fff;
}

/* Flex kiri-kanan */
.hero-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
}

/* Tulisan di kiri */
.hero-text {
  flex: 1;
}

.hero-title {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  letter-spacing: 1px;
}

.hero-title span {
  display: block;
  color: #ffb84d;
}

.hero-tagline {
  font-size: 1.1rem;
  font-style: italic;
  opacity: 0.9;
  margin-bottom: 1rem;
}

.hero-desc {
  font-size: 1rem;
  opacity: 0.85;
  line-height: 1.7;
  margin-bottom: 2rem;
}

/* Tombol */
.hero-buttons {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.btn-primary {
  padding: 0.8rem 1.6rem;
  border: none;
  border-radius: 12px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  background: linear-gradient(135deg, #f2994a, #f2c94c);
  color: #1a1a1a;
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 10px rgba(242, 201, 76, 0.4);
}

/* Gambar di kanan */
.hero-image {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

.hero-image img {
  width: 100%;
  max-width: 420px;
  height: auto;
  object-fit: contain;
  filter: drop-shadow(0 0 30px rgba(255, 200, 100, 0.4));
  animation: float 5s ease-in-out infinite;
}

/* Animasi lembut */
@keyframes float {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

/* Responsif */
@media (max-width: 900px) {
  .hero-content {
    flex-direction: column;
    text-align: center;
  }

  /* .hero-image {
    order: -1;
  } */

  .hero-title {
    font-size: 2rem;
  }

  .hero-buttons {
    justify-content: center;
  }
}

@media (max-width: 600px) {
  .glass-card {
    padding: 2rem;
  }

  .hero-title {
    font-size: 1.8rem;
  }

  .hero-desc {
    font-size: 0.9rem;
  }

  .hero-buttons {
    justify-content: center;
  }
}
</style>
