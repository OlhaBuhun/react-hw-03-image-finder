import { Component } from "react";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Searchbar from "./Searchbar/Searchbar";

class App extends Component {

  state = {
    name: '',
  }

  handleFormSubmit = name => {
    console.log(name);

    this.setState({name});
  }

  render() {
    return (
      <div
        // style={{
        //   height: '100vh',
        //   display: 'flex',
        //   justifyContent: 'center',
        //   alignItems: 'center',
        //   fontSize: 40,
        //   color: '#010101'
        // }}
      >
        <Searchbar onSubmit={this.handleFormSubmit}/>
        <ToastContainer autoClose={3000} />
      </div>
    );
  }
 
};

export default App;