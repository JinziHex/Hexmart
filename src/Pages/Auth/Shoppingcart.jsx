import React from 'react'
import Header from '../../components/Auth/Header'
import Footer from '../../components/Auth/Footer'
import peach from '../../Asset/images/peach.png'
import listing8 from '../../Asset/images/listing-8.png'

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
                      <h5 style={{ color: "#000" }}>529 </h5>
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
                    <img src={listing8}></img>
                  </div>
                  <div className="product-right-cart">
                    <div className="product-right-contents">
                      <div className="heading">ORANGE</div>
                      <div className="delivery-detail">
                        <h4>Devilery By Sat May 24 l <span className='free'>Free</span></h4>
                        <h5>$ 30</h5>
                      </div>
                    </div>
                    <div className="rupee">
                      <h5 style={{ color: "#000" }}>120 </h5>
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
              <div className="price-details">
                <h4 className='shopping-cartt'>PRICE DETAILS</h4>
                <div className="pricedetails">
                  <div className="price-details-content">
                    <div className="content-price">
                      <div>Price (2 item)</div>
                    </div>
                    <div className="price-details">
                      <div>669</div>
                    </div>
                  </div>

                  <div className="price-details-content">
                    <div className="content-price">
                      <div>Coupon Discount</div>
                    </div>
                    <div className="price-details">
                      <div style={{ color: "#AD0101" }}>Apply</div>
                    </div>
                  </div>

                  <div className="price-details-content" style={{ borderBottom: "1px solid #F0F0F0" }}>
                    <div className="content-price">
                      <div>Price (2 item)</div>
                    </div>
                    <div className="price-details">
                      <div style={{ color: "#0AA02B" }}>Free</div>
                    </div>
                  </div>

                  <div className="price-details-content" style={{ marginBottom: "0" }}>
                    <div className="content-price">
                      <div className='totalamount' style={{ fontWeight: "bold" }}>TOTAL AMOUNT</div>
                    </div>
                    <div className="price-details">
                      <div className='totalamount' style={{ fontWeight: "bold" }}>669</div>
                    </div>
                  </div>
                  <button className='placeorder'>PLACE ORDER</button>
                  <button className='Shopping'>Continue Shopping</button>
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

export default Shoppingcart

