import React, { Component } from 'react';
import Auth from './Auth.js';

const auth = new Auth();



class App extends Component {

  sign_user = () => {
    auth.login();
  };
  render() {
    return (
      <div>
        <h1>Welcome to Auth0 app</h1>

        <button onClick = {this.sign_user}>Click to sign in</button>
      </div>
    );
  }
}

export default App;