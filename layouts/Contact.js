import { Box, Flex, Grid, Icon, Text } from "@chakra-ui/react";
import React from "react";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { HiLocationMarker } from "react-icons/hi";
import { AiFillMail } from "react-icons/ai";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { useTheme } from "@chakra-ui/react";
import ContactCard from "../components/ContactCard";

const Contact = () => {
  const theme = useTheme();

  const control = useAnimation();
  const [ref, inView] = useInView();

  const boxVariant = {
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
    hidden: { opacity: 0, scale: 0 },
  };

  useEffect(() => {
    if (inView) {
      control.start("visible");
    }
  }, [control, inView]);
  return (
    <motion.div
      className="box"
      ref={ref}
      variants={boxVariant}
      initial="hidden"
      animate={control}
    >
      <Flex h={['auto', 'auto', '100vh', '90vh']} flexDir="column" alignItems={"center"} w="100vw">
        <Grid>
          <Text
            w={["80vw","80vw","100vw","50vw"]}
            fontSize={["4xl", "5xl", "6xl", "6xl", "6xl"]}
            textShadow={"1px 1px 1px #ad1d71"}
            textAlign={"center"}
            _before={{
              content: '""',
              position: "relative",
              display: "block",
              width: "100%",
              height: "4px",
              background: "linear-gradient(to right, #ad1d71, #FF81BE)",
              boxShadow: "0px 0px 10px #ad1d71",
            }}
            mb={["20vh", "20vh", "20vh", "20vh", "10vh"]}
            color="#dedede"
          >
            Contact me!
          </Text>
          <Grid
            bg="#090909"
            borderRadius={"20px"}
            w="100%"
            h={['160vh','180vh','50vh']}
            justifyContent={"center"}
            alignContent="center"
            autoFlow={['row','row','column', 'column']}
            gap={['30vw', '10vw']}
          >
            <ContactCard
              icon={AiFillMail}
              value={"CORREO"}
              description="luchoqq25@gmail.com"
			  url='https://mail.google.com/mail/u/0/#inbox?compose=DmwnWtMgBMjFWfBDRBTHdNKGcXVcslrlnxKTksFLlvxQxQBXswtjxNLKxmxcFFbbzkKcjxZkfGwg'
            />
            <ContactCard
              icon={BsLinkedin}
              value={"LINKEDIN"}
              description="in/luchoqq"
			  url='https://www.linkedin.com/in/luchoqq/'
            />
            <ContactCard
              icon={BsGithub}
              value={"GITHUB"}
              description="LuchoQQ"
			  url='https://github.com/LuchoQQ'
            />
           
          </Grid>
        </Grid>
      </Flex>
    </motion.div>
  );
};

export default Contact;
