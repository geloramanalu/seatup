import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar';
import { Route, Routes } from 'react-router';
import Profil from './component/Profil';
import Seat from './component/Seat';
import Homepage from './component/Homepage';
import Login from './component/Login';
import Cart from './component/Cart';
import Checkout from './component/Checkout';
import Error from './component/Error';
import Register from './component/Register';
import LoadingPayment from './component/LoadingPayment';
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import NotificationPage from './component/NotificationPage';
import Login from './component/Login';
=======
import Login from './component/Login';
=======
>>>>>>> 33223b1 ([edit]: App)
=======
>>>>>>> 65b2300 (hotfix: Duplicate import)
=======
import Login from './component/Login';
>>>>>>> 520af09 ([edit]: login)
=======
>>>>>>> bca67e3 ([edit]: App)
import { useState } from 'react';
>>>>>>> 3109a91 ([edit]: login)
=======
import Login from './component/Login';
=======
>>>>>>> bd27cc8 ([edit]: App)
import { useState } from 'react';
>>>>>>> 3eaa541 ([edit]: login)


function App() {
  const [login, setLogin] = useState(false);

  return (
    <div>
      <Navbar login={login}/>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path='/profil' element={<Profil />} />
        <Route path='/seat' element={<Seat />} />
<<<<<<< HEAD
        <Route path='/cart' element={<Cart />} />
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> 65b2300 (hotfix: Duplicate import)
        <Route path='/checkout' element={<Checkout />} />
>>>>>>> 33223b1 ([edit]: App)
        <Route path='/loading-payment' element={<LoadingPayment />} />
<<<<<<< HEAD
        <Route path='/notification' element={<NotificationPage/>} />
=======
=======
>>>>>>> bca67e3 ([edit]: App)
=======
        <Route path='/checkout' element={<Checkout />} />
        <Route path='/loading-payment' element={<LoadingPayment />} />
>>>>>>> a28bc49 (hotfix: Duplicate import)
        <Route path='/login' element={login ? <Profil /> : <Login setLogin={setLogin}/>} />
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 3109a91 ([edit]: login)
=======
=======
        <Route psath='/cart' element={<Cart />} />
>>>>>>> bd27cc8 ([edit]: App)
        <Route path='/loading-payment' element={<LoadingPayment />}/>
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
>>>>>>> 036fc17 (added register page and paths)
=======
        <Route path='/loading-payment' element={<LoadingPayment />}/>
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
>>>>>>> 231c302 (added register page and paths)
=======
>>>>>>> 33223b1 ([edit]: App)
=======
        <Route path='/loading-payment' element={<LoadingPayment />}/>
        <Route path='/register' element={<Register />} />
>>>>>>> 65b2300 (hotfix: Duplicate import)
        <Route path="*" element={<Error />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
