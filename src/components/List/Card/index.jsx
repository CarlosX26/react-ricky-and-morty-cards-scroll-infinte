import { ListItem, Heading, Image, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";

export const Card = ({ character }) => {
  const { name, image, status } = character;

  return (
    <motion.div
      animate={{ opacity: [0, 1] }}
      whileHover={{
        rotateY: 360,
      }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <ListItem
        w="100%"
        bgColor={status === "Alive" ? "green.400" : "gray.400"}
        p="16px"
        borderRadius="4px"
        display="flex"
        flexDirection="column"
        alignItems="center"
        gap="16px"
      >
        <Heading
          overflow="hidden"
          textOverflow="ellipsis"
          whiteSpace="nowrap"
          fontSize="medium"
        >
          {name}
        </Heading>
        <Image w="168px" borderRadius="4px" src={image} alt={`${name}_image`} />
        <Text fontWeight="medium">{status}</Text>
      </ListItem>
    </motion.div>
  );
};
