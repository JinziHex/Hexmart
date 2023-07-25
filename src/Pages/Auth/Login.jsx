import React from 'react'
import Loginn from '../../components/Auth/Loginn'
import Signup from '../../components/Auth/Signup'
import logo from '../../Asset/images/logo.png'
import loginimg from '../../Asset/images/login-img.png'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
function Login() {
    return (
        <div className='body-login'>
            <div className="container page-height">
                <div className="row login-row">
                    <div className="col-12 col-md-6">
                        <img className='img-responsive loginimg' src={loginimg}></img>
                    </div>
                    <div className="col-12 col-md-6 login-div-parent">
                        <div className="login-div">
                            <div className="wrapper">
                                <img className='logo img-responsive' src={logo}></img>
                                <Tabs>
                                    <TabList>
                                        <Tab> <div className='login-head'>LOGIN</div></Tab>
                                        <Tab><div className='login-head'>SIGN UP</div></Tab>
                                    </TabList>
                                    <TabPanel>
                                        <Loginn />
                                    </TabPanel>
                                    <TabPanel>
                                        <Signup />
                                    </TabPanel>
                                </Tabs>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Login
