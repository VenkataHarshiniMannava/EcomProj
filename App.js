import {Router, Routes, Route } from 'react-router-dom';
import { useContext, useReducer, useState } from 'react';
import './App.css';
import Signup from './Components/loginpage/Signup';
import Contextdataitem from './contexapi/Contextdata';
import Store from './pages/Store';
import About from './pages/About';
import Home from './pages/Home';
import Contactus from './pages/Contactus';
import Productdetails from './pages/Productdetails';
import Login from './Components/loginpage/Login';
import Profile from './pages/Profile';
import Password from './pages/Password';
import Cartitem from './Components/cartitem/Cartitem';
import Homelogin from './pages/Homelogin';
import Aboutlogin from './pages/Aboutlogin';
import Contactuslogin from './pages/Contactuslogin';
import  { lazy, Suspense } from 'react'
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function App() {
const ctx=useContext(Contextdataitem)
const location=useLocation()
console.log(location)

const [rout,setrout]=useState("")
 let item=localStorage.getItem("id")
 let abd=!!ctx.idtoken
 const Home = lazy(() => import('./pages/Home'));
 const Homelogin = lazy(() => import('./pages/Homelogin'));


 useEffect(()=>{
  window.scrollTo(0,0)
 },[location.pathname])
  return (  
    <div>
      
      {abd && <Routes> <Route  path="/home"  element={<Suspense fallback={<div>Loading...</div>}><Home></Home></Suspense>} />
      <Route exact  path="/About"  element={<About></About>} />
      <Route exact  path="/store"  element={<Store></Store>} />
      
      <Route  exact path="/product/:id"  element={<Productdetails></Productdetails>}/>
      <Route  exact path="/Contactus"  element={<Contactus></Contactus>}/>
      
      <Route exact  path="/profile"  element={<Profile></Profile>}  />
      <Route exact  path="*"  element={<Store></Store>}/>
      <Route  exact path="/changepass"  element={<Password></Password>}/>
      <Route exact  path='/cartitem' element={<Cartitem></Cartitem>}/>
      </Routes>
      }
      <Routes>
      {!abd && <Route path="/signup"  element={<Signup></Signup>}  />}
      {!abd && <Route path="/"  element={<Login></Login>}/>}
      {!abd && <Route path="*"  element={<Login></Login>}/>}
     {!abd && <Route  path="/home"  element={<Suspense fallback={<div>Loading...</div>}><Homelogin></Homelogin></Suspense>} />}
     { !abd &&<Route exact  path="/About"  element={<Aboutlogin></Aboutlogin>}/>}
     {!abd && <Route  exact path="/Contactus"  element={<Contactuslogin></Contactuslogin>}/>}
      </Routes>
      
      

      

      

   
     
      </div>
    
  
    
  );
}

export default App;
