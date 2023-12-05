import React from 'react'
import Header from '../../components/Auth/Header'
import Footer from '../../components/Auth/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faAngleRight, faCaretDown, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import Rating from '@mui/material/Rating';
import cartt from '../../Asset/images/cartt.svg'
import listing1 from '../../Asset/images/listing-1.png'
import listing2 from '../../Asset/images/listing-2.png'
import listing3 from '../../Asset/images/listing-3.png'
import listing4 from '../../Asset/images/listing-4.png'
import listing5 from '../../Asset/images/listing-5.png'
import listing6 from '../../Asset/images/listing-6.png'
import listing7 from '../../Asset/images/listing-7.png'
import listing8 from '../../Asset/images/listing-8.png'
import listing9 from '../../Asset/images/listing-9.png'
import listing10 from '../../Asset/images/listing-10.png'
import listing11 from '../../Asset/images/listing11.png'
import listing12 from '../../Asset/images/listing-12.png'
import RangeSlider from 'react-range-slider-input';
import 'react-range-slider-input/dist/style.css';
import bestsellerimgone from '../../Asset/images/bestseller-img-one.png'
import bestsellerimgtwo from '../../Asset/images/bestseller-img-two.png'
import bestsellerimgthree from '../../Asset/images/bestseller-img-three.png'
import bestsellerimgfour from '../../Asset/images/bestseller-img-four.png'
import { useState } from 'react'


function Listing() {
    const [value, setValue] = React.useState(2);

    let [count, setCount] = useState(1);

    function incrementCount() {
        count = count + 1;
        setCount(count);
    }
    function decrementCount() {
        count = count - 1;
        setCount(count);
    }
    return (
        <div>
            <Header />
            <div className="listing-main">
                <div className="container">
                    <div className="listing-header">
                        <span><FontAwesomeIcon icon={faHouse} style={{ color: "#E2DFDF", }} /></span>
                        <span><FontAwesomeIcon icon={faAngleRight} style={{ color: "#E2DFDF", }} /></span>
                        <span className='listing-categories'>ALL CATEGORIES </span>
                        <span><FontAwesomeIcon icon={faAngleRight} style={{ color: "#E2DFDF", }} /></span>
                        <a href='' className='listing-categories active'>FRESH FOOD</a>
                    </div>

                    <div className="listing-body">
                        <div className="listing" style={{ display: "flex", justifyContent: "space-between", width: "100%" }}>
                            <div className="listening-content-left">
                                <div className='listening-content-inner'>
                                    <div className="heading">
                                        <div className="name">CATEGORY</div>
                                        <div className="icon"><FontAwesomeIcon icon={faCaretDown} style={{ color: "#E2DFDF" }} /></div>
                                    </div>
                                    <form>
                                        <div className="input">
                                            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                                            <label> DAIRY EGGS AND CHEESE</label></div>
                                        <div className="input">
                                            <input type="checkbox" id="vehicle2" name="vehicle2" value="Car" />
                                            <label> FRESH JUICE AND SALADS</label>
                                        </div>
                                        <div className="input">
                                            <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat" />
                                            <label> FRUITS AND VEGETABLES</label>
                                        </div>
                                        <div className="input">
                                            <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat" />
                                            <label> DELICATESSEN</label>
                                        </div>
                                        <div className="input">
                                            <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat" />
                                            <label> READY MEALS</label>
                                        </div>
                                        <div className="input">
                                            <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat" />
                                            <label> FRESH FLOWERS AND PLANTS</label>
                                        </div>
                                        <div className="input">
                                            <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat" />
                                            <label> FRESH MEAT AND POULTRY</label>
                                        </div>

                                        <div className="input">
                                            <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat" />
                                            <label> SEAFOOD</label>
                                        </div>

                                        <div className="input">
                                            <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat" />
                                            <label> BAKERY</label>
                                        </div>
                                    </form>

                                    <div className="heading">
                                        <div className="name">FILTER BY PRICE</div>
                                        <div className="icon"><FontAwesomeIcon icon={faCaretDown} style={{ color: "#E2DFDF" }} /></div>
                                    </div>
                                    <RangeSlider />
                                    <div className="amount-slider">
                                        <a><span className='price'>PRICE</span> <span className='amount'>299</span><span className='amount'>-</span><span className='amount'>329 </span></a>
                                        <a href='' className='filter'>FILTER</a>
                                    </div>
                                    <div className="heading">
                                        <div className="name">POPULARITY</div>
                                        <div className="icon"><FontAwesomeIcon icon={faCaretDown} style={{ color: "#E2DFDF" }} /></div>
                                    </div>
                                    <form>
                                        <div className="input">
                                            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                                            <label> PRICE - LOW - HIGH</label></div>
                                        <div className="input">
                                            <input type="checkbox" id="vehicle2" name="vehicle2" value="Car" />
                                            <label>PRICE - HIGH - LOW</label>
                                        </div>
                                        <div className="input">
                                            <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat" />
                                            <label> IN STOCK</label>
                                        </div>
                                        <div className="input">
                                            <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat" />
                                            <label>TITLE - A - Z</label>
                                        </div>
                                        <div className="input">
                                            <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat" />
                                            <label>TITLE - Z - A</label>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="listening-content-right">
                                <div className="trending-products-list" style={{ position: "relative" }}>
                                    <div class="trending-offer">40 %</div>
                                    <div class="favorites">
                                        <i class="fa-regular fa-heart" style={{ fontSize: "18px" }} aria-hidden="true"></i>
                                    </div>
                                    <a><img src={listing1}></img></a>
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
                                <div className="trending-products-list" style={{ position: "relative" }}>
                                    <div class="trending-offer">10 %</div>
                                    <div class="favorites">
                                        <i class="fa-regular fa-heart" style={{ fontSize: "18px" }} aria-hidden="true"></i>
                                    </div>
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
                                            <h6>$ 129</h6>

                                        </div>
                                        <div className="buttoncategory">
                                            {/* <button type="button" className="category-button"><img src={cartt} />ADD</button> */}
                                            <button className='plus' onClick={decrementCount}>-</button><span className='quantity'>{count}</span>
                                            <button className='minus' onClick={incrementCount}>+</button>
                                        </div>
                                    </div>
                                </div>

                                <div className="trending-products-list" style={{ position: "relative" }}>
                                    <div class="favorites">
                                        <i class="fa-regular fa-heart" style={{ fontSize: "18px" }} aria-hidden="true"></i>
                                    </div>
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
                                <div className="trending-products-list" style={{ position: "relative" }}>
                                    <div class="trending-offer">52 %</div>
                                    <div class="favorites"><i class="fa fa-heart" aria-hidden="true" style={{ color: "red" }}></i></div>
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
                                        <div className="buttoncategory">
                                            {/* <button type="button" className="category-button"><img src={cartt} />ADD</button> */}
                                            <button className='plus' onClick={decrementCount}>-</button><span className='quantity'>{count}</span>
                                            <button className='minus' onClick={incrementCount}>+</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="trending-products-list" style={{ position: "relative" }}>
                                    <div class="favorites">
                                        <i class="fa-regular fa-heart" style={{ fontSize: "18px" }} aria-hidden="true"></i>
                                    </div>
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
                                <div className="trending-products-list" style={{ position: "relative" }}>
                                    <div class="favorites"><i class="fa fa-heart" aria-hidden="true" style={{ color: "red" }}></i></div>
                                    <a><img src={listing6}></img></a>
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

                                <div className="trending-products-list" style={{ position: "relative" }}>
                                    <div class="trending-offer">30 %</div>
                                    <div class="favorites">
                                        <i class="fa-regular fa-heart" style={{ fontSize: "18px" }} aria-hidden="true"></i>
                                    </div>
                                    <a><img src={listing7}></img></a>
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
                                <div className="trending-products-list" style={{ position: "relative" }}>
                                    <div class="favorites"><i class="fa fa-heart" aria-hidden="true" style={{ color: "red" }}></i></div>
                                    <a><img src={listing8}></img></a>
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
                                <div className="trending-products-list" style={{ position: "relative" }}>
                                    <div class="favorites">
                                        <i class="fa-regular fa-heart" style={{ fontSize: "18px" }} aria-hidden="true"></i>
                                    </div>
                                    <a><img src={listing9}></img></a>
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
                                <div className="trending-products-list" style={{ position: "relative" }}>
                                    <div class="trending-offer">20 %</div>
                                    <div class="favorites"><i class="fa fa-heart" aria-hidden="true" style={{ color: "red" }}></i></div>
                                    <a><img src={listing10}></img></a>
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
                                <div className="trending-products-list" style={{ position: "relative" }}>
                                    <div class="favorites">
                                        <i class="fa-regular fa-heart" style={{ fontSize: "18px" }} aria-hidden="true"></i>
                                    </div>
                                    <a><img src={listing11}></img></a>
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
                                        <div className="buttoncategory">
                                            {/* <button type="button" className="category-button"><img src={cartt} />ADD</button> */}
                                            <button className='plus' onClick={decrementCount}>-</button><span className='quantity'>{count}</span>
                                            <button className='minus' onClick={incrementCount}>+</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="trending-products-list" style={{ position: "relative" }}>
                                    <div class="favorites">
                                        <i class="fa-regular fa-heart" style={{ fontSize: "18px" }} aria-hidden="true"></i>
                                    </div>
                                    <a><img src={listing12}></img></a>
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
                                        <div className="buttoncategory">
                                            {/* <button type="button" className="category-button"><img src={cartt} />ADD</button> */}
                                            <button className='plus' onClick={decrementCount}>-</button><span className='quantity'>{count}</span>
                                            <button className='minus' onClick={incrementCount}>+</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="pagination">
                            <span className='active'>1</span>
                            <span className='inactive'>2</span>
                            <span className='inactive'><FontAwesomeIcon icon={faArrowRight} style={{ color: "#665D5D", }} /></span>
                        </div>
                    </div>
                </div>
                <div className="trending-product-main">
                    <div className="container">
                        <div className="trending-product">
                            <h3>Recommended</h3>
                            <div className="trending-products">
                                <div className="trending-products-inner">
                                    <a><img src={bestsellerimgone} alt=''></img></a>
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
                                    <a><img src={bestsellerimgtwo}></img></a>
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
                                    <div class="trending-offer">25 %</div>
                                    <a><img src={bestsellerimgone}></img></a>
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
                                    <div class="trending-offer">52 %</div>
                                    <a><img src={bestsellerimgthree}></img></a>

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
                                    <a><img src={bestsellerimgfour}></img></a>
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
            </div>
            <Footer />
        </div>
    )
}

export default Listing

