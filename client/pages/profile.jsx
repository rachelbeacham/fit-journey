import React from 'react';
import Header from '../components/header';
import AppContext from '../lib/app-context';
import Goals from '../components/goals';
import NavBar from '../components/nav-bar';

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
        const { currentWeight, userName, profilePictureUrl } = result;
        if (currentWeight || userName || profilePictureUrl) {
          this.setState({
            userName,
            profilePictureUrl,
            currentWeight
          });
        } else {
          this.setState({
            profileDetails: false
          });
        }
      })
      .catch(err => console.error(err));
  }

  renderProfilePicture() {
    if (this.state.profilePictureUrl) {
      return (
        <img src={this.state.profilePictureUrl} className="rounded img-fluid" />
      );
    } else {
      return (
        <div className="pop-out-colors d-flex align-items-center justify-content-center h-90 w-100">
          <p className="gray-text fs-3 oregano">Profile Picture</p>
        </div>
      );
    }
  }

  render() {
    const personalInfoClass = (this.state.profileDetails)
      ? 'row mt-3 d-flex justify-content-center'
      : 'd-none';
    const createProfileClass = (this.state.profileDetails)
      ? 'd-none'
      : 'row mt-3 text-center';
    return (
      <>
      <NavBar />
      <Header button="Sign Out" onClick={this.context.handleSignOut} />
      <div className="container">
        <div className={personalInfoClass}>
            <div className="col">
            {this.renderProfilePicture()}
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
        <div className="d-flex mt-3 justify-content-center">
          <button className="green-button py-1 px-3">View Favortie Exercises</button>
        </div>
          <div className="pop-out-colors d-flex d-none-lg justify-content-around text-center mt-3 w-100 py-3 position-absolute bottom-0 start-50 translate-middle-x">
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
