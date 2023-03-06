import Logo from "../public/logo.png"
import menuBar from "../public/icons8-menu.svg"
import Image from "next/image"

export default function Nav() {
  return (
     <nav className='nav__local'>
        <input type="checkbox" id="nav__checkbox" className='nav__checkbox'/>
        <label htmlFor="nav__checkbox" className='nav__toggle'>
          <Image src={menuBar} className='menu' width={30} height={30} title="bars" />
        </label>
        
        <ul className="nav__menu">
         <li><a href='./' className="logo"><Image src={Logo} width={150} height={30} /></a></li>
          <li><a href='./'>Home</a></li>
          <li><a href='./staff'>Staff</a></li>
          <li><a href='./about'>About</a></li>
          <li><a href='./services'>Services</a></li>
        </ul>
      </nav>
  )
}