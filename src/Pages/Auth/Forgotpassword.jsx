import React from 'react'
import logo from '../../Asset/images/logo.png'
import loginimg from '../../Asset/images/login-img.png'
import 'react-tabs/style/react-tabs.css';
import '../../Asset/Css/responsive.css'

function Forgotpassword() {
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
                                    <div className='forgotpassword-head'>FORGOT PASSWORD</div>
                                    <div className="wrapper">
                                        <form>
                                            <div className="form-outline mb-4">
                                                <label className="form-label" for="form2Example1">Email</label>
                                                <input type="email" id="form2Example1" className="form-control" />
                                            </div>
                                            <div className="form-outline mb-4">
                                                <div className="row button-div">
                                                    <div className="col-7">
                                                        <a href="#!" style={{fontSize:"14px"}}>Back to login</a>
                                                    </div>
                                                    <div className="col-5">
                                                        <button type="button" className="btn btn-primary btn-block mb-4">SEND</button>
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

export default Forgotpassword

