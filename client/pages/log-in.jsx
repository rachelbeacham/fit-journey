import React from 'react';
import Header from '../components/header';
import AppContext from '../lib/app-context';

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  }

  handleSubmit(e) {
    const { handleSignIn } = this.context;
    e.preventDefault();
    const req = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.state)
    };
    fetch('/api/sign-in', req)
      .then(res => res.json())
      .then(result => {
        if (result.user && result.token) {
          handleSignIn(result);
        }
      });
  }

  render() {
    return (
      <>
        <Header href="#" button="Back" heading="Login" />
        <div className="container text-center">
          <form onSubmit={this.handleSubmit}>
            <div className="row justify-content-center">
              <label htmlFor="username" className="my-1 w-75 fs-4 text-start text-white">Username</label>
              <input onChange={this.handleChange} required type="text" name="username"
                className="mb-3 gray-text w-75 pop-in-colors d-block"></input>
              <label htmlFor="password" className="my-1 w-75 fs-4 text-start text-white">Password</label>
              <input required onChange={this.handleChange} type="password" name="password"
                className="mb-3 w-75 gray-text pop-in-colors d-block"></input>
              <button type="submit"
                className="my-3 green-button w-75 fs-2 py-2 position-absolute bottom-0 start-50 translate-middle-x">
                Go
            </button>
            </div>
          </form>
        </div>
      </>
    );
  }
}

Login.contextType = AppContext;
