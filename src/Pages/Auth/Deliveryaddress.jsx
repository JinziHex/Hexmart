import React from 'react'
import Header from '../../components/Auth/Header';
import Footer from '../../components/Auth/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faAngleRight } from '@fortawesome/free-solid-svg-icons'
import usericon from '../../Asset/images/user-icon.svg'
import order from '../../Asset/images/order.svg'
import orderwallet from '../../Asset/images/order-wallet.svg'
import orderlocation from '../../Asset/images/order-location.svg'
import orderlocationactive from '../../Asset/images/order-locationactive.svg'
import logout from '../../Asset/images/logout.svg'
import edit from '../../Asset/images/Edit.svg'
import vector from '../../Asset/images/Vector.svg'
import { useState } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

function Deliveryaddress() {
    const [open, setOpen] = React.useState(false);
    const [menu, setmenu] = useState(false)
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const clickMenu = () => {
        setmenu(!menu)
    }
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
            <div className="delivery-address-main">
                <div className="container">
                    <div className="listing-header">
                        <span><FontAwesomeIcon icon={faHouse} style={{ color: "#E2DFDF", }} /></span>
                        <span><FontAwesomeIcon icon={faAngleRight} style={{ color: "#E2DFDF", }} /></span>
                        <a href=''><span className='listing-categories'>My Account</span></a>
                        <span><FontAwesomeIcon icon={faAngleRight} style={{ color: "#E2DFDF", }} /></span>
                        <a href=''><span className='listing-categories'>Delivery Address</span></a>
                    </div>
                    <div className="listing-body">
                        <div className="listing">
                            <div className="listening-content-left">
                                <div className='editprofile-inner'>
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
                                    <div className="editprofile">
                                        <div className="icon"><img className='orderlocation' src={order}></img></div>
                                        <div className="menu-name">My Order</div>
                                    </div>

                                    <div className="editprofile active">
                                        <div className="icon user-icon">
                                            <img className='orderlocation' src={orderlocation}></img>
                                            <img className='orderlocationactive' src={orderlocationactive}></img>
                                        </div>
                                        <div className="menu-name" style={{ textAlign: "left!important" }}>Delivery Address</div>
                                    </div>

                                    <div className="editprofile">
                                        <div className="icon"><img className='orderlocation' src={orderwallet}></img></div>
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
                                        <div className="icon" onClick={handleOpen}><img className='orderlocation' src={logout}></img></div>
                                        <div className="menu-name" onClick={handleOpen}> Logout</div>
                                    </div>
                                </div>
                            </div>
                            <div className="edit-profile-right">
                                <h3>Saved Addresses</h3>
                                <div className="delivery-addresss">
                                    <div className="delivery-address-name">
                                        <div className="name">
                                            Full Name
                                        </div>
                                        {/* <div className="button">
                                            <button>HOME</button>
                                        </div> */}
                                        <div className="edit-button">
                                            <i class="fa fa-ellipsis-v" aria-hidden="true" style={{ cursor: "pointer", position: "relative" }} onClick={clickMenu}></i>
                                        </div>
                                        {menu && <div className="edit-button-inner-contents">
                                            <div className="button-inner-contents">
                                                <div className="edit">
                                                    <img src={edit}></img>
                                                    <button className='edit'>edit</button>
                                                </div>
                                                <div className="delete">
                                                    <img src={vector}></img>
                                                    <button className='delete'>delete</button>
                                                </div>
                                            </div>
                                        </div>}

                                    </div>
                                    <div className="delivery-page-address">
                                        <p>Unit - 12, Upper Basement, Sahya Building,
                                            KSITIL  Special Economic Zone,Govt. Cyberpark,
                                            Nellikkode P.O,Kozhikode, Kerala, India </p>
                                        <p>Phone:9100000000</p>
                                        <p style={{
                                            color: "#764646",
                                            fontSize: "12px",
                                            fontStyle: "normal",
                                            fontWeight: "500",
                                            lineHeight: "normal",
                                        }}>Default Address</p>
                                    </div>
                                </div>
                                <button className='add-new-address'>Add New Address</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <Footer />
        </div >
    )
}
export default Deliveryaddress

