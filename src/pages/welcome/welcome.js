import React from 'react'
import { Grid, Typography, Avatar } from '@mui/material';

import elipse from '../../assets/img/elipse.png'

import Ellipse from '../../assets/img/Ellipse 17.png'
import clock from '../../assets/img/clock.png'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import CommentIcon from '@mui/icons-material/Comment';



const Welcome = () => {
    const [checked, setChecked] = React.useState([0]);

    const handleToggle = (value) => () => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        setChecked(newChecked);
    };
    return (
        <Grid container width={"100%"}  >
            <Grid bgcolor={"primary.main"} item width={"100%"} height={270} container>
                <img item src={elipse} alt="" width={"300px"} height={"271px"} /></Grid>
            <Grid container justifyContent={"center"} >
                <Grid item container bgcolor={"primary.main"} width={"100%"} height={150} flexDirection={"column"} justifyContent={"space-around"} alignContent={"space-around"} alignItems={"center"}>
                    <Avatar item alt="Olina Grace" src={Ellipse} sx={{ width: 100, height: 100 }} />
                    <Typography item color={"white"} variant='subtitle2'> Welcome Olina Grace</Typography>
                </Grid  >
                <Grid item container width={300} justifyContent={"flex-end"}>
                    <Typography variant='h6' item >
                        Good Afternoon
                    </Typography></Grid>
                <Grid container justifyContent={"center"} mt={"16px"}>
                    <img item src={clock} alt="" width={"120px"} height={"120px"} />
                </Grid>
                <Grid>
                    <Grid item container width={300} justifyContent={"flex-start"}>
                        <Typography variant='h6' item >
                            Task List
                        </Typography ></Grid>
                    <Grid item container bgcolor={"white"} width={325} height={270} >
                        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                            {[0, 1, 2, 3].map((value) => {
                                const labelId = `checkbox-list-label-${value}`;

                                return (
                                    <ListItem
                                        key={value}
                                        secondaryAction={
                                            <IconButton edge="end" aria-label="comments">
                                                <CommentIcon />
                                            </IconButton>
                                        }
                                        disablePadding
                                    >
                                        <ListItemButton role={undefined} onClick={handleToggle(value)} dense>
                                            <ListItemIcon>
                                                <Checkbox
                                                    edge="start"
                                                    checked={checked.indexOf(value) !== -1}
                                                    tabIndex={-1}
                                                    disableRipple
                                                    inputProps={{ 'aria-labelledby': labelId }}
                                                />
                                            </ListItemIcon>
                                            <ListItemText id={labelId} primary={`Line item ${value + 1}`} />
                                        </ListItemButton>
                                    </ListItem>
                                );
                            })}
                        </List>

                    </Grid>
                </Grid>
            </Grid>

        </Grid>
    )
}

export default Welcome