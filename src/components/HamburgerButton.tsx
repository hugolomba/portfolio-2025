import type { Dispatch, SetStateAction } from "react";
import styles from "./HamburgerButton.module.css";

interface HamburgerButtonProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;

}

export default function HamburgerButton({ isOpen, setIsOpen }: HamburgerButtonProps) {
  return (
    <button
      className={styles.hamburger}
      onClick={() => setIsOpen(!isOpen)}
    >
      <span className={`${styles.line} ${isOpen ? styles.line1 : ""}`}></span>
      <span className={`${styles.line} ${isOpen ? styles.line2 : ""}`}></span>
      <span className={`${styles.line} ${isOpen ? styles.line3 : ""}`}></span>
    </button>
  );
}