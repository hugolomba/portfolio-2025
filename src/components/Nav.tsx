import Button from './Button'
import styles from './Nav.module.css'
import logo1 from '../assets/logo1.png'
import HamburgerButton from './HamburgerButton'
import { useState } from 'react'


export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  return (


     <nav className={styles.nav}>
        {/* <Button btnType='link' href="http://hugo-miranda.dev">
      HM :)
    </Button> */}
      <img src={logo1} alt="Logo" className={styles.logo} />

      <HamburgerButton isOpen={isOpen} setIsOpen={setIsOpen} />

      {isOpen && (
        <>
        <ul className={styles.mobileMenu}>
          <li><a href='#aboutMe' onClick={() => setIsOpen(false)}>About</a></li>
          <li><a href='#projects' onClick={() => setIsOpen(false)}>Projects</a></li>
          <li><a href='#blog' onClick={() => setIsOpen(false)}>Blog</a></li>
          <li><Button btnType='button' href="#contact" onClick={() => setIsOpen(false)}>Contact</Button></li>
        </ul>
        {/* <ul>
          <li>Linkedin</li>
          <li>Github</li>
          <li>Twitter</li>  
        </ul> */}
        </>
      )}


      <ul className={styles.navList}>
        <li><a href='#aboutMe'>About</a></li>
        <li><a href='#projects'>Projects</a></li>
        <li><a href='#blog'>Blog</a></li>
        <li><Button btnType='button' href="#contact">Contact</Button></li>
      </ul>
    </nav>

  )
}
