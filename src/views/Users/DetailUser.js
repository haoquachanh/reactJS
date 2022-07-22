import React from "react";
import {withRouter} from "react-router-dom"
import axios from "axios";

class DetailUser extends React.Component{
    state={
        user: {}
    }
    async componentDidMount(){
        let id=this.props.match.params.id;
        let res= await axios.get(`https://reqres.in/api/users/${id}`)
        this.setState({
            user: res&&res.data&&res.data.data ? res.data.data : {}
        })
    }

    handleClickBack=()=>{
        this.props.history.push('/user')
    }

    render(){
        let {user}= this.state
        let isEmpty=Object.keys(user).length===0   
        return(isEmpty===false&&
            <>
            <div>Detail of User have id: {this.props.match.params.id} </div>
            <div>User's name: {user.first_name} {user.last_name}</div>
            <div>User's mail: {user.email}</div>
            <div>User's image: <img src={user.avatar}></img></div>
            <button type="button" onClick={()=>this.handleClickBack()}>Back</button>
            </>
            )
    }
}

export default withRouter(DetailUser) ;