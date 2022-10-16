import { Box } from "@chakra-ui/react";

import { Header } from "./components/Header";
import { List } from "./components/List";
import bg from "./Assets/Img/background.jpg";

import GlobalStyle from "./GlobalStyle";

function App() {
  return (
    <>
      <GlobalStyle />
      <Box minH="100vmin" bgImg={bg} bgPos="top" bgSize="100% 100vh">
        <Header />
        <List />
      </Box>
    </>
  );
}

export default App;
