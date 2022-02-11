import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Header from '../Header/Header';
import Home from '../Home/Home';
import Checkout from '../Checkout/Checkout';
import Login from '../Login/Login';
import { useEffect } from 'react';
import { useStateValue } from '../../StateProvider';
import db, { auth } from '../../firebase';

function App() {
  const [{basket, user}, dispatch] = useStateValue()
  console.log(basket)
  useEffect(()=>{
    auth.onAuthStateChanged((authUser) => {
      if(authUser){
        //user logged in
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
       

      }
      else{
        //user logged out
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })

  },[])
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<><Header/><Home/></>} />
          <Route path="/checkout" element={<><Header/><Checkout/></>} />
          <Route path={!user && "/login"} element={<Login/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;