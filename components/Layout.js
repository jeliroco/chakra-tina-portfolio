// import from Next
import Head from "next/head";

//import custom components
import { Footer } from "./Footer.js";
import { Header } from "./Header.js";
import { Main } from "./Main.js";

export const Layout = (props) => {
  return (
    <div>
      <Head>
        <title>jeliroco - art for the sake of it</title>
        <meta name="description" content="jeliroco portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <Main children={props.children}></Main>
      <Footer />
    </div>
  );
};
