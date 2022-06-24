import Head from "next/head";
import Navbar from "../layouts/Navbar";
import Background from "../components/Background";
import { Flex } from "@chakra-ui/react";
import { useTheme } from "@chakra-ui/react";
import Hero from "../layouts/Hero";
import About from "../layouts/About";
import Skills from "../layouts/Skills";
import Portfolio from "../layouts/Portfolio";
import Contact from "../layouts/Contact";
export default function Home() {
	const theme = useTheme();
	console.log(theme.fonts.primary)
	return (
		<>
			<Head>
				<title>LuchoQQ Portfolio</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Background fontFamily={theme.fonts.primary}>
				<Navbar />
				<Flex h={"15vh"} id='home'/>
				<Hero />
				<Flex h={"15vh"} id="about" />
				<About />
				<Flex h={"15vh"} id="skills" />
				<Skills />
				<Flex h={"15vh"} id="portfolio" />
				<Portfolio />
				<Flex h={"15vh"} id="contact" />
				<Contact />
				{/* <Footer /> */}
			</Background>
		</>
	);
}


