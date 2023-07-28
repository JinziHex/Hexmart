import React from 'react'
import offerone from '../../Asset/images/offer-one.png'
import offertwo from '../../Asset/images/offer-two.png'
import offerthree from '../../Asset/images/offer-three.png'
import offerfour from '../../Asset/images/offer-four.png'
import offerfive from '../../Asset/images/offer-five.png'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

function Slider() {
    return (
        <div style={{
            paddingBottom: '30px',
            position: 'relative'
        }}>
            <div className="trending-product-main" >
                <div className="container">
                    <div className="trending-product">
                        <div className="trending-brands">
                            <Carousel
                                additionalTransfrom={0}
                                autoPlaySpeed={3000}
                                centerMode={false}
                                className=""
                                containerClass="container"
                                dotListClass=""
                                draggable
                                focusOnSelect={false}
                                infinite
                                itemClass=""
                                keyBoardControl
                                minimumTouchDrag={80}
                                pauseOnHover
                                renderArrowsWhenDisabled={false}
                                renderButtonGroupOutside={false}
                                renderDotsOutside
                                responsive={{
                                    desktop: {
                                        breakpoint: {
                                            max: 3000,
                                            min: 1024
                                        },
                                        items: 5
                                    },
                                    mobile: {
                                        breakpoint: {
                                            max: 464,
                                            min: 0
                                        },
                                        items: 3
                                    },
                                    tablet: {
                                        breakpoint: {
                                            max: 1024,
                                            min: 464
                                        },
                                        items: 3
                                    }
                                }}
                                rewind={false}
                                rewindWithAnimation={false}
                                rtl={false}
                                shouldResetAutoplay
                                showDots
                                sliderClass=""
                                slidesToSlide={1}
                                swipeable
                            >
                                <div className="trending-offers">
                                    <img className='offer-img' src={offerone} alt=''></img>
                                    <div className="tending-offer-contents">
                                        <h2>UP TO <br />40 % OFF</h2>
                                        <h4>Delicious cake</h4>
                                        <p>
                                            Lorem ipsum dolor sit amet,
                                            consectetur adipiscing, sed do
                                        </p>
                                        <button>SHOP NOW</button>
                                    </div>
                                </div>

                                <div className="trending-offers">
                                    <img className='offer-img' src={offertwo} alt=''></img>
                                    <div className="tending-offer-contents">
                                        <h2>UP TO <br />40 % OFF</h2>
                                        <h4>Delicious cake</h4>
                                        <p>
                                            Lorem ipsum dolor sit amet,
                                            consectetur adipiscing, sed do
                                        </p>
                                        <button>SHOP NOW</button>
                                    </div>
                                </div>
                                <div className="trending-offers">
                                    <img className='offer-img' src={offerthree} alt=''></img>
                                    <div className="tending-offer-contents">
                                        <h2>UP TO <br />40 % OFF</h2>
                                        <h4>Delicious cake</h4>
                                        <p>
                                            Lorem ipsum dolor sit amet,
                                            consectetur adipiscing, sed do
                                        </p>
                                        <button>SHOP NOW</button>
                                    </div>
                                </div>
                                <div className="trending-offers">
                                    <img className='offer-img' src={offerfour} alt=''></img>
                                    <div className="tending-offer-contents">
                                        <h2>UP TO <br />40 % OFF</h2>
                                        <h4>Delicious cake</h4>
                                        <p>
                                            Lorem ipsum dolor sit amet,
                                            consectetur adipiscing, sed do
                                        </p>
                                        <button>SHOP NOW</button>
                                    </div>
                                </div>
                                <div className="trending-offers">
                                    <img className='offer-img' src={offerfive} alt=''></img>
                                    <div className="tending-offer-contents">
                                        <h2>UP TO <br />40 % OFF</h2>
                                        <h4>Delicious cake</h4>
                                        <p>
                                            Lorem ipsum dolor sit amet,
                                            consectetur adipiscing, sed do
                                        </p>
                                        <button>SHOP NOW</button>
                                    </div>
                                </div>
                                <div className="trending-offers">
                                    <img className='offer-img' src={offerthree} alt=''></img>
                                    <div className="tending-offer-contents">
                                        <h2>UP TO <br />40 % OFF</h2>
                                        <h4>Delicious cake</h4>
                                        <p>
                                            Lorem ipsum dolor sit amet,
                                            consectetur adipiscing, sed do
                                        </p>
                                        <button>SHOP NOW</button>
                                    </div>
                                </div>
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Slider

