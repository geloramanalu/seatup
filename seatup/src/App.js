import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar';
import { Route, Routes } from 'react-router';
import Profil from './component/Profil';
import Seat from './component/Seat';
import Homepage from './component/Homepage';
import Cart from './component/Cart';
import Checkout from './component/Checkout';
import LoadingPayment from './component/LoadingPayment';
import Login from './component/Login';
import Error from './component/Error';


function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path='/profil' element={<Profil />} />
        <Route path='/seat' element={<Seat />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/payment-loading' element={<LoadingPayment />} />
        <Route path='/login' element={<Login />} />
        <Route path="*" element={< Error />} />

      </Routes>

    </div>
  );
}

export default App;
