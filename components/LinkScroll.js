import React from "react";
import { Link } from "react-scroll";
import { Text } from "@chakra-ui/react";
const LinkScroll = ({ handle, path, name }) => {
	return (
		<>
			<Link to={path} spy={true} smooth={true} duration={500} onClick={handle}>
				<Text
					fontFamily={"Space Mono"}
					fontSize={["2xl","2xl", "2xl", "md", "lg"]}
					cursor={"pointer"}
					color={"#fff"}
					_hover={{
						color: "#FF81BE",
						textShadow: "0px 0px 3px #FF81BE",
						transform: "scale(1.2)",
					}}
					transition={"all 0.2s ease-in-out"}
					px={"0.5vw"}
					textAlign={"center"}
				>
					{name}
				</Text>
			</Link>
		</>
	);
};

export default LinkScroll;
