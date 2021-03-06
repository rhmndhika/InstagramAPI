import React, {  Component } from 'react'
import axios from 'axios'
import './Detail.css'
import Moment from 'moment';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';



const BASE_URL = "https://dummyapi.io/data/v1";
const key = '618479acc2ef5ba8018516ac'

class Detail extends Component {
    state = {
        data: [],
        id: "",
        dataPost: [],  
    };

    handleData = (X) => {
        axios
            .get(`${BASE_URL}/user/${X}`, { headers: { "app-id": key } })
            .then((res) => {
                this.setState({ data: res.data });
                console.log(res.data);
            })
            .catch(console.error);
    };

    handleDataPost = (X) => {
        axios
            .get(`${BASE_URL}/user/${X}/post`, { headers: { "app-id": key } })
            .then((res) => {
                this.setState({ dataPost: res.data.data });
            })
            .catch(console.error);
    };

    componentDidMount() {
        this.handleData(this.props.match.params.id);
        this.handleDataPost(this.props.match.params.id);
        console.log(this.props);
    
    }

    render() {
        return (
            <div className='wrapperz'>

            <div class="projcard-container">
            <div class="projcard projcard-blue">
              <div class="projcard-innerbox">
                <img class="projcard-img" src={this.state.data.picture} />
                <div class="projcard-textbox">
                  <div class="projcard-title">Profile</div>
                  <div class="projcard-bar"></div>
                  <div class="projcard-description">
                    <p>Name : {this.state.data.firstName} {this.state.data.lastName} </p>
                    <p>Gender : {this.state.data.gender}</p>
                    <p>Date of Birth : {Moment(this.state.data.dateOfBirth).format('MMMM Do, YYYY')}</p>
                    <p>Email : {this.state.data.email}</p>
                    <p>Phone : {this.state.data.phone}</p>
                  </div>
                </div>
              </div>
            </div>
            </div>

            <div className="Post-Style">
        {this.state.dataPost.map(post =>(
           
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
        );
    }
}


export default Detail;



