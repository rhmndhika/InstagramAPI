import React, {useEffect, useState} from 'react'
import axios from 'axios';
import {Link} from 'react-router-dom'
import './UserList.css'
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';


function UserList () {
   

    const key = '618479acc2ef5ba8018516ac'
    const url = 'https://dummyapi.io/data/v1/user'

    const [user, setUser] = useState([]);
 

    useEffect(() =>{
        axios.get(url, { headers: { 'app-id': key } })
        .then(res => {
            setUser(res.data.data)
            console.log(res);
        })
        .catch(err =>{
            console.log(err)
        })
    },[]);
   

    return(
        <div className="test">
            {user.map(user =>(
                <div className="user-List">
                <Grid container rowSpacing={1} columns={{ xs: 4, sm: 8, md: 12 }} direction="row"
                justifyContent="center"
                alignItems="center"
                >
                <Grid item xs={12} md={12} sm={12} lg={12}>
                <Card sx={{ display: 'flex' }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <CardContent sx={{ flex: '1 0 auto' }}>
                    <Typography component="div" variant="h5">
                        {user.title + " " + user.firstName + " " + user.lastName}
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary" component="div">
                        <p>ID : {user.id}</p>
                    </Typography>
                    </CardContent>
                    <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
                    
                    <IconButton aria-label="play/pause">
                    <Link to={`/detail/${user.id}`} style={{ textDecoration: 'none'}} >
                        <Button>View Profile</Button>    
                    </Link>
                    </IconButton>
                    </Box>
                </Box>
                
                <CardMedia
                    component="img"
                    sx={{ width: 151 }}
                    image={user.picture}
                    alt="Profile picture"
                />
                </Card>
                </Grid>
                </Grid>
                 </div>
            ))}
        </div>
    )
}


export default UserList;