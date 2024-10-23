import React from 'react';
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './pages/About'
import Contact from './pages/Contact'
import Shop from './pages/Shop'
import SignUp from './pages/SignUp'
import SignIn from './pages/SignIn'
import ForgotPassword from './pages/ForgotPassword'
import Header from './components/Header'
import Footer from './components/Footer'
import ProductDetail from './pages/ProductDetail'
import AdminDash from './pages/Admin/AdminDash'
import AdminProducts from './pages/Admin/AdminProducts'
import AdminOrders from './pages/Admin/AdminOrders'
import AdminFeatures from './pages/Admin/AdminFeatures'
import AdminLayout from './components/Admin/AdminLayout'
import ShopLayout from './components/shop/ShopLayout'
import NotFound from './components/NotFound'
import ProductLists from './pages/Shop/ProductLists'
import Checkout from './pages/Shop/Checkout'
import Account from './pages/Shop/Account'
import Home from './pages/Shop/Home'
import UnauthPage from './components/UnAuth'
import Wishlist from './pages/Shop/Wishlist'
import AuthCheck from './components/AuthCheck'


function App() {

  const isAuthenticated = false
  const user = null

  return (
    <>
     <BrowserRouter>
     <Header/>
       <Routes>
        <Route path='/admin' element={
          <AuthCheck isAuthenticated={isAuthenticated} user={user}><AdminLayout/></AuthCheck>
          }>
        <Route path='products' element={<AdminProducts/>}></Route>
        <Route path='dashboard' element={<AdminDash/>}></Route>
        <Route path='orders' element={<AdminOrders/>}></Route>
        <Route path='features' element={<AdminFeatures/>}></Route>
        </Route>

        <Route path='unauth' element={<UnauthPage/>}></Route>
        <Route path='*' element={<NotFound/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/shop' element={<Shop/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/sign-in' element={<SignIn/>}></Route>
        <Route path='/sign-up' element={<SignUp/>}></Route>
        <Route path='/forgot-password' element={<ForgotPassword/>}></Route>
        <Route path="/shop/:category/:subcategory/:productId" element={<ProductDetail />} />

        <Route path='/shop' element={
          <AuthCheck isAuthenticated={isAuthenticated} user={user} ><ShopLayout/></AuthCheck>
          }>
        <Route path='home' element={<Home/>}></Route>
        <Route path='productlists' element={<ProductLists/>}></Route>
        <Route path='checkout' element={<Checkout/>}></Route>
        <Route path='account' element={<Account/>}></Route>
        <Route path='wishlist' element={<Wishlist/>}></Route>
        </Route>
       </Routes>
     <Footer/>
     </BrowserRouter>
    </>
  )
}

export default App
