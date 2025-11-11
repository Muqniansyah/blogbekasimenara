// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: [
    "~/assets/css/style.css",
    "swiper/css",
    "swiper/css/navigation",
    "swiper/css/pagination",
  ],
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },

  app: {
    head: {
      title:
        "Menara Bekasi | Efisiensi Pengiriman dan Pengemasan Kayu Ekspor: Tips Menghemat Biaya & Waktu",
      meta: [
        {
          name: "description",
          content:
            "Pelajari cara efisiensi pengiriman dan pengemasan kayu ekspor untuk menghemat biaya dan waktu bersama PT Menara Bekasi, mitra terpercaya ekspor kayu Indonesia.",
        },
      ],
      link: [
        { rel: "icon", type: "image/png", href: "/logo.png" }, // favicon di /public/
        {
          rel: "stylesheet",
          href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css",
        },
      ],
    },
  },
});
