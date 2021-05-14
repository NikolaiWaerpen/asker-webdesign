import Head from "next/head";

export default function CustomHead() {
  return (
    <Head>
      <meta charSet="utf-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1"
        key=""
      />
      <meta name="theme-color" content="#000000" />
      <meta
        name="description"
        content="Webdesign og utvikling for småbedrifter | Asker Webdesign"
      />
      <meta name="keywords" content="webdesign, webutvikling" />
      <meta name="author" content="Nikolai Wærpen" />
      <meta name="msapplication-TileColor" content="#da532c" />
      <meta name="theme-color" content="#ffffff" />
      {/* Facebook */}
      <meta
        property="og:title"
        content="Webdesign og utvikling for småbedrifter | Asker Webdesign"
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.askerwebdesign.no/" />
      <meta
        property="og:description"
        content="Ingen sidebyggere eller WordPress. Vi tilbyr 100% håndkodede nettsteder som gir overlegne resultater fra kr 1500 pr. måned"
      />
      <meta
        property="og:image"
        content="https://i.postimg.cc/q77S6gpJ/AWUNCUTPNG.png"
        // content="https://i.postimg.cc/3JL7WMTH/AWGREENBORDER.png"
      />
      <link rel="shortcut icon" href="../../../public/favicon.ico" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="../../../public/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="../../../public/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="../../../public/favicon-16x16.png"
      />
      <link rel="manifest" href="../../../public/site.webmanifest" />
      {/* <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" /> */}
      {/* <!--
        manifest.json provides metadata used when your web app is installed on a
        user's mobile device or desktop. See https://developers.google.com/web/fundamentals/web-app-manifest/
      --> */}
      {/* <link rel="manifest" href="%PUBLIC_URL%/manifest.json" /> */}
      {/* <!--
        Notice the use of %PUBLIC_URL% in the tags above.
        It will be replaced with the URL of the `public` folder during the build.
        Only files inside the `public` folder can be referenced from the HTML.

        Unlike "/favicon.ico" or "favicon.ico", "%PUBLIC_URL%/favicon.ico" will
        work correctly both with client-side routing and a non-root public URL.
        Learn how to configure a non-root public URL by running `npm run build`.
      --> */}
      {/* <link ref="author" href="humans.txt" /> */}
      <title>Asker Webdesign | Webdesign og utvikling for småbedrifter</title>
    </Head>
  );
}
