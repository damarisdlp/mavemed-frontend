import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta property="og:site_name" content="Mave Medical Spa" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="16x16" href="/site_icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/site_icon.png" />
        <link rel="icon" type="image/png" sizes="48x48" href="/site_icon.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/site_icon.png" />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-E77724XQYV"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('consent', 'default', {
                analytics_storage: 'denied',
                ad_storage: 'denied',
                ad_user_data: 'denied',
                ad_personalization: 'denied',
                functionality_storage: 'granted',
                security_storage: 'granted'
              });
              gtag('js', new Date());
            `,
          }}
        />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
