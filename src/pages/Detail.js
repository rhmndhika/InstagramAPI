import React, { useState, useEffect, Component } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom';



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
            <div>
                <h4 style={{marginTop: '150px'}}>{this.state.data.firstName + " " + this.state.data.lastName}</h4>
                <h4>{this.state.data.email}</h4>
            </div>
        );
    }
}


export default Detail;



