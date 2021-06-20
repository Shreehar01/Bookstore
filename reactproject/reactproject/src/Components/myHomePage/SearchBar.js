import React from 'react';
import { Input } from 'semantic-ui-react'
class SearchBar extends React.Component {
  state = { term: '' };

  onInputChange = event => {
    this.setState({ term: event.target.value });
  };

  onFormSubmit = event => {
    event.preventDefault();

    this.props.onFormSubmit(this.state.term);
  };

  render() {
    return (
      <form onSubmit={this.onFormSubmit}>
      <Input  value={this.state.term} onChange={this.onInputChange} fluid icon='search' placeholder='Search for any books by their subject name' />
      </form>
          );
  }
}

export default SearchBar;
