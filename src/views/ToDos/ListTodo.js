import React from "react";

class ListTodo extends React.Component{
    state = {
        listTodos: [
            {id: 'todo1', name: 'Learn ReactJS', isDone: false},
            {id: 'todo2', name: 'Learn NodeJS', isDone: false},
            {id: 'todo3', name: 'Seft-Learning', isDone: false},
        ]
    }
    render(){
        let {listTodos} = this.state;
        return(
            <>
                <div className="list-todo-container">
                    <div className="add-todo">
                        <input type="text" placeholder="Add To Do" />
                        <button type="button">Add</button>    
                    </div>
                    
                    <div className="list-todo-content">
                        <div className="todo-child">
                            <span>To do 1</span>
                            <button>Edit</button>
                            <button>Delete</button>
                        </div>
                        <div className="todo-child">
                            <span>To do 1</span>
                            <button>Edit</button>
                            <button>Delete</button>
                        </div>
                        <div className="todo-child">
                            <span>To do 1</span>
                          r  <button>Edit</button>
                            <button>Delete</button>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default ListTodo;