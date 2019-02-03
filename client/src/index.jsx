import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      repos: []
    }

  }


  func (err) {
    if (err) {
      throw ("erororor");
    } else {
      console.log('stuff');
    }
  }
  search (term) {
    console.log(`${term} was searched`);
    // TODO
    // $.post('/repos', JSON.stringify({
    //   data: "term"
    // }), function (err) {
    //   console.log("uo");
    //   if (err) {
    //     throw('error!!!!!!!!!');
    //   } else {
    //     return;
    //   }
    // })
    $.post({
      url: '/repos',
      type: 'POST',
      contentType: 'application/json',
      data: JSON.stringify({"stuff": "morestuff"}),
      success: () => (this.func(null)),
      error: (err) => (this.func(err))
    })    
  }


//   $.post({
//     url: '/repos',
//     type: 'POST',
//     contentType: 'application/json',
//     data: JSON.stringify(term),
//     success: () => (console.log("ox")),
//     error: (err) => (console.log("not Ox"))
//   })
// }
  render () {
    return (<div>
      <h1>Github Fetcher</h1>
      <RepoList repos={this.state.repos}/>
      <Search onSearch={this.search.bind(this)}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));