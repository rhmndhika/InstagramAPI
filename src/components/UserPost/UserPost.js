import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import './UserPost.css'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';







 

 function UserPost1 () {
    const [post, setPost] = useState([]); 

    const key = '618479acc2ef5ba8018516ac'
   
    
 
    useEffect(() =>{
        axios.get('https://dummyapi.io/data/v1/post', { headers: { 'app-id': key } })
        .then(res => {
            setPost(res.data.data)
            // console.log(res)
        })
        .catch(err =>{
            console.log(err)
        })
    },[]);
    
    return(
        <div>
        <div className="Post-style">
        {post.map(post =>(
           
            <Box sx={{ flexGrow: 1, marginTop: 0 }}>
        <Grid container rowSpacing={0} columnSpacing={{ xs: 1, sm: 2, md: 6, lg: 4 }}  >
            <Grid 
                container
                direction="row"
                justifyContent="center">
                <Grid item xs={4} sm={4} md={2} lg={4} xl={4}>
                <div className="card-Style">
                <Card sx={{ width: 355}}  >
                        <CardHeader
                        avatar={
                            <Avatar 
                            src={post.owner.picture}
                            />
                        }
                            title={post.owner.firstName + " " + post.owner.lastName}
                            subheader={post.publishDate}
                            />
                    <CardMedia
                        component="img"
                        height="194"
                        image={post.image}
                        alt="Paella dish"
                        backgroundcolor="blue"
                        />
                    <CardContent style={{textAlign: "center"}}>
                        <Typography variant="body2" color="text.secondary">
                        {post.text}
                        <br></br>
                        <div style={{display: "flex" ,textAlign: "center"}}>
                        <FavoriteBorderIcon/>  
                            <p style={{marginTop: 3}}> {post.likes} </p>
                        </div>
                        <br></br>
                        <div>
                        {"#" +  post.tags[0] + " " + "#" + post.tags[1] + " " + "#" + post.tags[2]}
                       </div>
                        </Typography>
                        
                    </CardContent>
                </Card>
                </div>
            </Grid>
            </Grid>
        </Grid>
        </Box>
        ))}
        </div>
    </div>
    )
}

export default UserPost1;

