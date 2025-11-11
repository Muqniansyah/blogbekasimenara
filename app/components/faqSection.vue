<template>
  <section id="faq" class="faq-section">
    <div class="faq-container">
      <h2 class="title">❓ Pertanyaan Umum seputar Efisiensi Ekspor Kayu</h2>
      <p class="subtitle">
        Temukan jawaban atas pertanyaan paling sering ditanyakan tentang
        strategi, pengemasan, dan efisiensi dalam ekspor kayu. 🌲
      </p>

      <div class="faq-grid">
        <div
          v-for="(faq, index) in faqs"
          :key="index"
          class="faq-item"
          :class="{ active: activeIndex === index }"
          @click="toggleFaq(index)"
        >
          <div class="faq-question">
            <span>{{ faq.q }}</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path
                d="M6 9l6 6 6-6"
                :class="{ rotate: activeIndex === index }"
              />
            </svg>
          </div>
          <transition name="accordion">
            <p v-if="activeIndex === index" class="faq-answer">
              {{ faq.a }}
            </p>
          </transition>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

const activeIndex = ref(null);

const toggleFaq = (index) => {
  activeIndex.value = activeIndex.value === index ? null : index;
};

const faqs = [
  {
    q: "Mengapa efisiensi penting dalam ekspor kayu?",
    a: "Karena efisiensi membantu menghemat biaya, mempercepat pengiriman, dan menjaga kualitas produk agar tetap baik hingga ke tangan pembeli.",
  },
  {
    q: "Bagaimana strategi utama untuk meningkatkan efisiensi pengiriman?",
    a: "Gunakan rute pengiriman optimal, konsolidasi muatan, teknologi pelacakan real-time, serta kerja sama dengan forwarder terpercaya.",
  },
  {
    q: "Apa saja teknik pengemasan kayu yang sesuai standar internasional?",
    a: "Gunakan pallet ISPM-15, pastikan kayu kering dan bebas hama, beri pelindung di setiap sudut, dan sertakan label serta dokumen ekspor yang lengkap.",
  },
  {
    q: "Bagaimana cara menghemat biaya dan waktu dalam logistik ekspor?",
    a: "Optimalkan kontainer, jadwal pengiriman, gunakan sistem digital dokumen, dan bermitra dengan perusahaan logistik berpengalaman seperti PT Menara Bekasi.",
  },
];
</script>

<style scoped>
.faq-section {
  /* Ganti background menjadi sedikit transparan atau memiliki gradien yang lebih dalam */
  background: linear-gradient(135deg, #f0f8ff, #e6e6fa);
  color: #1f2937;
  font-family: "Inter", sans-serif;
  padding: 100px 20px;
  display: flex;
  justify-content: center;
  /* Tambahkan elemen blur di belakang container */
  position: relative;
  overflow: hidden;
}

/* Dekorasi Latar Belakang untuk Efek Glassmorphism */
.faq-section::before {
  content: "";
  position: absolute;
  top: 10%;
  left: 5%;
  width: 300px;
  height: 300px;
  background: #ff5733;
  border-radius: 50%;
  filter: blur(150px);
  opacity: 0.3;
}

.faq-section::after {
  content: "";
  position: absolute;
  bottom: 10%;
  right: 5%;
  width: 300px;
  height: 300px;
  background: #20b2aa;
  border-radius: 50%;
  filter: blur(150px);
  opacity: 0.3;
}

.faq-container {
  max-width: 1000px; /* Lebarkan sedikit untuk dua kolom */
  width: 100%;
}

/* Judul dan Subtitle */
.title {
  text-align: center;
  font-size: clamp(2rem, 4vw, 2.5rem);
  font-weight: 900;
  margin-bottom: 10px;
  color: #ff5733;
}

.subtitle {
  text-align: center;
  font-size: 1.1rem;
  color: #4b5563;
  margin-bottom: 60px;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
}

/* Penerapan Grid untuk Dua Kolom di Desktop */
.faq-grid {
  display: grid;
  /* Default: satu kolom */
  grid-template-columns: 1fr;
  gap: 20px;
}

/* Media Query untuk Dua Kolom */
@media (min-width: 992px) {
  .faq-grid {
    /* Desktop: dua kolom yang sama besar */
    grid-template-columns: 1fr 1fr;
    gap: 30px;
  }
}

/* FAQ */
.faq-item {
  /* Glassmorphism Core */
  background: rgba(255, 255, 255, 0.5); /* Latar belakang transparan */
  backdrop-filter: blur(10px); /* Efek blur pada apa yang ada di belakangnya */
  -webkit-backdrop-filter: blur(10px);

  border-radius: 15px;
  border: 1px solid rgba(255, 255, 255, 0.7);
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.08);

  padding: 20px 25px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.faq-item:hover {
  background: rgba(255, 255, 255, 0.7);
  transform: translateY(-5px); /* Angkat lebih tinggi */
  border-color: #ff5733;
}

.faq-item.active {
  background: rgba(255, 255, 255, 0.85);
  border-color: #ff5733;
  box-shadow: 0 8px 32px 0 rgba(255, 87, 51, 0.3);
}

.faq-question {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 700;
  color: #1f2937;
  font-size: 1.15rem;
  line-height: 1.4;
}

/* Ikon Panah */
.icon {
  width: 28px;
  height: 28px;
  color: #4b5563;
  transition: transform 0.3s ease, color 0.3s ease;
}

.faq-item.active .icon {
  color: #ff5733;
}

.icon .rotate {
  transform: rotate(180deg);
}

/* Jawaban */
.faq-answer {
  margin-top: 15px;
  padding-top: 15px;
  border-top: 1px solid rgba(0, 0, 0, 0.1); /* Border pemisah lebih lembut */
  color: #4b5563;
  font-size: 1rem;
  line-height: 1.7;
}

/* Transisi Accordion (menggunakan nama yang sama) */
.accordion-enter-active,
.accordion-leave-active {
  transition: all 0.5s ease-in-out;
  overflow: hidden;
}

.accordion-enter-from,
.accordion-leave-to {
  opacity: 0;
  max-height: 0;
  transform: translateY(-10px);
}

/* Responsive */
@media (max-width: 991px) {
  .faq-section {
    padding: 60px 15px;
  }
  .faq-item {
    /* Di layar yang lebih kecil, glassmorphism tetap ada, tapi tata letak tetap satu kolom */
    padding: 18px 20px;
  }
  .title {
    font-size: 1.8rem;
  }
}
</style>
