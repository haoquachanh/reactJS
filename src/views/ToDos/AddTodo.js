import React from "react";
import { ToastContainer, toast } from 'react-toastify';

class AddTodo extends React.Component {
    state={
        titleName: ''
    }
    handleOnChangeTitle=(e)=>{
        this.setState({
            titleName: e.target.value
        })
    }

    handleAddTodo=(e)=>{
        if (!this.state.titleName) {toast.error('Please add a Todo'); return};
        let todo={
            id: Math.floor(Math.random()*1001),
            titleName: this.state.titleName
        }
        this.props.addNewTodo(todo)
        this.setState(
           { titleName:''}
        )
    }
    render(){
        let {titleName} =this.state
        return(
            <>
                <div className="add-todo">
                    <input type="text" placeholder="Add To Do" value={titleName} onChange={(e)=>this.handleOnChangeTitle(e)}/>
                    <button type="button" className="add" onClick={()=> this.handleAddTodo()}>Add</button>    
                </div>
            </>
        )
    }
}

export default AddTodo;