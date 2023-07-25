import React from 'react'
import '../../Asset/Css/style.css'
import '../../Asset/Css/responsive.css'
import { useState } from 'react';
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'

function Login() {
    // Button seen //
    const [passwordType, setPasswordType] = useState("");
    const [passwordInput, setPasswordInput] = useState("");
    const togglePassword = () => {
        if (passwordType === "password") {
            setPasswordType("text")
            return;
        }
        setPasswordType("password")
    }
    // Button seen : end //
    // Handle form events //
    const { register, handleSubmit, getValues, formState: { errors } } = useForm({
        mode: 'onChange'
    });
    return (
        <div>
            <div className="wrapper">
                <form>
                    <div className="form-outline mb-4">
                        <label className="form-label" for="form2Example1">Email</label>
                        <input type="email" id="form2Example1" className="form-control" />
                    </div>
                    <div className="form-outline mb-4">
                        <label className="form-label" for="form2Example2">Password</label>
                        <label className='eye-control'>
                            {passwordType === "password" ? <FontAwesomeIcon icon={faEyeSlash} style={{ color: "#9f9f9f", }} onClick={togglePassword} /> : <FontAwesomeIcon icon={faEye} style={{ color: "#9f9f9f" }} onClick={togglePassword} />}
                        </label>
                        <input type={passwordType}
                            name="password"
                            className='form-control'{...register("password", {
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
                    {/* {errors.password && <span className='error-message'>{errors.password.message}</span>}<br /> */}
                    <div className="form-outline mb-4">
                        <div className="row button-div">
                            <div className="col-7">
                                <a href="#!">Forgot your password?</a>
                            </div>
                            <div className="col-5">
                                <button type="button" className="btn btn-primary btn-block mb-4">Login</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default Login

