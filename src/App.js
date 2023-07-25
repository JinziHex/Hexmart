import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Pages/Auth/Login';
import Forgotpassword from './Pages/Auth/Forgotpassword';
import Otpverification from './Pages/Auth/Otpverification'
import Resetpassword from './Pages/Auth/Resetpassword';
import Home from './Pages/Auth/Home';
import Listing from './Pages/Auth/Listing';
import Productdescription from './Pages/Auth/Productdescription';
import Shoppingcart from './Pages/Auth/Shoppingcart';

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
          </Routes>
        </div>
      </BrowserRouter>
    </>
  )
}
export default App;
