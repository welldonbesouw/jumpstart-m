import React from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import AuthService from "../services/auth.service";
import { withRouter } from "../common/with-router";
import { Component } from "react";
import "../App.css";
import isEmail from "validator/lib/isEmail";
import { Link } from "react-router-dom";

const required = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};

class LoginRegister extends Component {
  constructor(props) {
    super(props);
    this.handleLogin = this.handleLogin.bind(this);
    this.onChangeUsernameL = this.onChangeUsernameL.bind(this);
    this.onChangePasswordL = this.onChangePasswordL.bind(this);

    this.handleRegister = this.handleRegister.bind(this);
    this.onChangeUsernameR = this.onChangeUsernameR.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePasswordR = this.onChangePasswordR.bind(this);

    this.state = {
      usernameL: "",
      passwordL: "",
      loading: false,
      messageL: "",
      messageR: "",
      usernameR: "",
      email: "",
      passwordR: "",
      successful: false,
      emptyAlert: false,
      charAlert: false,
      emailAlert: false,
    };
  }

  onChangeUsernameL(e) {
    this.setState({
      usernameL: e.target.value,
    });
  }

  onChangePasswordL(e) {
    this.setState({
      passwordL: e.target.value,
    });
  }

  handleLogin(e) {
    e.preventDefault();

    this.setState({
      messageL: "",
      loading: true,
    });

    this.loginForm.validateAll();

    if (this.checkBtn.context._errors.length === 0) {
      AuthService.login(this.state.usernameL, this.state.passwordL).then(
        () => {
          this.props.router.navigate("/");
          window.location.reload();
        },
        (error) => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();

          this.setState({
            loading: false,
            messageL: resMessage,
          });
        }
      );
    } else {
      this.setState({
        loading: false,
      });
    }
  }

  onChangeEmail(e) {
    this.setState({
      email: e.target.value,
    });
  }

  onChangeUsernameR(e) {
    this.setState({
      usernameR: e.target.value,
    });
  }

  onChangePasswordR(e) {
    this.setState({
      passwordR: e.target.value,
    });
  }

  handleRegister(e) {
    e.preventDefault();

    this.setState({
      messageR: "",
      successful: false,
    });

    const { usernameR, email, passwordR } = this.state;
    if (!usernameR || !email || !passwordR) {
      this.setState({
        emptyAlert: true,
        charAlert: false,
        emailAlert: false,
        messageR: "",
      });
    } else if (
      usernameR.length < 3 ||
      usernameR.length > 20 ||
      passwordR.length < 6 ||
      passwordR.length > 50
    ) {
      this.setState({
        emptyAlert: false,
        charAlert: true,
        emailAlert: false,
        messageR: "",
      });
    } else if (!isEmail(email)) {
      this.setState({
        emptyAlert: false,
        charAlert: false,
        emailAlert: true,
        messageR: "",
      });
    } else {
      AuthService.register(
        this.state.usernameR,
        this.state.email,
        this.state.passwordR
      ).then(
        (response) => {
          this.setState({
            messageR: response.data.message,
            successful: true,
          });
        },
        (error) => {
          const resMessage =
            (error.response &&
              error.response.date &&
              error.response.date.message) ||
            error.message ||
            error.toString();

          this.setState({
            successful: false,
            messageR: resMessage,
          });
        }
      );
    }
  }

  setActiveGroup = (group) => {
    this.setState({ activeGroup: group });
  };

  render() {
    const { activeGroup, email, emptyAlert, charAlert, emailAlert } =
      this.state;

    return (
      <div>
        <div className="container">
          <div className="row d-flex pad5">
            <div className="col m-4">
              {/* <h3>Login</h3> */}
              <Form
                onSubmit={this.handleLogin}
                ref={(c) => {
                  this.loginForm = c;
                }}
              >
                <div
                  className={`card ${
                    activeGroup === "register" ? "disabled-form" : ""
                  }`}
                  onClick={() => this.setActiveGroup("login")}
                >
                  <div className="card-header fw-bold fs-5 text-dark">
                    Login
                  </div>
                  <div className="card-body">
                    <div className="form-group">
                      <label htmlFor="usernameL" className="form-label mb-1">
                        Username
                      </label>
                      <Input
                        type="text"
                        className="form-control w-100 mb-2"
                        name="usernameL"
                        id="usernameL"
                        value={this.state.usernameL}
                        onChange={this.onChangeUsernameL}
                        validations={[required]}
                        disabled={activeGroup === "register"} // Disable inputs when active group is "register"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="passwordL" className="form-label mb-1">
                        Password
                      </label>
                      <Input
                        type="password"
                        className="form-control w-100 mb-2"
                        name="passwordL"
                        id="passwordL"
                        value={this.state.passwordL}
                        onChange={this.onChangePasswordL}
                        validations={[required]}
                        disabled={activeGroup === "register"}
                      />
                    </div>
                    <div className="form-group form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="checkbox"
                        disabled={activeGroup === "register"}
                      />
                      <label
                        className="form-check-label mb-2"
                        htmlFor="checkbox"
                      >
                        Remember me
                      </label>
                    </div>
                    <div className="form-group d-flex justify-content-center">
                      <button
                        className="btn btn-dark btn-block w-100 fw-bold"
                        disabled={
                          this.state.loading || activeGroup === "register"
                        }
                      >
                        Login
                      </button>
                    </div>

                    {this.state.messageL && (
                      <div className="form-group">
                        <div className="alert alert-danger" role="alert">
                          {this.state.messageL}
                        </div>
                      </div>
                    )}
                    <CheckButton
                      style={{ display: "none" }}
                      ref={(c) => {
                        this.checkBtn = c;
                      }}
                    />
                  </div>
                </div>
              </Form>
            </div>
            <div className="col m-4">
              {/* <h3>Register</h3> */}
              <form onSubmit={this.handleRegister} noValidate>
                <div
                  className={`card ${
                    activeGroup === "login" ? "disabled-form" : ""
                  }`}
                  onClick={() => this.setActiveGroup("register")}
                >
                  <div className="card-header fw-bold fs-5 text-dark">
                    Register
                  </div>
                  <div className="card-body">
                    <div className="form-group">
                      <label htmlFor="username" className="form-label mb-1">
                        Username
                      </label>
                      <input
                        type="text"
                        name="username"
                        onChange={this.onChangeUsernameR}
                        value={this.state.usernameR}
                        required
                        minLength="3"
                        maxLength="20"
                        className="form-control w-100 mb-2"
                        disabled={activeGroup === "login"} // Disable inputs when active group is "login"
                      />
                      {emptyAlert && (
                        <div className="alert alert-danger mt-0" role="alert">
                          This field is required!
                        </div>
                      )}
                      {charAlert && (
                        <div className="alert alert-danger mt-0" role="alert">
                          Username must be between 3 and 20 characters! Password
                          must be between 6 and 50 characters!
                        </div>
                      )}
                    </div>
                    <div className="form-group">
                      <label htmlFor="email" className="form-label mb-1">
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        onChange={this.onChangeEmail}
                        value={this.state.email}
                        required
                        className="form-control w-100 mb-2"
                        aria-describedby="emailHelp"
                        disabled={activeGroup === "login"}
                      />
                    </div>
                    {emptyAlert && (
                      <div className="alert alert-danger mt-0" role="alert">
                        This field is required!
                      </div>
                    )}
                    {email}
                    {emailAlert && (
                      <div className="alert alert-danger mt-0" role="alert">
                        Invalid email format.
                      </div>
                    )}

                    <div className="form-group">
                      <label htmlFor="password" className="form-label mb-1">
                        Password
                      </label>
                      <input
                        type="password"
                        name="password"
                        onChange={this.onChangePasswordR}
                        value={this.state.passwordR}
                        required
                        minLength="6"
                        maxLength="50"
                        className="form-control w-100 mb-2"
                        disabled={activeGroup === "login"}
                      />
                    </div>
                    {emptyAlert && (
                      <div className="alert alert-danger mt-0" role="alert">
                        This field is required!
                      </div>
                    )}
                    {charAlert && (
                      <div className="alert alert-danger mt-0" role="alert">
                        Username must be between 3 and 20 characters! Password
                        must be between 6 and 50 characters!
                      </div>
                    )}
                    <div id="emailHelp" className="form-text mb-3 form-group">
                      Your personal data will be used to support your experience
                      throughout this website, to manage access to your account,
                      and for other purposes described in our &nbsp;
                      <span>
                        <Link to={"#"}>privacy policy</Link>
                      </span>
                      .
                    </div>
                    <div className="form-group d-flex justify-content-center">
                      <button
                        className="btn btn-dark btn-block w-100 fw-bold"
                        type="submit"
                        disabled={activeGroup === "login"}
                      >
                        Register
                      </button>
                    </div>
                  </div>

                  {this.state.messageR && (
                    <div className="form-group mt-0">
                      <div
                        className={
                          this.state.successful
                            ? "alert alert-success"
                            : "alert alert-danger"
                        }
                        role="alert"
                      >
                        {this.state.messageR}
                      </div>
                    </div>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(LoginRegister);
