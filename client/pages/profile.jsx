import React from 'react';
import Header from '../components/header';

class Profile extends React.Component {
  render() {
    return (
      <>
      <Header noButtons="true" />
      <div className="container">
        <div className="row mt-3 vh-25">
          <div className="col">
            <img src="/images/profilePictureUrl-1609821856305.jpeg" className="w-100 rounded" />
          </div>
          <div className="col">
            <p className="text-white fs-4">Rachel Beacham</p>
            <p className="text-white">Current Weight: 120</p>
          </div>
        </div>
        <div className="row mt-3">
          <form>
            <label htmlFor="goals" className="text-white fs-3 me-3">Goals:</label>
            <input type="text" placeholder="Add a new goal" className="gray-text ps-3 w-50 me-3 pop-in-colors"></input>
            <button type="submit" className="green-button py-1 px-3">ADD</button>
          </form>
        </div>
        <div className="pop-out-colors overflow-scroll mt-3 vh-20">

        </div>
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

export default Profile;
