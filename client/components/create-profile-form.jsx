import React from 'react';
import Header from './header';

class CreateProfileForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: 1,
      uploadModalOpen: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  }

  handleClick() {
    this.setState({
      uploadModalOpen: !this.state.uploadModalOpen
    });
  }

  handleSubmit() {
    const { name, currentWeight } = this.state;
    const data = { name, currentWeight };
    const req = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    };
    fetch(`/api/users/${this.state.userId}`, req)
      .then(res => res.json())
      .catch(err => console.error(err));
  }

  render() {
    const uploadModalClass = this.state.uploadModalOpen
      ? 'w-90 text-center pop-out-colors'
      : 'd-none';
    return (
    <>
    <Header heading="Create Profile" button="Back" />
    <div className="container d-flex flex-column justify-content-center align-items-center">
      <div className="row">
        <div className="col d-flex justify-content-center">
          <div className="pop-out-colors d-flex align-items-center justify-content-center h-90 w-90 mt-3">
            <p className="gray-text fs-3 oregano">Profile Picture</p>
          </div>
        </div>
        <div className="col flex-column justify-content-center">
          <form onSubmit={this.handleSubmit}>
            <input type="text" name="name" onChange={this.handleChange}
             className="pop-in-colors gray-text my-3 px-3 w-100 d-block" placeholder="Name"/>
            <input type="number" name="currentWeight" onChange={this.handleChange}
             className="pop-in-colors gray-text px-3 my-3 w-100 d-block" placeholder="Current Weight" />
            <button type="submit"
                  className="green-button w-90 fs-2 py-2 position-fixed bottom-0 start-50 translate-middle-x mb-3 text-center">
                  Save
            </button>
          </form>
        </div>
        <div className="row mt-2">
          <p onClick={this.handleClick} className="text-start green-text mx-2 fs-3">Change Picture</p>
        </div>
      </div>
      <div className={uploadModalClass}>
        <form onSubmit={this.handleSubmit}>
          <div className="flex-column my-3 align-items-center justify-content-center">
            <input onChange={this.handleChange} required type="file" name="profilePicture" className="ms-4 gray-text" />
            <button type="submit" className="green-button ps-1 fs-4 w-75">
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

export default CreateProfileForm;
