import React from 'react';
import Header from '../components/header';
import AppContext from '../lib/app-context';
import Goals from '../components/goals';

export default class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      profileDetails: true,
      goals: []
    };
  }

  componentDidMount() {
    fetch('/api/users', {
      headers: {
        'X-Access-Token': this.context.token
      }
    })
      .then(res => res.json())
      .then(result => {
        const details = result[0];
        if (details.currentWeight || details.userName || details.profilePictureUrl) {
          this.setState({
            userName: details.userName,
            profilePictureUrl: details.profilePictureUrl,
            currentWeight: details.currentWeight
          });
        } else {
          this.setState({
            profileDetails: false
          });
        }
      })
      .catch(err => console.error(err));
  }

  render() {
    const personalInfoClass = (this.state.profileDetails)
      ? 'row mt-3'
      : 'd-none';
    const createProfileClass = (this.state.profileDetails)
      ? 'd-none'
      : 'row mt-3 text-center';
    return (
      <>
      <Header noButtons="true" />
      <div className="container">
        <div className={personalInfoClass}>
          <div className="col">
            <img src={this.state.profilePictureUrl} className="w-100 rounded" />
          </div>
          <div className="col">
            <p className="text-white fs-4">{this.state.userName}</p>
            <p className="text-white">Current Weight: {this.state.currentWeight}</p>
            <a className="text-decoration-none" href="#createProfile" heading="Edit Profile"><p className="text-start green-text">Edit Profile</p></a>
          </div>
        </div>
        <div className={createProfileClass}>
            <a className="text-decoration-none" href="#createProfile"><h3 className="green-text">Create Profile</h3></a>
        </div>
        <Goals />
          <div className="pop-out-colors d-flex justify-content-evenly text-center my-3 w-75 py-3 position-fixed bottom-0 start-50 translate-middle-x">
            <a href="#profile"><i className="fas col mx-4 fa-user green-text fs-1"></i></a>
            <a href="#"><i className="fas mx-4 col fa-dumbbell green-text fs-1"></i></a>
            <a href="#journal"><i className="fas col mx-4 fa-book green-text fs-1"></i></a>
          </div>
      </div>
      </>
    );
  }
}

Profile.contextType = AppContext;
