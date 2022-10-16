import { ListItem, Heading, Image } from "@chakra-ui/react";
import { motion } from "framer-motion";

export const Card = ({ character }) => {
  const { name, image, status } = character;
  return (
    <>
      {status === "Alive" ? (
        <motion.div
          animate={{ opacity: [0, 1] }}
          whileHover={{
            scale: 1.1,
            boxShadow: "0px 0px 2px 2px #087f5b",
            borderRadius: "4px",
            rotateY: 360,
          }}
          transition={{ duration: 0.3, ease: "linear" }}
        >
          <ListItem
            w="245px"
            bgColor="#087f5b"
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
              width="90%"
            >
              {name}
            </Heading>
            <Image
              w="200px"
              borderRadius="4px"
              src={image}
              alt={`${name}_image`}
            />
          </ListItem>
        </motion.div>
      ) : (
        <motion.div
          animate={{ opacity: [0, 1] }}
          whileHover={{
            scale: 1.1,
            boxShadow: "0px 0px 2px 2px #087f5b",
            borderRadius: "4px",
            rotateY: 360,
          }}
          transition={{ duration: 0.3, ease: "linear" }}
        >
          <ListItem
            w="245px"
            bg="#dee2e6"
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
              width="90%"
            >
              {name}
            </Heading>
            <Image
              w="200px"
              borderRadius="4px"
              src={image}
              alt={`${name}_image`}
              filter="grayscale(1)"
            />
          </ListItem>
        </motion.div>
      )}
    </>
  );
};
