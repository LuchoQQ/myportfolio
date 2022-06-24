import React from 'react'
import {Box, Text} from '@chakra-ui/react'
import Link from 'react-scroll'
import { useTheme } from '@emotion/react'


const MenuItem = ({path, name}) => {

  const theme = useTheme()

  return (
    <div>
        <Link to={path}>
            <Text
              fontFamily={"Space Mono"}
              fontSize={{ base: 'md', md: 'md' , lg: 'lg'}} 
              cursor={"pointer"} 
              color={"#fff"}
              _hover={{color: "#FF81BE", textShadow: "0px 0px 3px #FF81BE", transform: "scale(1.2)"}}
              transition={"all 0.2s ease-in-out"}
              px={'0.5vw'}
            >
                {name}
            </Text>
        </Link>
    </div>
  )
}

export default MenuItem