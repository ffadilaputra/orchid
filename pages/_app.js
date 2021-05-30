import "@/css/tailwind.css";
import "@/css/prism.css";
import Head from "next/head";
import Layout from "@/components/Layout";
import SEO from "@/next-seo.config";
import { DefaultSeo } from "next-seo";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
        <link
          rel="icon"
          href={`data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>${
            Component.favicon ?? "📝"
          }</text></svg>`}
        ></link>
        <meta
          name="google-site-verification"
          content="P0-5G2_d48eJ_IoaK_NGBS_uWUyjc3hY-qN3VpgT7ec"
        />
        {/* Global Site Tag (gtag.js) - Google Analytics */}
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=G-1XSRY00FWP`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-1XSRY00FWP', {
              page_path: window.location.pathname,
            });
          `,
          }}
        />
      </Head>
      <DefaultSeo {...SEO} />

      {Component.noLayout === true ? (
        <Component {...pageProps} />
      ) : (
        <Layout>
          <Component {...pageProps} />
        </Layout>
      )}
    </>
  );
}
