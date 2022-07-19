import React from "react";

class ChildComponent extends React.Component {
    render() {
        //console.log(this.props);
        let {name, age} = this.props;
        return (
                <>
                <div>
                    {name} is {age} years old
                </div>
            </>
        )
    }
}

export default ChildComponent;