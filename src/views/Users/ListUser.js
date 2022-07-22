import React from "react";
import axios from "axios";
import {withRouter} from "react-router-dom"
import './ListUser.scss'

class ListUser extends React.Component{
    state={
        listUsers: []
    }
    viewDetailUser=(user)=>{
        this.props.history.push(`user/${user.id}`)
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
                                <div className="child" onClick={()=>this.viewDetailUser(item)}>
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

export default withRouter(ListUser);