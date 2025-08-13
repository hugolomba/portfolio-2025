import Button from './Button'
import styles from './Nav.module.css'

export default function Nav() {
  return (
    <>

     <nav className={styles.nav}>
        <Button>
      HM :)
    </Button>
      <ul className={styles.navList}>
        <li><Button href="http://hugo-miranda.dev">About</Button></li>
        <li><Button href="#projects">Projects</Button></li>
        <li><Button href="#contact">Contact</Button></li>
      </ul>
    </nav>
    </>
   
  )
}
