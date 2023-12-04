import React from 'react'
import Header from '../../components/Auth/Header'
import Footer from '../../components/Auth/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faAngleRight } from '@fortawesome/free-solid-svg-icons'
import peach from '../../Asset/images/peach.png'
import listing8 from '../../Asset/images/listing-8.png'
import Timeline from '../../components/Auth/Timeline'

function Orderdetails() {
    return (
        <div>
            <Header />
            <div className="order-details-main">
                <div className="container">
                    <div className="listing-header">
                        <span><FontAwesomeIcon icon={faHouse} style={{ color: "#E2DFDF", }} /></span>
                        <span><FontAwesomeIcon icon={faAngleRight} style={{ color: "#E2DFDF", }} /></span>
                        <a href=''><span className='listing-categories'>My Account</span></a>
                        <span><FontAwesomeIcon icon={faAngleRight} style={{ color: "#E2DFDF", }} /></span>
                        <a href=''><span className='listing-categories'>MY ORDER</span></a>
                        <span><FontAwesomeIcon icon={faAngleRight} style={{ color: "#E2DFDF", }} /></span>
                        <a href=''><span className='listing-categories'>ORDER DETAILS</span></a>
                    </div>
                    <div className="order-details-body">
                        <div className="order-details">
                            <div className="order-details-inner">
                                <h4>Order Details</h4>
                            </div>
                            <div className="person-information">
                                <div className="person-information-1">
                                    <div className="sales">
                                        <div className="sales-1">
                                            <p>Sales Consultant</p>
                                            <p>Order Number</p>
                                            <p>Shipment Number</p>
                                            <p>Order Date</p>
                                        </div>
                                        <div className="sales-2">
                                            <p><span>:</span>Name</p>
                                            <p style={{ color: "#0F8EEF" }}><span style={{ color: "#000" }}>:</span> 561575552442185</p>
                                            <p style={{ color: "#0F8EEF" }}><span style={{ color: "#000" }}>:</span> 3345532561575185</p>
                                            <p><span>:</span> 23-Oct-2023</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="person-information-1">
                                    <div className="sales">
                                        <div className="sales-1">
                                            <p>Product Total</p>
                                            <p>Delivery Fee</p>
                                            <p>Invoice Number</p>
                                            <p>Payment Mode</p>
                                        </div>
                                        <div className="sales-2">
                                            <p className='payment-mode'><span>:</span>$ 669</p>
                                            <p style={{ color: "#0AA02B" }}><span style={{ color: "#000" }}>:</span>FREE<span style={{ color: "#E0DCDC", marginLeft: "10px" }}>$ 30</span></p>
                                            <p><span>:</span>TA3516223502559</p>
                                            <p><span>:</span>PREPAID</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="order-details-inner">
                                <h4>Delivery Information</h4>
                            </div>
                            <div className="person-information" style={{ justifyContent: "flex-start" }}>
                                <div className="person-information-1">
                                    <div className="sales">
                                        <div className="sales-1">
                                            <p>Delivery Address </p>
                                        </div>
                                        <div className="sales-2">
                                            <p><span>:</span>Unit - 12, Upper Basement, Sahya Building,KSITIL Special Economic Zone,Govt. Cyberpark, Nellikkode P.O,Kozhikode, Kerala, India</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="order-details-inner">
                                <h4>Products</h4>
                            </div>

                            <div className="added-item-1" style={{ padding: "8px 25px", margin: "10px 0", display: "flex" }}>
                                <div className="added-item-img" style={{ width: "15%" }}>
                                    <img src={peach} style={{ width: "85px" }}></img>
                                </div>
                                <div className="product-right-cart">
                                    <div className="product-right-contents">
                                        <div className="heading" style={{ fontSize: "16px" }}>Peach</div>
                                    </div>
                                    <div className="stock-details" style={{ margin: "0" }}>
                                        <h5 style={{ fontSize: "12px", lineHeight: "0" }}>Delivery Date: 25/07/2023</h5>
                                    </div>
                                </div>
                                <div className="quantities">
                                    <div className="qty">
                                        <h5>Qty: 1</h5>
                                    </div>
                                    <div className="total-order">
                                        <h5>$ 550</h5>
                                    </div>
                                </div>
                            </div>

                            <div className="added-item-1" style={{ padding: "8px 25px", margin: "10px 0", display: "flex" }}>
                                <div className="added-item-img" style={{ width: "15%" }}>
                                    <img src={listing8} style={{ width: "85px" }}></img>
                                </div>
                                <div className="product-right-cart">
                                    <div className="product-right-contents">
                                        <div className="heading" style={{ fontSize: "16px" }}>Orange</div>
                                    </div>
                                    <div className="stock-details" style={{ margin: "0" }}>
                                        <h5 style={{ fontSize: "12px", lineHeight: "0" }}>Delivery Date: 25/07/2023</h5>
                                    </div>
                                </div>
                                <div className="quantities">
                                    <div className="qty">
                                        <h5>Qty: 1</h5>
                                    </div>
                                    <div className="total-order">
                                        <h5>$ 120</h5>
                                    </div>
                                </div>
                            </div>
                            <button className='add-new-address' style={{ margin: "20px 0 0", padding: "10px" }}>BACK TO ORDER HISTORY </button>
                        </div>
                        <div className="track-order">
                            <div className="order-details-inner">
                                <h4>Track Order</h4>
                            </div>
                            <Timeline />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
export default Orderdetails

