import styles from './Button.module.css'

type ButtonProps = {
  children?: React.ReactNode;
  variant?: string;
  onClick?: () => void;
  href?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({ children, variant, onClick, ...rest }: ButtonProps) {
  return (
    <button className={`${styles.button} ${variant ? styles[variant] : ''}`} onClick={onClick} {...rest}>
      <a className={`${styles.link} ${variant ? styles[variant] : ''}`} href={rest.href}>{children || ""}</a>
    </button>
  )
}
