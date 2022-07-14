import React from "react";
import ChildComponent from "./ChildComponent";

class ParentComponent extends React.Component {
    state = {
        firstName: "",
        lastName: "",
        age:18
    }

    handleChangeFirstName = (event) => { this.setState({ firstName: event.target.value})}
    handleChangeLastName = (event) => {this.setState({ lastName: event.target.value})}
    handleChangeAge = (event) => {this.setState({ age: event.target.value})}
    handleClick = (event) => {
        event.preventDefault();
         alert(`Hello ${this.state.firstName} ${this.state.lastName}`)}
    
    render() {
        return (
                <>
                <label htmlFor="fname">First Name:</label> <br />
                    <input 
                        type="text" 
                        value={this.state.firstName} 
                        onChange = {(event) => this.handleChangeFirstName(event)} 
                    /> <br />

                    <label htmlFor="lname">Last Name:</label> <br />
                    <input 
                        type="text" 
                        value={this.state.lastName} 
                        onChange={(event)=> this.handleChangeLastName(event)} 
                    /> <br />

                    <label htmlFor="age">Age:</label> <br />
                    <input
                        type="number"
                        value={this.state.age}
                        onChange={(event)=> this.handleChangeAge(event)}
                    /> <br />
                    <button type="submit" onClick={(event)=>this.handleClick(event)}>Submit</button>
                <ChildComponent
                    name={this.state.firstName}
                    age={this.state.age}
                />
            </>
        )
    }
}

export default ParentComponent;