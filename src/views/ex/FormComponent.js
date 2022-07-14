import React from "react";

class FormComponent extends React.Component {
    state = {
        firstName: "",
        lastName: ""
    }

    handleChangeFirstName = (event) => { this.setState({ firstName: event.target.value})}
    handleChangeLastName = (event) => {this.setState({ lastName: event.target.value})}
    handleClick = (event) => {
        event.preventDefault();
         alert(`Hello ${this.state.firstName} ${this.state.lastName}`)}

    render() {
        return (
                <>
                <form>
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
                    <button type="submit" onClick={(event)=>this.handleClick(event)}>Submit</button>
                </form> 
            </>
        )
    }
}

export default FormComponent;