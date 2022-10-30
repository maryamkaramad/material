import React from 'react'
import { Button, Grid, Typography } from '@mui/material';
import elipse from '../assets/img/elipse.png'
import Group from '../assets/img/Group 6.png'
const Home = () => {
    return (
        <Grid container width={"100%"} gap={50}>
            <img src={elipse} alt="" width={"300px"} height={"271px"} />
            <Grid container item justifyContent={"center"} flexDirection={"column"} width={"375px"} height={"819px"} alignItems={"center"} gap={8}>
                <img item src={Group} alt="" width={"170px"} height={"170px"} />
                <Typography item variant="h1"> Gets things done with TODo</Typography>
                <Typography item variant='subtitle1' textAlign={"center"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in volutpat, tristique lacinia ut. Elementum non turpis nullam ipsum.</Typography>
                <Button item variant='mainButton' sx={{ width: "325px" }}> <Typography variant='button'>Get Started</Typography> </Button>
            </Grid>
        </Grid>
    )
}

export default Home