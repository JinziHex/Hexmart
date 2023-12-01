import React from 'react'
import Header from '../../components/Auth/Header'
import Footer from '../../components/Auth/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faAngleRight } from '@fortawesome/free-solid-svg-icons'
import usericon from '../../Asset/images/user-icon.svg'
import order from '../../Asset/images/order.svg'
import orderwallet from '../../Asset/images/order-wallet.svg'
import orderlocation from '../../Asset/images/order-location.svg'
import logout from '../../Asset/images/logout.svg'
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { useState } from 'react'
import dayjs from 'dayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';

function Editprofile() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 352,
        bgcolor: 'background.paper',
        border: '0px solid #000',
        boxShadow: 24,
        p: 4,
        outline: 0,
        borderRadius: '8px',
    };
    return (
        <div>
            <Header />
            <div className="edit-profile-main">
                <div className="container">
                    <div className="listing-header">
                        <span><FontAwesomeIcon icon={faHouse} style={{ color: "rgb(163 154 154)", fontSize: "14px" }} /></span>
                        <span><FontAwesomeIcon icon={faAngleRight} style={{ color: "rgb(163 154 154)", fontSize: "14px" }} /></span>
                        <a href=''><span className='listing-categories'>My Account</span></a>
                    </div>
                    <div className="listing-body">
                        <div className="listing">
                            <div className="listening-content-left">
                                <div className='editprofile-inner active'>
                                    <div className="editprofile-heading">
                                        <div className="user-icon"><img src={usericon}></img></div>
                                    </div>
                                    <div className="user-info">
                                        <p>Name</p>
                                        <p>example@gmail.com</p>
                                        <p>910000000</p>
                                    </div>
                                    <div className="icon">
                                        <FontAwesomeIcon icon={faAngleRight} style={{ color: "#1B85D7", }} />
                                    </div>
                                </div>
                                <div className="edit-menubar">
                                    <div className="edit-menubar-1 editprofile">
                                        <div className="icon"><img src={order}></img></div>
                                        <div className="menu-name">My Order</div>
                                    </div>

                                    <div className="edit-menubar-1 editprofile">
                                        <div className="icon"><img src={orderlocation}></img></div>
                                        <div className="menu-name">Delivery Address</div>
                                    </div>

                                    <div className="edit-menubar-1 editprofile">
                                        <div className="icon"><img src={orderwallet}></img></div>
                                        <div className="menu-name">My Wallet</div>
                                    </div>

                                    <Modal
                                        open={open}
                                        onClose={handleClose}
                                        aria-labelledby="modal-modal-title"
                                        aria-describedby="modal-modal-description"
                                    >
                                        <Box sx={style}>
                                            <div className="popup-main">
                                                <div className="h3">logout</div>
                                                <p>Are you sure you want to logout?</p>
                                                <div className="popup-buttons">
                                                    <button className='cancel'>Cancel</button>
                                                    <button className='logout'>logout</button>
                                                </div>
                                            </div>
                                        </Box>
                                    </Modal>
                                    <div className="editprofile">
                                        <div className="icon" onClick={handleOpen}><img src={logout}></img></div>
                                        <div className="menu-name" onClick={handleOpen}> Logout</div>
                                    </div>
                                </div>
                            </div>
                            <div className="edit-profile-right">
                                <h3>Account Information</h3>
                                <div className="edit-profile-right-content">
                                    <div className="row">
                                        <div className="col-12 col-md-6">
                                            <div className="first-name">
                                                <label>Full Name</label>
                                                <input type='name' name='' value=''></input>
                                            </div>
                                            <div className="first-name">
                                                <label>Mobile Number</label>
                                                <input type='name' name='' value=''></input>
                                            </div>
                                            <div className="first-name">
                                                <label>Email</label>
                                                <input type='name' name='' value=''></input>
                                            </div>

                                            <div className="first-name">
                                                <select>
                                                    <option value="">Gender</option>
                                                    <option value="">January</option>
                                                    <option value="">February</option>
                                                    <option value="">March</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-6">
                                            <div className="first-name datepicker">
                                                <label>Date of Birth</label>
                                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                                    <DemoContainer
                                                        components={[
                                                            'DatePicker',
                                                            'MobileDatePicker',
                                                            'DesktopDatePicker',
                                                            'StaticDatePicker',
                                                        ]}
                                                    >
                                                        <DemoItem>
                                                            <DatePicker/>
                                                        </DemoItem>
                                                    </DemoContainer>
                                                </LocalizationProvider>
                                            </div>

                                            <div className="adress-details">
                                                <div className="country">
                                                    <select>
                                                        <option value="">Country</option>
                                                        <option value="">India</option>
                                                        <option value="">UAE</option>
                                                        <option value="">USA</option>
                                                        <option value="">China</option>
                                                    </select>
                                                </div>
                                                <div className="state">
                                                    <select>
                                                        <option>State</option>
                                                        <option>Kerala</option>
                                                        <option>Tamilnadu</option>
                                                        <option>Gujarat</option>
                                                        <option>UP</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="first-name">
                                                <label>Location</label>
                                                <input type='name' name='' value=''></input>
                                            </div>
                                            <div className="adress-details">
                                                <div className="country">
                                                    <select>
                                                        <option value="">District</option>
                                                        <option value="">Malapuram</option>
                                                        <option value="">Kozhikode</option>
                                                        <option value="">Kollam</option>
                                                        <option value="">Eranakulam</option>
                                                    </select>
                                                </div>
                                                <div className="state">
                                                    <div className="first-name">
                                                        <label style={{ marginTop: "15px" }}>Pincode</label>
                                                        <input type='name' name='' value=''></input>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>


                                    </div>
                                    <div className="first-name" style={{ marginTop: "20px", width: "95%" }}>
                                        <button>update</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Editprofile

