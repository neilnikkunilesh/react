import React, { Component } from 'react';

class Test extends Component {
  state = {
    title: 'Test state',
    body: '',
  };
  /*
        componentDidMount() is invoked immediately after a component
        is mounted (inserted into tree).
        If you need to load data from a remote endpoint,
        this is a good place to instantiate the network request.
    */
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then((response) => response.json())
      .then((data) => this.setState({
          title: data.title,
          body: data.body
      })
        
      );
  }

  render() {
      const { title, body} = this.state;
    return (
      <div>
        <h1>{title}</h1>
        <p>{body}</p>
      </div>
    );
  }
}

export default Test;
