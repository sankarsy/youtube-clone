import React from 'react'
import './Navbar.css'
import { IoSearchOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { FaYoutube } from "react-icons/fa";
import { BiMenuAltLeft } from "react-icons/bi";
import profile from '../../image/profile.jpg'
import { BiSolidVideoPlus } from "react-icons/bi";
import { MdDashboardCustomize } from "react-icons/md";
import { BsBellFill } from "react-icons/bs";





function Navbar({setSidebar}) {
    return (
        <nav className='flex-div'>
            <div className='nav-left flex-div'>
                <span className='menu-icon' onClick={()=>setSidebar(prev=>prev=== false? true :false)}><i><BiMenuAltLeft size={35} color='#737373'/></i></span>
                <Link to={"/"}><div className='log-box'><i><FaYoutube size={40} color='red' /></i><h4>YouTube</h4></div></Link>
            </div>
            <div className="nave-middle flex-div">
                <div className="search-box flex-div">
                    <input type="text" placeholder='Search' />
                    <i><IoSearchOutline size={16}/></i>
                </div>

            </div>
            <div className="nav-right flex-div">
                <i><BiSolidVideoPlus size={28} color='#ED3833' /></i>
                <i><MdDashboardCustomize size={28} color='#747474'/></i>
                <i><BsBellFill size={26} color='#747474'/></i>
                <img className='user-icon' src={profile} alt="img" />
            </div>
        </nav>
    )
}

export default Navbar
