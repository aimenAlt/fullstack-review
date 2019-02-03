import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ''
    }
    //Go in depth why we have to do the 2 lines below and ...
    // ... ask jordan again why there are 2 different this' on this file
    this.onChange = this.onChange.bind(this);
    this.search = this.search.bind(this);
    // The reason is that we want to litterally bind the ...
    // function with "this" of this class' instance. "this" being the instance we ...
    // created with this class. We do this so that when these functions are called ...
    // they will use this class' instance instead of the function being called ...
    // somewhere different where "this" is not going to be the instance we created
  }
//e is for event
  onChange (e) {
    this.setState({
      term: e.target.value
    });
  }

  search() {
    this.props.onSearch(this.state.term);
  }

  //changing 'this.state.terms' to 'this.state.term' below.
  render() {
    return (<div>
      <h4>Add more repos!</h4>
      Enter a github username: <input value={this.state.term} onChange={this.onChange}/>       
      <button onClick={this.search}> Add Repos </button>
    </div>) 
  }
}

export default Search;