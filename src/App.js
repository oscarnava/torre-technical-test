import React from 'react';
import fetchUserInfo from './services/userInfo';

export default class App extends React.Component {
  componentDidMount() {
    fetchUserInfo('ana-maria-diaz').then((info) => {
      console.log('componentDidMount', info);
    });
  }

  render() {
    return (
      <div className="App">
        <h1>Hello world</h1>
      </div>
    );
  }
}
