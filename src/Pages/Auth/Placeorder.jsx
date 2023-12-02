import React from 'react'
import Header from '../../components/Auth/Header'
import Footer from '../../components/Auth/Footer'
import card1 from '../../Asset/images/card-1.svg'
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import correct from '../../Asset/images/correct.svg'
import notcorrect from '../../Asset/images/not-correct.svg'

function Placeorder() {
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 600,
        bgcolor: 'background.paper',
        border: '0px solid #000',
        boxShadow: 24,
        p: 4,
        outline: 0,
        borderRadius: '8px',
        padding: '25px',
    };
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <div>
            <Header />
            <div className="placeorder-main">
                <div className="progressbar-main">
                    <div className="wrapperr">
                        <div className="advantages-shipping">
                            <div className="advantage progressbar">
                            <div className="inner-h4">
                                    <h4 className='d-none d-lg-block'>SHIPPING ADDRESS</h4>
                                    <h4><i class="fa-solid fa-location-dot d-block d-lg-none" style={{ color: "#fff", objectFit: "cover" }}></i></h4>
                                </div>

                            </div>
                            <div className="advantage progressbar">
                                <div className="inner-h4">
                                <h4 className='d-none d-lg-block'>PAYMENT</h4>
                                    <h4><i class="fa-solid fa-indian-rupee-sign d-block d-lg-none" style={{ color: "#fff", objectFit: "cover" }}></i></h4>
                                </div>
                            </div>
                            <div className="active progressbar" style={{ background: "#0370C4" }}>
                                <div className="inner-h4">
                                <h4 className='d-none d-lg-block'>CONFIRMATION</h4>
                                    <h4><i class="fa-solid fa-check d-block d-lg-none" style={{ color: "#fff", objectFit: "cover" }}></i></h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-lg-6">
                            <div className="your-information">
                                <h2>YOUR INFORMATION</h2>
                                <button>Edit</button>
                            </div>
                            <div className="delivery-address-name">
                                <h3>name</h3>
                            </div>
                            <div className="delivery-address-name">
                                <h4>example@gmail.com</h4>
                            </div>
                            <div className="your-information">
                                <h2>PAYMENT</h2>
                                <button>Edit</button>
                            </div>
                            <div className="delivery-address-body">
                                <div className="delivery-address-name"><img src={card1}></img>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-6">
                            <div className="shippingaddress">
                                <h2>SHIPPING ADDRESS</h2>
                                <button>Edit</button>
                            </div>
                            <div className="delivery-address-name">
                                <h3>name</h3>
                            </div>
                            <div className="delivery-address-name address">
                                <h3>Unit - 12, Upper<br></br> Basement, Sahya<br></br>  Building,KSITIL Special
                                    <br></br>Economic Zone,Govt.<br></br> Cyberpark, Nellikkode P.O,<br></br>Kozhikode,Kerala, India</h3>
                            </div>
                            <div className="shippingaddress">
                                <h2>BILLING ADDRESS</h2>
                                <button>Edit</button>
                            </div>
                            <div className="delivery-address-name">
                                <h3>name</h3>
                            </div>
                            <div className="delivery-address-name address">
                                <h3>Unit - 12, Upper<br></br> Basement, Sahya<br></br>  Building,KSITIL Special
                                    <br></br>Economic Zone,Govt.<br></br> Cyberpark, Nellikkode P.O,<br></br>Kozhikode,Kerala, India</h3>
                            </div>
                            <div className="place-order">
                        <p>Order Total:<span>$ 669</span></p>
                        <button onClick={handleOpen}>PLACE ORDER</button>
                        <Modal
                            open={open}
                            onClose={handleClose}
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description"
                        >
                            <Box sx={style}>
                                <div className="row login-row-popup">
                                    <div className="center-icon">
                                        <img src={correct}></img>
                                    </div>
                                    <h4 className='order-placed'>order successfully placed</h4>
                                    <div className='border-bottom'></div>
                                    <p className='order-confirmation'>In the unlikely case of items being unavailable.<br></br>
                                        what would you prefer</p>
                                    <button className='continue-shopping'>Continue Shopping</button>
                                </div>
                            </Box>
                        </Modal>
                    </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Placeorder

