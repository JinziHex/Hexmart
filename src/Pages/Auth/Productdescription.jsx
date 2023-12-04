import React from 'react'
import Header from '../../components/Auth/Header'
import Footer from '../../components/Auth/Footer'
import Description from '../../components/Auth/Description'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faAngleRight, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Reviews from '../../components/Auth/Reviews'
import peach1 from '../../Asset/images/peach-1.png'
import peach2 from '../../Asset/images/peach-2.png'
import peach3 from '../../Asset/images/peach-3.png'
import peach from '../../Asset/images/peach.png'
import Rating from '@mui/material/Rating';
import cartt from '../../Asset/images/cartt.svg'
import listing1 from '../../Asset/images/listing-1.png'
import listing2 from '../../Asset/images/listing-2.png'
import listing3 from '../../Asset/images/listing-3.png'
import listing4 from '../../Asset/images/listing-4.png'
import listing5 from '../../Asset/images/listing-5.png'
function Productdescription() {
    const [value, setValue] = React.useState(4);
    return (
        <div>
            <Header />
            <div className="product-description-main">
                <div className="container">
                    <div className="listing-header">
                        <span><FontAwesomeIcon icon={faHouse} style={{ color: "#E2DFDF", }} /></span>
                        <span><FontAwesomeIcon icon={faAngleRight} style={{ color: "#E2DFDF", }} /></span>
                        <span className='listing-categories'>ALL CATEGORIES </span>
                        <span><FontAwesomeIcon icon={faAngleRight} style={{ color: "#E2DFDF", }} /></span>
                        <span className='listing-categories'>FRESH FOOD</span>
                        <span><FontAwesomeIcon icon={faAngleRight} style={{ color: "#E2DFDF", }} /></span>
                        <a href="" className='listing-categories active'>PEACH </a>
                    </div>
                    <div className="product-description">
                        <div className="product-left">
                            <div className="product-varient">
                                <div className="product-varient-img">
                                    <div className="img-1"><img src={peach1}></img></div>
                                    <div className="img-1"><img src={peach2}></img></div>
                                    <div className="img-1"><img src={peach3}></img></div>
                                </div>
                            </div>
                            <div className="product-main">
                                <img src={peach}></img>
                            </div>
                        </div>
                        <div className="product-right">
                            <div className="product-right-contents">
                                <div className="heading">PEACH</div>
                                <div className="share-icons">
                                    <i class="fa-regular fa-heart"  style={{fontSize:"16px"}} aria-hidden="true"></i>
                                    <i class="fa fa-share-alt" aria-hidden="true"></i>
                                </div>
                            </div>
                            <div className="stars">
                                <Rating name="read-only" value={value} readOnly />
                            </div>
                            <div className="rupee">
                                <h5>529 </h5>
                            </div>
                            <div className="stock-details">
                                <h5>Availability : <span>IN STOCK</span></h5>
                            </div>
                            <div className="product-code">
                                <h5>Product code : <span>HABDU124</span></h5>
                            </div>
                            <div className="color">
                                <h5>colour</h5>
                                <div className="color-selections">
                                    <button className='red'></button>
                                    <button className='green'></button>
                                </div>
                            </div>
                            <div className="buttoncategory-description">
                                <button className='plus'>-</button><span className='quantity'>1</span>
                                <button className='minus'>+</button>
                            </div>
                            <div className="button-corosal-description">
                                <button type="button" className="category-button"><img src={cartt} />ADD</button>
                            </div>
                        </div>
                    </div>

                    <Tabs>
                        <TabList>
                            <Tab> <div className='login-head'>DESCRIPTION </div></Tab>
                            <Tab><div className='login-head'>REVIEWS</div></Tab>
                        </TabList>
                        <TabPanel>
                            <Description />
                        </TabPanel>
                        <TabPanel>
                            <Reviews />
                        </TabPanel>
                    </Tabs>

                    <div className="trending-product">
                        <h3>RELATED PRODUCTS</h3>

                        <div className="trending-products">
                            <div className="trending-products-inner">
                                <div class="favorites"><i class="fa-regular fa-heart"  style={{fontSize:"16px"}} aria-hidden="true"></i></div>
                                <div class="trending-offer">52 %</div>
                                <a><img src={listing1} alt=''></img></a>
                                <div className="trending-contents">
                                    <div className="price">
                                        <h5>Delicious cake </h5>
                                    </div>
                                    <div className="stars">
                                        <Rating name="read-only" value={value} readOnly />
                                    </div>
                                </div>
                                <div className="trending-price">
                                    <div className="rupees">
                                        <h5>$ 129 </h5>
                                        <h6>$ 129</h6>
                                    </div>
                                    <div className="button-category">
                                        <button type="button" className="category-button"><img src={cartt} />ADD</button>
                                    </div>
                                </div>
                            </div>
                            <div className="trending-products-inner">
                                <div class="favorites"><i class="fa fa-heart" aria-hidden="true" style={{ color: "red" }}></i></div>
                                <a><img src={listing2}></img></a>
                                <div className="trending-contents">
                                    <div className="price">
                                        <h5>Delicious cake </h5>
                                    </div>
                                    <div className="stars">
                                        <Rating name="read-only" value={value} readOnly />
                                    </div>
                                </div>
                                <div className="trending-price">
                                    <div className="rupees">
                                        <h5>$ 129 </h5>
                                    </div>
                                    <div className="button-category">
                                        <button type="button" className="category-button"><img src={cartt} />ADD</button>
                                    </div>
                                </div>
                            </div>
                            <div className="trending-products-inner">
                                <div class="favorites"><i class="fa-regular fa-heart"  style={{fontSize:"16px"}} aria-hidden="true"></i></div>
                                <a><img src={listing3}></img></a>
                                <div className="trending-contents">
                                    <div className="price">
                                        <h5>Delicious cake </h5>
                                    </div>
                                    <div className="stars">
                                        <Rating name="read-only" value={value} readOnly />
                                    </div>
                                </div>
                                <div className="trending-price">
                                    <div className="rupees">
                                        <h5>$ 129 </h5>
                                    </div>
                                    <div className="button-category">
                                        <button type="button" className="category-button"><img src={cartt} />ADD</button>
                                    </div>
                                </div>
                            </div>
                            <div className="trending-products-inner">
                                <div class="favorites"><i class="fa-regular fa-heart" style={{fontSize:"16px"}} aria-hidden="true"></i></div>
                                <div class="trending-offer">25 %</div>
                                <a><img src={listing4}></img></a>
                                <div className="trending-contents">
                                    <div className="price">
                                        <h5>Delicious cake </h5>
                                    </div>
                                    <div className="stars">
                                        <Rating name="read-only" value={value} readOnly />
                                    </div>
                                </div>
                                <div className="trending-price">
                                    <div className="rupees">
                                        <h5>$ 129 </h5>
                                        <h6>$ 129</h6>
                                    </div>
                                    <div className="button-category">
                                        <button type="button" className="category-button"><img src={cartt} />ADD</button>
                                    </div>
                                </div>
                            </div>
                            <div className="trending-products-inner">
                                <div class="favorites"><i class="fa fa-heart" aria-hidden="true" style={{ color: "red" }}></i></div>
                                <a><img src={listing5}></img></a>
                                <div className="trending-contents">
                                    <div className="price">
                                        <h5>Delicious cake </h5>
                                    </div>
                                    <div className="stars">
                                        <Rating name="read-only" value={value} readOnly />
                                    </div>
                                </div>
                                <div className="trending-price">
                                    <div className="rupees">
                                        <h5>$ 129 </h5>

                                    </div>
                                    <div className="button-category">
                                        <button type="button" className="category-button"><img src={cartt} />ADD</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="pagination">
                        <span className='active'>1</span>
                        <span className='inactive'>2</span>
                        <span className='inactive'><FontAwesomeIcon icon={faArrowRight} style={{ color: "#665D5D", }} /></span>
                    </div>
                </div>
            </div>
            <Footer />
        </div >
    )
}

export default Productdescription

