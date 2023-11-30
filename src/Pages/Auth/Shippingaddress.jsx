import React from 'react'
import Header from '../../components/Auth/Header'
import Footer from '../../components/Auth/Footer'

function Shippingaddress() {
    return (
        <div>
            <Header />
            <div className="shipping-address-main">
                <div className="progressbar-main">
                    <div className="wrapperr">
                        <div className="advantages-shipping">
                            <div className="active progressbar">
                                <div className="inner-h4">
                                    <h4>SHIPPING ADDRESS</h4>
                                </div>
                            </div>
                            <div className="advantage progressbar">
                                <div className="inner-h4">
                                    <h4>PAYMENT</h4>
                                </div>
                            </div>
                            <div className="advantage">
                                <div className="inner-h4">
                                    <h4>CONFIRMATION</h4>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="container">
                    <div className="delivery-address">
                        <div className="shipping-address">
                            <h2>SHIPPING ADDRESS</h2>
                            <form>
                                <div className="name row">
                                    <div className="col-12 col-md-6"> <div className="first-name">
                                        <label>Firstname</label>
                                        <input type='name' name='' value=''></input>
                                    </div></div>
                                    <div className="col-12 col-md-6">
                                        <div className="last-name">
                                            <label>Lastname</label>
                                            <input type='name' name='' value=''></input>
                                        </div>
                                    </div>


                                </div>
                                <div className="row">
                                    <div className="address-1">
                                        <div className="col-12">
                                            <label>Address (line 1)</label>
                                            <input type='name' name='' value=''></input>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="address-2">
                                        <div className="col-12">
                                            <label>Address (line 2)</label>
                                            <input type='name' name='' value=''></input>
                                        </div>
                                    </div>
                                </div>

                                <div className="name">
                                    <div className="first-name">
                                        <label>Phone Number</label>
                                        <input type='name' name='' value=''></input>
                                    </div>
                                    <div className="last-name">
                                        <label>E-mail</label>
                                        <input type='email' name='' value=''></input>
                                    </div>
                                </div>
                                <div className="name">
                                    <div className="first-name">
                                        <label>Pincode</label>
                                        <input type='name' name='' value=''></input>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="billing-address">
                            <h2>BILLING ADDRESS</h2>
                            <form>
                                <div className="address-1">
                                    <label>Address (line 1)</label>
                                    <input type='name' name='' value=''></input>
                                </div>
                                <div className="address-2">
                                    <label>Address (line 2)</label>
                                    <input type='name' name='' value=''></input>
                                </div>
                                <div className="name row">
                                    <div className="col-12 col-md-6">
                                    <div className="first-name">
                                        <label>Pincode</label>
                                        <input type='name' name='' value=''></input>
                                    </div>
                                    </div>
                                    <div className="col-12 col-md-6">
                                    <div className="last-name">
                                        <label>City</label>
                                        <input type='name' name='' value=''></input>
                                    </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="submit-button">
                        <button>GO TO PAYMENT</button>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Shippingaddress

