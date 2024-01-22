import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { Link, Route, Routes, useNavigate } from "react-router-dom";
import Home from "./components/home.component";
import Logo from "./assets/logo.png";
import { BiSearch } from "react-icons/bi";
import { HiOutlineHeart } from "react-icons/hi";
import { LuShoppingCart } from "react-icons/lu";
import { useEffect, useState } from "react";
import VisaMaster from "./assets/visamaster_1.png";
import Mandiri from "./assets/mclickpay_1.png";
import BCA from "./assets/BCA.png";
import JNE from "./assets/JNE-express.jpeg";
import Fedex from "./assets/Fed-Ex-Express.png";
import DHL from "./assets/DHL-express.png";
import AuthService from "./services/auth.service";
import LoginRegister from "./components/loginRegister.component";
import Repairs from "./components/repairs.component";
import MusicSchool from "./components/music-school.component";
import Browse from "./components/browse.component";
import MyAccount from "./components/my-account.component";
import Enroll from "./components/enroll-school.component";
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";

function App() {
  const [keyword, setKeyword] = useState("");
  const [currentUser, setCurrentUser] = useState(undefined);

  const navigate = useNavigate();

  useEffect(() => {
    const user = AuthService.getCurrentUser();

    if (user) {
      setCurrentUser(user);
    }

    // const handleLogout = () => {
    //   logOut();
    // };
  }, []);

  // const logOut = () => {
  //   AuthService.logout();
  //   setCurrentUser(undefined);
  // };

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/${keyword}`);
  };

  const handleChange = (e) => {
    setKeyword(e.target.value);
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link to={"/"} className="navbar-brand">
            <img
              src={Logo}
              alt="Jumpstart logo"
              className="logo m-2 ms-4 me-5"
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDarkDropdown"
            aria-controls="navbarNavDarkDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDarkDropdown">
            <div className="navbar-nav my-1 py-1">
              <li className="nav-item ms-1 me-1 d-flex" data-test="home-test">
                <Link
                  to={"/"}
                  className="nav-link text-light btn btn-dark px-3"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item dropdown ms-1 me-1">
                <button
                  className="btn btn-dark dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  data-test="brands-button-test"
                >
                  Brands
                </button>
                <ul
                  className="dropdown-menu dropdown-menu-dark columns-3"
                  data-test="brands-list-test"
                >
                  <li>
                    <Link to={"#"} className="dropdown-item">
                      Akai
                    </Link>
                  </li>
                  <li>
                    <Link to={"#"} className="dropdown-item">
                      AKG
                    </Link>
                  </li>
                  <li>
                    <Link to={"#"} className="dropdown-item">
                      Alesis
                    </Link>
                  </li>
                  <li>
                    <Link to={"#"} className="dropdown-item">
                      Baretone
                    </Link>
                  </li>
                  <li>
                    <Link to={"#"} className="dropdown-item">
                      Behringer
                    </Link>
                  </li>
                  <li>
                    <Link to={"#"} className="dropdown-item">
                      Blackstar
                    </Link>
                  </li>
                  <li>
                    <Link to={"#"} className="dropdown-item">
                      Bose
                    </Link>
                  </li>
                  <li>
                    <Link to={"#"} className="dropdown-item">
                      Boss
                    </Link>
                  </li>
                  <li>
                    <Link to={"#"} className="dropdown-item">
                      Casio
                    </Link>
                  </li>
                  <li>
                    <Link to={"#"} className="dropdown-item">
                      Cort
                    </Link>
                  </li>
                  <li>
                    <Link to={"#"} className="dropdown-item">
                      Epiphone
                    </Link>
                  </li>
                  <li>
                    <Link to={"#"} className="dropdown-item">
                      Fender
                    </Link>
                  </li>
                  <li>
                    <Link to={"#"} className="dropdown-item">
                      Gibson
                    </Link>
                  </li>
                  <li>
                    <Link to={"#"} className="dropdown-item">
                      Hartke
                    </Link>
                  </li>
                  <li>
                    <Link to={"#"} className="dropdown-item">
                      Jackson
                    </Link>
                  </li>
                  <li>
                    <Link to={"#"} className="dropdown-item">
                      JBL
                    </Link>
                  </li>
                  <li>
                    <Link to={"#"} className="dropdown-item">
                      Jim Dunlop
                    </Link>
                  </li>
                  <li>
                    <Link to={"#"} className="dropdown-item">
                      Korg
                    </Link>
                  </li>
                  <li>
                    <Link to={"#"} className="dropdown-item">
                      Laney
                    </Link>
                  </li>
                  <li>
                    <Link to={"#"} className="dropdown-item">
                      Line 6
                    </Link>
                  </li>
                  <li>
                    <Link to={"#"} className="dropdown-item">
                      Ludwig
                    </Link>
                  </li>
                  <li>
                    <Link to={"#"} className="dropdown-item">
                      Mahalo
                    </Link>
                  </li>
                  <li>
                    <Link to={"#"} className="dropdown-item">
                      Marshall
                    </Link>
                  </li>
                  <li>
                    <Link to={"#"} className="dropdown-item">
                      MXR
                    </Link>
                  </li>
                  <li>
                    <Link to={"#"} className="dropdown-item">
                      Nux
                    </Link>
                  </li>
                  <li>
                    <Link to={"#"} className="dropdown-item">
                      Orange
                    </Link>
                  </li>
                  <li>
                    <Link to={"#"} className="dropdown-item">
                      Pearl
                    </Link>
                  </li>
                  <li>
                    <Link to={"#"} className="dropdown-item">
                      Roland
                    </Link>
                  </li>
                  <li>
                    <Link to={"#"} className="dropdown-item">
                      Shure
                    </Link>
                  </li>
                  <li>
                    <Link to={"#"} className="dropdown-item">
                      Sonor
                    </Link>
                  </li>
                  <li>
                    <Link to={"#"} className="dropdown-item">
                      Skylark
                    </Link>
                  </li>
                  <li>
                    <Link to={"#"} className="dropdown-item">
                      Suzuki
                    </Link>
                  </li>
                  <li>
                    <Link to={"#"} className="dropdown-item">
                      Squier
                    </Link>
                  </li>
                  <li>
                    <Link to={"#"} className="dropdown-item">
                      Takamine
                    </Link>
                  </li>
                  <li>
                    <Link to={"#"} className="dropdown-item">
                      Tama
                    </Link>
                  </li>
                  <li>
                    <Link to={"#"} className="dropdown-item">
                      Taylor
                    </Link>
                  </li>
                  <li>
                    <Link to={"#"} className="dropdown-item">
                      Yamaha
                    </Link>
                  </li>
                  <li>
                    <Link to={"#"} className="dropdown-item">
                      Zoom
                    </Link>
                  </li>
                </ul>
              </li>
              <li
                className="nav-item ms-1 me-1 d-flex"
                data-test="music-school-test"
              >
                <Link
                  to={"/musicSchool"}
                  className="nav-link text-light btn btn-dark px-3"
                >
                  Music School
                </Link>
              </li>
              <li className="nav-item ms-1 me-1 d-flex">
                <Link
                  to={"/repairs"}
                  className="nav-link text-light btn btn-dark px-3"
                  data-test="repairs-test"
                >
                  Repairs
                </Link>
              </li>
              <li className="nav-item dropdown ms-1 me-1">
                <button
                  className="btn btn-dark dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Shop By Category
                </button>
                <ul className="dropdown-menu dropdown-menu-dark">
                  <li>
                    <Link to={"#"} className="dropdown-item">
                      Guitars
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link to={"#"} className="dropdown-item">
                      Studio & Recording
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link to={"#"} className="dropdown-item">
                      Live Sound & Lighting
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link to={"#"} className="dropdown-item">
                      Software & Plug-ins
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link to={"#"} className="dropdown-item">
                      Bass
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link to={"#"} className="dropdown-item">
                      Keyboards & Synthesizers
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link to={"#"} className="dropdown-item">
                      Drums & Percussions
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link to={"#"} className="dropdown-item">
                      Microphones
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link to={"#"} className="dropdown-item">
                      DJ / Electronic
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link to={"#"} className="dropdown-item">
                      Band & Orchestra
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link to={"#"} className="dropdown-item">
                      Accessories
                    </Link>
                  </li>
                </ul>
              </li>
              <li
                className="nav-item ms-1 me-1 d-flex"
                data-test="my-account-test"
              >
                {currentUser ? (
                  <Link
                    to={"/me/myAccount"}
                    className="nav-link text-light btn btn-dark px-3"
                  >
                    My Account
                  </Link>
                ) : (
                  <button
                    className="nav-link btn btn-link text-light btn-dark px-3"
                    onClick={() => navigate("/loginRegister")}
                  >
                    My Account
                  </button>
                )}
              </li>
              <li className="nav-item ms-2 me-2 mt-1">
                <form className="d-flex" onSubmit={handleSearch}>
                  <input
                    type="text"
                    placeholder="Synthesizer"
                    // name="q"
                    value={keyword}
                    onChange={handleChange}
                    className="form-control me-2 search-input"
                    data-test="search-input-test"
                  />
                  <button
                    className="btn btn-light"
                    type="submit"
                    data-test="search-button-test"
                  >
                    <BiSearch />
                  </button>
                </form>
              </li>
              <li className="nav-item ms-2 me-2 pt-2">
                <Link to={"/me/wishlist"} className="me-2">
                  <HiOutlineHeart size={25} color="white" />
                </Link>
                <Link to={"/me/cart"}>
                  <LuShoppingCart size={25} color="white" />
                </Link>
              </li>
              <li className="nav-item ms-2 me-2 pt-2"></li>
            </div>
          </div>
        </div>
      </nav>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/loginRegister" element={<LoginRegister />} />
          <Route path="/repairs" element={<Repairs />} />
          <Route path="/musicSchool" element={<MusicSchool />} />
          <Route path="/:keyword" element={<Browse />} />
          <Route path="/me/myAccount" element={<MyAccount />} />
          <Route path="/enroll" element={<Enroll />} />
        </Routes>
      </div>

      <footer id="footer">
        <hr />
        <div className="container mt-4 mb-3">
          <div className="row">
            <div className="col">
              <h5>Jumpstart</h5>
              <ul className="footer-u-list">
                <li className="footer-list">
                  <Link to={"/aboutUs"} className="no-dec-list small-text">
                    About Us
                  </Link>
                </li>
                <li className="footer-list">
                  <Link to={"#"} className="no-dec-list small-text">
                    Our Locations
                  </Link>
                </li>
                <li className="footer-list">
                  <Link to={"#"} className="no-dec-list small-text">
                    Contact Us
                  </Link>
                </li>
                <li className="footer-list">
                  <Link to={"#"} className="no-dec-list small-text">
                    Terms & Conditions
                  </Link>
                </li>
                <li className="footer-list">
                  <Link to={"#"} className="no-dec-list small-text">
                    Blogs
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col">
              <h5>Contact Info</h5>
              <h6 className="no-dec-list small-text footer-list">Phone:</h6>
              <p className="no-dec-list small-text footer-list">021-4361234</p>
              <h6 className="no-dec-list small-text footer-list">Email:</h6>
              <p className="no-dec-list small-text footer-list">
                online@jumpstart.com
              </p>
              <h6 className="no-dec-list small-text footer-list">
                Social Media:
              </h6>
              <BsFacebook className="mx-1" />
              <BsTwitter className="mx-1" />
              <BsInstagram className="mx-1" />
              <BsLinkedin className="mx-1" />
            </div>
            <div className="col">
              <h5>Payment Methods</h5>
              <img src={VisaMaster} alt="Visa/Master logo" />
              <img src={Mandiri} alt="Mandiri click pay logo" />
              <img src={BCA} alt="BCA logo" />
            </div>
            <div className="col">
              <h5>Shipment Methods</h5>
              <img
                src={JNE}
                alt="JNE Express logo"
                className="shipment-img m-2 me-3"
              />
              <img
                src={Fedex}
                alt="Fed-ex Express logo"
                className="shipment-img m-2 me-3"
              />
              <img
                src={DHL}
                alt="DHL Express logo"
                className="shipment-img m-2 me-3"
              />
            </div>
          </div>
        </div>
        <hr />
        <div className="container text-end pb-2">
          <h6 className="no-dec-list small-text">
            &#169; Jumpstart 2015. All Rights Reserved.
          </h6>
        </div>
      </footer>
    </>
  );
}

export default App;
