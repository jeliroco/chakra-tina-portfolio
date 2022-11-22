// e.g. src/Chakra.js
// a) import `ChakraProvider` component as well as the storageManagers
import {
  ChakraProvider,
  cookieStorageManagerSSR,
  localStorageManager,
} from "@chakra-ui/react";
import { getTheme } from "../theme";

export function Chakra({ cookies, colorScheme, children }) {
  // b) Pass `colorModeManager` prop
  const colorModeManager =
    typeof cookies === "string"
      ? cookieStorageManagerSSR(cookies)
      : localStorageManager;

  const themeConfig = {
    colorScheme,
    variant: "neo-brutalist",
  };

  return (
    <ChakraProvider
      colorModeManager={colorModeManager}
      theme={getTheme(themeConfig)}
    >
      <div>{children}</div>
    </ChakraProvider>
  );
}

// also export a reusable function getServerSideProps
export function getServerSideProps({ req }) {
  return {
    props: {
      // first time users will not have any cookies and you may not return
      // undefined here, hence ?? is necessary
      cookies: req.headers.cookie ?? "",
    },
  };
}
