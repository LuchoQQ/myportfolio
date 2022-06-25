import React from "react";
import { Grid, Flex, Text, Box, Image } from "@chakra-ui/react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import Project from "../components/Project";
const Portfolio = () => {
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
			<Grid w="100vw" h="auto">
				<Flex
					w="100vw"
					h="auto"
					justify={"center"}
					alignItems={"center"}
					mb={["0vh", "0vh", "0vh", "5vh"]}
				>
					<Text
						fontSize={["4xl", "5xl", "6xl", "6xl", "6xl"]}
						textShadow={"1px 1px 1px #ad1d71"}
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
						mb={["20vh", "20vh", "20vh", "20vh", "0vh"]}
						color='#dedede'
					>
						My Projects
					</Text>
				</Flex>

				<Grid
					w="100vw"
					h="auto"
					justifyContent={"center"}
					alignItems={"center"}
					autoFlow={["row", "row", "row", "row", "column"]}
					gap={"5rem"}
				>
					<Project
						url="https://res.cloudinary.com/diylksocz/image/upload/v1654799935/movieverse_fondo_bey7yb.jpg"
						repo="https://github.com/LuchoQQ/movieverse"
						web="https://movieverse-olive.vercel.app"
						description="Movieverse es un proyecto donde puedes ver abundante información acerca de películas y series. Posee navegación, busqueda, paginación entre otras features"
					/>

					<Project 
						url='https://res.cloudinary.com/diylksocz/image/upload/v1656164407/Sin_t%C3%ADtulo_mhrkrs.png'
						repo='https://github.com/axelromero99/greka'
						description='Greka es un trabajo en proceso para una cliente que requiere una tienda online que funcione con Google Sheets. En colaboración con un equipo de desarrolladores'
					/>

					<Project 
						url='https://res.cloudinary.com/diylksocz/image/upload/v1656165706/Sin_awd_nrallv.png'
						repo='https://github.com/LuchoQQ/PERNproject'
						description='Challenge con el PERN stack para ingresar a la aceleración en Alkemy, actualmente en curso.'
					/>
				</Grid>
			</Grid>
		</motion.div>
	);
};

export default Portfolio;
