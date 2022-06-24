import {
	Box,
	Button,
	Flex,
	FormControl,
	Grid,
	Icon,
	Input,
	Text,
} from "@chakra-ui/react";
import React from "react";
import FormInput from "../components/FormInput";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { HiLocationMarker } from "react-icons/hi";
import { AiFillMail } from "react-icons/ai";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { useTheme } from "@chakra-ui/react";

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
			<Grid
				w="100vw"
				h="auto"
				justifyContent={"center"}
				alignItems={"center"}
				mb={"15vh"}
			>
				<Flex w="100vw" h="auto" justify={"center"} alignItems={"center"}>
					<Text
						fontSize={["4xl", "5xl", "6xl", "6xl", "6xl"]}
						textShadow={"2px 2px 1px #ad1d71"}
						textAlign={"center"}
						w={"50%"}
						mb={["0vh", "0vh", "0vh", "5vh"]}
						_before={{
							content: '""',
							position: "relative",
							display: "block",
							width: "100%",
							height: "4px",
							background: "linear-gradient(to right, #ad1d71, #FF81BE)",
							boxShadow: "0px 0px 10px #ad1d71",
						}}
					>
						Contact
					</Text>
				</Flex>

				<Grid
					w={"100%"}
					h={"auto"}
					autoFlow={["row", "row", "row", "row", "column"]}
					gap={"10rem"}
					justifyContent={"center"}
				>
					{/* Left Box */}
					<Grid
						w={["90vw", "70vw", "70vw", "70vw", "40vw"]}
						h='auto'
						justifyContent="center"
					>
						<FormControl
							display={"flex"}
							flexDir={"column"}
							justifyContent={"center"}
							alignItems={"center"}
							gap={"10vh"}
							py="2vh"
						>
							<FormInput type="name" placeholder={"Name"} id="name" />
							<FormInput type="email" placeholder={"Email"} id="email" />
							<FormInput type="message" placeholder={"Message"} id="message" />

							<Box
								mt={"5vh"}
								w={"30%"}
								h={"50px"}
								bg={"rgba(255,255,255,0)"}
								outline={"1px solid #ad1d71"}
								display={"flex"}
								justifyContent={"center"}
								alignItems={"center"}
								transition={"all 0.3s ease-in-out"}
								_hover={{
									bg: "#ad1d71",
									boxShadow: "0px 0px 10px #ad1d71",
								}}
							>
								Enviar
							</Box>
						</FormControl>
					</Grid>
					{/* Right Box */}
					<Grid
						w={["90vw", "70vw", "70vw", "70vw", "40vw"]}
						h='auto'
						justifyContent="center"
					>
						<Grid
							gap={"5vh"}
							alignContent={"center"}
							justifyContent="center"
							w="100%"
						>
							<Flex>
								<Icon as={AiFillMail} fontSize={"6xl"} fill={"#ad1d71"} />
								<Text
									mb={"2vh"}
									color={"#dedede"}
									fontSize={["lg", "2xl", "3xl", "3xl", "3xl"]}
									ml={"1rem"}
									fontWeight="semi-bold"
								>
									luchoqq25@gmail.com
								</Text>
							</Flex>
							<Flex>
								<Icon as={BsLinkedin} fontSize={"6xl"} fill={"#ad1d71"} />
								<Text
									mb={"2vh"}
									color={"#dedede"}
									fontSize={["lg", "2xl", "3xl", "3xl", "3xl"]}
									ml={"1rem"}
									fontWeight="semi-bold"
								>
									in/luchoqq
								</Text>
							</Flex>
							<Flex>
								<Icon as={BsGithub} fontSize={"6xl"} fill={"#ad1d71"} />
								<Text
									mb={"2vh"}
									color={"#dedede"}
									fontSize={["lg", "2xl", "3xl", "3xl", "3xl"]}
									ml={"1rem"}
									fontWeight="semi-bold"
								>
									github.com/LuchoQQ
								</Text>
							</Flex>
						</Grid>
						<Flex align={"center"}>
							<Icon as={HiLocationMarker} fontSize={"6xl"} fill={"#ad1d71"} />
							<Text
								mb={"2vh"}
								color={"#dedede"}
								fontSize={"xl"}
								ml={"1rem"}
								fontWeight="semi-bold"
							>
								Argentina, Corrientes Capital
							</Text>
						</Flex>
					</Grid>
				</Grid>
			</Grid>
		</motion.div>
	);
};

export default Contact;
