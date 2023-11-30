import React from 'react'
import 'react-tabs/style/react-tabs.css';
import '../../Asset/Css/responsive.css'
import '../../Asset/Css/style.css'
import countrylogo from '../../Asset/images/countrylogo.png'
import logo from '../../Asset/images/logo.png'
import search from '../../Asset/images/search.svg'
import user from '../../Asset/images/user.svg'
import cart from '../../Asset/images/cart.svg'
import likes from '../../Asset/images/likes.svg'
import loginimg from '../../Asset/images/login-img.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faLocationDot, faClock, faAngleRight } from '@fortawesome/free-solid-svg-icons'
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { useState } from 'react';
import { Navbar, Container, Nav, NavDropdown, Offcanvas, Form, Button } from 'react-bootstrap';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 650,
  bgcolor: 'background.paper',
  border: '0px solid #000',
  boxShadow: 24,
  p: 4,
  outline: 0,
  borderRadius: '8px',
};
function Header() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [toggle, setToggle] = useState(false);

  const toggleMenu = () => {
    setToggle(!toggle)
  }

  return (
    <div>
      <div className="header-main d-none d-lg-block">
        {/* Top header */}
        <div className="top-header-background">
          <div className="header-container">
            <div className="top-header">
              <div className="top-header-left">
                <div className='top-header-left-sections'>
                  <div className="country-selection">
                    <a href=""><img src={countrylogo} alt=''></img></a>
                    <select class="select">
                      <option selected>English</option>
                      <option value="1">Chinese</option>
                      <option value="2">French</option>
                    </select>
                  </div>
                  <div className="contact-info">
                    <FontAwesomeIcon icon={faPhone} style={{ color: "#ffffff", }} />
                    <div className="phonenumber">+9100000000</div>
                  </div>
                </div>
              </div>
              <div className="top-header-right">
                <div className='top-header-right-sections'>
                  <div className="location">
                    <FontAwesomeIcon onClick={handleOpen} icon={faLocationDot} style={{ color: "#f7f7f8", }} />
                    <div className="address" onClick={handleOpen}>Select your address</div>
                    <Modal
                      open={open}
                      onClose={handleClose}
                      aria-labelledby="modal-modal-title"
                      aria-describedby="modal-modal-description"
                    >
                      <Box sx={style}>
                        <div className="row login-row-popup">
                          <div className="col-12 col-md-6">
                            <img className='loginimg' src={loginimg}></img>
                          </div>
                          <div className="col-12 col-md-6 login-div-parent">
                            <div className="login-div-popup">
                              <div className="wrapper">
                                <div className='forgotpassword-head-popup'>Choose Address</div>
                                <div className="wrapper">
                                  <form>
                                    <div className="form-outline mb-4">
                                      <div className="popup-contents">
                                        <div className="select-popup">
                                          <label><FontAwesomeIcon icon={faLocationDot} /></label>
                                          <select id="city" name="city" class="form-select">
                                            <option value="">Choose City</option>
                                            <option value="Alipur">Alipur</option>
                                            <option value="Bawana">Bawana</option>
                                            <option value="Central Delhi">Central Delhi</option>
                                            <option value="Delhi">Delhi</option>
                                          </select>
                                        </div>

                                        <div className="select-popup">
                                          <label><FontAwesomeIcon icon={faLocationDot} /></label>
                                          <select id="city" name="city" class="form-select">
                                            <option value="">Delivery Location</option>
                                            <option value="Alipur">Alipur</option>
                                            <option value="Bawana">Bawana</option>
                                            <option value="Central Delhi">Central Delhi</option>
                                            <option value="Delhi">Delhi</option>
                                          </select>
                                        </div>

                                        <div className="select-popup">
                                          <label><FontAwesomeIcon icon={faClock} /></label>
                                          <select id="city" name="city" class="form-select">
                                            <option value="">Choose Timeslot</option>
                                            <option value="Alipur">Alipur</option>
                                            <option value="Bawana">Bawana</option>
                                            <option value="Central Delhi">Central Delhi</option>
                                            <option value="Delhi">Delhi</option>
                                          </select>
                                        </div>
                                        <div className="popup-button">
                                          <input type='submit'></input>
                                        </div>
                                      </div>
                                    </div>
                                  </form>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Box>
                    </Modal>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div >

        {/* Downheader */}
        < div className="down-header-main" >
          <div className="header-container">
            <div className="down-header">
              <div class="home-logo">
                <a href=""><img src={logo}></img></a>
              </div>
              <div className="search">
                <form action="">
                  <input type="text" placeholder='Search for product ' name="search"></input>
                  <span className='location-search'>SEARCH</span>
                  <button type="submit"><img className='search-button' src={search}></img></button>
                </form>
              </div>
              <div class="upper-menu">
                <ul>
                  <li>
                    <a href="">
                      <img src={user}></img>
                      <span>Login / Signup</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div >

        {/* Navbar */}

        < div className="navbar-main-div" >
          <div className="header-container">
            <div className="navbar-main">
              <div className="nav-section-1">
                <span className='menu-toggle'>ALL CATEGORIES </span>
                <div class="hamburger" onClick={toggleMenu} >
                  <input type="checkbox" class="hamburger-init" />
                  <div class="menu">
                    <div class="bar1"></div>
                    <div class="bar2"></div>
                    <div class="bar3"></div>
                  </div>
                </div>
              </div>
              {toggle && (<ul id="menu">
                <div className="menu-inner">
                  <div className="menu-content">
                    <a href="">FOOD CUPBOARD</a>
                  </div>
                  <div className="menu-icon">
                    <FontAwesomeIcon icon={faAngleRight} style={{ color: "#E0E0E0" }} />
                  </div>
                </div>
                <div className="menu-inner">
                  <div className="menu-content">
                    <a href="">HEALTH & BEAUTY</a>
                  </div>
                  <div className="menu-icon">
                    <FontAwesomeIcon icon={faAngleRight} style={{ color: "#E0E0E0", }} />
                  </div>
                </div>

                <div className="menu-inner">
                  <div className="menu-content">
                    <a href=""> HOUSEHOLD CARE</a>
                  </div>
                  <div className="menu-icon">
                    <FontAwesomeIcon icon={faAngleRight} style={{ color: "#E0E0E0", }} />
                  </div>
                </div>
                <div className="menu-inner">
                  <div className="menu-content">
                    <a href="">FRESH FOOD</a>
                  </div>
                  <div className="menu-icon">
                    <FontAwesomeIcon icon={faAngleRight} style={{ color: "#E0E0E0", }} />
                  </div>
                </div>
                <div className="menu-inner">
                  <div className="menu-content">
                    <a href="">BABY CARE</a>
                  </div>
                  <div className="menu-icon">
                    <FontAwesomeIcon icon={faAngleRight} style={{ color: "#E0E0E0", }} />
                  </div>
                </div>

                <div className="menu-inner">
                  <div className="menu-content">
                    <a href="">STATIONERY & OFFICE SUPPLIES</a>
                  </div>
                  <div className="menu-icon">
                    <FontAwesomeIcon icon={faAngleRight} style={{ color: "#E0E0E0", }} />
                  </div>
                </div>
              </ul>)}
              <div className="nav-section-2">
                <div class="menu-sub">
                  <ul>
                    <li><a href="">Best sellers </a></li>
                    <li><a href="">Register as vendor </a></li>
                    <li><a href="">Todays deals </a></li>
                  </ul>
                </div>
              </div>
              <div className="nav-section-3">
                <div class="upper-menu-cart">
                  <ul>
                    <li><a href="">
                      <a href=""><div class="add">4</div><img src={likes} alt=''></img></a>
                      Your Wishlist
                    </a>
                    </li>
                    <li><a href="">
                      <a href=""><div class="add">3</div><img src={cart} alt=''></img></a>
                      Your Cart
                    </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div >
      </div >
      {/* header-responsive-design */}
      <div className="header-resonsive-main d-block d-lg-none" style={{ borderBottom: "1px solid #2270AD", paddingBottom: "10px" }}>
        <div className="header-main">
          <div className="top-header-background">
            <div className="header-container">
              <div className="top-header">
                <div className="top-header-left">
                  <div className='top-header-left-sections'>
                    <div className="country-selection">
                      <a href=""><img src={countrylogo} alt=''></img></a>
                      <select class="select">
                        <option selected>English</option>
                        <option value="1">Chinese</option>
                        <option value="2">French</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="top-header-right">
                  <div className='top-header-right-sections'>
                    <div className="contact-info">
                      <FontAwesomeIcon icon={faPhone} style={{ color: "#ffffff", marginRight: "20px" }} />
                    </div>
                    <div className="location">
                      <FontAwesomeIcon onClick={handleOpen} icon={faLocationDot} style={{ color: "#f7f7f8", }} />
                      <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                      >
                        <Box sx={style}>
                          <div className="row login-row-popup">
                            <div className="col-12 col-md-6">
                              <img className='loginimg' src={loginimg}></img>
                            </div>
                            <div className="col-12 col-md-6 login-div-parent">
                              <div className="login-div-popup">
                                <div className="wrapper">
                                  <div className='forgotpassword-head-popup'>Choose Address</div>
                                  <div className="wrapper">
                                    <form>
                                      <div className="form-outline mb-4">
                                        <div className="popup-contents">
                                          <div className="select-popup">
                                            <label><FontAwesomeIcon icon={faLocationDot} /></label>
                                            <select id="city" name="city" class="form-select">
                                              <option value="">Choose City</option>
                                              <option value="Alipur">Alipur</option>
                                              <option value="Bawana">Bawana</option>
                                              <option value="Central Delhi">Central Delhi</option>
                                              <option value="Delhi">Delhi</option>
                                            </select>
                                          </div>

                                          <div className="select-popup">
                                            <label><FontAwesomeIcon icon={faLocationDot} /></label>
                                            <select id="city" name="city" class="form-select">
                                              <option value="">Delivery Location</option>
                                              <option value="Alipur">Alipur</option>
                                              <option value="Bawana">Bawana</option>
                                              <option value="Central Delhi">Central Delhi</option>
                                              <option value="Delhi">Delhi</option>
                                            </select>
                                          </div>

                                          <div className="select-popup">
                                            <label><FontAwesomeIcon icon={faClock} /></label>
                                            <select id="city" name="city" class="form-select">
                                              <option value="">Choose Timeslot</option>
                                              <option value="Alipur">Alipur</option>
                                              <option value="Bawana">Bawana</option>
                                              <option value="Central Delhi">Central Delhi</option>
                                              <option value="Delhi">Delhi</option>
                                            </select>
                                          </div>
                                          <div className="popup-button">
                                            <input type='submit'></input>
                                          </div>
                                        </div>
                                      </div>
                                    </form>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </Box>
                      </Modal>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="middle-header">
          <div className="header-container">
            <div className="row" style={{ alignItems: "center" }}>
              <div className="col-2" style={{ paddingLeft: "0", display: "flex", justifyContent: "flex-start" }}>
                {[false].map((expand) => (
                  <Navbar key={expand} expand={expand} className="bg-body-tertiary">
                    <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                    <Navbar.Offcanvas
                      id={`offcanvasNavbar-expand-${expand}`}
                      aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                      placement="end"
                    >
                      <Offcanvas.Header closeButton>
                        <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                        </Offcanvas.Title>
                      </Offcanvas.Header>
                      <Offcanvas.Body>
                        <Nav className="justify-content-end flex-grow-1 pe-3">
                          <Nav.Link href="#action1">BEST SELLERS</Nav.Link>
                          <Nav.Link href="#action2">REGISTER AS VENDOR</Nav.Link>
                          <Nav.Link href="#action2">TODAYS DEALS</Nav.Link>
                          <NavDropdown
                            title="ALL CATEGORIES"
                            id={`offcanvasNavbarDropdown-expand-${expand}`}
                          >
                            <NavDropdown.Item href="#action3">
                              <div className="menu-inner">
                                <div className="menu-content">
                                  <a href="" style={{ color: "#000", textDecoration: "none" }}>FOOD CUPBOARD</a>
                                </div>
                                <div className="menu-icon">
                                  <FontAwesomeIcon icon={faAngleRight} style={{ color: "#E0E0E0" }} />
                                </div>
                              </div>
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action3">
                              <div className="menu-inner">
                                <div className="menu-content">
                                  <a href="" style={{ color: "#000", textDecoration: "none" }}>HEALTH & BEAUTY</a>
                                </div>
                                <div className="menu-icon">
                                  <FontAwesomeIcon icon={faAngleRight} style={{ color: "#E0E0E0" }} />
                                </div>
                              </div>
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action3">
                              <div className="menu-inner">
                                <div className="menu-content">
                                  <a href="" style={{ color: "#000", textDecoration: "none" }}>HOUSEHOLD CARE</a>
                                </div>
                                <div className="menu-icon">
                                  <FontAwesomeIcon icon={faAngleRight} style={{ color: "#E0E0E0" }} />
                                </div>
                              </div>
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action3">
                              <div className="menu-inner">
                                <div className="menu-content">
                                  <a href="" style={{ color: "#000", textDecoration: "none" }}>FRESH FOOD</a>
                                </div>
                                <div className="menu-icon">
                                  <FontAwesomeIcon icon={faAngleRight} style={{ color: "#E0E0E0" }} />
                                </div>
                              </div>
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action3">
                              <div className="menu-inner">
                                <div className="menu-content">
                                  <a href="" style={{ color: "#000", textDecoration: "none" }}>BABY CARE</a>
                                </div>
                                <div className="menu-icon">
                                  <FontAwesomeIcon icon={faAngleRight} style={{ color: "#E0E0E0" }} />
                                </div>
                              </div>
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action3">
                              <div className="menu-inner">
                                <div className="menu-content">
                                  <a href="" style={{ color: "#000", textDecoration: "none" }}>STATIONERY & OFFICE SUPPLIES</a>
                                </div>
                                <div className="menu-icon">
                                  <FontAwesomeIcon icon={faAngleRight} style={{ color: "#E0E0E0" }} />
                                </div>
                              </div>
                            </NavDropdown.Item>
                          </NavDropdown>
                        </Nav>
                      </Offcanvas.Body>
                    </Navbar.Offcanvas>
                  </Navbar>
                ))}
              </div>
              <div className="col-6" style={{ display: "flex", justifyContent: "flex-end" }}><img className='respo-logo' src={logo}></img></div>
              <div className="col-4 responsive-user" style={{ justifyContent: "flex-end" }}>

                <div class="upper-menu-cart" style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <img src={user} style={{ width: "100%", maxWidth: "12px", marginRight: "10px" }}></img>
                  <ul>
                    <li><a href="">
                      <a href=""><div class="add">4</div><img src={likes} alt=''></img></a>

                    </a>
                    </li>
                    <li><a href="">
                      <a href=""><div class="add">3</div><img src={cart} alt=''></img></a>
                    </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="header-container">
          <div className="search">
            <form action="">
              <input type="text" placeholder='Search for product ' name="search"></input>
              <button type="submit"><img className='search-button' src={search}></img></button>
            </form>
          </div>
        </div>

      </div>
      {/* header-responsive-design : end*/}

    </div >
  )
}

export default Header

