import React from "react";
import AddTask from "./AddTask/AddTask";

class ToDo extends React.Component {
    onChange = (e) => {
        console.log(e.target.value);
    }
    render() {
        console.log(this.props);
        return <div style={{width: "90%", margin: "auto"}}>
        <h1>ToDo</h1>
        <AddTask onChange={this.onChange} />
        </div> 
    }
}

export default ToDo;