import React from "react";
import { Grid, Flex, Text, Badge } from "@chakra-ui/react";
import RadialMenu from "../components/RadialMenu";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const Skills = () => {
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
			<Grid w="100vw" h={["auto"]} autoFlow={"row"}>
				<Flex
					w="100vw"
					h="auto"
					justify={"center"}
					alignItems={"center"}
					mb={["20vh", "20vh", "20vh", "10vh"]}
				>
					<Text
						fontSize={["4xl", "6xl"]}
						textShadow={"2px 2px 1px #ad1d71"}
						position={"relative"}
						w={"50%"}
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
					>
						Skills
					</Text>
				</Flex>

				<Grid autoFlow={["row", "row", "row", "column"]}>
					<Flex
						w={["100vw", "100vw", "100vw", "50vw"]}
						h="auto"
						alignItems="center"
						justifyContent="center"
						flexDirection="column"
					>
						<Text
							fontSize={"4xl"}
							justifySelf={"center"}
							textShadow={"1px 1px 1px #ad1d71"}
							mb={["10vh", "10vh", "10vh", "10vh"]}
						>
							Technical Skills
						</Text>
						<Grid justifyContent={"center"} alignContent="center">
							<RadialMenu />
						</Grid>
					</Flex>

					<Flex
						w={["100vw", "100vw", "100vw", "50vw"]}
						h="auto"
						justifyContent={"center"}
						alignItems={"center"}
						listStyleType={"none"}
						fontSize={"2rem"}
					>
						<Grid justifyContent={"center"} gap={"3rem"}>
							<Flex flexDir={"column"}></Flex>
							<Text
								fontSize={["xl", "xl", "xl", "2xl"]}
								w={["90vw", "90vw", "90vw", "30vw"]}
								textAlign="center"
							>
								Es de mi preferencia el ecosistema de
								Javascript, me familiaricé con él desde el lado del frontend y
								el backend con tecnologías como ReactJS, NodeJS, TypeScript y
								NextJS. Sin embargo, siempre estoy dispuesto a aprender nuevas
								tecnologías.
							</Text>
							
						</Grid>
					</Flex>
				</Grid>
			</Grid>
		</motion.div>
	);
};

export default Skills;
