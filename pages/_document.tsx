import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>Florencia Sian, Lic. Psicologia</title>
        <meta
          name="description"
          content="Florencia Sian, Licenciada en psicologia."
        />
        <meta
          name="keywords"
          content="depreción, salud, mental, bienestar,estoy mal, malestar, angustia, ayuda, online, Santa Fe, Buenos Aires anciedad, duelo, fobia, psicologa, psicologia, flor, sian, florencia, licenciada, lic, terapia"
        />
        <meta name="author" content="Giuliano Antonanzas" />
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <body>
        <Main />
        <NextScript />
        <Script
          id="load analytics"
          strategy="lazyOnload"
          src={`https://www.googletagmanager.com/gtag/js?id=G-80H94CMG2V`}
        />

        <Script id="run analytics" strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-80H94CMG2V', {
            page_path: window.location.pathname,
            });
        `}
        </Script>
      </body>
    </Html>
  );
}
