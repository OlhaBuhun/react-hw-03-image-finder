import { Component } from "react";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class Searchbar extends Component {
  state = {
    searchQueru: '',
  }

  handleNameChange = event => {
    this.setState({searchQueru: event.currentTarget.value.toLowerCase()})
  }

  handleSubmit = event => {
    event.preventDefault();

    if(this.state.searchQueru.trim() === ''){
      // alert('Щось напиши');
      toast.error('Щось напиши');
      return;
    }

    this.props.onSubmit(this.state.searchQueru);
    this.setState({searchQueru: ''});
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
            name="searchQueru"
            value={this.state.searchQueru}
            onChange={this.handleNameChange}
          />
        </form>
      </header>
    )
  }

}

export default Searchbar;