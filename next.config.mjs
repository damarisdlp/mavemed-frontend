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
        destination: "/sculptra-candidacy",
        permanent: true,
      },
      {
        source: "/es/sculptra_candidacy",
        destination: "/es/sculptra-candidacy",
        permanent: true,
      },
      {
        source: "/sculptra-rf_candidacy",
        destination: "/sculptra-rf-candidacy",
        permanent: true,
      },
      {
        source: "/es/sculptra-rf_candidacy",
        destination: "/es/sculptra-rf-candidacy",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
