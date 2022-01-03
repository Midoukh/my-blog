import "../styles/globals.css";
import Nav from "../Components/Nav/Nav";
import Footer from "../Components/Footer/Footer";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <title>Ahmed Khelili Blog</title>
        <link rel="shortcut icon" href="../public/Assets/solvent.svg" />
      </Head>
      <Nav />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}

export default MyApp;
