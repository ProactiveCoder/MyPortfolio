import {useState} from 'react'
import { Link } from 'react-scroll'
import './Navbar.css'
import logo from '../../assets/logo.png'



function Navbar() {
  const [showNav, setShowNav] = useState(false);

  const toggleNav = () => {
    setShowNav(!showNav);
  };
  return (
    <div className='navbar'>
     
       <div className='logo'>
            <img className='loloImg' id="home" src={logo} alt="logo" />
        </div> 
        <div className={`navItm ${showNav ? 'show' : ''}`}>
            <Link activeClass="active" to="home" spy={true} smooth={true} offset={-50} duration={500}  className='navItems'>Home</Link>
            <Link activeClass="active" to="about" spy={true} smooth={true} offset={-50} duration={500} className='navItems'>About</Link>
            <Link activeClass="active" to="portfolio" spy={true} smooth={true} offset={-50} duration={500} className='navItems'>Portfolio</Link>
            <Link activeClass="active" to="resume" spy={true} smooth={true} offset={-50} duration={500} className='navItems'>My resume</Link>
            {/* <Link activeClass="active" to="blog" spy={true} smooth={true} offset={-50} duration={500} className='navItems'>Blog</Link> */}
            <Link activeClass="active" to="contact" spy={true} smooth={true} offset={-50} duration={500} className='navItems'>Contact Me</Link>

        </div>
        <div className="hamburger-menu" onClick={toggleNav}>
        ☰
      </div>
        
    </div>
  )
}

export default Navbar;