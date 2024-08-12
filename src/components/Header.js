import React, { useContext } from 'react';
import { Link ,useNavigate } from 'react-router-dom';
import SideBar from "./SideBar";
import { IoPersonOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { CartContext } from '../context/CartContext';

export default function Header() {
  const {fav}=useContext(CartContext)
  const user = JSON.parse(localStorage.getItem('currentUser'));
  const navigate = useNavigate();
const logout=()=>{
  localStorage.removeItem("currentUser")
  setTimeout(()=>{
    navigate("/login")
  })
}
  return (
    <header className='row container-fluid border-bottom'>
      <nav className="navbar ps-4 col-md-10 col-5 navbar-expand-sm navbar-dark">
        <button className="navbar-toggler header-iqon" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
          <span className="navbar-toggler-icon"></span>
        </button>
        <Link className="navbar-brand" to="/">
          <img width="50" src="/—Pngtree—simple fashion elegant long dress_5389820.png" alt="Logo" />
        </Link>
        <div className="collapse navbar-collapse" id="collapsibleNavbar">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link text-dark" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-dark" to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-dark" to="/contact">Contact</Link>
            </li>
            <li className="nav-item">
              {!user?<Link className="nav-link text-dark" to="/login">Login</Link>:<Link  className="nav-link text-dark" onClick={()=>logout()}>Logout</Link>}
            </li>
          </ul>
        </div>
      </nav>
      <div className='col-md-2 col-4 p-0 headder-iqons justify-content-end align-items-center'>
        <div className='fav-iqon mt-1 '> <Link to={"/fav"} className='col-md-2 col-2 profile'><CiHeart /></Link>
        <div className='cart-length'>{fav.length}</div>
        </div>
       
        <div className='col-md-3 col-3 mt-1'><SideBar /></div>
        {user && (
          <Link to={"/profile"} className='col-md-2 col-3 text-primary profile'>
            <IoPersonOutline />
          </Link>
        )}
      </div>
    </header>
  );
}
