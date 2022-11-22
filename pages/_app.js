import { useState, useEffect } from "react";
// setup your wrapper in the _app file (e.g: pages/_app.js)
import { Chakra } from "../components/Chakra";
import { ThemeContext } from "../theme/context";

import "@fontsource/jetbrains-mono";

export default function App({ Component, pageProps }) {
  const [colorScheme, setColorScheme] = useState("neutral");

  useEffect(() => {
    localStorage.setItem("chakra-ui-color-scheme", colorScheme);
  }, []);

  return (
    <Chakra cookies={pageProps.cookies} colorScheme={colorScheme}>
      <ThemeContext.Provider value={{ colorScheme, setColorScheme }}>
        F
        <Component {...pageProps} />
      </ThemeContext.Provider>
    </Chakra>
  );
}

// re-export the reusable `getServerSideProps` function
export { getServerSideProps } from "../src/Chakra";
