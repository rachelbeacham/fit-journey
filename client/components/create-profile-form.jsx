import React from 'react';
import Header from './header';

class CreateProfileForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: 1
    };
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
    <Header heading="Create Profile" button="Back" />
    <div className="container">
      <div className="row">
        <div className="col d-flex justify-content-center">
          <div className="pop-out-colors d-flex align-items-center justify-content-center h-90 w-90 mt-3">
            <p className="gray-text fs-3 oregano">Profile Picture</p>
          </div>
        </div>
        <div className="col flex-column justify-content-center">
          <form>
            <input type="text" name="name" onChange={this.handleChange}
             className="pop-in-colors gray-text my-3 px-3 w-100 d-block" placeholder="Name"/>
            <input type="number" name="currentWeight" onChange={this.handleChange}
             className="pop-in-colors gray-text px-3 my-3 w-100 d-block" placeholder="Current Weight" />
            <button type="submit"
                  className="green-button w-75 fs-2 py-2 position-fixed bottom-0 start-50 translate-middle-x mb-3 text-center">
                  Save
            </button>
          </form>
        </div>
        <div className="row mt-2">
          <p className="green-text mx-2 fs-3">Change Picture</p>
        </div>
      </div>
    </div>
    </>
    );
  }
}

export default CreateProfileForm;
