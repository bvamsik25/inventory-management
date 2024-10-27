import { createTheme } from "@mui/material";

export const ColorTheme = createTheme({
    components:{
        MuiTypography:{
            styleOverrides:{
                root:{
                    color: '#ffffff'
                }
            }
        },
        MuiTableCell:{
            styleOverrides:{
                root:{
                    borderSpacing: '0px 0px'
                }
            }
        },
    }
})