import React from "react";

class MyComponent extends React.Component {
  state = {
    name: "John Doe"
  };

  handleOnChangeName = (event) => {
    this.setState({ name: event.target.value })
  }

  handleOnClick = () => { alert("Clicked!") }

  render() {
    return(
      <> 
        <div className="first">
          <input type="text" value={this.state.name} onChange={(event)=>this.handleOnChangeName(event)}/>
        </div>
        <div className="second">Hello, {this.state.name} </div>
        <div className="third">
          <button onClick={()=>this.handleOnClick()}>Click me!</button>  
        </div>
      </> 
    )
  }
}
export default MyComponent;