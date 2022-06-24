import React from "react";
import { Box, Image, Flex, Grid, Icon } from "@chakra-ui/react";
import { BsGlobe, BsGithub } from 'react-icons/bs';



const Project = ({ url, repo, web }) => {
    
    return (
		<>
			<Box
				w={["60vw", "50vw", "30vw", "30vw", "20vw"]}
				h={["30vh", "40vh", "40vh", "30vw", "40vh"]}
				overflow="hidden"
				
				role="group"
				borderRadius={"10%"}
			>
				<Image
					src={url || "https://res.cloudinary.com/diylksocz/image/upload/c_scale,w_500/v1654806939/137-1379498_work-in-progress_lj0rhi.jpg"}
					alt="project"
					style={{ width: "500px", height: "300px", objectFit: "cover" }}
					transition={"all 0.5s ease"}
					_groupHover={{ filter: "blur(10px)" }}
				/>
				<Box
					w="100%"
					h="100%"
					position="relative"
					top="-300px"
					left="0"
					display={"none"}
                    transition={"all 0.2s ease"}
					_groupHover={{
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
					}}
					zIndex="1"
				>
					<Grid
                        autoFlow={'column'}
                        gap={'3rem'}
                    >
                        <a href={repo}><Icon as={BsGithub} w='80px' h='80px' fill='#ad1d71' /></a>
                        <a href={web}><Icon as={BsGlobe} w='80px' h='80px' fill='#ad1d71' /></a>
                    </Grid>
				</Box>
			</Box>
		</>
	);
};

export default Project;
