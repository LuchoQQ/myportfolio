import { extendTheme } from "@chakra-ui/react";
import "@fontsource/space-mono";

const theme = extendTheme({
    fonts: {
        primary: "Space Mono",
    },
    colors: {
        primary: "#ad1d71",
        secondary: "#FF81BE",
        tertiary: "#fff",
    },
});

export default theme