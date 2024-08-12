
import './App.css';
import "bootstrap/dist/css/bootstrap.css"
import {BrowserRouter as Router , Route,Routes} from "react-router-dom"
import Home from "./pages/Home"
import ProductDetails from "./pages/ProductDetails"

import Header from "./components/Header"
import Footer from "./components/Footer"
import Signup from './pages/Signup';
import Login from "./pages/Login"
import ContactUs from './pages/ContactUs';
import About from './pages/About';
import Profile from './pages/Profile';
import Fav from './pages/Fav';
import Checkout from './pages/Checkout';
import NotFound from './pages/NotFound';

function App() {
  return (
  
    <div className="App">
 
  <Router>
 
    <Header/>
   
    <Routes>
      <Route path='*' element={<NotFound/>}/>
      <Route path='/' element={<Home/>}/>
      <Route path='/contact' element={<ContactUs/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/profile' element={<Profile/>}/>
      <Route path='/fav' element={<Fav/>}/>
      <Route path='/product/:id' element={<ProductDetails/>}/>
      <Route path='/check' element={<Checkout/>}/>
      <Route path='/sign' element={<Signup/>}/>
      <Route path='/login' element={<Login/>}/>
    </Routes>
    <Footer/>
  </Router>
    </div>
   
  );
}

export default App;
