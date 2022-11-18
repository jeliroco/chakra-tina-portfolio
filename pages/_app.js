import { useState, useEffect } from "react";
// setup your wrapper in the _app file (e.g: pages/_app.js)
import { Chakra } from "../src/Chakra";
import { ThemeContext } from "../theme/context";

export default function App({ Component, pageProps }) {
  const [colorScheme, setColorScheme] = useState("blue");

  useEffect(() => {
    localStorage.setItem("chakra-ui-color-scheme", colorScheme);
  }, [colorScheme]);

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
