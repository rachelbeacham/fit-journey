import React from 'react';
import AppContext from '../lib/app-context';
import Header from './header';

export default class CreateProfileForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      uploadModalOpen: false,
      userName: '',
      currentWeight: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleUpload = this.handleUpload.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  }

  componentDidMount() {
    const { token } = this.context;
    fetch('/api/users', {
      headers: {
        'X-Access-Token': token
      }
    })
      .then(res => res.json())
      .then(result => {
        const { userName, currentWeight, profilePictureUrl } = result;
        this.setState({
          userName,
          currentWeight,
          profilePictureUrl
        });
      })
      .catch(err => console.error(err));
  }

  handleClick() {
    this.setState({
      uploadModalOpen: !this.state.uploadModalOpen
    });
  }

  handleSubmit(e) {
    const token = this.context.token;
    e.preventDefault();
    const { userName, currentWeight } = this.state;
    const data = { userName, currentWeight };
    const req = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'X-Access-Token': token
      },
      body: JSON.stringify(data)
    };
    fetch('/api/users', req)
      .then(res => res.json())
      .catch(err => console.error(err));
    window.location.hash = 'profile';
  }

  handleUpload(e) {
    e.preventDefault();
    const token = this.context.token;
    const formData = new FormData(event.target);
    const req = {
      method: 'PATCH',
      body: formData,
      headers: {
        'X-Access-Token': token
      }
    };
    fetch('/api/users', req)
      .then(res => res.json())
      .then(result => {
        e.target.reset();
        this.setState({
          profilePictureUrl: result[0].profilePictureUrl
        });
      })
      .catch(err => {
        console.error(err);
      });
  }

  renderProfilePicture() {
    if (this.state.profilePictureUrl) {
      return (
        <img src={this.state.profilePictureUrl} className="rounded img-fluid" />
      );
    } else {
      return (
        <p className="gray-text fs-3 oregano">Profile Picture</p>
      );
    }
  }

  render() {
    const uploadModalClass = this.state.uploadModalOpen
      ? 'w-90 text-center pop-out-colors'
      : 'd-none';
    return (
    <>
    <Header heading="Profile Details" button="Back" href="#profile" />
    <div className="container d-flex flex-column justify-content-center align-items-center">
      <div className="row">
        <div className="col d-flex justify-content-center">
          <div className="pop-out-colors d-flex align-items-center justify-content-center h-90 w-100 mt-3">
            {this.renderProfilePicture()}
          </div>
        </div>
        <div className="col flex-column justify-content-center">
          <form onSubmit={this.handleSubmit}>
            <input type="text" name="userName" onChange={this.handleChange}
             className="pop-in-colors gray-text my-3 px-3 w-100 d-block" value={this.state.userName} placeholder="Name"/>
            <input type="number" name="currentWeight" onChange={this.handleChange}
             className="pop-in-colors gray-text px-3 my-3 w-100 d-block" value={this.state.currentWeight} placeholder="Current Weight" />
            <button type="submit"
                  className="green-button w-90 fs-2 py-2 position-absolute bottom-0 start-50 translate-middle-x mb-3 text-center">
                  Save
            </button>
          </form>
        </div>
        <div className="row mt-2">
          <p onClick={this.handleClick} className="text-start pointer green-text mx-2 fs-3">Change Picture</p>
        </div>
      </div>
      <div className={uploadModalClass}>
        <form onSubmit={this.handleUpload}>
          <div className="flex-column my-3 align-items-center justify-content-center">
            <input required type="file" name="profilePictureUrl" className="ms-4 gray-text" />
            <button type='submit' onClick={this.handleClick} className="green-button ps-1 fs-4 w-75">
              Upload
            </button>
          </div>
        </form>
      </div>
    </div>
    </>
    );
  }
}

CreateProfileForm.contextType = AppContext;
