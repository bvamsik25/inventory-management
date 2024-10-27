import { Box, ThemeProvider } from "@mui/material";
import React from "react";
import { ColorTheme } from "../themes/themes";

export default function Wrapper({children}){
    return(
        <Box
            sx={{
                p: 3,
                backgroundColor: "#161818",
                height: 809
            }}
        >
            <ThemeProvider theme={ColorTheme}>
                {children}
            </ThemeProvider>
        </Box>
    );
}