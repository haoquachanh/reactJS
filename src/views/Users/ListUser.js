import React from "react";
import axios from "axios";

class ListUser extends React.Component{
    state={
        listUsers: []
    }
    async componentDidMount(){

        // promise 
        // axios.get('https://reqres.in/api/users?page=1')
        // .then(res=> console.log(res))

        let res= await axios.get('https://reqres.in/api/users?page=1')
        this.setState({
            listUsers: res&&res.data&&res.data.data? res.data.data : []
        })
    }
    render(){
        let {listUsers}=this.state
        return(
            <div className="list-user-container">
                <div className="title">List User</div>
                <div className="list-user-content">
                    {listUsers&&listUsers.length>0 &&
                        listUsers.map((item,index)=>{
                            return(
                                <div className="child">
                                    {index+1} - {item.first_name} {item.last_name}
                                </div>
                            )
                        })
                        
                    }
                </div>
            </div>
        )
    }
}

export default ListUser;