<template>
  <footer class="footer-section">
    <div class="footer-overlay"></div>

    <div class="footer-container">
      <div class="footer-brand">
        <img src="/logo.png" alt="Logo Menara Bekasi" class="footer-logo" />
        <h2 class="footer-title">PT Menara Bekasi</h2>
        <p class="footer-desc">
          Solusi efisiensi ekspor kayu berkualitas tinggi. cepat, aman, dan
          sesuai standar internasional.
        </p>
      </div>

      <div class="footer-share">
        <h3 class="nav-title">Bagikan & Terhubung</h3>
        <p>Bantu kami menjangkau eksportir lain:</p>

        <div class="share-buttons">
          <a
            href="https://www.facebook.com/sharer/sharer.php?u=https://menarabekasi.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Share on Facebook"
            class="social-icon facebook"
          >
            <i class="fa-brands fa-facebook-f"></i>
          </a>
          <a
            href="https://twitter.com/intent/tweet?url=https://menarabekasi.com&text=Solusi%20Logistik%20Kayu%20Profesional"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Share on X/Twitter"
            class="social-icon twitter"
          >
            <i class="fa-brands fa-x-twitter"></i>
          </a>
          <a
            href="https://wa.me/?text=Kunjungi%20PT%20Menara%20Bekasi%20https://menarabekasi.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Share on WhatsApp"
            class="social-icon whatsapp"
          >
            <i class="fa-brands fa-whatsapp"></i>
          </a>
          <a
            href="https://www.linkedin.com/sharing/share-offsite/?url=https://menarabekasi.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Share on LinkedIn"
            class="social-icon linkedin"
          >
            <i class="fa-brands fa-linkedin-in"></i>
          </a>
        </div>
      </div>
    </div>

    <div class="footer-bottom">
      <div class="footer-line"></div>
      <p>
        © {{ new Date().getFullYear() }} PT Menara Bekasi. All rights reserved.
      </p>
    </div>
  </footer>
</template>

<script setup>
// Pastikan Anda sudah mengimpor Font Awesome (fa-brands) di proyek Anda
</script>

<style scoped>
/* Variabel Warna Baru */
:root {
  --color-primary-accent: #ff9900; /* Oranye Emas / Kuning Kunyit */
  --color-background-dark: #1f1f1f; /* Hitam Charcoal/Gelap */
  --color-text-light: #f0f0f0;
  --color-text-muted: #a0a0a0;
}

/* --- SECTION UTAMA & GLASSMORPHISM MINIMAL --- */
.footer-section {
  position: relative;
  width: 100%;
  background: var(--color-background-dark);
  color: var(--color-text-light);
  padding-top: 5rem;
  overflow: hidden;
  font-family: "Inter", sans-serif;
  border-top: 1px solid rgba(255, 255, 255, 0.05);
}

.footer-overlay {
  position: absolute;
  inset: 0;
  background: radial-gradient(
    circle at 30% 30%,
    rgba(255, 153, 0, 0.2),
    transparent 60%
  );
  /* animation: floatGradient 10s ease-in-out infinite alternate; */
  z-index: 0;
}

/* @keyframes floatGradient {
  0% {
    transform: translate(0, 0) scale(1);
  }
  100% {
    transform: translate(10%, -10%) scale(1.1);
  }
} */

.footer-container {
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
  max-width: 1200px;
  margin: auto;
  padding: 2rem 1.5rem 3rem;
  text-align: center;
}

/* --- TATA LETAK DESKTOP (3 KOLOM) --- */
@media (min-width: 992px) {
  .footer-container {
    display: grid;
    /* Brand | Navigasi (Baru) | Sharing (Baru) */
    grid-template-columns: 2.5fr 1fr 1.5fr;
    gap: 5rem;
    text-align: left;
    align-items: start;
  }
  .footer-brand,
  .footer-share {
    text-align: left;
  }
  .share-buttons {
    justify-content: flex-start;
  }
}

/* --- KOLOM BRAND --- */
.footer-logo {
  width: 50px;
  height: 50px;
  margin-bottom: 0.5rem;
  filter: drop-shadow(0 0 10px rgba(255, 153, 0, 0.3));
}

.footer-title {
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0;
  color: var(--color-text-light);
  text-transform: uppercase;
  letter-spacing: 2px;
}

.footer-desc {
  margin: 0.5rem 0 0;
  font-size: 0.9rem;
  color: var(--color-text-muted);
  line-height: 1.6;
  max-width: none;
}

/* --- NAVIGASI & SHARING BAR (BARU) --- */
.nav-title {
  font-size: 1rem;
  font-weight: 700;
  color: var(--color-primary-accent); /* Warna aksen baru */
  margin-bottom: 1.2rem;
  text-transform: uppercase;
  letter-spacing: 1px;
}

/* Styling Khusus Sharing Bar */
.footer-share p {
  margin-bottom: 1rem;
  font-weight: 400;
  color: var(--color-text-muted);
}

.share-buttons {
  display: flex;
  gap: 1rem;
  justify-content: center;
}

.social-icon {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.1rem;
  color: var(--color-text-light);
  /* Sentuhan glassmorphism: hanya latar belakang transparan */
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
}

.social-icon:hover {
  transform: scale(1.1) rotate(5deg);
  box-shadow: 0 0 20px rgba(255, 153, 0, 0.4);
}

/* Hover spesifik menggunakan warna merek */
.social-icon.facebook:hover {
  background-color: #1877f2;
}
.social-icon.twitter:hover {
  background-color: #1da1f2;
}
.social-icon.whatsapp:hover {
  background-color: #25d366;
}
.social-icon.linkedin:hover {
  background-color: #0a66c2;
}

/* --- BOTTOM COPYRIGHT --- */
.footer-bottom {
  margin-top: 3rem;
  padding: 1rem 1.5rem;
  text-align: center;
  position: relative;
  z-index: 2;
}

.footer-line {
  width: 80%;
  max-width: 1000px;
  height: 1px;
  background: rgba(255, 255, 255, 0.15);
  margin: 0 auto 1.5rem;
}

.footer-bottom p {
  font-size: 0.8rem;
  color: var(--color-text-muted);
}

/* --- RESPONSIVITAS MOBILE --- */
@media (max-width: 991px) {
  .footer-container {
    gap: 2.5rem;
  }
  /* Rata tengah di mobile */
  .footer-share {
    text-align: center;
  }
  .share-buttons {
    justify-content: center;
  }
}
</style>
