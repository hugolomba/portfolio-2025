
import style from "./ContactSection.module.css";
import SocialLinks from "./SocialLinks";

export default function ContactSection() {
  return (
    <section id="contact" className={style.contactSection}>
        <div className={style.contactHeader}>
      <h2 className={style.contactTitle}>How you can find me</h2>
      </div>
      {/* <ul className={style.contactList}>
        <li className={style.contactItem}><Button btnType="link" onClick={() => window.open("mailto:yourname@example.com")}>Email</Button></li>
        <li className={style.contactItem}><Button btnType="link" onClick={() => window.open("https://linkedin.com/in/yourprofile")}>LinkedIn</Button></li>
        <li className={style.contactItem}><Button btnType="link" onClick={() => window.open("https://github.com/yourusername")}>GitHub</Button></li>
      </ul> */}
      <SocialLinks />
    </section>
  );
}
