import Button from './Button'
import styles from './Nav.module.css'

export default function Nav() {
  return (
    <>

     <nav className={styles.nav}>
        <Button btnType='link' href="http://hugo-miranda.dev">
      HM :)
    </Button>

      <ul className={styles.navList}>
        <li><a href='#'>About</a></li>
        <li><a href='#'>Projects</a></li>
        <li><a href='#'>Blog</a></li>
        <li><Button btnType='link' href="#contact">Contact</Button></li>
      </ul>
    </nav>
    </>
   
  )
}
