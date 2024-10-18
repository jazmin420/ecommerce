import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Shop from './pages/Shop'
import SignUp from './pages/SignUp'
import SignIn from './pages/SignIn'
import ForgotPassword from './pages/ForgotPassword'
import Header from './components/Header'
import Footer from './components/Footer'
import ProductDetail from './pages/ProductDetail'

function App() {


  return (
    <>
     <BrowserRouter>
     <Header/>
       <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/shop' element={<Shop/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/sign-in' element={<SignIn/>}></Route>
        <Route path='/sign-up' element={<SignUp/>}></Route>
        <Route path='/forgot-password' element={<ForgotPassword/>}></Route>
        <Route path="/shop/:category/:subcategory/:productId" element={<ProductDetail />} />
       </Routes>
     <Footer/>
     </BrowserRouter>
    </>
  )
}

export default App
