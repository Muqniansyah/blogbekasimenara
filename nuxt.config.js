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

  // ✅ Security Headers (SSR mode / Vercel)
  routeRules: {
    "/**": {
      headers: {
        "Strict-Transport-Security":
          "max-age=15552000; includeSubDomains; preload",
        "X-Content-Type-Options": "nosniff",
        "Referrer-Policy": "strict-origin-when-cross-origin",
        "Permissions-Policy": "camera=(), microphone=(), geolocation=()",
        "Content-Security-Policy":
          "default-src 'self'; " +
          "img-src 'self' data: https:; " +
          "script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://www.google-analytics.com; " +
          "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://cdnjs.cloudflare.com; " +
          "font-src 'self' https://fonts.gstatic.com https://cdnjs.cloudflare.com data:; " +
          "connect-src 'self' https://www.google-analytics.com https://www.googletagmanager.com; " +
          "frame-src 'self' https://www.googletagmanager.com;",
      },
    },
  },

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
        {
          name: "google-site-verification",
          content: "vmcHQ8G9ervQgGmZyGjt12V4MyZwzSjyipkAnykNCIM", // GSC
        },
      ],
      link: [
        { rel: "icon", type: "image/png", href: "/logo.png" }, // favicon di /public/
        {
          rel: "stylesheet",
          href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css",
        },
      ],
      script: [
        // ✅ JSON-LD (Website + Keyword)
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "PT Menara Bekasi",
            url: "https://blogbekasimenara.vercel.app/",
            inLanguage: "id-ID",
            description:
              "Solusi efisiensi pengiriman dan pengemasan kayu ekspor terpercaya.",
            keywords: [
              "ekspor kayu",
              "pengiriman kayu",
              "pengemasan kayu",
              "kontainer kayu",
              "logistik ekspor",
              "PT Menara Bekasi",
              "forwarder ekspor",
              "pallet kayu ISPM-15",
              "biaya pengiriman kayu",
              "teknik packing kayu",
            ],
            publisher: {
              "@type": "Organization",
              name: "PT Menara Bekasi",
            },
          }),
        },

        // ✅ JSON-LD FAQ
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "Mengapa efisiensi penting dalam ekspor kayu?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Karena efisiensi membantu menghemat biaya, mempercepat pengiriman, dan menjaga kualitas produk hingga ke tangan pembeli.",
                },
              },
              {
                "@type": "Question",
                name: "Bagaimana strategi utama untuk meningkatkan efisiensi pengiriman?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Gunakan rute pengiriman optimal, konsolidasi muatan, teknologi pelacakan real-time, serta kerja sama dengan forwarder terpercaya.",
                },
              },
              {
                "@type": "Question",
                name: "Apa saja teknik pengemasan kayu yang sesuai standar internasional?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Gunakan pallet ISPM-15, pastikan kayu kering dan bebas hama, beri pelindung di setiap sudut, dan sertakan label serta dokumen ekspor lengkap.",
                },
              },
              {
                "@type": "Question",
                name: "Bagaimana cara menghemat biaya dan waktu dalam logistik ekspor?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Optimalkan kontainer dan jadwal pengiriman, gunakan sistem digital dokumen, dan bermitra dengan perusahaan logistik berpengalaman seperti PT Menara Bekasi.",
                },
              },
            ],
          }),
        },

        // ✅ Google Analytics (GA4)
        {
          src: "https://www.googletagmanager.com/gtag/js?id=G-XD4TP9ZDMW",
          async: true,
        },
        {
          children: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XD4TP9ZDMW');
          `,
        },
      ],
    },
  },
});
