import React from 'react'
import Rating from '@mui/material/Rating';
import Progressbar from '../Auth/Progressbar';
import man1 from '../../Asset/images/man-1.png'
import man2 from '../../Asset/images/man-2.png'

function Reviews() {
  const [value, setValue] = React.useState(5);
  return (
    <div>
      <div className="review-inner-main">
        <div className="review-inner">
          <div className="customer-rating">
            <h4>Customer reviews</h4>
            <div className="stars">
              <Rating name="read-only" value={value} readOnly />
            </div>
            <div className="progres-bar">
              <Progressbar bgcolor="#FFD600" progress='90' height={17} />
              <Progressbar bgcolor="#FFD600" progress='60' height={17} />
              <Progressbar bgcolor="#FFD600" progress='50' height={17} />
              <Progressbar bgcolor="#FFD600" progress='40' height={17} />
              <Progressbar bgcolor="#FFD600" progress='20' height={17} />
            </div>
          </div>
          <div className="customer-review">
            <div className="reviews">
              <div className="review-1">
                <div className="person">
                  <img src={man1}></img>
                </div>
                <div className="person-review">
                  <div className="heading">
                    <h4>John Doe  <span>●  July 05</span></h4>
                    <div className="stars">
                      <Rating name="read-only" value={value} readOnly />
                    </div>
                  </div>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting
                    Lorem Ipsum has been the industry's standard dummy text</p>
                </div>
              </div>
              <div className="review-1">
                <div className="person">
                  <img src={man2}></img>
                </div>
                <div className="person-review">
                  <div className="heading">
                    <h4>George B  <span>●  July 05</span></h4>
                    <div className="stars">
                      <Rating name="read-only" value={value} readOnly />
                    </div>
                  </div>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting
                    Lorem Ipsum has been the industry's standard dummy text</p>
                </div>
              </div>
            </div>
            <h4>Comments</h4>
            <textarea rows="4" className="textarea" cols="100" name="comment" form="usrform" value=""></textarea>
            <div className="popup-button-textarea">
              <input type='submit'></input>
            </div>
            <div class="user-description-button">
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Reviews

