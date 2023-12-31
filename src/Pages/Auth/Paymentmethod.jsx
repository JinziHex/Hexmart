import React from 'react'
import Header from '../../components/Auth/Header'
import Footer from '../../components/Auth/Footer'
import card1 from '../../Asset/images/card-1.svg'
import card2 from '../../Asset/images/card-2.svg'
import card3 from '../../Asset/images/card-3.svg'

function Paymentmethod() {
    return (
        <div>
            <Header />
            <div className="payment-method-main">
                <div className="progressbar-main">
                    <div className="wrapperr">
                        <div className="advantages-shipping">
                            <div className="advantage progressbar">
                                <div className="inner-h4">
                                    <h4 className='d-none d-lg-block'>SHIPPING ADDRESS</h4>
                                    <h4><i class="fa-solid fa-location-dot d-block d-lg-none" style={{ color: "#fff", objectFit: "cover" }}></i></h4>
                                </div>
                            </div>
                            <div className="active progressbar">
                                <div className="inner-h4">
                                    <h4 className='d-none d-lg-block'>PAYMENT</h4>
                                    <h4><i class="fa-solid fa-indian-rupee-sign d-block d-lg-none" style={{ color: "#fff", objectFit: "cover" }}></i></h4>
                                </div>
                            </div>
                            <div className="advantage">
                                <div className="inner-h4">
                                    <h4 className='d-none d-lg-block'>CONFIRMATION</h4>
                                    <h4><i class="fa-solid fa-check d-block d-lg-none" style={{ color: "#fff", objectFit: "cover" }}></i></h4>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="payment-method-form">
                    <div className="container">
                        <div className="payment-method">

                            <div className="row">                                <div className="col-12 col-lg-6" style={{ padding: "10px" }}>

                                <div className="billing-information">
                                    <h2>BILLING INFORMATION</h2>
                                    <form>
                                        <div className="row">
                                            <div className="col-12">
                                                <div className="address-1">
                                                    <label>First Name</label>
                                                    <input type='name' name='' value=''></input>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="address-1">
                                            <label>Second Name </label>
                                            <input type='name' name='' value=''></input>
                                        </div>
                                        <div className="address-2">
                                            <label>Billing Address</label>
                                            <input type='name' name='' value=''></input>
                                        </div>
                                        <div className="address-2">
                                            <label>City</label>
                                            <input type='name' name='' value=''></input>
                                        </div>
                                        <div className="name row">
                                            <div className="col-6">
                                                <div className="first-name">
                                                    <label>Pincode</label>
                                                    <input type='name' name='' value=''></input>
                                                </div>
                                            </div>
                                            <div className="col-6">
                                                <div className="last-name">
                                                    <label>Country</label>
                                                    <input type='email' name='' value=''></input>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="checkbox">
                                            <input type="checkbox" name="" value="" style={{ marginTop: "2px", marginBottom: "2px" }} />
                                            <label>Same As Shipping Address</label>
                                        </div>
                                    </form>
                                </div>
                            </div>
                                <div className="col-12 col-lg-6" style={{ padding: "10px" }}>
                                    <h2>CREDIT CARD INFORMATION</h2>
                                    <form>
                                        <div className="row">
                                            <div className="col-12">
                                                <div className="address-1">
                                                    <label>Name Of Card</label>
                                                    <input type='name' name='' value=''></input>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-12">
                                                <div className="address-1">
                                                    <label>Credit Card Number</label>
                                                    <input type='name' name='' value=''></input>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="name">
                                                <div className="col-12">
                                                    <div className="first-name">
                                                        <label>Security Code</label>
                                                        <input type='name' name='' value=''></input>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                    <div className="expiry-dates row">
                                        <div className="col-6">
                                            <div className="expiry-date">
                                                <label>Expiration Date</label>
                                                <select>
                                                    <option value="">month</option>
                                                    <option value="">January</option>
                                                    <option value="">February</option>
                                                    <option value="">March</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-6">
                                            <div className="expiry-date">
                                                <select name="" id="">
                                                    <option value="">year</option>
                                                    <option value="">2000</option>
                                                    <option value="">2001</option>
                                                    <option value="">2002</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="cardtype" style={{ margin: "40px 0" }}>
                                        <div className="atmcards">
                                            <h2>Accepted Cards</h2>
                                            <div className="cardtypes">
                                                <div className="card-1">
                                                    <a href=''><img src={card1}></img></a>
                                                </div>
                                                <div className="card-1">
                                                    <a href=''><img src={card2}></img></a>
                                                </div>
                                                <div className="card-1">
                                                    <a href=''><img src={card3}></img></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="submit-button">
                    <button>SUBMIT  PAYMENT</button>
                </div>
            </div>
            <Footer />
        </div>
    )
}
export default Paymentmethod

