import React from 'react'
import Header from '../../components/Auth/Header'
import Footer from '../../components/Auth/Footer'
import card1 from '../../Asset/images/card-1.svg'

function Placeorder() {
    return (
        <div>
            <Header />
            <div className="placeorder-main">
                <div className="progressbar-main">
                    <div className="wrapperr">
                        <div className="advantages-shipping">
                            <div className="advantage progressbar">
                                <div className="inner-h4">
                                    <h4>SHIPPING ADDRESS</h4>
                                </div>
                            </div>
                            <div className="advantage progressbar">
                                <div className="inner-h4">
                                    <h4>PAYMENT</h4>
                                </div>
                            </div>
                            <div className="active progressbar">
                                <div className="inner-h4">
                                    <h4>CONFIRMATION</h4>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="container">
                    <div className="delivery-address">
                        <div className="your-information">
                            <h2>YOUR INFORMATION</h2>
                            <button>Edit</button>
                        </div>
                        <div className="shippingaddress">
                            <h2>SHIPPING ADDRESS</h2>
                            <button>Edit</button>
                        </div>
                    </div>
                    <div className="delivery-address-body">
                        <div className="delivery-address-name">
                            <h3>name</h3>
                        </div>
                        <div className="delivery-address-name">
                            <h3>name</h3>
                        </div>
                    </div>
                    <div className="delivery-address-body">
                        <div className="delivery-address-name">
                            <h4>example@gmail.com</h4>
                        </div>
                        <div className="delivery-address-name address">
                            <h3>Unit - 12, Upper<br></br> Basement, Sahya<br></br>  Building,KSITIL Special
                                <br></br>Economic Zone,Govt.<br></br> Cyberpark, Nellikkode P.O,<br></br>Kozhikode,Kerala, India</h3>
                        </div>
                    </div>

                    <div className="delivery-address">
                        <div className="your-information">
                            <h2>PAYMENT</h2>
                            <button>Edit</button>
                        </div>
                        <div className="shippingaddress">
                            <h2>BILLING ADDRESS</h2>
                            <button>Edit</button>
                        </div>
                    </div>
                    <div className="delivery-address-body">
                        <div className="delivery-address-name"><img src={card1}></img>
                        </div>
                        <div className="delivery-address-name">
                            <h3>name</h3>
                        </div>
                    </div>
                    <div className="delivery-address-body">
                        <div className="delivery-address-name">
                        </div>
                        <div className="delivery-address-name address">
                            <h3>Unit - 12, Upper<br></br> Basement, Sahya<br></br>  Building,KSITIL Special
                                <br></br>Economic Zone,Govt.<br></br> Cyberpark, Nellikkode P.O,<br></br>Kozhikode,Kerala, India</h3>
                        </div>
                    </div>
                    <div className="place-order">
                        <p>Order Total:<span>$ 669</span></p>
                        <button>PLACE ORDER</button>

                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Placeorder

