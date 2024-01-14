const { Component } = require("react");

class Searchbar extends Component {
  state = {
    name: '',
  }

  handleNameChange = event => {
    this.setState({name: event.currentTarget.value.toLowerCase()})
  }

  handleSubmit = event => {
    event.preventDefault();

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