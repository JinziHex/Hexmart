import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faPhone, faFacebook } from '@fortawesome/free-solid-svg-icons'

function Footer() {
    return (
        <div>
            <footer>
                <div className="footer-div">
                    <div className="container">
                        <div className="footer-main">
                            <div className="footer-contents">
                                <ul>
                                    <li>
                                        <h3>FIND IN FAST</h3>
                                    </li>
                                    <li>Accessories</li>
                                    <li>Gaming</li>
                                    <li>Laptops & Computer</li>
                                    <li>Mac Computer</li>
                                    <li>PC Computer</li>
                                    <li>Ultrabooks</li>
                                    <li>Shipping Policy</li>
                                    <li>Shipping Policy</li>
                                </ul>
                            </div>


                            <div className="footer-contents">
                                <ul>
                                    <li>
                                        <h3>MERCHANT CENTRAL</h3>
                                    </li>
                                    <li>Merchant Sign in</li>
                                    <li>How Does It Work</li>
                                    <li>Pricing</li>
                                    <li>Fulfillment by ShopClues</li>
                                    <li>Merchant Tools</li>
                                    <li>Policies $ Rules</li>
                                    <li>Testimonials</li>
                                    <li>Merchant Rating</li>
                                </ul>
                            </div>


                            <div className="footer-contents">
                                <ul>
                                    <li>
                                        <h3>INFORMATION</h3>
                                    </li>
                                    <li>About Us</li>
                                    <li>Contact Us</li>
                                    <li>All Collection </li>
                                    <li>Privacy policy</li>
                                    <li>Terms & condition</li>
                                    <li>Blog</li>
                                    <li>In the Press</li>
                                    <li>Awards</li>
                                </ul>
                            </div>


                            <div className="footer-contents">
                                <ul>
                                    <li>
                                        <h3>CONTACT US</h3>
                                    </li>
                                    <li>
                                        <div className="location-footer">
                                            <FontAwesomeIcon icon={faLocationDot} style={{ color: "#f7f7f8", }} />
                                            <div className="address-footer">Unit - 12, Upper Basement, Sahya Building,KSITIL Special Economic Zone,Govt. Cyberpark, Nellikkode P.O,Kozhikode, Kerala, India</div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="contact-info-footer">
                                            <FontAwesomeIcon icon={faPhone} style={{ color: "#ffffff", }} />
                                            <div className="phonenumber-footer">+9100000000</div>
                                        </div>
                                    </li>
                                    <li>
                                        <h4>FOLLOW US</h4>
                                    </li>
                                    <li>
                                        <div className="row">
                                            <div className="col-2">
                                                <i class="fa-brands fa-facebook" style={{ color: "#fff", fontSize: "20px" }}></i>
                                            </div>
                                            <div className="col-2">
                                                <i class="fa-brands fa-square-x-twitter" style={{ color: "#fff", fontSize: "20px" }}></i>
                                            </div>
                                            <div className="col-2">
                                                <i class="fa-brands fa-linkedin" style={{ color: "#fff", fontSize: "20px" }}></i>
                                            </div>
                                            <div className="col-2">
                                                <i class="fa-brands fa-instagram" style={{ color: "#fff", fontSize: "20px" }}></i>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="footer-link">
                            <p>Copyright © 2023<span> Hexmart </span>All Rights Reserved</p>
                        </div>
                    </div>
                </div>
            </footer>
        </div >
    )
}

export default Footer

