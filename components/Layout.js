// import from Next
import Head from "next/head";

//import custom components
import { Footer } from "./Footer.js";
import { Header } from "./Header.js";

export const Layout = (props) => {
  return (
    <div>
      <Head>
        <title>jeliroco</title>
        <meta name="description" content="jeliroco portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>{props.children}</main>
      <Footer />
    </div>
  );
};
