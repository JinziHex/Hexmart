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
                        <span><FontAwesomeIcon icon={faHouse} style={{ color: "#E2DFDF", }} /></span>
                        <span><FontAwesomeIcon icon={faAngleRight} style={{ color: "#E2DFDF", }} /></span>
                        <a href=''><span className='listing-categories'>My Account</span></a>
                    </div>
                    <div className="edit-profile-h4">
                        <h4>My Account</h4>
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
                                <h3>Edit Profile Details</h3>
                                <div className="edit-profile-right-content">
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
                                    <div className="first-name">
                                        <label>Date of Birth</label>
                                        <div className="date-of-birth">
                                            <input type='date' name='' value=''></input>
                                        </div>
                                    </div>
                                    <div className="first-name">
                                        <button>Save Changes</button>
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

