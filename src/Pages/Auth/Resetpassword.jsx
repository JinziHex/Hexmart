import React from 'react'
import 'react-tabs/style/react-tabs.css';
import '../../Asset/Css/responsive.css'
import logo from '../../Asset/images/logo.png'
import loginimg from '../../Asset/images/login-img.png'
import { useState } from 'react';
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'

function Resetpassword() {
    // Button seen //
    // password //
    const [passwordType, setPasswordType] = useState("");
    const [passwordInput, setPasswordInput] = useState("");
    const togglePassword = () => {
        if (passwordType === "password") {
            setPasswordType("text")
            return;
        }
        setPasswordType("password")
    }
    // password : end//

    // confirmpassword //
    const [passwordconfirmType, setPasswordconfirmType] = useState("");
    const [passwordchangeInput, setPasswordchangeInput] = useState("");
    const toggleConfirmpassword = () => {
        if (passwordconfirmType === "password") {
            setPasswordconfirmType("text")
            return;
        }
        setPasswordconfirmType("password")
    }
    // confirmpassword:end //

    //Button seen: end //


    //Handle form events //
    const { register, handleSubmit, getValues, formState: { errors } } = useForm({
        mode: 'onChange'
    });
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
                                    <div className='forgotpassword-head'>RESET PASSWORD</div>
                                    <div className="wrapper">
                                        <form>
                                            <div className="form-outline mb-4" style={{ position: "relative" }}>
                                                <label className="form-label" for="form2Example2">Password</label>
                                                <label className='eye-control'>
                                                    {passwordType === "password" ? <FontAwesomeIcon icon={faEyeSlash} style={{ color: "#9f9f9f", }} onClick={togglePassword} /> : <FontAwesomeIcon icon={faEye} style={{ color: "#9f9f9f" }} onClick={togglePassword} />}
                                                </label>
                                                <input type={passwordType}
                                                    name="password"
                                                    className='form-control'
                                                    {...register("password", {
                                                        required: 'password is required',
                                                        // pattern: {
                                                        //     value: /^(\ s)(?=.*[0-a])(?=.*[A-Z])(?=.*[a-z])(?=.*[~`!@#$%^&*(--+={}\[\]|\\:;"'<>,.?/_)]){10,16}$/,
                                                        //     message: "password must include one uppercase, one numeric value and one special character"
                                                        // },
                                                        minLength: {
                                                            value: 8,
                                                            message: 'Minimum required length is 8'
                                                        },
                                                        maxLength: {
                                                            value: 15,
                                                            message: 'Maximum required length is 15'
                                                        },
                                                    })} />
                                            </div>
                                            <div class="form-outline flex-fill mb-0" style={{ position: "relative" }}>
                                                <label class="form-label" for="form3Example4cd">Confirm password</label>
                                                <label className='eye-control'>
                                                    {passwordconfirmType === "password" ? <FontAwesomeIcon icon={faEyeSlash} style={{ color: "#9f9f9f", }} onClick={toggleConfirmpassword} /> : <FontAwesomeIcon icon={faEye} style={{ color: "#9f9f9f" }} onClick={toggleConfirmpassword} />}
                                                </label>
                                                <div className="passwords">
                                                    <input type={passwordconfirmType}
                                                        name="confirmpassword"
                                                        className='form-control'
                                                        {...register("confirmpassword", {
                                                            required: 'confirmpassword is required',
                                                            validate: (value) => {
                                                                const { password } = getValues();
                                                                return value === password || "the password do not match"
                                                            }
                                                        })} />
                                                </div>
                                            </div>
                                            <div className="form-outline mb-4">
                                                <div className="row button-div">
                                                    <div className="col-7">
                                                    </div>
                                                    <div className="col-5">
                                                        <button type="button" className="btn btn-primary btn-block mb-4">CONTINUE</button>
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

export default Resetpassword

