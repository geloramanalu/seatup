import logo from './logo.svg';
import './App.css';
import Navbar from './ component/Navbar';
import { Route, Routes } from 'react-router';
import Profil from './ component/Profil';
import Seat from './ component/Seat';
import Homepage from './ component/Homepage';
import Cart from './ component/Cart';
import Checkout from './ component/Checkout';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path='/profil' element={<Profil />} />
        <Route path='/Seat' element={<Seat />} />
        <Route path='/Cart' element={<Cart />} />
      </Routes>

    </div>
  );
}

export default App;