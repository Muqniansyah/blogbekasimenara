<template>
  <div>
    <!-- Komponen utama halaman -->
    <HeroSection />
    <PentingnyaSection />
    <StrategiSection />
    <TeknikSection />
    <TipsSection />
    <FaqSection />
    <SwiperSection />
    <Footer />
  </div>
</template>

<script setup>
// Import komponen utama
import HeroSection from "./components/heroSection.vue";
import StrategiSection from "./components/strategiSection.vue";
import TeknikSection from "./components/teknikSection.vue";
import PentingnyaSection from "./components/pentingnyaSection.vue";
import TipsSection from "./components/tipsSection.vue";
import FaqSection from "./components/faqSection.vue";
import SwiperSection from "./components/swiperSection.vue";
import Footer from "./components/footer.vue";
</script>
