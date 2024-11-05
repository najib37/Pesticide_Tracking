import { useState } from 'react';
import "./NavBar.css"
import bellIcon from '../../assets/bell-icon.svg'

export const Navbar = (props: { navRoute: string, setNavLink: Function }) => {
  const [selected, setSelected] = useState('/');
  const { navRoute , setNavLink } = props

  const handelClick = (route: string, e: any) => {
    e.preventDefault()
    if (route === navRoute) return
    setNavLink(route)
    setSelected(route)
  }

  return (
    <>
      <nav>
        <div className="logo">
          <img src='./src/assets/logo.png' />
        </div>
        <div
          className="nav-links"
        >
          <a
            href="/home"
            onClick={(e) => handelClick('/', e)}
            style={{ color: selected === '/' ? "#0F713E" : "#797979" }}
          >Home</a>
          <a
            href="/map"
            onClick={(e) => handelClick('/map', e)}
            style={{ color: selected === '/map' ? "#0F713E" : "#797979" }}
          >Map</a>
          <a
            href="/feilds"
            onClick={(e) => handelClick('/feilds', e)}
            style={{ color: selected === '/feilds' ? "#0F713E" : "#797979" }}
          >Feilds</a>
          <a
            href="/pesticides"
            onClick={(e) => handelClick('/pesticides', e)}
            style={{ color: selected === '/pesticides' ? "#0F713E" : "#797979" }}
          >Pesticides</a>
        </div>
        <div className="notification-bell" >
          <img src={bellIcon} alt='notification bell icon' />
        </div>
      </nav >
    </>
  );
};
