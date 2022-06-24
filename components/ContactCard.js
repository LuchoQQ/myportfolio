import { Box, Flex, Grid, Icon, Text } from "@chakra-ui/react";
import React from "react";
const ContactCard = ({ icon, value, description, url }) => {
  return (
    <Grid alignContent="center" justifyContent={"center"}>
      <Flex justifyContent={"center"} mb="3vh">
        <Icon
          as={icon}
          transition="all .2s ease"
          w="60px"
          h="60px"
          alignSelf={"center"}
          fill="#fff"
          _hover={{ fill: "#ad1d71" }}
        />
      </Flex>
      <Text textAlign={"center"} color="#c9c9c9">
        {value}
      </Text>
      <Text justifySelf="center" mb="5vh">
        {description}
      </Text>
      <a href={url} style={{ display: "flex", justifyContent: "center" }}>
        <Flex
          justifySelf={"center"}
          w="100px"
          h="50px"
          bg="#000"
          mt="2vh"
          borderRadius={"20px"}
          cursor="pointer"
          justifyContent="center"
          alignContent={"center"}
        >
          <Text
            justifySelf={"center"}
            alignSelf="center"
            color="#ababab"
            transition="all 0.2s ease"
            _hover={{ color: "#ad1d71" }}
          >
            Go to
          </Text>
        </Flex>
      </a>
    </Grid>
  );
};

export default ContactCard;
