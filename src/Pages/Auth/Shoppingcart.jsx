import React from 'react'
import Header from '../../components/Auth/Header'
import Footer from '../../components/Auth/Footer'
import peach from '../../Asset/images/peach.png'

function Shoppingcart() {
  return (
    <div>
      <Header />
      <div className="shopping-cart-main">
        <div className="container">
          <div className="shopping-cart-contents">
            <div className="cart-items">
              <h4 className='shopping-cart'>Shopping Cart</h4>
              <div className="added-items">
                <div className="added-item-1">
                  <div className="added-item-img">
                    <img src={peach}></img>
                  </div>
                  <div className="product-right-cart">
                    <div className="product-right-contents">
                      <div className="heading">PEACH</div>
                      <div className="delivery-detail">
                        <h4>Devilery By Sat May 24 l <span className='free'>Free</span></h4>
                        <h5>$ 30</h5>
                      </div>
                    </div>
                    <div className="rupee">
                      <h5>529 </h5>
                    </div>
                    <div className="product-code">
                      <h5>Product code : <span>HABDU124</span></h5>
                    </div>
                    <div className="stock-details">
                      <h5>Availability : <span>IN STOCK</span></h5>
                    </div>
                    <div className="cart-buttons">
                      <button className='later'>SAVE FOR LATER</button>
                      <button>REMOVE</button>
                    </div>
                  </div>
                </div>

                <div className="added-item-1">
                  <div className="added-item-img">
                    <img src={peach}></img>
                  </div>
                  <div className="product-right-cart">
                    <div className="product-right-contents">
                      <div className="heading">PEACH</div>
                      <div className="delivery-detail">
                        <h4>Devilery By Sat May 24 l <span className='free'>Free</span></h4>
                        <h5>$ 30</h5>
                      </div>
                    </div>
                    <div className="rupee">
                      <h5>529 </h5>
                    </div>
                    <div className="product-code">
                      <h5>Product code : <span>HABDU124</span></h5>
                    </div>
                    <div className="stock-details">
                      <h5>Availability : <span>IN STOCK</span></h5>
                    </div>
                    <div className="cart-buttons">
                      <button className='later'>SAVE FOR LATER</button>
                      <button>REMOVE</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-price">
            <div className="price-details"></div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Shoppingcart

