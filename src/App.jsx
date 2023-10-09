import React from "react";
import ToDo from "./Components/ToDo";

class App extends React.Component {
  render() {
    const containerStyles = {width: "90%", margin: "auto"}
    return (
      <div style={containerStyles}>
    <h1>Hello React.js</h1>
    <ToDo />
    </div>
    )
    
  }
}

export default App;
