

import { createTheme } from "@mui/material/styles";





export const Themes = createTheme({
    components: {
        MuiCssBaseline: {
            styleOverrides: {
                body: {
                    background: '#EEE',
                    fontFamily: 'Poppins',
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

            fontsize: 13,
            fontweight: 400,
            lineheight: 20,
        },
        subtitle2: {
            fontsize: 14,
            fontweight: 500,
            lineheight: 21,
            letterspacing: 0,
            textalign: "left",

        },
        button: {

            fontsize: 18,
            fontweight: 600,
            lineheight: 27,

        }
    },
    shadows: {
        1: "0px 4px 10px rgba(0, 0, 0, 0.25);"
    }


})
