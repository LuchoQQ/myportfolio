import { extendTheme } from "@chakra-ui/react";
import "@fontsource/merriweather-sans"
const theme = extendTheme({
    fonts: {
        primary: "Merriweather Sans",
    },
    colors: {
        primary: "#ad1d71",
        secondary: "#FF81BE",
        tertiary: "#fff",
    },
});

export default theme