
import style from "./ContactSection.module.css";
import SocialLinks from "./SocialLinks";


export default function ContactSection() {
  return (
    <section id="contact" className={style.contactSection}>
        <div className={style.contactHeader}>
      <h2 className={style.contactTitle}>How you can find me</h2>
      </div>
      
      <SocialLinks />
    </section>
  );
}
