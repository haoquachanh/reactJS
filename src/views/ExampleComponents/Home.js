import React from "react";
import logo from '../../assets/img/logo.png'


class Home extends React.Component{
    render(){
        return(
            <>
            <div>Welcome Home Page!</div>
            <img src={logo} style={{height:'500px', width:'600px'}}/>
            </>
        )
    }
}

export default Home