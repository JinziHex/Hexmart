import React from 'react'
import Header from '../../components/Auth/Header'
import Footer from '../../components/Auth/Footer'
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import usericon from '../../Asset/images/user-icon.svg'
import order from '../../Asset/images/order.svg'
import walletactive from '../../Asset/images/wallet-active.svg'
import orderwallet from '../../Asset/images/order-wallet.svg'
import orderlocation from '../../Asset/images/order-location.svg'
import logout from '../../Asset/images/logout.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';
import wallet from "../../Asset/images/wallet1.svg"

function Wallet() {
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
            <div className="wallet-page-main">
                <div className="container">
                    <div className="listing-header">
                        <span><FontAwesomeIcon icon={faHouse} style={{ color: "#E2DFDF", }} /></span>
                        <span><FontAwesomeIcon icon={faAngleRight} style={{ color: "#E2DFDF", }} /></span>
                        <a href=''><span className='listing-categories'>My Account</span></a>
                        <span><FontAwesomeIcon icon={faAngleRight} style={{ color: "#E2DFDF", }} /></span>
                        <a href=''><span className='listing-categories'>My Wallet</span></a>
                    </div>
                    <div className="listing-body">
                        <div className="listing">
                            <div className="row">
                                <div className="col-12 col-lg-4">
                                   
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
                                                <div className="icon">
                                                    <img className='orderlocation' src={order}></img>
                                                </div>
                                                <div className="menu-name" style={{ textAlign: "left!important" }}>My Order</div>
                                            </div>

                                            <div className="editprofile">
                                                <div className="icon"><img className='orderlocation' src={orderlocation}></img></div>
                                                <div className="menu-name">Delivery Address</div>
                                            </div>

                                            <div className="editprofile active">
                                                <div className="icon user-icon">
                                                    <img className='orderlocation' src={orderwallet}></img>
                                                    <img className='orderlocationactive' src={walletactive}></img>
                                                </div>
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
                                                        <p style={{ fontSize: "14px" }}>Are you sure you want to logout?</p>
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
                                <div className="col-12 col-lg-8">
                                    <div className="wallet-head">
                                        <div className="row" style={{ alignItems: "center" }}>
                                            <div className="col-12 col-md-1">
                                                <img src={wallet}></img>
                                            </div>
                                            <div className="col-12 col-md-8">
                                                <h4>$ 5,428.00</h4>
                                                <h5>Current Wallet Balance</h5>
                                            </div>
                                            <div className="col-12 col-md-3">
                                                <button>+ Add Money to Wallet </button>
                                            </div>
                                        </div>
                                    </div>
                                    <h3 className='wallet-transaction'>Recent Transactions</h3>
                                    <div className="wallet-content-head">
                                        <div className="row">
                                            <div className="col-4" style={{ justifyContent: "flex-start", display: "flex" }}>
                                                <h4>Date</h4>
                                            </div>
                                            <div className="col-4" style={{ justifyContent: "flex-start", display: "flex" }}>
                                                <h4>Description</h4>
                                            </div>
                                            <div className="col-4" style={{ justifyContent: "flex-end", display: "flex" }}>
                                                <h4>Point</h4>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="wallet-content-head">
                                        <div className="row">
                                            <div className="col-4" style={{ justifyContent: "flex-start", display: "flex" }}>
                                                <h5>02 july 2023</h5>
                                            </div>
                                            <div className="col-4" style={{ justifyContent: "flex-start", display: "flex" }}>
                                                <h5>Admin points</h5>
                                            </div>
                                            <div className="col-4" style={{ justifyContent: "flex-end", display: "flex" }}>
                                                <h5>8.00</h5>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="wallet-content-head">
                                        <div className="row">
                                            <div className="col-4" style={{ justifyContent: "flex-start", display: "flex" }}>
                                                <h5>02 july 2023</h5>
                                            </div>
                                            <div className="col-4" style={{ justifyContent: "flex-start", display: "flex" }}>
                                                <h5>Admin points</h5>
                                            </div>
                                            <div className="col-4" style={{ justifyContent: "flex-end", display: "flex" }}>
                                                <h5>8.00</h5>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="wallet-content-head">
                                        <div className="row">
                                            <div className="col-4" style={{ justifyContent: "flex-start", display: "flex" }}>
                                                <h5>02 july 2023</h5>
                                            </div>
                                            <div className="col-4" style={{ justifyContent: "flex-start", display: "flex" }}>
                                                <h5>Admin points</h5>
                                            </div>
                                            <div className="col-4" style={{ justifyContent: "flex-end", display: "flex" }}>
                                                <h5>8.00</h5>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="wallet-content-head">
                                        <div className="row">
                                            <div className="col-4" style={{ justifyContent: "flex-start", display: "flex" }}>
                                                <h5>02 july 2023</h5>
                                            </div>
                                            <div className="col-4" style={{ justifyContent: "flex-start", display: "flex" }}>
                                                <h5>Admin points</h5>
                                            </div>
                                            <div className="col-4" style={{ justifyContent: "flex-end", display: "flex" }}>
                                                <h5>8.00</h5>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="wallet-content-head">
                                        <div className="row">
                                            <div className="col-4" style={{ justifyContent: "flex-start", display: "flex" }}>
                                                <h5>02 july 2023</h5>
                                            </div>
                                            <div className="col-4" style={{ justifyContent: "flex-start", display: "flex" }}>
                                                <h5>Admin points</h5>
                                            </div>
                                            <div className="col-4" style={{ justifyContent: "flex-end", display: "flex" }}>
                                                <h5>8.00</h5>
                                            </div>
                                        </div>
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

export default Wallet
