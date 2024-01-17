import { Component } from "react";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class Searchbar extends Component {
  state = {
    name: '',
  }

  handleNameChange = event => {
    this.setState({name: event.currentTarget.value.toLowerCase()})
  }

  handleSubmit = event => {
    event.preventDefault();

    if(this.state.name.trim() === ''){
      // alert('Щось напиши');
      toast.error('Щось напиши');
      return;
    }

    this.props.onSubmit(this.state.name);
    this.setState({name: ''});
  }
  

  render() {
    return (
      <header >
        <form  onSubmit={this.handleSubmit}>
          <button type="submit" >
            <span >Search</span>
          </button>

          <input
            type="text"
            // autocomplete="off"
            // autofocus
            placeholder="Search images and photos"
            name="name"
            value={this.state.name}
            onChange={this.handleNameChange}
          />
        </form>
      </header>
    )
  }

}

export default Searchbar;