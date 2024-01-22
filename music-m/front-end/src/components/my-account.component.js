import React, { Component, useRef } from "react";
import UserService from "../services/user.service";
import AuthService from "../services/auth.service";
import { withRouter } from "../common/with-router";
import BlankProfile from "../assets/blank-profile.jpeg";
import { Col, Row } from "react-bootstrap";

class MyAccount extends Component {
  constructor(props) {
    super(props);
    this.handleUpdateDetails = this.handleUpdateDetails.bind(this);
    this.onChangeFirstName = this.onChangeFirstName.bind(this);
    this.onChangeLastName = this.onChangeLastName.bind(this);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangeAddress = this.onChangeAddress.bind(this);
    this.logOut = this.logOut.bind(this);

    this.uploadedImage = React.createRef();
    this.imageUploader = React.createRef();

    const user = AuthService.getCurrentUser();
    this.state = {
      id: user ? user.id : null,
      firstName: user ? user.firstName : "",
      lastName: user ? user.lastName : "",
      username: user ? user.username : "",
      email: user ? user.email : "",
      address: user ? user.address : "",
      isDetailsFormVisible: false,
      isModalOpen: false,
    };
  }

  handleImageUpload = (e) => {
    const [file] = e.target.files;
    if (file) {
      const reader = new FileReader();
      const { current } = this.uploadedImage;
      current.file = file;
      reader.onload = (e) => {
        current.src = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  };

  handleUpdateDetails(event) {
    event.preventDefault();
    const userDetails = {
      id: this.state.id,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      username: this.state.username,
      email: this.state.email,
      address: this.state.address,
    };

    // Call the update method of the UserService
    UserService.update(userDetails)
      .then((response) => {
        // Handle successful update
        console.log("Account details updated successfully!");
        this.openModal(); // Show success modal
      })
      .catch((error) => {
        // Handle error during update
        console.error("Failed to update account details:", error);
      });
  }

  openModal() {
    this.setState({ isModalOpen: true });
  }

  closeModal() {
    this.setState({ isModalOpen: false });
  }

  onChangeFirstName(event) {
    this.setState({ firstName: event.target.value });
  }

  onChangeLastName(event) {
    this.setState({ lastName: event.target.value });
  }

  onChangeUsername(event) {
    this.setState({ username: event.target.value });
  }

  onChangeEmail(event) {
    this.setState({ email: event.target.value });
  }

  onChangeAddress(event) {
    this.setState({ address: event.target.value });
  }

  logOut() {
    try {
      AuthService.logout();
      this.setState({ user: undefined });
      this.props.router.navigate("/");
      window.location.reload();
    } catch (e) {
      console.error("Error occurred during logout:", e);
    }
  }

  render() {
    const {
      isDetailsFormVisible,
      firstName,
      lastName,
      username,
      email,
      address,
      isModalOpen, // New state property for controlling modal visibility
    } = this.state;

    return (
      <>
        <div className="container mt-5">
          <div className="row">
            <div className="col-3">
              <h6 className="fw-bold">MY ACCOUNT</h6>
              <ul className="list-group list-group-flush">
                <li
                  className="list-group-item fw-semibold text-secondary custom-link"
                  onClick={() => this.setState({ isDetailsFormVisible: true })}
                  data-test="account-details"
                >
                  Account Details
                </li>
                <li className="list-group-item fw-semibold text-secondary custom-link">
                  Orders
                </li>
                <li className="list-group-item fw-semibold text-secondary custom-link">
                  Wishlist
                </li>
                <li className="list-group-item fw-semibold text-secondary custom-link">
                  Reset Password
                </li>
                <li
                  className="list-group-item fw-semibold text-secondary custom-link"
                  onClick={this.logOut}
                >
                  Logout
                </li>
              </ul>
            </div>

            {isDetailsFormVisible && (
              <div className="col ms-5 p-5 update-bg rounded mb-5">
                <form onSubmit={this.handleUpdateDetails}>
                  <Row className="align-items-end mb-4">
                    <Col
                      onClick={() => this.imageUploader.current.click()}
                      className="mb-2"
                    >
                      <img
                        ref={this.uploadedImage}
                        style={{
                          width: "150",
                          height: "150",
                        }}
                        src={BlankProfile}
                        alt="profile-pic"
                      />
                    </Col>
                    <Col xs={8}>
                      <input
                        type="file"
                        accept="image/*"
                        multiple="false"
                        onChange={this.handleImageUpload}
                        ref={this.imageUploader}
                      />
                    </Col>
                  </Row>

                  <div className="col">
                    <h3 className="mb-3">Account Details</h3>
                    <div className="mb-3">
                      <label htmlFor="firstNameInput" className="form-label">
                        First Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="firstNameInput"
                        value={firstName}
                        onChange={this.onChangeFirstName}
                        data-test="first-name"
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="lastNameInput" className="form-label">
                        Last Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="lastNameInput"
                        value={lastName}
                        onChange={this.onChangeLastName}
                        data-test="last-name"
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="usernameInput" className="form-label">
                        Username
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="usernameInput"
                        value={username}
                        onChange={this.onChangeUsername}
                        data-test="username"
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="emailInput" className="form-label">
                        Email
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="emailInput"
                        value={email}
                        onChange={this.onChangeEmail}
                        data-test="email"
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="addressInput" className="form-label">
                        Address
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="addressInput"
                        value={address}
                        onChange={this.onChangeAddress}
                        data-test="address"
                      />
                    </div>
                    <button
                      type="submit"
                      className="btn btn-dark text-light mt-3"
                      data-test="update-button"
                    >
                      Update
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
        {/* Success Modal */}
        {isModalOpen && (
          <div
            className="modal show d-block"
            tabIndex="-1"
            role="dialog"
            aria-labelledby="successModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="successModalLabel">
                    Success
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-dismiss="modal"
                    aria-label="Close"
                    onClick={() => this.closeModal()}
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  Your account details have been successfully updated.
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-dark text-light"
                    onClick={() => this.closeModal()}
                  >
                    OK
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </>
    );
  }
}

export default withRouter(MyAccount);
