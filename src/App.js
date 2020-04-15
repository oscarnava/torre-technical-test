import React from 'react';
import fetchUserInfo from './services/userInfo';

export default class App extends React.Component {
  componentDidMount() {
    console.log('componentDidMount');

    const info = fetchUserInfo('ana-maria-diaz');
    info.then((json) => {
      console.log(json);
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
