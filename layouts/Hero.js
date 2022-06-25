import React from "react";
import { Flex, Grid, Box, Image, Text, Input } from "@chakra-ui/react";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const Hero = () => {
	const control = useAnimation();
	const [ref, inView] = useInView();

	const boxVariant = {
		visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
		hidden: { opacity: 0, scale: 0 },
	};

	useEffect(() => {
		if (inView) {
			control.start("visible");
		} else {
			control.start("hidden");
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
				autoFlow="column"
				width={"100vw"}
				position={"relative"}
				height={"90vh"}
				zIndex={"100"}
				justifyContent={"center"}
			>
				<Grid
					width={["100%", "100%", "50vw", "50vw"]}
					display={"flex"}
					flexDirection={"column"}
					justifyContent={"center"}
					alignItems={"center"}
					gap='3vh'
				>
					<Text
						fontSize={["1.5rem", "1.5rem", "2.5rem", "3rem"]}
						color={"#fff"}
						textShadow={"2px 0px 0px #ad1d71"}
					>
						Bienvenidos!
					</Text>

					<Text fontSize={"2rem"} textShadow={"2px 0px 0px #ad1d71"} color='#fff'>
						Luciano
					</Text>
					<Text color="#ad1d71" fontSize={"2rem"}>
						Sánchez
					</Text>
					<Text fontSize={"1.2rem"} textShadow={"2px 0px 0px #ad1d71"} color='#fff' textAlign={'center'}>
						FullStack Developer
					</Text>
					<Text>web work in progress</Text>
				</Grid>

				<Flex
					width={"50vw"}
					justifyContent={"center"}
					alignItems={"center"}
					display={["none", "none", "none", "flex"]}
				>
					{
						<Flex
							width={["500px"]}
							height={["500px"]}
							bg={"rgba(0,0,0,0)"}
							borderRadius={"50%"}
							outline={"10px solid #ad1d71"}
							boxShadow={"1px 1px 50px #ad1d71, inset -1px -1px 20px #ad1d71"}
							position={"relative"}
							overflowY={"hidden"}
							justifyContent={"center"}
						>
							<Image
								src=""
								alt="idk"
								width={"900px"}
								filter={"grayscale(100%)"}
								position={"absolute"}
								zIndex={"-10"}
								objectFit={"cover"}
							/>
						</Flex>
					}
				</Flex>
			</Grid>
		</motion.div>
	);
};

export default Hero;
