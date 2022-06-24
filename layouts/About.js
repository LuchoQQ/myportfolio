import React from "react";
import {
	Flex,
	Box,
	Grid,
	Text,
	Icon,
	Button,
	Image,
	theme,
} from "@chakra-ui/react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const Main = () => {
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
				h={["70vh", "70vh", "70vh", "70vh", "80vh"]}
				w={"100vw"}
				bg={"#080808"}
				autoFlow={["row", "row", "row", "row", "column"]}
				fontFamily={""}
				justifyContent={"center"}
			>
				
				<Flex
					w={["100%", "100%", "50vw", "50vw"]}
					display={["none", "none", "none", "none", "flex"]}
					justifyContent="center"
					alignItems={["center"]}
					h={"auto"}
					role="group"
				>
					
					<Box
						backgroundImage="url('https://res.cloudinary.com/diylksocz/image/upload/v1654816902/Space-PNG-Images-HD_x2b0mj.png')"
						borderRadius={"30%"}
					>
						
						<motion.div
							animate={{ y: [0, -50, 0] }}
							transition={{ repeat: Infinity, duration: 10 }}
						>
							<Image
								transition={'all 1s ease'}
								filter="brightness(0.5)"
								_groupHover={{ filter: "brightness(1)" }}
								src={
									"https://res.cloudinary.com/diylksocz/image/upload/v1654723277/Egvz6bdXsAIDorV_jahu6h.png"
								}
								w={[200, 200, 550, 550]}
								h={[200, 200, 350, 550]}
							/>
						</motion.div>
					</Box>
				</Flex>
				{/* About! */}
				<Grid w={["90vw", "90vw", "90vw", "80vw", "50vw"]} gap={"5vh"}>
					<Text
						fontSize={["6xl", "6xl", "8xl", "8xl", "8xl"]}
						justifySelf={"center"}
						w={"80%"}
						textAlign={"center"}
						textShadow={"2px 2px 1px #482B7A"}
						_before={{
							content: '""',
							position: "relative",
							display: "block",
							width: "100%",
							height: "4px",
							background: "linear-gradient(to right, #482B7A,  #FF81BE)",

							boxShadow: "0px 0px 10px #ad1d71",
						}}
					>
						About
					</Text>
					<Box
						justify={"center"}
						fontSize={["xl", "xl", "xl", "2xl"]}
						textAlign="center"
						w={"90%"}
					>
						<span>Soy un desarrolador</span>
						<span style={{ color: "#6a3fb5" }}> fullstack</span>
						<span>
							, con una{" "}
							<span style={{ textDecoration: "line-through" }}>pequeña</span>{" "}
							obsesión con la{" "}
						</span>
						<span style={{ color: "#ACF776" }}>organización</span>
						<span> y el </span>
						<span style={{ color: "#ACF776" }}> diseño </span>
						<span>milimétrico</span>
					</Box>
					<Box
						justify={"center"}
						fontSize={["xl", "xl", "xl", "2xl"]}
						textAlign="center"
						w={"90%"}
					>
						<span>
							La tecnología, la ciencia y los videojuegos son algunos de mis
							intereses, entre ellos la creación de
						</span>

						<span style={{ color: "#FF81BE" }}> aplicaciones web.</span>
					</Box>
				</Grid>
			</Grid>
		</motion.div>
	);
};

export default Main;
