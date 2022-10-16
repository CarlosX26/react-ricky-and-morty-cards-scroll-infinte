import { Box, Image } from "@chakra-ui/react";

import logo from "../../Assets/Img/logo.png";

export const Header = () => {
  return (
    <Box minW="100%" textAlign="center">
      <Image src={logo} alt="rick_and_morty" width="264px" />
    </Box>
  );
};
