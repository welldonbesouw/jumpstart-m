import React, { Component } from "react";
import PlayingPiano from "../assets/playing-piano.jpg";
import MusicService from "../services/music.service";
import { BsFacebook, BsTwitter, BsInstagram, BsLinkedin } from "react-icons/bs";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import Select from "react-validation/build/select";

const required = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};

class Enroll extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onChangeFullName = this.onChangeFullName.bind(this);
    this.onChangeAge = this.onChangeAge.bind(this);
    this.onChangePhoneNumber = this.onChangePhoneNumber.bind(this);
    this.onChangeInstrument = this.onChangeInstrument.bind(this);
    this.onChangeDelivery = this.onChangeDelivery.bind(this);

    this.state = {
      fullName: "",
      age: "",
      phoneNumber: "",
      instrument: "",
      delivery: "",
      message: "",
      enrollmentCompleted: false,
    };
  }

  onChangeFullName(e) {
    this.setState({
      fullName: e.target.value,
    });
  }

  onChangeAge(e) {
    this.setState({
      age: e.target.value,
    });
  }

  onChangePhoneNumber(e) {
    this.setState({
      phoneNumber: e.target.value,
    });
  }

  onChangeInstrument(e) {
    this.setState({
      instrument: e.target.value,
    });
  }

  onChangeDelivery(e) {
    this.setState({
      delivery: e.target.value,
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      message: "",
    });

    this.form.validateAll();

    const enrollDetails = {
      fullName: this.state.fullName,
      age: this.state.age,
      phoneNumber: this.state.phoneNumber,
      instrument: this.state.instrument,
      delivery: this.state.delivery,
    };

    if (this.checkBtn.context._errors.length === 0) {
      MusicService.enrollStudent(enrollDetails)
        .then((response) => {
          console.log("Enrollment successful:", response.data);
          this.setState({ enrollmentCompleted: true });
          // Handle successful enrollment, e.g., show success message, redirect, etc.
        })
        .catch((error) => {
          console.log("Error enrolling student:", error);
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();

          this.setState({
            message: resMessage,
          });
        });
    }
  };

  render() {
    const { enrollmentCompleted } = this.state;
    return (
      <>
        <div className="container mt-5">
          <div className="row">
            <div className="col-6">
              {/* Enroll Form */}
              {enrollmentCompleted ? (
                <div className="alert alert-success">
                  CONGRATULATIONS! You have successfully enrolled into Jumpstart
                  Music School. Please wait for our team to contact you, then
                  you can start your music journey. Have fun!
                </div>
              ) : (
                <>
                  <h3 className="fw-semibold mb-4">Enrollment Form</h3>
                  <Form
                    onSubmit={this.handleSubmit}
                    className="pe-5"
                    ref={(c) => {
                      this.form = c;
                    }}
                  >
                    <div className="mb-3">
                      <label htmlFor="fullName" className="form-label">
                        Full Name:
                      </label>
                      <Input
                        type="text"
                        className="form-control"
                        id="fullName"
                        name="fullName"
                        value={this.state.fullName}
                        onChange={this.onChangeFullName}
                        validations={[required]}
                        data-test="school-fullname"
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="age" className="form-label">
                        Age:
                      </label>
                      <Input
                        type="number"
                        className="form-control"
                        id="age"
                        name="age"
                        value={this.state.age}
                        onChange={this.onChangeAge}
                        validations={[required]}
                        data-test="school-age"
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="phoneNumber" className="form-label">
                        Phone Number:
                      </label>
                      <Input
                        type="text"
                        className="form-control"
                        id="phoneNumber"
                        name="phoneNumber"
                        value={this.state.phoneNumber}
                        onChange={this.onChangePhoneNumber}
                        validations={[required]}
                        data-test="school-phone-number"
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="instrument" className="form-label">
                        Instrument:
                      </label>
                      <Select
                        className="form-select"
                        id="instrument"
                        name="instrument"
                        value={this.state.instrument}
                        onChange={this.onChangeInstrument}
                        validations={[required]}
                        data-test="school-instrument"
                      >
                        <option value="">Select an Instrument</option>
                        <option value="Piano">Piano</option>
                        <option value="Guitar">Guitar</option>
                        <option value="Drum">Drum</option>
                        <option value="Bass">Bass</option>
                        <option value="Cello">Cello</option>
                        <option value="Keyboard">Keyboard</option>
                        <option value="Violin">Violin</option>
                        <option value="Saxophone">Saxophone</option>
                        <option value="Synthesizer">Synthesizer</option>
                      </Select>
                    </div>
                    <div className="mb-3">
                      <label htmlFor="deliveryMethod" className="form-label">
                        Delivery Method:
                      </label>
                      <Select
                        className="form-select"
                        id="deliveryMethod"
                        name="deliveryMethod"
                        value={this.state.delivery}
                        onChange={this.onChangeDelivery}
                        validations={[required]}
                        data-test="school-method"
                      >
                        <option value="">Select delivery method</option>
                        <option value="inPerson">In-person</option>
                        <option value="online">Online</option>
                      </Select>
                    </div>

                    <button
                      type="submit"
                      className="btn btn-dark text-light mt-3 mb-4 fw-bolder"
                      data-test="enroll-button-test"
                    >
                      Enroll
                    </button>
                    {this.state.message && (
                      <div className="form-group">
                        <div className="alert alert-danger" role="alert">
                          {this.state.message}
                        </div>
                      </div>
                    )}
                    <CheckButton
                      style={{ display: "none" }}
                      ref={(c) => {
                        this.checkBtn = c;
                      }}
                    />
                  </Form>
                </>
              )}

              <p className="lh-lg">
                If you have any query, please kindly contact us: <br />
                <strong>Phone:</strong> <br />
                021-4361234 <br />
                <strong>Email:</strong> <br />
                online@jumpstart.com <br />
                <strong>Social Media:</strong> <br />
                <BsFacebook className="mx-1" />
                <BsTwitter className="mx-1" />
                <BsInstagram className="mx-1" />
                <BsLinkedin className="mx-1" />
              </p>
            </div>
            <div className="col-6">
              <img
                src={PlayingPiano}
                width={540}
                alt="Playing piano"
                className="rounded"
              />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Enroll;
