import React from 'react'
import Header from '../../components/Auth/Header'
import Footer from '../../components/Auth/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faAngleRight, faCaretDown, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import usericon from '../../Asset/images/user-icon.svg'
import order from '../../Asset/images/order.svg'
import myorder from '../../Asset/images/myorder-active.svg'
import orderwallet from '../../Asset/images/order-wallet.svg'
import orderlocation from '../../Asset/images/order-location.svg'
import logout from '../../Asset/images/logout.svg'
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { useState } from 'react'
import peach from '../../Asset/images/peach.png'
import orange from '../../Asset/images/listing-8.png'
import tomato from '../../Asset/images/listing-1.png'
import chery from '../../Asset/images/listing-4.png'
import gooseberry from '../../Asset/images/listing-12.png'
import onion from '../../Asset/images/listing-2.png'
import Dropdown from 'react-bootstrap/Dropdown';


function Myorder() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [menu, setmenu] = useState(false)

    const filterClick = () => {
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
            <div className="myorder-main">
                <div className="container">
                    <div className="listing-header">
                        <span><FontAwesomeIcon icon={faHouse} style={{ color: "#E2DFDF", }} /></span>
                        <span><FontAwesomeIcon icon={faAngleRight} style={{ color: "#E2DFDF", }} /></span>
                        <a href=''><span className='listing-categories'>My Account</span></a>
                        <span><FontAwesomeIcon icon={faAngleRight} style={{ color: "#E2DFDF", }} /></span>
                        <a href=''><span className='listing-categories'>My order</span></a>
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
                                    <div className="editprofile active">
                                        <div className="icon user-icon">
                                            <img className='orderlocation' src={order}></img>
                                            <img className='orderlocationactive' src={myorder}></img>
                                        </div>
                                        <div className="menu-name" style={{ textAlign: "left!important" }}>My Order</div>
                                    </div>

                                    <div className="editprofile">
                                        <div className="icon"><img className='orderlocation' src={orderlocation}></img></div>
                                        <div className="menu-name">Delivery Address</div>
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
                                                <p style={{fontSize:"14px"}}>Are you sure you want to logout?</p>
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

                            <div className="edit-profile-right-order">
                                <Dropdown>

                                    <div className="row">
                                        <div className="col-10">
                                            <div className="shipping-address">
                                                <h2>ORDER LIST</h2>
                                            </div>
                                        </div>
                                        <Dropdown.Toggle variant="success" id="dropdown-basic" className="col-2">
                                                <button className='filter'>Filter</button>
                                        </Dropdown.Toggle>
                                    </div>

                                    <Dropdown.Menu>
                                    <Dropdown.Item>
                                        <div className='listening-content-inner order' style={{ height: "auto" }}>
                                            <div className="heading">
                                                <div className="name">order status</div>
                                                <div className="icon"><FontAwesomeIcon icon={faCaretDown} style={{ color: "#E2DFDF" }} /></div>
                                            </div>
                                            <form>
                                                <div className="input">
                                                    <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                                                    <label> Confirmed</label></div>
                                                <div className="input">
                                                    <input type="checkbox" id="vehicle2" name="vehicle2" value="Car" />
                                                    <label>Shipped</label>
                                                </div>
                                                <div className="input">
                                                    <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat" />
                                                    <label> Out for delivery</label>
                                                </div>
                                                <div className="input">
                                                    <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat" />
                                                    <label>Delivered</label>
                                                </div>
                                            </form>
                                            <div className="heading">
                                                <div className="name">Date range</div>
                                                <div className="icon"><FontAwesomeIcon icon={faCaretDown} style={{ color: "#E2DFDF" }} /></div>
                                            </div>
                                            <form>
                                                <div className="input">
                                                    <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                                                    <label>Last 30 Days</label></div>
                                                <div className="input">
                                                    <input type="checkbox" id="vehicle2" name="vehicle2" value="Car" />
                                                    <label>Last 6 months</label>
                                                </div>
                                                <div className="input">
                                                    <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat" />
                                                    <label> Last one year</label>
                                                </div>
                                            </form>
                                        </div>
                                        </Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                                <div className="orderd-items">
                                    <div className="orderd-items-img">
                                        <div className="orderd-items-img-inner">
                                            <div className="image-div" style={{ backgroundImage: `url(${peach})`, backgroundRepeat: "no-repeat", backgroundPosition: "center", backgroundSize: "contain" }}>
                                                {/* <img src={peach}></img> */}
                                            </div>
                                            <div className="image-div" style={{ backgroundImage: `url(${orange})`, backgroundRepeat: "no-repeat", backgroundPosition: "center", backgroundSize: "contain" }}>
                                                {/* <img src={orange}></img> */}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="orderd-description">
                                        <div className="order-description-inner">
                                            <span className='order-number'>Order Number</span>
                                        </div>
                                        <div className="order-description-inner">
                                            <span className='order-id'>16886527142206662B</span>
                                        </div>

                                        <div className="order-description-inner">
                                            <span className='order-number'>Order Date</span>
                                        </div>
                                        <div className="order-description-inner">
                                            <span className='order-id'>Oct 23</span>
                                        </div>
                                        <div className="order-description-inner">
                                            <span className='order-id'>Groceries (1 item)</span>
                                        </div>

                                    </div>
                                    <div className="delivery-date">
                                        <div className="delivery-date-inner">
                                            <div className="delivery-date">
                                                Delivered,Oct 23
                                            </div>
                                            <div className="icon">
                                                <FontAwesomeIcon icon={faChevronRight} style={{ color: "#1b6298", }} />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="orderd-items">
                                    <div className="orderd-items-img">
                                        <div className="orderd-items-img-inner">
                                            <div className="image-div" style={{ backgroundImage: `url(${chery})`, backgroundRepeat: "no-repeat", backgroundPosition: "center", backgroundSize: "contain" }}>
                                                {/* <img src={chery}></img> */}
                                            </div>
                                            <div className="image-div" style={{ backgroundImage: `url(${gooseberry})`, backgroundRepeat: "no-repeat", backgroundPosition: "center", backgroundSize: "contain" }}>

                                                {/* <img src={gooseberry}></img> */}
                                            </div>
                                            <div className="image-div" style={{ backgroundImage: `url(${onion})`, backgroundRepeat: "no-repeat", backgroundPosition: "center", backgroundSize: "contain" }}>
                                                {/* <img src={onion}></img> */}
                                            </div>
                                            {/* <div className="image-div">
                                                <span>+21</span>
                                            </div> */}
                                        </div>
                                    </div>
                                    <div className="orderd-description">
                                        <div className="order-description-inner">
                                            <span className='order-number'>Order Number</span>
                                        </div>
                                        <div className="order-description-inner">
                                            <span className='order-id'>16886527142206662B</span>
                                        </div>

                                        <div className="order-description-inner">
                                            <span className='order-number'>Order Date</span>
                                        </div>
                                        <div className="order-description-inner">
                                            <span className='order-id'>Oct 23</span>
                                        </div>
                                        <div className="order-description-inner">
                                            <span className='order-id'>Groceries (1 item)</span>
                                        </div>

                                    </div>
                                    <div className="delivery-date">
                                        <div className="delivery-date-inner">
                                            <div className="delivery-date">
                                                Delivered,Oct 23
                                            </div>
                                            <div className="icon">
                                                <FontAwesomeIcon icon={faChevronRight} style={{ color: "#1b6298", }} />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="orderd-items">
                                    <div className="orderd-items-img">
                                        <div className="orderd-items-img-inner">
                                            <div className="image-div" style={{ backgroundImage: `url(${tomato})`, backgroundRepeat: "no-repeat", backgroundPosition: "center", backgroundSize: "contain" }}>
                                                {/* <img src={tomato}></img> */}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="orderd-description">
                                        <div className="order-description-inner">
                                            <span className='order-number'>Order Number</span>
                                        </div>
                                        <div className="order-description-inner">
                                            <span className='order-id'>16886527142206662B</span>
                                        </div>

                                        <div className="order-description-inner">
                                            <span className='order-number'>Order Date</span>
                                        </div>
                                        <div className="order-description-inner">
                                            <span className='order-id'>Oct 23</span>
                                        </div>
                                        <div className="order-description-inner">
                                            <span className='order-id'>Groceries (1 item)</span>
                                        </div>

                                    </div>
                                    <div className="delivery-date">
                                        <div className="delivery-date-inner">
                                            <div className="delivery-date">
                                                Delivered,Oct 23
                                            </div>
                                            <div className="icon">
                                                <FontAwesomeIcon icon={faChevronRight} style={{ color: "#1b6298", }} />
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
        </div >
    )
}
export default Myorder
