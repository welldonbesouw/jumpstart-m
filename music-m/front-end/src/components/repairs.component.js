import React, { Component } from "react";
import Repair from "../assets/repairs.jpg";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import Textarea from "react-validation/build/textarea";
import CheckButton from "react-validation/build/button";
import MusicService from "../services/music.service";

const required = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};

class Repairs extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangePhoneNumber = this.onChangePhoneNumber.bind(this);
    this.onChangeInstrument = this.onChangeInstrument.bind(this);
    this.onChangeProblem = this.onChangeProblem.bind(this);

    this.state = {
      name: "",
      phoneNumber: "",
      instrument: "",
      problem: "",
      successful: false,
      message: "",
    };
  }

  onChangeName(e) {
    this.setState({
      name: e.target.value,
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

  onChangeProblem(e) {
    this.setState({
      problem: e.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    this.setState({
      message: "",
      successful: false,
    });

    this.form.validateAll();

    const repairDetails = {
      name: this.state.name,
      phoneNumber: this.state.phoneNumber,
      instrument: this.state.instrument,
      problem: this.state.problem,
    };

    if (this.checkBtn.context._errors.length === 0) {
      MusicService.repairRequest(repairDetails).then(
        (response) => {
          this.setState({
            message: response.data.message,
            successful: true,
          });
        },
        (error) => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();

          this.setState({
            successful: false,
            message: resMessage,
          });
        }
      );
    }
  }

  render() {
    return (
      <div>
        <section id="repairs">
          <div className="container">
            <div className="row">
              <div className="col mt-5 mx-2 mb-4">
                <img
                  src={Repair}
                  alt="Guitar repairs"
                  className="repair rounded"
                />
              </div>
              <div className="col mt-5 mx-2 mb-4">
                <h2>Repairs Service</h2>
                <p className="repair-para">
                  We provide repairs service for any kinds of music instrument.
                  Just come to our nearest store directly. Before coming to the
                  store, you can fill this form and we can inform you regarding
                  the cost estimation for the repair.
                </p>
                <Form
                  onSubmit={this.handleSubmit}
                  ref={(c) => {
                    this.form = c;
                  }}
                >
                  {!this.state.successful && (
                    <>
                      <div className="mb-3 mt-2">
                        <label htmlFor="name" className="form-label">
                          Name
                        </label>
                        <Input
                          type="text"
                          name="name"
                          onChange={this.onChangeName}
                          value={this.state.name}
                          validations={[required]}
                          className="form-control w-100"
                        />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="phoneNumber" className="form-label">
                          Phone Number
                        </label>
                        <Input
                          type="text"
                          name="phoneNumber"
                          onChange={this.onChangePhoneNumber}
                          value={this.state.phoneNumber}
                          validations={[required]}
                          className="form-control w-100"
                        />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="instrument" className="form-label">
                          Instrument type
                        </label>
                        <Input
                          type="text"
                          name="instrument"
                          onChange={this.onChangeInstrument}
                          value={this.state.instrument}
                          validations={[required]}
                          className="form-control w-100"
                        />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="problem" className="form-label">
                          What is the problem with your instrument?
                        </label>
                        <Textarea
                          type="text"
                          name="problem"
                          onChange={this.onChangeProblem}
                          value={this.state.problem}
                          validations={[required]}
                          className="form-control w-100"
                        />
                      </div>
                      <div className="d-grid gap-2">
                        <button className="btn btn-dark">Submit</button>
                      </div>
                    </>
                  )}

                  {this.state.message && (
                    <div className="form-group">
                      <div
                        className={
                          this.state.successful
                            ? "alert alert-success"
                            : "alert alert-danger"
                        }
                        role="alert"
                      >
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
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Repairs;
