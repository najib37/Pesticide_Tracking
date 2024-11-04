import { useState } from 'react';
import "./NavBar.css"
import bellIcon from '../../assets/bell-icon.svg'

export const Navbar = () => {
  // const [isOpen, setIsOpen] = useState(false);
  //
  // const toggleMenu = () => {
  //   setIsOpen(!isOpen);
  // };

  return (
    <>
      <nav>
        <div className="logo">
          <img src='./src/assets/logo.png'/>
        </div>
        <div className="nav-links">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Services</a>
          <a href="#">Contact</a>
        </div>
        <div className="notification-bell" >
          <img src={bellIcon} alt='notification bell icon'/>
        </div>
      </nav>
    </>
  );
};
