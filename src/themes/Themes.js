

import { createTheme } from "@mui/material/styles";





export const Themes = createTheme({
    components: {
        MuiCssBaseline: {
            styleOverrides: {
                body: {
                    background: '#EEE',
                    fontFamily: 'Poppins',
                },
                '.a': {
                    color: "#50C2C9",
                    textDecrition: "none"
                },


            }
        },
        MuiButton: {
            variants: [
                {
                    props: { variant: 'mainButton' },
                    style: {
                        color: '#fff',
                        backgroundColor: '#50C2C9',
                        borderRadius: '20px',
                        textAlign: 'center',
                        height: 60,
                        '&:hover': {
                            backgroundColor: '#50C2C9',
                        }
                    }
                }

            ]
        }
    },
    palette: {
        primary: {
            main: '#50C2C9',
            light: '#94F6FC'
        },
        background: '#EEE'
    },
    typography: {
        h1: {
            fontSize: 18,
            fontWeight: 700,
            lineHeight: '27px',
        },
        h2: {

            fontsize: 12,
            fontweight: 700,
            lineheight: 18,


        },
        subtitle1: {
            height: 81,
            width: 249,
            left: 3,
            top: 35,


        },
        subtitle2: {
            fontsize: 14,
            fontweight: 500,
            lineheight: 21,
            letterspacing: 0,
            textalign: "left",

        },
    },
    shadows: {
        1: "0px 4px 10px rgba(0, 0, 0, 0.25);"
    }


})
