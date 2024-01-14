import { Component } from "react";
import Searchbar from "./Searchbar/Searchbar";

class App extends Component {

  handleFormSubmit = data => {
    console.log(data);
  }

  render() {
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101'
        }}
      >
        <Searchbar onSubmit={this.handleFormSubmit}/>
      </div>
    );
  }
 
};

export default App;