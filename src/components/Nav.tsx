
import styles from './Nav.module.css'
import logo1 from '../assets/logo5.png'
import HamburgerButton from './HamburgerButton'
import { useState } from 'react'
import SocialLinks from './SocialLinks'
import { Link, useNavigate } from 'react-router'


export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate(); 

  const handleScrollToSection = (sectionId: string) => {
    setIsOpen(false);
    if (window.location.pathname !== '/') {
      navigate(`/`, { replace: false });
      setTimeout(() => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
      }, 50); 
    } else {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    }
  }


  return (


     <nav className={styles.nav}>
      <Link to='/'><img src={logo1} alt="Logo" className={styles.logo} /></Link>

      <HamburgerButton isOpen={isOpen} setIsOpen={setIsOpen} />

      {isOpen && (
        <>
        <ul className={styles.mobileMenu}>
          <li><button className={styles.mobileMenuButton} onClick={() => handleScrollToSection('aboutMe')}>About</button></li>
          <li><button className={styles.mobileMenuButton} onClick={() => handleScrollToSection('projects')}>Projects</button></li>
          <li><button className={styles.mobileMenuButton} onClick={() => handleScrollToSection('blog')}>Blog</button></li>
          <SocialLinks  />
        </ul>
        
        </>
      )}


      <ul className={styles.navList}>
          <li className={styles.navButton} onClick={() => handleScrollToSection('aboutMe')}>About</li>
          <li className={styles.navButton} onClick={() => handleScrollToSection('projects')}>Projects</li>
          <li className={styles.navButton} onClick={() => handleScrollToSection('blog')}>Blog</li>
          <li className={styles.navButton} onClick={() => handleScrollToSection('contact')}>Contact</li>
      </ul>
    </nav>

  )
}
