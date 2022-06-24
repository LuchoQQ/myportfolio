import { Box } from "@chakra-ui/react";
import React from "react";

export default function Background({children}) {
  return (
    <Box /* style={{ 
      backgroundImage: `url(https://res.cloudinary.com/diylksocz/image/upload/v1652646222/test_yetfe4.jpg)`, height: "100vh", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat"}} */
      bg={"#080808"}
      fontFamily={'Space Mono'}

      >
      {children}
    </Box>
  )
}
