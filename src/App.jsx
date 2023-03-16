import { ChakraProvider } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import { Header } from "./components/Header";
import { List } from "./components/List";
import bg from "./Assets/Img/background.jpg";

const App = () => {
  return (
    <ChakraProvider>
      <Box minH="100vmin" bgImg={bg} bgPos="top" bgSize="100% 100vh">
        <Header />
        <List />
      </Box>
    </ChakraProvider>
  );
};

export default App;
