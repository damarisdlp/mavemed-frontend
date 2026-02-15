/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    defaultLocale: "en",
    locales: ["en", "es"],
  },
  async redirects() {
    return [
      {
        source: "/sculptra_candidacy",
        destination: "/plla-candidacy",
        permanent: true,
      },
      {
        source: "/es/sculptra_candidacy",
        destination: "/es/plla-candidacy",
        permanent: true,
      },
      {
        source: "/sculptra-rf_candidacy",
        destination: "/plla-rf-candidacy",
        permanent: true,
      },
      {
        source: "/es/sculptra-rf_candidacy",
        destination: "/es/plla-rf-candidacy",
        permanent: true,
      },
      {
        source: "/sculptra-candidacy",
        destination: "/plla-candidacy",
        permanent: true,
      },
      {
        source: "/es/sculptra-candidacy",
        destination: "/es/plla-candidacy",
        permanent: true,
      },
      {
        source: "/sculptra-rf-candidacy",
        destination: "/plla-rf-candidacy",
        permanent: true,
      },
      {
        source: "/es/sculptra-rf-candidacy",
        destination: "/es/plla-rf-candidacy",
        permanent: true,
      },
      {
        source: "/thank-you-sculptra",
        destination: "/thank-you-plla",
        permanent: true,
      },
      {
        source: "/es/thank-you-sculptra",
        destination: "/es/thank-you-plla",
        permanent: true,
      },
      {
        source: "/thank-you-sculptra-rf",
        destination: "/thank-you-plla-rf",
        permanent: true,
      },
      {
        source: "/es/thank-you-sculptra-rf",
        destination: "/es/thank-you-plla-rf",
        permanent: true,
      },
      {
        source: "/learn/sculptra-collagen-biostimulator",
        destination: "/learn/plla-collagen-biostimulator",
        permanent: true,
      },
      {
        source: "/es/learn/sculptra-collagen-biostimulator",
        destination: "/es/learn/plla-collagen-biostimulator",
        permanent: true,
      },
      {
        source: "/learn/collagen-biostimulator-plla",
        destination: "/learn/plla-collagen-biostimulator",
        permanent: true,
      },
      {
        source: "/es/learn/collagen-biostimulator-plla",
        destination: "/es/learn/plla-collagen-biostimulator",
        permanent: true,
      },
      {
        source: "/treatments/sculptra",
        destination: "/treatments/collagen-biostimulator-plla",
        permanent: true,
      },
      {
        source: "/es/treatments/sculptra",
        destination: "/es/treatments/collagen-biostimulator-plla",
        permanent: true,
      },
      {
        source: "/treatments/harmonyca",
        destination: "/treatments/hybrid-injectable-collagen-biostimulator-ha-caha",
        permanent: true,
      },
      {
        source: "/es/treatments/harmonyca",
        destination: "/es/treatments/hybrid-injectable-collagen-biostimulator-ha-caha",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
