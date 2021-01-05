import React from 'react';
import Header from '../components/header';

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <>
      <Header href="#" button="Back" heading="Sign Up" />
      <div className="container text-center">
        <form>
          <div className="row justify-content-center">
            <label htmlFor="email" className="my-1 w-75 fs-4 text-start text-white">Email</label>
            <input onChange={this.handleChange} required type="email" name="email"
              className="mb-3 gray-text w-75 pop-in-colors d-block"></input>
              <label htmlFor="username" className="my-1 w-75 fs-4 text-start text-white">Username</label>
            <input required onChange={this.handleChange} type="text" name="username"
              className="mb-3 w-75 gray-text pop-in-colors d-block"></input>
            <label htmlFor="password" className="my-1 fs-4 w-75 text-start text-white">Password</label>
            <input required onChange={this.handleChange} type="password" name="password"
              className="mb-3 w-75 gray-text pop-in-colors d-block"></input>
            <button type="submit"
                className="my-3 green-button w-90 fs-2 py-2 position-fixed bottom-0 start-50 translate-middle-x">
              Create Account
            </button>
          </div>
        </form>
      </div>
      </>
    );
  }
}

export default SignUp;
