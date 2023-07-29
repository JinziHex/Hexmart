import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Pages/Auth/Login';
import Forgotpassword from './Pages/Auth/Forgotpassword';
import Otpverification from './Pages/Auth/Otpverification'
import Resetpassword from './Pages/Auth/Resetpassword';
import Home from './Pages/Auth/Home';
import Listing from './Pages/Auth/Listing';
import Productdescription from './Pages/Auth/Productdescription';
import Shoppingcart from './Pages/Auth/Shoppingcart';
import Shippingaddress from './Pages/Auth/Shippingaddress';
import Paymentmethod from './Pages/Auth/Paymentmethod';
import Placeorder from './Pages/Auth/Placeorder';
import Editprofile from './Pages/Auth/Editprofile';
import Deliveryaddress from './Pages/Auth/Deliveryaddress';

function App() {
  return (
    <>
      <BrowserRouter>
        <div className='App'>
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/login' element={<Login />}></Route>
            <Route path='/forgotpassword' element={<Forgotpassword />}></Route>
            <Route path='/otp' element={<Otpverification />}></Route>
            <Route path='/resetpassword' element={<Resetpassword />}></Route>
            <Route path='/listing' element={<Listing />}></Route>
            <Route path='/productdescription' element={<Productdescription />}></Route>
            <Route path='/shoppingcart' element={<Shoppingcart />}></Route>
            <Route path='/shippingaddress' element={<Shippingaddress />}></Route>
            <Route path='/paymentmethod' element={<Paymentmethod />}></Route>
            <Route path='/placeorder' element={<Placeorder />}></Route>
            <Route path='/editprofile' element={<Editprofile />}></Route>
            <Route path='/deliveryaddress' element={<Deliveryaddress />}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </>
  )
}
export default App;
