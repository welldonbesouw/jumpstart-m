import React, { Component } from "react";
import CelloClass from "../assets/cello-class.jpg";
import GuitarClass from "../assets/guitar-class.jpg";
import PianoClass1 from "../assets/piano-class.jpg";
import PianoClass2 from "../assets/piano-class2.jpg";
import UkuleleClass from "../assets/ukulele-class.jpg";
import DrumClass1 from "../assets/drum-class1.jpg";
import DrumClass2 from "../assets/drum-class2.jpg";
import { Link } from "react-router-dom";

class MusicSchool extends Component {
  render() {
    return (
      <div>
        <section id="musicSchool">
          <div className="container">
            <div className="mt-4 mx-3 mb-1">
              Already enrolled? Head over to our &nbsp;
              <Link to={"/jumpstart/musicSchool"}>Jumpstart Music School!</Link>
            </div>
            <div className="row">
              <div className="col mb-3 ps-4">
                <div className="card card-width">
                  <img
                    src={CelloClass}
                    className="card-img-top card-img"
                    alt="A girl learning to play viola"
                  />
                  <div className="card-body">
                    <p className="card-text">
                      Unlock your musical potential and immerse yourself in the
                      captivating melodies of our Cello class, where expert
                      instructors guide you towards creating enchanting
                      harmonies that will resonate with your soul.
                    </p>
                    <Link to="/enroll" className="btn btn-dark">
                      Enroll Now
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-4 mt-3 mb-3">
                <h1 className="text-left cello-text text-primary">CELLO</h1>
                <h1 className="text-left cello-text text-danger">CLASS &</h1>
                <h1 className="text-left cello-text mb-4">PROGRAM</h1>
                <p className="lh-lg">
                  <strong>JOIN US</strong> in our fantastic
                  <em>Cello Class & Program</em>. Here are some benefits you
                  will get:
                  <ul>
                    <li className="my-2">
                      Practical modules supported by theoretical knowledge
                    </li>
                    <li className="my-2">Various selected programs</li>
                    <li className="my-2">Study the songs of your own choice</li>
                    <li className="my-2">
                      Rockschool International Certification Exam
                    </li>
                    <li className="my-2">
                      Overcome your mentality through <em>LIVE CONCERTS!</em>
                    </li>
                  </ul>
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-4 mt-4 mb-3 ps-4">
                <h1 className="text-left cello-text text-primary">GUITAR</h1>
                <h1 className="text-left cello-text text-danger">CLASS &</h1>
                <h1 className="text-left cello-text mb-4">PROGRAM</h1>
                <p className="lh-lg">
                  <strong>UNLEASH</strong> your inner rockstar and embark on an
                  extraordinary musical journey with our
                  <em> Guitar Class & Program</em>.
                  <ul>
                    <li className="my-2">
                      Experience the thrill of practical modules fused with
                      theoretical knowledge
                    </li>
                    <li className="my-2">
                      Explore a diverse selection of programs
                    </li>
                    <li className="my-2">Master the songs of your choice</li>
                    <li className="my-2">
                      Earn a prestigious Rockschool International Certification
                    </li>
                    <li className="my-2">
                      Conquer stage fright through electrifying
                      <em> LIVE CONCERTS</em> that will redefine your musical
                      mindset
                    </li>
                  </ul>
                </p>
              </div>
              <div className="col mt-4 mb-3 ps-5 ms-5">
                <div className="card card-width">
                  <img
                    src={GuitarClass}
                    className="card-img-top card-img"
                    alt="A girl learning to play viola"
                  />
                  <div className="card-body">
                    <p className="card-text">
                      Unleash your inner rockstar and join our Guitar Class,
                      where you'll learn to strum, shred, and soar with
                      confidence, as our experienced instructors guide you
                      through an electrifying curriculum packed with dynamic
                      techniques, personalized song choices, exhilarating live
                      performances, and the chance to earn prestigious
                      certifications.
                    </p>
                    <Link to="/enroll" className="btn btn-dark">
                      Enroll Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mb-5">
              <div className="col">
                <h1 className="text-center many-more">AND MANY MORE!</h1>
                <div id="carouselIndicators" className="carousel slide">
                  <div className="carousel-indicators">
                    <button
                      type="button"
                      data-bs-target="#carouselIndicators"
                      data-bs-slide-to="0"
                      class="active"
                      aria-current="true"
                      aria-label="Slide 1"
                    ></button>
                    <button
                      type="button"
                      data-bs-target="#carouselIndicators"
                      data-bs-slide-to="1"
                      aria-label="Slide 2"
                    ></button>
                    <button
                      type="button"
                      data-bs-target="#carouselIndicators"
                      data-bs-slide-to="2"
                      aria-label="Slide 3"
                    ></button>
                    <button
                      type="button"
                      data-bs-target="#carouselIndicators"
                      data-bs-slide-to="3"
                      aria-label="Slide 4"
                    ></button>
                    <button
                      type="button"
                      data-bs-target="#carouselIndicators"
                      data-bs-slide-to="4"
                      aria-label="Slide 5"
                    ></button>
                  </div>
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img
                        src={PianoClass1}
                        className="d-block w-100"
                        alt="Learning piano"
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        src={UkuleleClass}
                        className="d-block w-100"
                        alt="Learning ukulele"
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        src={DrumClass1}
                        className="d-block w-100"
                        alt="Learning drum"
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        src={PianoClass2}
                        className="d-block w-100"
                        alt="Learning piano"
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        src={DrumClass2}
                        className="d-block w-100"
                        alt="Learning drum"
                      />
                    </div>
                  </div>
                  <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselIndicators"
                    data-bs-slide="prev"
                  >
                    <span
                      className="carousel-control-prev-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Previous</span>
                  </button>
                  <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselIndicators"
                    data-bs-slide="next"
                  >
                    <span
                      className="carousel-control-next-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Next</span>
                  </button>
                </div>
                <div>
                  <span
                    className="d-flex justify-content-center"
                    data-test="enroll-now-test"
                  >
                    <Link
                      to={"/enroll"}
                      className="bg-dark text-light enroll-now mt-4 rounded"
                    >
                      ENROLL NOW
                    </Link>
                  </span>
                </div>
                <div className="mt-2 mx-3 mb-1 d-flex justify-content-center">
                  Already enrolled? Head over to our &nbsp;
                  <Link to={"/jumpstart/musicSchool"}>
                    Jumpstart Music School!
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default MusicSchool;
