import { useEffect, useState } from "react";

import { UnorderedList, Button, ListItem } from "@chakra-ui/react";
import axios from "axios";

import { Card } from "./Card";

export const List = () => {
  const [listCharaters, setListCharacter] = useState([]);
  const [page, setPage] = useState(1);

  const backToHome = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/character?page=${page}`)
      .then((res) => {
        setListCharacter([...listCharaters, ...res.data.results]);
      })
      .catch((err) => console.log(err));

    const observer = new IntersectionObserver(([{ isIntersecting }]) => {
      if (isIntersecting) {
        setPage(page + 1);
      }
    });
    observer.observe(document.getElementById("newReq"));

    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  return (
    <UnorderedList
      m="0"
      display="grid"
      gridTemplateColumns={[
        "1fr",
        "repeat(2, 1fr)",
        "repeat(3, 1fr)",
        "repeat(4, 1fr)",
      ]}
      gap="16px"
      padding="16px"
    >
      {listCharaters.map((e) => (
        <Card key={e.id} character={e} />
      ))}
      <Button
        border="none"
        borderRadius="50%"
        fontSize="28px"
        bg="green.300"
        cursor="pointer"
        pos="fixed"
        bottom="20px"
        right="20px"
        w="48px"
        h="48px"
        onClick={() => backToHome()}
      >
        <i className="bx bx-chevrons-up"></i>
      </Button>
      <ListItem id="newReq" w="1px" h="1px"></ListItem>
    </UnorderedList>
  );
};
