import React from 'react'
import '../../Asset/Css/responsive.css'
import '../../Asset/Css/style.css'
import bannerimage from '../../Asset/images/banner-img.png'
import delivery from '../../Asset/images/delivery.svg'
import headset from '../../Asset/images/headset.svg'
import reward from '../../Asset/images/reward.svg'
import wallet from '../../Asset/images/wallet.svg'
import Example from './Example'
import categoryimgone from '../../Asset/images/catogory-img-one.png'
import categoryimgtwo from '../../Asset/images/category-img-two.png'
import categoryimgthree from '../../Asset/images/category-img-three.png'
import trendingproductone from '../../Asset/images/trending-product-one.png'
import trendingproducttwo from '../../Asset/images/trending-product-two.png'
import trendingproductthree from '../../Asset/images/trending-product-three.png'
import trendingproductfour from '../../Asset/images/trending-product-four.png'
import trendingproductfive from '../../Asset/images/trending-product-five.png'
import bestsellerimgone from '../../Asset/images/bestseller-img-one.png'
import bestsellerimgtwo from '../../Asset/images/bestseller-img-two.png'
import bestsellerimgthree from '../../Asset/images/bestseller-img-three.png'
import bestsellerimgfour from '../../Asset/images/bestseller-img-four.png'
import trendingbrandimgone from '../../Asset/images/trendingbrand-img-one.png'
import trendingbrandimgtwo from '../../Asset/images/trendingbrand-img-two.png'
import trendingbrandimgthree from '../../Asset/images/trendingbrand-img-three.png'
import trendingbrandimgfour from '../../Asset/images/trendingbrand-img-four.png'
import trendingbrandimgfive from '../../Asset/images/trendingbrand-img-five.png'
import specialproductone from '../../Asset/images/specialproduct-one.png'
import specialproducttwo from '../../Asset/images/specialproduct-two.png'
import specialproductthree from '../../Asset/images/specialproduct-three.png'
import specialproductfour from '../../Asset/images/specialproduct-four.png'
import specialproductfive from '../../Asset/images/specialproduct-five.png'
import cartt from '../../Asset/images/cartt.svg'
import Rating from '@mui/material/Rating';
import Carousel from 'react-grid-carousel';
import Sliderhome from '../../components/Auth/Sliderhome'

function Body() {
    const [value, setValue] = React.useState(2);
    return (

        <div>
            <div className="body-main">
                <div className="banner">
                    <a href=''><img src={bannerimage}></img></a>
                </div>
                <div className="advantages-main">
                    <div className="wrapperr">
                        <div className="advantages">
                            <div className="advantage-1 arrow">
                                <div className="inner-img">
                                    <div className="inner-image">
                                        <a href=''><img src={delivery}></img></a>
                                    </div>
                                    <div className="inner-contents">
                                        <h3>Free Home Delivery</h3>
                                        <p>Free shipping on all over</p>
                                    </div>
                                </div>
                            </div>
                            <div className="advantage-1 arrow">
                                <div className="inner-img">
                                    <div className="inner-image">
                                        <a><img src={headset}></img></a>
                                    </div>
                                    <div className="inner-contents">
                                        <h3>We Support 24/7</h3>
                                        <p>Support online 24 hours</p>
                                    </div>
                                </div></div>
                            <div className="advantage-1 arrow"> <div className="inner-img">
                                <div className="inner-image">
                                    <a><img src={reward}></img></a>
                                </div>
                                <div className="inner-contents">
                                    <h3>100% Safe Quality</h3>
                                    <p>Support online 24 hours</p>
                                </div>
                            </div></div>
                            <div className="advantage-1"> <div className="inner-img">
                                <div className="inner-image">
                                    <a><img src={wallet}></img></a>
                                </div>
                                <div className="inner-contents">
                                    <h3>Return & Refund</h3>
                                    <p>Back guarantee under 7 day</p>
                                </div>
                            </div></div>
                        </div>
                    </div>
                </div>

                {/* corosal*/}

                <div className="courosal-main">
                    <div className="container">
                        <h3>CATEGORY</h3>
                        <Example />
                        <div className="button-div-corosal">
                            <button type="button" className="btn btn-primary btn-block mb-4">View all</button>
                        </div>
                    </div>

                </div>


                <div className="categories-main">
                    <div className="container">
                        <div className="categories">
                            <Carousel cols={5} rows={1} gap={10} loop>
                                <Carousel.Item>
                                    <div className="catogories-inner">
                                        <div className="category-img">
                                            <a><img src={categoryimgone} alt=''></img></a>
                                            <div className="glass">
                                                <h4>VEGETABLE</h4>
                                                <div className="category-price">
                                                    <div className="stars">
                                                        <Rating name="read-only" value={value} readOnly />
                                                    </div>
                                                    <div className="price">
                                                        <h5>$ 29.90 </h5>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="button-corosal">
                                                <button type="button" className="category-button"><img src={cartt} />ADD</button>
                                            </div>
                                        </div>
                                    </div>

                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className="catogories-inner">
                                        <div className="category-img">
                                            <a><img src={categoryimgtwo} alt=''></img></a>
                                            <div className="glass">
                                                <h4>VEGETABLE</h4>
                                                <div className="category-price">
                                                    <div className="stars">
                                                        <Rating name="read-only" value={value} readOnly />
                                                    </div>
                                                    <div className="price">
                                                        <h5>$ 29.90 </h5>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="button-corosal">
                                                <button type="button" className="category-button"><img src={cartt} />ADD</button>
                                            </div>
                                        </div>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className="catogories-inner">
                                        <div className="category-img">
                                            <a><img src={categoryimgthree} alt=''></img></a>
                                            <div className="glass">
                                                <h4>VEGETABLE</h4>
                                                <div className="category-price">
                                                    <div className="stars">
                                                        <Rating name="read-only" value={value} readOnly />
                                                    </div>
                                                    <div className="price">
                                                        <h5>$ 29.90 </h5>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="button-corosal">
                                                <button type="button" className="category-button"><img src={cartt} />ADD</button>
                                            </div>
                                        </div>
                                    </div>
                                </Carousel.Item>

                                <Carousel.Item>
                                    <div className="catogories-inner">
                                        <div className="category-img">
                                            <a><img src={categoryimgone} alt=''></img></a>
                                            <div className="glass">
                                                <h4>VEGETABLE</h4>
                                                <div className="category-price">
                                                    <div className="stars">
                                                        <Rating name="read-only" value={value} readOnly />
                                                    </div>
                                                    <div className="price">
                                                        <h5>$ 29.90 </h5>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="button-corosal">
                                                <button type="button" className="category-button"><img src={cartt} />ADD</button>
                                            </div>
                                        </div>
                                    </div>
                                </Carousel.Item>

                                <Carousel.Item>
                                    <div className="catogories-inner">
                                        <div className="category-img">
                                            <a><img src={categoryimgtwo} alt=''></img></a>
                                            <div className="glass">
                                                <h4>VEGETABLE</h4>
                                                <div className="category-price">
                                                    <div className="stars">
                                                        <Rating name="read-only" value={value} readOnly />
                                                    </div>
                                                    <div className="price">
                                                        <h5>$ 29.90 </h5>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="button-corosal">
                                                <button type="button" className="category-button"><img src={cartt} />ADD</button>
                                            </div>
                                        </div>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className="catogories-inner">
                                        <div className="category-img">
                                            <a><img src={categoryimgtwo} alt=''></img></a>
                                            <div className="glass">
                                                <h4>VEGETABLE</h4>
                                                <div className="category-price">
                                                    <div className="stars">
                                                        <Rating name="read-only" value={value} readOnly />
                                                    </div>
                                                    <div className="price">
                                                        <h5>$ 29.90 </h5>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="button-corosal">
                                                <button type="button" className="category-button"><img src={cartt} />ADD</button>
                                            </div>
                                        </div>
                                    </div>
                                </Carousel.Item>
                            </Carousel>
                        </div>
                    </div>
                </div>


                <div className="trending-product-main">
                    <div className="container">
                        <div className="trending-product">
                            <h3>Trending Product</h3>

                            <div className="trending-products">
                                <Carousel cols={5} rows={1} gap={10} loop>
                                    <Carousel.Item>
                                        <div className="trending-products-inner">
                                            <div class="trending-offer">52 %</div>
                                            <a><img src={trendingproductone} alt=''></img></a>
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
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <div className="trending-products-inner">
                                            <a><img src={trendingproducttwo}></img></a>
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
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <div className="trending-products-inner">
                                            <a><img src={trendingproductthree}></img></a>
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
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <div className="trending-products-inner">
                                            <div class="trending-offer">25 %</div>
                                            <a><img src={trendingproductfour}></img></a>
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
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <div className="trending-products-inner">
                                            <a><img src={trendingproductfive}></img></a>
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
                                    </Carousel.Item>
                                </Carousel>
                            </div>
                        </div>
                    </div>
                </div>



                <div className="trending-product-main">
                    <div className="container">
                        <div className="trending-product">
                            <h3>Best Sellers</h3>

                            <div className="trending-products">
                                <Carousel cols={5} rows={1} gap={10} loop>
                                    <Carousel.Item>
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
                                    </Carousel.Item>
                                    <Carousel.Item>
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
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <div className="trending-products-inner">
                                            <div class="trending-offer">25 %</div>
                                            <a><img src={trendingproductfive}></img></a>
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
                                    </Carousel.Item>
                                    <Carousel.Item>

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
                                    </Carousel.Item>
                                    <Carousel.Item>
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
                                    </Carousel.Item>
                                </Carousel>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="trending-product-main">
                    <div className="container">
                        <div className="trending-product">
                            <h3>Trending Brands</h3>

                            <div className="trending-brands">
                                <Carousel cols={5} rows={1} gap={10} loop>
                                    <Carousel.Item>
                                        <div className="trending-products-inner">
                                            <a><img src={trendingbrandimgone} alt=''></img></a>
                                        </div></Carousel.Item>

                                    <Carousel.Item>
                                        <div className="trending-products-inner">
                                            <a><img src={trendingbrandimgtwo}></img></a>
                                        </div></Carousel.Item>

                                    <Carousel.Item>
                                        <div className="trending-products-inner">
                                            <a><img src={trendingbrandimgthree}></img></a>
                                        </div></Carousel.Item>

                                    <Carousel.Item>
                                        <div className="trending-products-inner">
                                            <a><img src={trendingbrandimgfour}></img></a>
                                        </div></Carousel.Item>

                                    <Carousel.Item>
                                        <div className="trending-products-inner">
                                            <a><img src={trendingbrandimgfive}></img></a>
                                        </div></Carousel.Item>

                                </Carousel>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="trending-product-main">
                    <div className="container">
                        <div className="trending-product">
                            <h3>Special Product</h3>
                            <div className="trending-products">
                                <Carousel cols={5} rows={1} gap={10} loop>
                                    <Carousel.Item>
                                        <div className="trending-products-inner">
                                            <div class="favorites"><i class="fa fa-heart-o" aria-hidden="true"></i></div>
                                            <a><img src={specialproductone} alt=''></img></a>
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
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <div className="trending-products-inner"><div class="favorites"><i class="fa fa-heart-o" aria-hidden="true"></i></div>
                                            <a><img src={specialproducttwo}></img></a>
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
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <div className="trending-products-inner">
                                            <div class="trending-offer">25 %</div>
                                            <div class="favorites"><i class="fa fa-heart" aria-hidden="true" style={{ color: "red" }}></i></div>
                                            <a><img src={specialproductthree}></img></a>
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
                                    </Carousel.Item>
                                    <Carousel.Item>

                                        <div className="trending-products-inner">
                                            <div class="trending-offer">52 %</div>
                                            <div class="favorites"><i class="fa fa-heart" aria-hidden="true" style={{ color: "red" }}></i></div>
                                            <a><img src={specialproductfour}></img></a>

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
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <div className="trending-products-inner">
                                            <div class="favorites"><i class="fa fa-heart-o" aria-hidden="true"></i></div>
                                            <a><img src={specialproductfive}></img></a>
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
                                    </Carousel.Item>
                                </Carousel>
                            </div>
                        </div>
                    </div>
                </div>
                <Sliderhome/>
            </div>
        </div>
    )
}
export default Body

