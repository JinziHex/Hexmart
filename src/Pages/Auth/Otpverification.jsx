import React from 'react'
import logo from '../../Asset/images/logo.png'
import loginimg from '../../Asset/images/login-img.png'
import 'react-tabs/style/react-tabs.css';
import '../../Asset/Css/responsive.css'

function Otpverification() {
    return (
        <div>
            <div className='body-login'>
                <div className="container page-height">
                    <div className="row login-row">
                        <div className="col-12 col-md-6">
                            <img className='loginimg' src={loginimg}></img>
                        </div>
                        <div className="col-12 col-md-6 login-div-parent">
                            <div className="login-div">
                                <div className="wrapper">
                                    <img className='logo' src={logo}></img>
                                    <div className='forgotpassword-head'>OTP VERIFICATION</div>
                                    <div className="wrapper">
                                        <form>
                                            <div id="otp" class="inputs d-flex flex-row justify-content-center mt-2">
                                                <input class="m-2 text-center form-control rounded" type="text" id="first" maxlength="1" />
                                                <input class="m-2 text-center form-control rounded" type="text" id="second" maxlength="1" />
                                                <input class="m-2 text-center form-control rounded" type="text" id="third" maxlength="1" />
                                                <input class="m-2 text-center form-control rounded" type="text" id="fourth" maxlength="1" />
                                                <input class="m-2 text-center form-control rounded" type="text" id="fourth" maxlength="1" />
                                                <input class="m-2 text-center form-control rounded" type="text" id="fourth" maxlength="1" />
                                            </div>
                                            <div className="form-outline mb-4">
                                                <div className="row button-div">
                                                    <div className="col-7">
                                                        <a href="#!" style={{ fontSize: "14px" }}>Resend otp</a>
                                                    </div>
                                                    <div className="col-5">
                                                        <button type="button" className="btn btn-primary btn-block mb-4">VERIFY</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Otpverification

