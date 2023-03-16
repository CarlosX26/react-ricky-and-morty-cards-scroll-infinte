import { Flex, Image } from "@chakra-ui/react";
import logo from "../../Assets/Img/logo.png";

export const Header = () => {
  return (
    <Flex minW="100%" justifyContent="center">
      <Image src={logo} alt="rick_and_morty" width="200px" />
    </Flex>
  );
};
