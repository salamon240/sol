import { ArrowDropDown, Notifications, Search } from '@material-ui/icons'
import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import './navbar.scss'
const Navbar = () => {
    const [scroll,setIsScroll] =useState(false)
     window.onscroll=()=>{
         setIsScroll(window.pageYOffset===0?false:true)
         return ()=>window.onscroll=null
     }
    return (
    <div className={scroll?"navbar scrolled":"navbar"}>
    <div className="container">
        <div className="left">
            <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="netflix" />
           
            <Link to="/" className='link'>
            <span>Home</span>
                        </Link>
            <Link to="/movie" className='link'>
            <span>Movies</span>
            </Link>
            <Link to="/Series" className='link'>
            <span>Series</span> 
                       </Link>
          
         
           
            <span>New and Popular</span>
            <span>My list</span>
        </div>
        <div className="right">
            <Search className='icon'/>
            <span>KID</span>
            <Notifications className='icon'/>
            <img src="https://upload.wikimedia.org/wikipedia/commons/d/d3/Nazmus_Sakib_68.jpg" alt="" />
            
            <div className="profile">
            <ArrowDropDown className='icon'/>
            <div className="option">
                <span>settings</span>
                <span>logout</span>
            </div>

            </div>
        </div>
    </div>
        
        </div>
  )
}

export default Navbar