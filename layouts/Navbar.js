import React from "react";
import { Flex, Box, Grid, Text, Icon, Button, theme } from "@chakra-ui/react";
import { FaCode } from "react-icons/fa";
import { useTheme } from "@emotion/react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from 'react-icons/ai';
import LinkScroll from "../components/LinkScroll";
import { useState } from "react";

const Navbar = () => {
	
	const [isOpen, setIsOpen] = useState(false);

	const handleClose = () => {
		setIsOpen(false)
	};

	return (
		<>
			<Grid
				autoFlow={"column"}
				alignContent={"center"}
				justifyContent="space-around"
				height={"15vh"}
				width={"100vw"}
				zIndex={"10000"}
				bg={"rgba(0,0,0,0.8)"}
				position={"fixed"}
			>
				<Icon
					as={FaCode}
					w={24}
					h={24}
					fill={"#ad1d71"}
					transition={"all 0.2s ease-in-out"}
					_hover={{ fill: "#FF81BE" }}
				/>
				<Flex alignItems="center">
					<Grid
						autoFlow={["none", "none", "none", "column"]}
						ml="2vw"
						alignContent={"center"}
						gap={"4vw"}
						p={"1vw"}
						display={["none", "none", "none", "flex"]}
					>
						<LinkScroll path="home" name={"Home"} />
						<LinkScroll path="about" name={"About"} />
						<LinkScroll path="skills" name={"Skills"} />
						<LinkScroll path="portfolio" name={"Portfolio"} />
						<LinkScroll path="contact" name={"Contact"} />
					</Grid>
					
					<a href='https://res.cloudinary.com/diylksocz/image/upload/v1656160018/LUCIANO_SÁNCHEZ_iqiep7.png' style={{ padding: '1rem' }}>
					<Flex
						borderRadius="20px"
						ml="5vw"
						py={3}
						px={10}
						alignItems="center"
						color={"#fff"}
						outline={"2px solid #D22589"}
						_hover={{
							color: "#fff",
							textShadow: "0px 0px 10px #FF81BE",
							bg: "#D22589",
							boxShadow: "0px 0px 10px #FF81BE",
						}}
						transition={"all 0.2s ease-in-out"}
						cursor={"pointer"}
						display={["none", "none", "flex", "flex"]}
					>
						Curriculum
					</Flex>
					</a>
					<Icon
						as={GiHamburgerMenu}
						w={10}
						h={10}
						display={["flex", "flex", "none", "none"]}
						onClick={() => setIsOpen(!isOpen)}
						fill='#dedede'
						
					/>
				</Flex>
			</Grid>




			{/* MOBILE RESPONSIVE */}




			<Grid
				position={"fixed"}
				top='0'
				left={(isOpen) ? '0' : '-100vw'}
				width={"100vw"}
				height={"100vh"}
				bg={"#000"}
				zIndex={"10000"}
				transition={"all 0.2s ease-in-out"}
			>
				<Grid
					autoFlow={"row"}
					justifyContent="space-around"
					height={"100vh"}
					width={"100vw"}
					zIndex={"10000"}
					bg={"rgba(0,0,0,0.8)"}
					position={"fixed"}
				>
					<Flex
						w='100vw'
						justifyContent="space-around"
						mt='2vh'
						align={'center'}
						h='50%'
					>
						<Icon
							as={FaCode}
							w={24}
							h={24}
							fill={"#ad1d71"}
							_hover={{ fill: "#FF81BE" }}
						/>
						<Icon
							as={AiOutlineClose}
							w={16}
							h={16}
							fill={"#dedede"}
							_hover={{ fill: "#FF81BE" }}
							onClick={() => setIsOpen(!isOpen)}
						/>
					</Flex>
					<LinkScroll handle={handleClose} path="home" name={"Home"}/>
					<LinkScroll handle={handleClose} path="about" name={"About"} />
					<LinkScroll handle={handleClose} path="skills" name={"Skills"} />
					<LinkScroll handle={handleClose} path="portfolio" name={"Portfolio"} />
					<LinkScroll handle={handleClose} path="contact" name={"Contact"} />
					<a href='https://res.cloudinary.com/diylksocz/image/upload/v1656160018/LUCIANO_SÁNCHEZ_iqiep7.png' style={{ justifySelf: 'center', fontSize: '1.5rem', color: '#fff' }}>Curriculum</a>
				</Grid>
			</Grid>
		</>
	);
};

export default Navbar;
