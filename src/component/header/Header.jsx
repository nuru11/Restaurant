import React, {useState} from 'react'
import "./header.css"

import {MdFoodBank} from "react-icons/md"
import {AiOutlineUnorderedList} from "react-icons/ai"

function Header({changePage, show}) {
  const [showItem, setShowItem] = useState(false)

  const handleShowItem = () => {
    setShowItem(pre => !pre)
  }
  return (
    <header id="header" className="header-parent">
     <div className='item-parent'> 
     <div className="welcome"><MdFoodBank/></div>
     <a className='a-header-menu' href="#menu" ><div className='header-menu'>menu</div></a>
    <a className='a-header-about' href="#about" ><div className='header-about'>about</div></a>
    <a className='a-header-contact' href='#contact'> <div className='header-contact'>contact</div></a>
     <a className='a-header-contact' href='#contact' ><div className='call-us'>call us: <span className='header-number'>093848392</span></div></a>
     <button onClick={changePage} className="header-basket">{show ? "basket" : "back home"}</button>
     </div>

     <div className='dropdown-menu-parent'>
      <div className="dropdown-icon"  onClick={handleShowItem}><AiOutlineUnorderedList /></div>
      <div className={showItem ? 'dropdown-item-parent-show' : "dropdown-item-parent-dontShow"} >
      <a className='a-header-menu' href="#menu" ><div className='header-menu'>menu</div></a>
    <a className='a-header-about' href="#about" ><div className='header-about'>about</div></a>
    <a className='a-header-contact' href='#contact'> <div className='header-contact'>contact</div></a>
     <a className='a-header-contact' href='#contact' ><div className='call-us'>call us: <span className='header-number'>093848392</span></div></a>
     <button onClick={changePage} className="header-basket">{show ? "basket" : "back home"}</button>
     </div>
     </div>
     
    
    </header>
  )
}

export default Header