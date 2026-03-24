import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:site_name" content="Mave Medical Spa" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="icon" href="/favicon.ico?v=2" />
        <link rel="icon" type="image/png" sizes="16x16" href="/site_icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/site_icon.png?v=2" />
        <link rel="icon" type="image/png" sizes="48x48" href="/site_icon.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/site_icon.png" />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
