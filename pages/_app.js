// setup your wrapper in the _app file (e.g: pages/_app.js)
import { Chakra } from "../src/Chakra";

export default function App({ Component, pageProps }) {
  return (
    <Chakra cookies={pageProps.cookies}>
      <Component {...pageProps} />
    </Chakra>
  );
}

// re-export the reusable `getServerSideProps` function
export { getServerSideProps } from "../src/Chakra";