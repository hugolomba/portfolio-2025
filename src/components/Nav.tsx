import Button from './Button'
import styles from './Nav.module.css'
import logo1 from '../assets/logo1.png'
import HamburgerButton from './HamburgerButton'
import { useState } from 'react'
import SocialLinks from './SocialLinks'
import { Link } from 'react-router'


export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  return (


     <nav className={styles.nav}>
      <Link to='/'><img src={logo1} alt="Logo" className={styles.logo} /></Link>

      <HamburgerButton isOpen={isOpen} setIsOpen={setIsOpen} />

      {isOpen && (
        <>
        <ul className={styles.mobileMenu}>
          <li><a href='#aboutMe' onClick={() => setIsOpen(false)}>About</a></li>
          <li><a href='#projects' onClick={() => setIsOpen(false)}>Projects</a></li>
          <li><a href='#blog' onClick={() => setIsOpen(false)}>Blog</a></li>
          {/* <li><Button btnType='button' href="#contact" onClick={() => setIsOpen(false)}>Contact</Button></li> */}
          <SocialLinks  />
        </ul>
        
        </>
      )}


      <ul className={styles.navList}>
        <li><a href='#aboutMe'>About</a></li>
        <li><a href='#projects'>Projects</a></li>
        <li><Link to='/blog'>Blog</Link></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>
    </nav>

  )
}
