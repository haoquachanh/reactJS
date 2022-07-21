import React from "react";
import './ListTodo.scss';
import AddTodo from "./AddTodo";
import { ToastContainer, toast } from 'react-toastify';

class ListTodo extends React.Component{
    state = {
        listTodos: [
            {id: 'todo1', titleName: 'Learn ReactJS'},
            {id: 'todo2', titleName: 'Learn NodeJS'},
            {id: 'todo3', titleName: 'Seft-Learning'},
        ],
        editTodo: {}
    }
    addNewTodo=(todo)=> {
        this.setState({
            listTodos:[...this.state.listTodos,todo]
        })
        toast.success('Success')
    }

    handleDeleteTodo=(todo)=>{
        this.setState({
            listTodos: this.state.listTodos.filter(item => item.id!==todo.id)
        })
        toast.success('Success')
    }

    handleEditTodo=(todo)=>{
        // save
        let {listTodos , editTodo}=this.state
        let listTodosCopy=[...listTodos]
        let isEmptyObj=Object.keys(editTodo).length===0;
        if (!isEmptyObj && todo.id===editTodo.id){
            let index=listTodosCopy.findIndex(item=>item.id===todo.id)
            listTodosCopy[index].titleName=editTodo.titleName
            console.log('>>> copy: ',listTodosCopy)
            console.log(this.state.listTodos)
            this.setState({
                
                editTodo:{}
            })
            return
        }

        // edit
        this.setState({
            editTodo: todo
        })
    }

    handleEditTodoTitle=(e)=>{
        let editTodoCopy={...this.state.editTodo}
        editTodoCopy.titleName=e.target.value;
        this.setState({
            editTodo: editTodoCopy
        })
    }
    render(){
        let {listTodos,editTodo} = this.state;
        let isEditing=!(Object.keys(editTodo).length===0);
        return(
            <div className="list-todo-container">                   
                <AddTodo addNewTodo={this.addNewTodo}/>
                <div className="list-todo-content">
                    {listTodos && listTodos.length>0 && 
                        listTodos.map((item, index)=>{
                            return (
                                <div className="todo-child" key={item.id}>
                                    {isEditing && editTodo.id===item.id?   
                                        // console.log("Editing...")                              
                                        <span>{index+1} - <input value={editTodo.titleName} onChange={(e)=>this.handleEditTodoTitle(e)}/> </span>
                                        :
                                        <span>{index+1} - {item.titleName} </span>
                                    }
                                    <button className="edit" onClick={()=>this.handleEditTodo(item)}>
                                        {isEditing && editTodo.id===item.id? 'Save': 'Edit'}
                                    </button>
                                    <button className="delete" onClick={()=>this.handleDeleteTodo(item)}>Delete</button>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

export default ListTodo;