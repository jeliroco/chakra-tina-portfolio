// import from react
import React from "react";
// import from chakra
import { ChakraProvider, Box } from "@chakra-ui/react";
// import from custom
import { theme } from "../config/theme.js";

const App = ({ Component, pageProps }) => {
  return (
    <ChakraProvider theme={theme}>
      <Box minHeight="100vh">
        <Component {...pageProps} />
      </Box>
    </ChakraProvider>
  );
};

export default App;
