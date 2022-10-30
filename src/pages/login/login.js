import React from 'react'
import { Button, FormControl, Grid, Typography, TextField } from '@mui/material';
import elipse from '../../assets/img/elipse.png'
import under from '../../assets/img/undraw_online_posts_re_7ucl 1.png'
const Login = () => {
    return (
        <Grid container width={"100%"} gap={50} >
            <img src={elipse} alt="" width={"300px"} height={"271px"} />
            <Grid container item justifyContent={"center"} flexDirection={"column"} width={"375px"} height={"819px"} alignItems={"center"} gap={8}>
                <Grid container justifyContent={"center"} gap={4} flexDirection={"column"} alignItems={"center"} alignContent={"center"} >
                    <Typography item variant="h1" >Welcome Back!</Typography>
                    <img item src={under} alt="" width={"170px"} height={"170px"} />
                </Grid>
                <Grid>
                    <FormControl sx={{ width: "325px" }}>
                        <TextField type={"email"} fullWidth label="Enter your  e-mail" id="fullWidth" margin="dense" sx={{ bgcolor: "white" }} />
                        <TextField type={"password"} fullWidth label="Confirm password" id="fullWidth" margin="dense" sx={{ bgcolor: "white" }} />
                    </FormControl>
                    <Grid color={"primary.main"} sx={{ mt: 4 }}><Typography textAlign={"center"}> <a> forget Password</a> </Typography></Grid>
                </Grid>
                <Grid container justifyContent={"center"} gap={1}>
                    <Button item variant='mainButton' sx={{ width: "325px" }}> <Typography variant='button'>register</Typography> </Button>
                    <Typography container item variant="hsubtitle1" textAlign={"center"} >Already have an account ?</Typography><a href='/'> <Grid color={"primary.main"} >Sign in</Grid></a>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Login