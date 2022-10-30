import React from 'react'
import { Button, FormControl, Grid, Typography, TextField } from '@mui/material';
import elipse from '../../assets/img/elipse.png'

const Register = () => {
    return (
        <Grid container width={"100%"} gap={50}>
            <img src={elipse} alt="" width={"300px"} height={"271px"} />
            <Grid container item justifyContent={"center"} flexDirection={"column"} width={"375px"} height={"819px"} alignItems={"center"} gap={8}>
                <Grid container justifyContent={"center"} gap={2}>
                    <Typography item variant="h1" > Welcome Onboard!</Typography>
                    <Typography item variant="hsubtitle1" >Let’s help you meet up your tasks.</Typography>
                </Grid>
                <Grid>
                    <FormControl sx={{ width: "325px" }}>
                        <TextField fullWidth label="Enter your full name" id="fullWidth" margin="dense" sx={{ bgcolor: "white" }} />
                        <TextField type={"email"} fullWidth label="Enter your  e-mail" id="fullWidth" margin="dense" sx={{ bgcolor: "white" }} />
                        <TextField type={"password"} fullWidth label="Enter password" id="fullWidth" margin="dense" sx={{ bgcolor: "white" }} />
                        <TextField type={"password"} fullWidth label="Confirm password" id="fullWidth" margin="dense" sx={{ bgcolor: "white" }} />
                    </FormControl>
                </Grid>
                <Grid container justifyContent={"center"} gap={1}>
                    <Button item variant='mainButton' sx={{ width: "325px" }}> <Typography variant='button'>register</Typography> </Button>
                    <Typography item variant="hsubtitle1" textAlign={"center"} >Already have an account ?<a href='/' >Sign in</a> </Typography>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Register